import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

CV_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'cv')
os.makedirs(CV_DIR, exist_ok=True)

def build_cv(out_path, accent_hex, role_line, portfolio_url, summary, project_block, skills_rows, certs_list, exp_blocks):
    doc = SimpleDocTemplate(
        out_path,
        pagesize=A4,
        leftMargin=16*mm,
        rightMargin=16*mm,
        topMargin=14*mm,
        bottomMargin=14*mm,
        title=f"Mostafa Saad - {role_line}"
    )

    accent = colors.HexColor(accent_hex)
    dark = colors.HexColor('#0F172A')
    muted = colors.HexColor('#475569')
    light_bg = colors.HexColor('#F8FAFC')

    styles = getSampleStyleSheet()
    s_name = ParagraphStyle('Name', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=20, leading=24, textColor=dark)
    s_role = ParagraphStyle('Role', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=10.2, leading=14, textColor=accent, spaceAfter=4)
    s_contact = ParagraphStyle('Contact', parent=styles['Normal'], fontName='Helvetica', fontSize=8.7, leading=12.5, textColor=muted, spaceAfter=8)
    s_sec = ParagraphStyle('Sec', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=10.5, leading=14, textColor=accent, spaceBefore=9, spaceAfter=4)
    s_body = ParagraphStyle('Body', parent=styles['Normal'], fontName='Helvetica', fontSize=9.2, leading=13, textColor=dark, spaceAfter=4)
    s_item_title = ParagraphStyle('ItemT', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=9.6, leading=13, textColor=dark, spaceBefore=4)
    s_item_meta = ParagraphStyle('ItemM', parent=styles['Normal'], fontName='Helvetica-Oblique', fontSize=8.5, leading=11.5, textColor=muted, spaceAfter=2)
    s_bullet = ParagraphStyle('Bullet', parent=styles['Normal'], fontName='Helvetica', fontSize=8.9, leading=12.4, textColor=dark, leftIndent=10, firstLineIndent=-7, spaceAfter=2)

    story = []
    story.append(Paragraph("MOSTAFA SAAD", s_name))
    story.append(Paragraph(role_line, s_role))
    story.append(Paragraph(
        f"Al Jizah / Cairo, Egypt &nbsp;|&nbsp; +20 101 009 8727 (Phone / WhatsApp) &nbsp;|&nbsp; mostafasaad0091@gmail.com<br/>"
        f"linkedin.com/in/mostafa-saad-171086191 &nbsp;|&nbsp; github.com/mostafasaad91 &nbsp;|&nbsp; mostafasaad.substack.com &nbsp;|&nbsp; x.com/TacTical_41<br/>"
        f"Portfolio: {portfolio_url}",
        s_contact
    ))
    story.append(HRFlowable(width="100%", thickness=1.4, color=accent, spaceAfter=6))

    # Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", s_sec))
    story.append(Paragraph(summary, s_body))

    # Flagship Projects
    story.append(Paragraph("FLAGSHIP PORTFOLIO PROJECTS (GITHUB)", s_sec))
    blocks = project_block if isinstance(project_block, list) else [project_block]
    for pb in blocks:
        story.append(Paragraph(pb['title'], s_item_title))
        story.append(Paragraph(pb['meta'], s_item_meta))
        for b in pb['bullets']:
            story.append(Paragraph(f"• &nbsp;{b}", s_bullet))

    # Core Skills Table
    story.append(Paragraph("CORE TECHNICAL SKILLS", s_sec))
    t_data = [[Paragraph(f"<b>{k}</b>", s_body), Paragraph(v, s_body)] for k, v in skills_rows]
    tbl = Table(t_data, colWidths=[42*mm, 136*mm])
    tbl.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), light_bg),
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),
        ('INNERGRID', (0, 0), (-1, -1), 0.35, colors.HexColor('#E2E8F0')),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 6),
        ('RIGHTPADDING', (0, 0), (-1, -1), 6),
        ('TOPPADDING', (0, 0), (-1, -1), 3.5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3.5),
    ]))
    story.append(tbl)

    # Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", s_sec))
    for exp in exp_blocks:
        story.append(Paragraph(exp['title'], s_item_title))
        story.append(Paragraph(exp['meta'], s_item_meta))
        for b in exp['bullets']:
            story.append(Paragraph(f"• &nbsp;{b}", s_bullet))

    # Certifications & Education
    story.append(Paragraph("CERTIFICATIONS & EDUCATION", s_sec))
    for c in certs_list:
        story.append(Paragraph(f"• &nbsp;{c}", s_bullet))
    story.append(Paragraph("• &nbsp;<b>Bachelor's Degree, Business Administration & Management</b> — Sadat University (2010 – 2014)", s_bullet))
    story.append(Paragraph("• &nbsp;<b>Languages:</b> Arabic (Native), English (Professional Analytical & Technical Writing)", s_bullet))

    doc.build(story)
    print("Built:", out_path)

