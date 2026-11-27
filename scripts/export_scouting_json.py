"""Export 361 real StatsBomb players from scouting_database.csv into compact JSON for the portfolio widget."""

import json
from pathlib import Path
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler

SRC_CSV = Path(r"D:\Data\Projects\football-scouting-similarity-engine\outputs\scouting_database.csv")
OUT_JSON = Path(r"D:\Data\Projects\mostafasaad91.github.io\assets\scouting_players.json")

FEATURE_COLS = [
    "shots_p90", "npxg_p90", "xa_p90", "key_passes_p90",
    "pass_acc_pct", "prog_passes_p90", "box_passes_p90",
    "prog_carries_p90", "dribbles_p90", "pressures_p90",
    "tackles_int_p90", "recoveries_p90", "final_third_p90",
]
PCTL_COLS = [
    "npxg_p90_pctl", "xa_p90_pctl", "key_passes_p90_pctl",
    "prog_passes_p90_pctl", "box_passes_p90_pctl", "prog_carries_p90_pctl",
    "dribbles_p90_pctl", "pressures_p90_pctl", "tackles_int_p90_pctl",
]


def short_comp(s: str) -> str:
    return (
        str(s)
        .replace("FIFA World Cup 2022", "WC22")
        .replace("UEFA Euro 2024", "Euro24")
        .replace("Bundesliga 2023/24", "BL23/24")
        .replace(" | ", " · ")
    )


def main() -> None:
    df = pd.read_csv(SRC_CSV)
    X = StandardScaler().fit_transform(df[FEATURE_COLS])
    norms = np.linalg.norm(X, axis=1, keepdims=True)
    norms[norms == 0] = 1.0
    Z = X / norms

    players = []
    for i, row in df.iterrows():
        players.append({
            "n": row["player_name"],
            "t": row["team"],
            "c": short_comp(row["competitions"]),
            "r": row["role_group"],
            "a": row["archetype"],
            "m": int(round(float(row["minutes"]))),
            "xy": [round(float(row["pca_1"]), 2), round(float(row["pca_2"]), 2)],
            "v": [
                round(float(row["npxg_p90"]), 2),
                round(float(row["xa_p90"]), 2),
                round(float(row["prog_passes_p90"]), 1),
                round(float(row["prog_carries_p90"]), 1),
            ],
            "p": [round(float(row[c]), 1) for c in PCTL_COLS],
            "z": [round(float(v), 4) for v in Z[i]],
        })

    OUT_JSON.write_text(json.dumps(players, separators=(",", ":"), ensure_ascii=False), encoding="utf-8")
    print(f"Exported {len(players)} players -> {OUT_JSON} ({OUT_JSON.stat().st_size / 1024:.1f} KB)")

    # Verify exact cosine similarity matches against metrics.json
    checks = [
        ("Florian Wirtz", "Lamine Yamal", 96.0),
        ("Granit Xhaka", "Vitor Machado", 92.2),
        ("Kylian Mbappé", "Neymar", 97.2),
        ("Jude Bellingham", "Jamal Musiala", 84.7),
    ]
    for query, exp_twin, exp_pct in checks:
        idx = next(i for i, p in enumerate(players) if query in p["n"])
        src = players[idx]
        best_j, best_s = None, -2.0
        for j, p in enumerate(players):
            if j == idx or p["r"] != src["r"]:
                continue
            s = sum(a * b for a, b in zip(src["z"], p["z"]))
            if s > best_s:
                best_s, best_j = s, j
        pct = round((best_s + 1.0) / 2.0 * 100.0, 1)
        twin = players[best_j]
        print(f"VERIFY {src['n']} -> {twin['n']} ({pct}% vs expected {exp_pct}%)")
        assert exp_twin in twin["n"], f"Mismatch for {query}: got {twin['n']}"
        assert abs(pct - exp_pct) <= 0.1, f"Score drift for {query}: {pct} vs {exp_pct}"
    print("ALL_SIMILARITY_VERIFIED")


if __name__ == "__main__":
    main()