# 1. DATA ANALYST / BI / ML CV
build_cv(
    out_path=os.path.join(CV_DIR, 'Mostafa_Saad_Data_Analyst_CV.pdf'),
    accent_hex='#0284C7',
    role_line='Data Analyst | BI, SQL, Python & Machine Learning | Power BI, DAX & Excel',
    portfolio_url='https://mostafasaad91.github.io/?track=data',
    summary=(
        "Data Analyst & Analytics Engineer with 6+ years of experience turning complex institutional, operational, and "
        "sales datasets into live interactive BI dashboards and zero-leakage ML systems. Proven track record across "
        "SQL Server (T-SQL), SQLite Star Schema, Python (Pandas, Scikit-Learn, LightGBM, XGBoost, SHAP), Power BI "
        "(DAX, PBIP), and Excel (Power Query, Power Pivot, What-If modeling). Experienced in leading 7+ archival and "
        "research database projects, supervising data teams, and facilitating advanced Excel workshops."
    ),
    project_block=[
        {
            'title': 'Olist E-Commerce — Full-Stack Analytics & Live 4-Page BI/ML Dashboard (99,441 Orders)',
            'meta': 'Live App: mostafasaad91.github.io/olist-ecommerce-fullstack-analytics  |  SQLite Star Schema · 6-Sheet Excel · LightGBM + SHAP · CI',
            'bullets': [
                'Built a zero-fan-out SQLite Star Schema across 8 official tables (R$15.29M GMV, pytest CI), proved 5.88x late-delivery bad-review risk (p<1e-300), trained Out-of-Time LightGBM (+45.4% CS ROI) & Ridge GMV forecast (3.50% MAPE vs 3.86% Naive), and deployed a Live 4-Page Web Dashboard + 6-sheet formula-driven Excel What-If Simulator.'
            ]
        },
        {
            'title': 'AdventureWorks 2022 — End-to-End Sales Analytics & Live 6-Page Power BI ($110M OLTP)',
            'meta': 'github.com/mostafasaad91/adventure-works-sales-analytics  |  SQL Server · Python pyodbc K-Means · Live Power BI (17 DAX)',
            'bullets': [
                'Analyzed a 72-table SQL Server 2022 OLTP database (121K sales lines, $110M revenue) via point-in-time cost views, Star Schema, Python pyodbc K-Means RFM write-back (k=4), cohort retention (~345d), market basket (lift > 90x), and live 6-page Power BI (17 DAX measures).'
            ]
        },
        {
            'title': 'Telco Churn Explainable ML & FinTech Credit Risk Scorecard (2 CI-Tested ML Repos)',
            'meta': 'github.com/mostafasaad91/telco-churn-explainable-ml  |  github.com/mostafasaad91/fintech-credit-risk-scorecard',
            'bullets': [
                'Telco Churn (7,043 clients): Calibrated XGBoost (0.848 Test AUC, Brier 0.135) + ROI threshold (0.37, +27.2% profit) & SHAP. Credit Risk (30,000 clients): SQL QA (399 codes) + WoE/IV + LightGBM scorecard (KS 0.429, Gini 0.564) + 300–850 scoring & NT$29.6M Basel EL.'
            ]
        }
    ],
    skills_rows=[
        ('BI & Live Apps', 'Power BI (PBIP, DAX, Star Schema), Excel (Power Query, Power Pivot, What-If), Interactive Web BI, Tableau'),
        ('SQL & Databases', 'SQL Server (T-SQL, CTEs, Window Functions, Views), SQLite, Star Schema Modeling & Automated QA Tests'),
        ('Python & ML', 'Python, Pandas, NumPy, Scikit-Learn, LightGBM, XGBoost, SHAP, Calibration, K-Means, Time-Series, pyodbc'),
        ('Data Governance', 'Data Cleaning & Validation, Metadata Standards, Coding Systems, GitHub Actions CI, Team Lead & Workshops'),
    ],
    exp_blocks=[
        {
            'title': 'Digital Archivist & Cultural Data Analyst / Metadata Archivist — NADIM Foundation',
            'meta': 'June 2024 – Present  |  Cairo, Egypt',
            'bullets': [
                'Manage cultural heritage datasets, metadata standardization, cross-sheet ID reconciliation, and automated QA checks across multi-source institutional databases.',
                'Deliver clean, structured reporting tables and analytical summaries supporting conservation and digital encyclopedia teams.'
            ]
        },
        {
            'title': 'Freelance Data Analyst — Independent Consulting',
            'meta': 'October 2022 – Present  |  Remote',
            'bullets': [
                'Deliver end-to-end client analytics from raw operational data to interactive Power BI dashboards, DAX models, Power Query ETL pipelines, and recurring KPI reports.',
                'Use SQL and Python for automated data extraction, validation, segmentation, and statistical analysis.'
            ]
        },
        {
            'title': 'Senior Data Analyst & Archive Officer (prev. Junior Analyst) — Daftar Ahwal Data Research Institute',
            'meta': 'September 2017 – September 2022 (5 yrs 1 mo)  |  Cairo, Egypt',
            'bullets': [
                'Led and managed 7+ archival and social-research dataset projects covering collection, cleaning, statistical analysis, graphing, and reporting in Excel and Power BI.',
                'Designed dataset methodologies and data coding systems to generate accurate indicators and forecasts, while supervising data teams and teaching advanced Excel workshops.'
            ]
        },
        {
            'title': 'Content Writer — AlManassa',
            'meta': 'October 2017 – October 2018  |  Cairo, Egypt',
            'bullets': [
                'Authored analytical articles and critical reviews, building concise executive storytelling skills in Arabic and English.'
            ]
        }
    ],
    certs_list=[
        '<b>Football Analysis & Data Analytics Training:</b> FP Academy · PFSA Scouting · The FA · England Football (EE Playmaker)'
    ]
)

# 2. FOOTBALL DATA & PERFORMANCE ANALYST CV
build_cv(
    out_path=os.path.join(CV_DIR, 'Mostafa_Saad_Football_Analyst_CV.pdf'),
    accent_hex='#059669',
    role_line='Football Data & Performance Analyst | Python, Opta Event Data, xG/xT Models & Tactical Scouting',
    portfolio_url='https://mostafasaad91.github.io/?track=football',
    summary=(
        "Football Data & Performance Analyst backed by 6+ years of professional data analytics, SQL, Python, "
        "and Power BI experience. Creator of an open-source automated match analysis engine (GitHub ★ 7) turning "
        "WhoScored/Opta event data into xG/xT models, tactical visualizations, player role profiles, and executive "
        "match reports. Formally trained in football analysis, scouting, and coaching (FP Academy, PFSA, The FA, "
        "England Football). Fluent analytical reporting in English and Arabic — open to remote or on-site club/agency roles."
    ),
    project_block=[
        {
            'title': 'Football-Match-Analysis — Automated Opta/WhoScored Tactical Engine (GitHub ★ 7)',
            'meta': 'github.com/mostafasaad91/Football-Match-Analysis  |  Python · Opta Event Data · SQLite · PDF & 8 Posters',
            'bullets': [
                'End-to-end Python toolkit converting a single WhoScored/Opta URL into custom xG/xT/xGChain/PPDA/Field Tilt models, 8 dual AMOLED (#000000) & Print Light (#F5F5F5) 4:5 posters, a PDF report, .docx article, and SQLite replay archive across EPL, La Liga & Serie A.'
            ]
        },
        {
            'title': 'StatsBomb 360 xG Calibration Lab & Live 3,642-Shot Pitch Explorer (149 Matches)',
            'meta': 'Live App: mostafasaad91.github.io/statsbomb-xg-calibration-lab  |  StatsBomb 360 · Match-Grouped CV · SHAP · CI',
            'bullets': [
                'Built a match-grouped zero-leakage xG benchmark across WC 2022, Euro 2024 & Invincible Bayer Leverkusen; proved Freeze-Frame coordinates cut Test Log-Loss by -0.0236 (0.2531 LL, 0.816 AUC vs official StatsBomb 0.2422 / 0.827) and deployed a Live 3,642-Shot Interactive Pitch Explorer & 73-Player Finishing Leaderboard.'
            ]
        },
        {
            'title': 'Football Scouting Similarity Engine & Live 361-Player Twin Finder (StatsBomb Open Data)',
            'meta': 'Live Widget: mostafasaad91.github.io/?track=football#scouting-widget  |  SQLite · K-Means · PCA · Cosine Similarity · CI',
            'bullets': [
                'Engineered a club recruitment "Find a Replacement" engine (1,305 → 361 eligible outfielders, optimal k=4 archetypes, 56.3% 2D PCA variance) surfacing same-role twins including Lamine Yamal (96.0% Wirtz) & Vitinha (92.2% Xhaka) — playable live in browser with Head-to-Head percentiles.'
            ]
        }
    ],
    skills_rows=[
        ('Football Metrics', 'Custom xG & Freeze-Frame Models, xT, xGChain, xGBuildup, PPDA, Pressing Traps, Field Tilt, Zone 14'),
        ('Tactical & Scouting', 'Match & Opposition Analysis, Cosine Similarity Recruitment, K-Means Role Archetypes, Same-Role Percentiles'),
        ('Data & Automation', 'Python (Pandas, Scikit-Learn, XGBoost, LightGBM, SHAP, Matplotlib), SQL / SQLite, Power BI, Excel, Tableau'),
        ('Communication', 'Clear bilingual tactical briefs, coach-ready AMOLED visual boards, and written match articles (EN & AR)'),
    ],
    exp_blocks=[
        {
            'title': 'Independent Football Data & Performance Analyst — Tactical Analytics',
            'meta': 'October 2022 – Present  |  Remote / Independent',
            'bullets': [
                'Build custom xG/xT models from event data and produce automated team, match, and opposition reports translating possession, field tilt, PPDA, and chance quality into actionable coaching insights.',
                'Design interactive Power BI & Python scouting dashboards and deliver freelance business data consulting.'
            ]
        },
        {
            'title': 'Digital Archivist & Cultural Data Analyst — NADIM Foundation',
            'meta': 'June 2024 – Present  |  Cairo, Egypt',
            'bullets': [
                'Lead database structuring, metadata validation, and cross-table ID QA workflows across large multi-source datasets.'
            ]
        },
        {
            'title': 'Senior Data Analyst & Archive Officer — Daftar Ahwal Data Research Institute',
            'meta': 'September 2017 – September 2022 (5 yrs 1 mo)  |  Cairo, Egypt',
            'bullets': [
                'Managed 7+ structured dataset projects, designed coding taxonomies and forecasting indicators in Excel & Power BI, supervised analysts, and taught advanced Excel workshops.'
            ]
        }
    ],
    certs_list=[
        '<b>Football Analysis Course</b> — FP Academy',
        '<b>Introduction to Football Scouting</b> — PFSA (Professional Football Scouts Association)',
        '<b>Introduction to Coaching Football</b> — The FA',
        '<b>EE Playmaker</b> — England Football'
    ]
)
