/* =========================================================
   MOSTAFA SAAD — PORTFOLIO CONFIGURATION
   ========================================================= */
const PROFILE_CONFIG = {
  name: 'Mostafa Saad',
  email: 'mostafasaad044@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mostafa-saad-171086191/',
};

/* =========================================================
   BILINGUAL TRANSLATIONS (EN / AR)
   ========================================================= */
const TRANSLATIONS = {
  en: {
    nav_expertise: 'Expertise',
    nav_sim: 'Live xG Model',
    nav_projects: 'Case Studies',
    nav_exp: 'Experience',
    nav_contact: 'Contact',
    nav_cta: 'Hire / Collaborate',
    hero_badge: 'AL JIZAH, EGYPT · OPEN TO REMOTE & ON-SITE ROLES',
    hero_title_1: 'Mostafa Saad — Turning Football & Business Data into',
    hero_title_2: 'Actionable Intelligence',
    hero_subtitle:
      'Data Analyst, Machine Learning & Football Performance Analyst with 6+ years of experience in Excel (Power Query & Pivot), Power BI, SQL, and Python — building custom xG models, scouting reports, and scalable analytical databases.',
    hero_btn_sim: 'Try Live xG Model',
    hero_stack_label: 'CORE TOOLKIT:',
    float_impact: 'Data, BI & Football Analytics',
    stat_years: 'Years Data Experience',
    stat_datasets: 'Archival & Research Datasets',
    stat_certs: 'Football & Scouting Certs',
    stat_lang: 'Bilingual Analytical Reporting',
    exp_eyebrow: '// CORE CAPABILITIES',
    exp_title: 'Where Business BI, Machine Learning & Football Meet',
    exp_desc:
      'Bridging rigorous database design and automated business intelligence with tactical football modeling and clear bilingual storytelling.',
    exp_1_title: 'BI, Dashboards & Reporting',
    exp_1_desc:
      'Designing interactive Power BI, Excel (Power Query / Power Pivot), and Tableau dashboards with DAX models and decision-ready KPI tracking.',
    exp_2_title: 'Python, SQL & ML Engineering',
    exp_2_desc:
      'Cleaning, validating, and structuring complex datasets, building coding taxonomies, and training predictive ML models like custom event-based xG.',
    exp_3_title: 'Football Data & Performance',
    exp_3_desc:
      'Transforming match event data into clear tactical & recruitment insights: xG, Field Tilt, PPDA, pressing intensity, chance quality, and opposition reports.',
    sim_eyebrow: '// INTERACTIVE ML PLAYGROUND',
    sim_title: 'Live Expected Goals (xG) Model Simulator',
    sim_desc:
      'Click anywhere inside the attacking half-pitch or adjust the shot context below to see how my logistic ML model evaluates goal probability and feature contributions in real time.',
    sim_click_hint: 'CLICK ON PITCH TO PLACE SHOT',
    sim_presets: 'PRESETS:',
    sim_prob_label: 'PREDICTED GOAL PROBABILITY',
    sim_body: 'Body Part',
    sim_assist: 'Situation / Assist',
    sim_pressure: 'Defensive Pressure (Defenders in Cone)',
    sim_shap: 'MODEL FEATURE IMPACT (LOG-ODDS CONTRIBUTION)',
    proj_eyebrow: '// SELECTED WORK',
    proj_title: 'Featured Case Studies',
    filter_all: 'All',
    filter_football: 'Football & ML',
    filter_analytics: 'BI & Data Systems',
    p1_title: 'Event-Based Expected Goals (xG) ML Model',
    p1_desc:
      'Built a custom xG probability model from match event data using shot geometry (distance, angle), body part, assist type, and pressure to quantify chance quality for coaches and scouts.',
    p2_title: 'Match, Opposition & Player Scouting Intelligence',
    p2_desc:
      'Produced tactical match & opposition analysis packs measuring possession structure, field tilt, PPDA pressing intensity, and player role KPIs in clear Arabic & English reports.',
    p3_title: 'Archival & Cultural Heritage Database Systems',
    p3_desc:
      'Led end-to-end dataset methodologies, metadata validation, and cross-sheet ID integrity systems across large cultural heritage & social-research archives while supervising data teams.',
    p4_title: 'Automated BI Dashboards & Executive KPI Suites',
    p4_desc:
      'Delivered freelance Power BI & Excel reporting pipelines with Power Query ETL, star-schema data modeling, DAX measures, and recurring KPI trackers—plus advanced Excel workshops.',
    proj_details: 'View Case Study →',
    career_eyebrow: '// TRACK RECORD',
    career_title: 'Experience, Education & Credentials',
    role_1_t: 'Digital Archivist & Cultural Data Analyst · Metadata Archivist',
    role_1_d:
      'Managing cultural heritage datasets, metadata standardization, cross-database ID reconciliation, and analytical reporting.',
    role_2_t: 'Freelance Data Analyst & Football Performance Analyst',
    role_2_d:
      'End-to-end client BI & data cleaning pipelines (Excel Power Query, Power BI, DAX, SQL, Python) alongside independent football xG modeling, match/opposition reports, and scouting analytics.',
    role_3_t: 'Senior Data Analyst & Archive Officer (prev. Junior Analyst)',
    role_3_d:
      'Led 7+ archival & social-research dataset projects, designed data coding systems & forecasting indicators in Excel & Power BI, supervised data teams, and taught advanced Excel workshops.',
    role_4_t: 'Content Writer',
    role_4_d:
      'Authored analytical & literary reviews, sharpening clear, structured written communication across Arabic and English audiences.',
    cert_tag: 'FOOTBALL & SCOUTING CERTIFICATIONS',
    edu_tag: 'EDUCATION',
    edu_deg: "Bachelor's Degree, Business Administration & Management",
    langs_tag: 'COMMUNICATION & IMPACT',
    langs_desc:
      'Delivering clear tactical reports, executive dashboards, and technical documentation in both English & Arabic for coaches, scouts, and business stakeholders.',
    contact_eyebrow: "// LET'S COLLABORATE",
    contact_title: 'Looking for a Data, ML or Football Analyst?',
    contact_desc:
      'Open to Football Data / Performance Analyst, Data Analyst, and BI/ML roles — remote or on-site, plus freelance consulting & training workshops.',
    form_name: 'Your Name',
    form_email: 'Email Address',
    form_msg: 'Role or Project Details',
    form_send: 'Open Email Draft / Send',
    footer_built: 'Turning football and business data into decisions.',
    modal_approach: 'Technical Approach',
  },
  ar: {
    nav_expertise: 'الخبرات',
    nav_sim: 'نموذج xG التفاعلي',
    nav_projects: 'المشاريع',
    nav_exp: 'المسيرة المهنية',
    nav_contact: 'تواصل معي',
    nav_cta: 'تواصل للعمل',
    hero_badge: 'الجيزة، مصر · متاح للعمل عن بُعد أو الحضوري',
    hero_title_1: 'مصطفى سعد — أحوّل بيانات كرة القدم والأعمال إلى',
    hero_title_2: 'قرارات ذكية مدعومة بالبيانات',
    hero_subtitle:
      'محلل بيانات ومهندس تعلم آلي ومحلل أداء كروي بخبرة +6 سنوات في Excel (Power Query & Pivot) و Power BI و SQL و Python — أبني نماذج الأهداف المتوقعة (xG) وتقارير السكاوتنج وقواعد البيانات التحليلية.',
    hero_btn_sim: 'جرّب نموذج xG لايف',
    hero_stack_label: 'الأدوات الأساسية:',
    float_impact: 'تحليل البيانات وذكاء كرة القدم',
    stat_years: 'سنوات خبرة في البيانات',
    stat_datasets: 'مشروع قواعد بيانات وأرشيف',
    stat_certs: 'شهادات تحليل وسكاوتنج كروي',
    stat_lang: 'تقارير احترافية بالعربية والإنجليزية',
    exp_eyebrow: '// المهارات والقدرات الأساسية',
    exp_title: 'حيث يلتقي تحليل الأعمال بتعلم الآلة وتحليل كرة القدم',
    exp_desc:
      'أجمع بين تصميم قواعد البيانات الدقيقة ولوحات ذكاء الأعمال المؤتمتة وبين النمذجة التنبؤية والتحليل التكتيكي الواضح.',
    exp_1_title: 'ذكاء الأعمال والداشبورد (BI)',
    exp_1_desc:
      'بناء لوحات Power BI و Excel (Power Query / Power Pivot) و Tableau تفاعلية بنماذج DAX ومؤشرات أداء واضحة لصناع القرار.',
    exp_2_title: 'Python و SQL وتعلم الآلة',
    exp_2_desc:
      'تنظيف وتدقيق وهيكلة مجموعات البيانات الكبيرة، تصميم أنظمة التكويد، وبناء نماذج تنبؤية مثل نماذج xG من بيانات الأحداث.',
    exp_3_title: 'تحليل بيانات وأداء كرة القدم',
    exp_3_desc:
      'تحويل بيانات المباريات إلى رؤى تكتيكية واستكشافية واضحة للمدربين والكشافين: xG، Field Tilt، PPDA، الضغط وجودة الفرص.',
    sim_eyebrow: '// تجربة تعلم آلي تفاعلية',
    sim_title: 'محاكي نموذج الأهداف المتوقعة (xG) المباشر',
    sim_desc:
      'اضغط في أي مكان داخل نصف الملعب أو عدّل ظروف التسديدة بالأسفل لترى كيف يحسب نموذج الانحدار اللوجستي احتمالية الهدف وتأثير كل متغير لحظياً.',
    sim_click_hint: 'اضغط على الملعب لتحديد مكان التسديدة',
    sim_presets: 'أمثلة سريعة:',
    sim_prob_label: 'احتمالية تسجيل الهدف المتوقعة (xG)',
    sim_body: 'جزء الجسم',
    sim_assist: 'نوع التمريرة / الموقف',
    sim_pressure: 'الضغط الدفاعي (المدافعون أمام التسديدة)',
    sim_shap: 'تأثير كل متغير على توقع النموذج (Feature Impact)',
    proj_eyebrow: '// نماذج من الأعمال',
    proj_title: 'دراسات حالة ومشاريع مختارة',
    filter_all: 'الكل',
    filter_football: 'كرة القدم وتعلم الآلة',
    filter_analytics: 'ذكاء الأعمال وقواعد البيانات',
    p1_title: 'بناء نموذج الأهداف المتوقعة (xG) من بيانات الأحداث',
    p1_desc:
      'تطوير نموذج تعلم آلي مخصص لحساب احتمالية الأهداف باستخدام المسافة والزاوية وجزء الجسم ونوع التمريرة لتقييم جودة الفرص بدقة.',
    p2_title: 'تقارير تحليل المباريات والخصوم واستكشاف اللاعبين',
    p2_desc:
      'إعداد تقارير تكتيكية وتحليلية تقيس الاستحواذ، Field Tilt، شدة الضغط (PPDA)، ومؤشرات اللاعبين باللغتين العربية والإنجليزية.',
    p3_title: 'أنظمة قواعد بيانات التراث والأرشيف البحثي',
    p3_desc:
      'قيادة منهجيات بناء قواعد البيانات والتدقيق وأنظمة التكويد عبر مشاريع الأرشيف والبحث الاجتماعي مع الإشراف على فرق البيانات.',
    p4_title: 'لوحات Power BI وأتمتة تقارير الأعمال',
    p4_desc:
      'تنفيذ مشاريع مستقلة تشمل تنظيف البيانات بـ Power Query وبناء نماذج DAX ولوحات KPI متكررة وتقديم ورش Excel متقدم.',
    proj_details: 'عرض تفاصيل المشروع ←',
    career_eyebrow: '// المسيرة المهنية',
    career_title: 'الخبرات العملية والتعليم والشهادات',
    role_1_t: 'محلل بيانات ثقافية وأخصائي أرشفة وميتاداتا',
    role_1_d:
      'إدارة قواعد بيانات التراث الثقافي، توحيد البيانات الوصفية، مطابقة الأكواد بين قواعد البيانات، وإعداد التقارير التحليلية.',
    role_2_t: 'محلل بيانات مستقل ومحلل أداء وبيانات كرة قدم',
    role_2_d:
      'تنفيذ مشاريع تحليل بيانات ولوحات Power BI و SQL و Python للعملاء، بجانب بناء نماذج xG وتقارير المباريات والسكاوتنج.',
    role_3_t: 'محلل بيانات أول ومسؤول أرشيف (وسابقاً محلل بيانات وباحث)',
    role_3_d:
      'قيادة أكثر من 7 مشاريع لقواعد البيانات البحثية والأرشيفية، تصميم أنظمة التكويد والمؤشرات التنبؤية بـ Excel و Power BI، الإشراف على الفريق، وتقديم ورش عمل متقدمة.',
    role_4_t: 'كاتب محتوى ومراجع تحليلي',
    role_4_d:
      'كتابة مقالات ومراجعات نقدية وتحليلية ساهمت في صقل مهارة السرد التحليلي الواضح بالعربية والإنجليزية.',
    cert_tag: 'شهادات تحليل وتدريب واستكشاف كرة القدم',
    edu_tag: 'التعليم',
    edu_deg: 'بكالوريوس إدارة الأعمال (عام)',
    langs_tag: 'التواصل وتقديم الرؤى',
    langs_desc:
      'تقديم تقارير تكتيكية ولوحات تحكم ووثائق تحليلية واضحة باللغتين العربية والإنجليزية للمدربين والكشافين وصناع القرار.',
    contact_eyebrow: '// لنعمل معاً',
    contact_title: 'تبحث عن محلل بيانات أو محلل أداء كروي؟',
    contact_desc:
      'متاح لفرص Football Data / Performance Analyst و Data Analyst (عن بُعد أو حضوري)، بالإضافة إلى الاستشارات وورش العمل.',
    form_name: 'الاسم',
    form_email: 'البريد الإلكتروني',
    form_msg: 'تفاصيل الفرصة أو المشروع',
    form_send: 'إرسال عبر البريد الإلكتروني',
    footer_built: 'أحوّل بيانات كرة القدم والأعمال إلى قرارات.',
    modal_approach: 'المنهجية التقنية',
  },
};

/* =========================================================
   CASE STUDIES DATA
   ========================================================= */
const CASE_STUDIES = [
  {
    cat: { en: 'FOOTBALL ML · EVENT DATA', ar: 'تعلم الآلة وكرة القدم' },
    title: {
      en: 'Event-Based Expected Goals (xG) ML Model',
      ar: 'نموذج الأهداف المتوقعة (xG) من بيانات الأحداث',
    },
    summary: {
      en: 'Custom Expected Goals machine learning pipeline built from shot-level event data to measure true chance creation, finishing over/under-performance, and recruitment value.',
      ar: 'نموذج تعلم آلي مخصص لحساب الأهداف المتوقعة (xG) من بيانات التسديدات لقياس جودة صناعة الفرص وكفاءة الإنهاء وتقييم اللاعبين.',
    },
    metrics: ['Geometry + Context Features', 'Calibrated Probabilities', 'Python & Scikit-Learn'],
    bullets: {
      en: [
        'Engineered Euclidean distance to goal center and visible goalmouth angle from (x, y) pitch coordinates.',
        'Encoded shot context: body part (foot/header), assist pattern (cutback, through ball, cross), and game state.',
        'Validated model calibration with Brier Score & ROC-AUC to produce reliable match and season xG totals.',
      ],
      ar: [
        'حساب المسافة الإقليدية وزاوية الرؤية الفعلية للمرمى انطلاقاً من إحداثيات التسديدة (x, y).',
        'ترميز سياق التسديدة: جزء الجسم، نوع التمريرة المساعدة، وحالة اللعب.',
        'التحقق من معايرة الاحتمالات باستخدام Brier Score و ROC-AUC لإنتاج تقارير xG دقيقة.',
      ],
    },
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'Event Data', 'xG', 'Visualization'],
  },
  {
    cat: { en: 'PERFORMANCE & SCOUTING', ar: 'تحليل الأداء والسكاوتنج' },
    title: {
      en: 'Match, Opposition & Player Scouting Intelligence',
      ar: 'تقارير تحليل المباريات والخصوم واستكشاف اللاعبين',
    },
    summary: {
      en: 'Actionable team and opposition analysis packs translating event metrics—Possession, Field Tilt, PPDA, pressing traps, and chance quality—into concise briefs for coaches and scouts.',
      ar: 'حزم تقارير تكتيكية واستكشافية تحوّل مؤشرات الاستحواذ و Field Tilt و PPDA وجودة الفرص إلى توصيات عملية للمدربين والكشافين.',
    },
    metrics: ['PPDA & Pressing Maps', 'Field Tilt & Zone 14', 'EN & AR Reports'],
    bullets: {
      en: [
        'Tracked team territorial dominance (Field Tilt) and defensive aggression (PPDA) across match phases.',
        'Built role-based player scouting radars comparing candidates against league percentiles.',
        'Combined FA/PFSA/FP Academy tactical frameworks with data visualization for coach-friendly communication.',
      ],
      ar: [
        'قياس السيطرة الميدانية (Field Tilt) وشراسة الضغط العالي (PPDA) عبر مراحل المباراة.',
        'إنشاء مخططات رادار لمقارنة اللاعبين المستهدفين بمتوسطات مراكزهم في الدوري.',
        'دمج الأطر التكتيكية المعتمدة (FA / PFSA / FP Academy) مع العرض البصري الواضح.',
      ],
    },
    tags: ['Sports Analytics', 'PPDA', 'Field Tilt', 'Power BI', 'Scouting', 'Python'],
  },
  {
    cat: { en: 'DATA ARCHITECTURE & ARCHIVAL QA', ar: 'هيكلة قواعد البيانات والتدقيق' },
    title: {
      en: 'Archival & Cultural Heritage Database Systems',
      ar: 'أنظمة قواعد بيانات التراث والأرشيف البحثي',
    },
    summary: {
      en: 'Led data architecture, coding taxonomies, metadata QA, and team supervision across 7+ large-scale cultural heritage and social-research datasets at NADIM Foundation and Daftar Ahwal.',
      ar: 'قيادة تصميم هيكلة البيانات وأنظمة التكويد وتدقيق الميتاداتا والإشراف على فرق العمل في أكثر من 7 مشاريع لقواعد البيانات التراثية والبحثية.',
    },
    metrics: ['7+ Research Datasets', 'Coding Methodologies', 'Team Supervision'],
    bullets: {
      en: [
        'Designed unified ID coding taxonomies and validation rules reconciling multi-source archival sheets.',
        'Built automated anomaly detection scripts in Python & Excel to catch duplicates, typos, and mismatched keys.',
        'Supervised data teams and delivered structured advanced Excel workshops to elevate team capability.',
      ],
      ar: [
        'تصميم أنظمة تكويد موحدة وقواعد تحقق لمطابقة الجداول الأرشيفية متعددة المصادر.',
        'بناء أدوات فحص وتدقيق تلقائي بـ Python و Excel لاكتشاف التكرارات وأخطاء الترقيم.',
        'الإشراف على فرق إدخال وتحليل البيانات وتقديم ورش تدريبية متقدمة في Excel.',
      ],
    },
    tags: ['SQL', 'Python', 'Metadata', 'Data Cleaning', 'Excel', 'Power BI'],
  },
  {
    cat: { en: 'BUSINESS INTELLIGENCE · FREELANCE', ar: 'ذكاء الأعمال والتقارير المؤتمتة' },
    title: {
      en: 'Automated BI Dashboards & Executive KPI Suites',
      ar: 'لوحات Power BI وأتمتة تقارير مؤشرات الأداء',
    },
    summary: {
      en: 'End-to-end freelance analytics solutions transforming messy operational spreadsheets into clean star-schema models, DAX KPIs, and interactive Power BI / Tableau dashboards.',
      ar: 'حلول تحليل بيانات متكاملة للعملاء تحوّل الجداول المتفرقة إلى نماذج بيانات منظمة ولوحات Power BI و Tableau تفاعلية.',
    },
    metrics: ['Power Query ETL', 'DAX Data Modeling', 'Recurring KPI Automation'],
    bullets: {
      en: [
        'Automated data extraction, cleaning, and transformation pipelines using SQL, Python, and Power Query.',
        'Engineered reusable Power Pivot / Power BI data models with time-intelligence DAX measures.',
        'Delivered executive-ready visuals and recurring KPI reports tailored to client decision workflows.',
      ],
      ar: [
        'أتمتة سحب وتنظيف وتحويل البيانات باستخدام SQL و Python و Power Query.',
        'بناء نماذج بيانات قابلة لإعادة الاستخدام مع مقاييس DAX للتحليل الزمني.',
        'تسليم تقارير ومؤشرات أداء دورية مصممة لاحتياجات صناع القرار.',
      ],
    },
    tags: ['Power BI', 'DAX', 'Power Query', 'Power Pivot', 'Tableau', 'SQL'],
  },
];

/* =========================================================
   HERO INTERACTIVE TELEMETRY MODES
   ========================================================= */
const TELEMETRY_MODES = {
  xg: {
    tag: 'MODEL: CUSTOM_XG_EVENT_ML',
    title: 'Shot Map & Expected Goals (xG) Quality',
    kpis: [
      { label: 'TOTAL xG', val: '2.46', delta: '11 SHOTS', color: 'emerald' },
      { label: 'ROC-AUC', val: '0.84', delta: 'CALIBRATED', color: 'cyan' },
      { label: 'PPDA', val: '7.8', delta: 'HIGH PRESS', color: 'violet' },
    ],
    cmd: "xg_model.predict_proba(shots_df[['dist', 'angle', 'body_part', 'assist']])",
    type: 'pitch',
    shots: [
      { x: 220, y: 44, xg: 0.62, goal: true, lbl: 'GOAL · 0.62 xG · 6.8m Tap-In' },
      { x: 196, y: 74, xg: 0.34, goal: true, lbl: 'GOAL · 0.34 xG · 11.2m Cutback' },
      { x: 254, y: 66, xg: 0.28, goal: false, lbl: 'SAVED · 0.28 xG · 10.6m Right Foot' },
      { x: 220, y: 88, xg: 0.24, goal: false, lbl: 'SAVED · 0.24 xG · 13.1m Through Ball' },
      { x: 162, y: 84, xg: 0.16, goal: false, lbl: 'BLOCKED · 0.16 xG · 14.5m Header' },
      { x: 274, y: 98, xg: 0.14, goal: false, lbl: 'SAVED · 0.14 xG · 16.0m Angle Shot' },
      { x: 215, y: 122, xg: 0.11, goal: true, lbl: 'GOAL · 0.11 xG · 18.4m Edge of Box' },
      { x: 148, y: 112, xg: 0.08, goal: false, lbl: 'OFF TARGET · 0.08 xG · 19.2m' },
      { x: 292, y: 128, xg: 0.07, goal: false, lbl: 'BLOCKED · 0.07 xG · 20.8m' },
      { x: 238, y: 146, xg: 0.05, goal: false, lbl: 'SAVED · 0.05 xG · 22.5m Long Shot' },
      { x: 185, y: 156, xg: 0.04, goal: false, lbl: 'OFF TARGET · 0.04 xG · 24.1m' },
    ],
  },
  tactical: {
    tag: 'REPORT: MATCH & OPPOSITION KPIs',
    title: 'Territorial Control, Pressing & Chance Quality',
    kpis: [
      { label: 'FIELD TILT', val: '64.2%', delta: '+11.4% AVG', color: 'cyan' },
      { label: 'POSSESSION', val: '59.8%', delta: 'ZONE 14 HIGH', color: 'violet' },
      { label: 'xG DIFF', val: '+1.68', delta: 'DOMINANT', color: 'emerald' },
    ],
    cmd: 'match_report.summarize(metrics=["field_tilt", "ppda", "xg_chain", "box_entries"])',
    type: 'tacticalBars',
    items: [
      { name: 'Field Tilt', val: 64, opp: 36, unit: '%' },
      { name: 'Possession', val: 60, opp: 40, unit: '%' },
      { name: 'Box Entries', val: 78, opp: 32, unit: '' },
      { name: 'Pressing (Inv PPDA)', val: 82, opp: 45, unit: '' },
      { name: 'Chance Quality', val: 74, opp: 38, unit: '' },
    ],
  },
  bi: {
    tag: 'PIPELINE: POWER BI · SQL · PYTHON QA',
    title: 'Dataset Validation & BI Reporting Throughput',
    kpis: [
      { label: 'QA PASS', val: '99.6%', delta: 'VALIDATED', color: 'emerald' },
      { label: 'DATASETS', val: '7+ LABS', delta: 'STRUCTURED', color: 'cyan' },
      { label: 'TIME SAVED', val: '-80%', delta: 'POWER QUERY', color: 'violet' },
    ],
    cmd: 'SELECT monument_id, COUNT(DISTINCT base_id) FROM archive_qa GROUP BY 1;',
    type: 'bars',
    values: [56, 70, 65, 82, 88, 78, 94, 91, 98],
    labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9'],
  },
};

function renderHeroChart(modeKey) {
  const cfg = TELEMETRY_MODES[modeKey];
  const svg = document.getElementById('heroChart');
  const tooltip = document.getElementById('chartTooltip');

  document.getElementById('vizTag').textContent = cfg.tag;
  document.getElementById('vizTitle').textContent = cfg.title;
  document.getElementById('terminalCmd').textContent = cfg.cmd;

  cfg.kpis.forEach((k, idx) => {
    const i = idx + 1;
    document.getElementById(`kpiLabel${i}`).textContent = k.label;
    const valEl = document.getElementById(`kpiVal${i}`);
    valEl.textContent = k.val;
    valEl.className = `kpi-val ${k.color}`;
    document.getElementById(`kpiDelta${i}`).textContent = k.delta;
  });

  if (cfg.type === 'pitch') {
    const pitchMarkup = `
      <rect x="24" y="14" width="392" height="190" rx="8" fill="rgba(16,185,129,0.08)" stroke="rgba(148,163,184,0.3)" stroke-width="1.4"/>
      <rect x="184" y="6" width="72" height="8" rx="1.5" fill="rgba(0,229,255,0.22)" stroke="#00E5FF" stroke-width="1.5"/>
      <rect x="108" y="14" width="224" height="96" fill="none" stroke="rgba(148,163,184,0.28)" stroke-width="1.2"/>
      <rect x="164" y="14" width="112" height="36" fill="none" stroke="rgba(148,163,184,0.28)" stroke-width="1.2"/>
      <circle cx="220" cy="76" r="2.2" fill="rgba(148,163,184,0.5)"/>
      <path d="M178 110 A 48 48 0 0 0 262 110" fill="none" stroke="rgba(148,163,184,0.28)" stroke-width="1.2"/>
      <!-- Animated shot trajectory rays into goal -->
      <line class="shot-ray" x1="196" y1="74" x2="216" y2="12" stroke="rgba(16,185,129,0.55)" stroke-width="1.5" stroke-dasharray="5 5"/>
      <line class="shot-ray" x1="215" y1="122" x2="226" y2="12" stroke="rgba(0,229,255,0.45)" stroke-width="1.3" stroke-dasharray="5 5"/>
      <text x="34" y="194" fill="#10B981" font-size="9.5" font-family="JetBrains Mono">● Goal</text>
      <text x="90" y="194" fill="#00E5FF" font-size="9.5" font-family="JetBrains Mono">○ Saved / Blocked (size = xG)</text>
    `;
    const shotsMarkup = cfg.shots
      .map((s, idx) => {
        const r = 4.5 + s.xg * 15;
        const delay = (idx * 0.055).toFixed(2);
        if (s.goal) {
          return `
            <circle class="goal-ripple" cx="${s.x}" cy="${s.y}" r="${r + 2}" fill="none" stroke="#10B981" stroke-width="1.6" style="animation-delay:${(idx * 0.4).toFixed(1)}s"/>
            <circle class="chart-pt shot-pop" cx="${s.x}" cy="${s.y}" r="${r}" fill="#10B981" stroke="#f8fafc" stroke-width="1.6" style="animation-delay:${delay}s" data-tip="${s.lbl}"/>
          `;
        }
        return `<circle class="chart-pt shot-pop" cx="${s.x}" cy="${s.y}" r="${r}" fill="rgba(0,229,255,0.32)" stroke="#00E5FF" stroke-width="1.5" style="animation-delay:${delay}s" data-tip="${s.lbl}"/>`;
      })
      .join('');
    svg.innerHTML = pitchMarkup + shotsMarkup;
  } else if (cfg.type === 'tacticalBars') {
    const startY = 26;
    const rowH = 34;
    svg.innerHTML = cfg.items
      .map((item, i) => {
        const y = startY + i * rowH;
        const barMax = 210;
        const w1 = (item.val / 100) * barMax;
        const w2 = (item.opp / 100) * barMax;
        const delay = (i * 0.09).toFixed(2);
        return `
          <text x="14" y="${y + 8}" fill="#94a3b8" font-size="10.5" font-family="JetBrains Mono">${item.name}</text>
          <rect x="155" y="${y - 4}" width="${barMax}" height="10" rx="5" fill="rgba(148,163,184,0.12)"/>
          <rect class="chart-pt bar-grow-x" x="155" y="${y - 4}" width="${w1}" height="10" rx="5" fill="url(#tacGrad)" style="animation-delay:${delay}s" data-tip="${item.name}: Team ${item.val}${item.unit} vs Opp ${item.opp}${item.unit}"/>
          <rect class="bar-grow-x" x="155" y="${y + 9}" width="${w2}" height="5" rx="2.5" fill="rgba(167,139,250,0.55)" style="animation-delay:${(i * 0.09 + 0.1).toFixed(2)}s"/>
          <text x="378" y="${y + 6}" fill="#00E5FF" font-size="10.5" font-family="JetBrains Mono">${item.val}${item.unit}</text>
        `;
      })
      .join('') +
      `<defs><linearGradient id="tacGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#00E5FF"/><stop offset="100%" stop-color="#10B981"/></linearGradient></defs>`;
  } else {
    const W = 440, H = 215, padL = 32, padR = 16, padT = 18, padB = 26;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;
    const count = cfg.values.length;
    const gap = 10;
    const barW = (plotW - gap * (count - 1)) / count;
    let grid = '';
    for (let i = 0; i <= 4; i++) {
      const y = padT + (plotH / 4) * i;
      grid += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="rgba(148,163,184,0.12)" stroke-dasharray="3 4"/>`;
    }
    svg.innerHTML =
      grid +
      `<defs><linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#00E5FF"/><stop offset="100%" stop-color="#7C3AED"/></linearGradient></defs>` +
      cfg.values
        .map((v, i) => {
          const h = (v / 100) * plotH;
          const x = padL + i * (barW + gap);
          const y = padT + plotH - h;
          const delay = (i * 0.06).toFixed(2);
          return `
            <rect class="chart-pt bar-grow" x="${x}" y="${y}" width="${barW}" height="${h}" rx="5" fill="url(#barGrad)" opacity="0.9" style="animation-delay:${delay}s"
              data-tip="${cfg.labels[i]} · QA Score ${v}% · Power Query + SQL"/>
            <text x="${x + barW / 2}" y="${H - 8}" text-anchor="middle" fill="#64748b" font-size="9.5" font-family="JetBrains Mono">${cfg.labels[i]}</text>
          `;
        })
        .join('');
  }

  svg.querySelectorAll('.chart-pt').forEach((el) => {
    el.style.cursor = 'pointer';
    el.addEventListener('mouseenter', () => {
      tooltip.textContent = el.dataset.tip;
      tooltip.classList.add('show');
    });
    el.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
  });
}

/* =========================================================
   LIVE INTERACTIVE xG (EXPECTED GOALS) ML SIMULATOR
   ========================================================= */
const simState = {
  // SVG coordinates on 420x290 pitch (Goal center is x=210, y=16; scale: 1m ≈ 6.9px)
  sx: 210,
  sy: 92, // Penalty spot (~11m)
};

function computeXG() {
  const goalX = 210;
  const goalY = 16;
  const pxPerMeter = 6.9;

  // Pitch meters
  const dxM = (simState.sx - goalX) / pxPerMeter;
  const dyM = Math.max(0.8, (simState.sy - goalY) / pxPerMeter);
  const distM = Math.hypot(dxM, dyM);

  // Visible goalmouth angle (goal width = 7.32m -> half = 3.66m)
  const leftPostX = -3.66;
  const rightPostX = 3.66;
  const a1 = Math.atan2(dyM, dxM - leftPostX);
  const a2 = Math.atan2(dyM, dxM - rightPostX);
  const angleRad = Math.abs(a1 - a2);
  const angleDeg = (angleRad * 180) / Math.PI;

  const body = document.getElementById('simBody').value;
  const assist = document.getElementById('simAssist').value;
  const pressure = Number(document.getElementById('simPressure').value);

  // Realistic logistic regression coefficients (calibrated to football xG behavior)
  const intercept = -0.35;
  const distTerm = -0.145 * (distM - 11.0); // closer than 11m boosts xG
  const angleTerm = 1.65 * (angleRad - 0.52); // wider angle boosts xG
  const bodyMap = { foot: 0.15, weak: -0.28, header: -0.68 };
  const assistMap = { through: 0.36, open: 0.0, cross: -0.32, counter: 0.52 };
  const bodyTerm = bodyMap[body] || 0;
  const assistTerm = assistMap[assist] || 0;
  const pressTerm = -0.34 * (pressure - 1);

  const logit = intercept + distTerm + angleTerm + bodyTerm + assistTerm + pressTerm;
  const prob = 1 / (1 + Math.exp(-logit));
  const clamped = Math.min(0.96, Math.max(0.01, prob));

  // Update pitch visuals (including pulsing sonar & flowing shot ray)
  document.getElementById('shotDot').setAttribute('cx', simState.sx);
  document.getElementById('shotDot').setAttribute('cy', simState.sy);
  document.getElementById('shotHalo').setAttribute('cx', simState.sx);
  document.getElementById('shotHalo').setAttribute('cy', simState.sy);
  const sonar = document.getElementById('shotSonar');
  if (sonar) {
    sonar.setAttribute('cx', simState.sx);
    sonar.setAttribute('cy', simState.sy);
  }
  const ray = document.getElementById('shotRay');
  if (ray) {
    ray.setAttribute('x1', simState.sx);
    ray.setAttribute('y1', simState.sy);
    ray.setAttribute('x2', goalX);
    ray.setAttribute('y2', goalY);
  }
  document
    .getElementById('shotCone')
    .setAttribute('points', `${simState.sx},${simState.sy} 174,16 246,16`);

  document.getElementById('shotCoords').textContent = `${distM.toFixed(1)}m · ${angleDeg.toFixed(1)}°`;
  document.getElementById('xgBig').innerHTML = `${clamped.toFixed(2)} <span class="xg-pct">(${(clamped * 100).toFixed(1)}%)</span>`;

  const pText =
    currentLang === 'ar'
      ? pressure === 0
        ? 'بدون ضغط (مفتوح)'
        : `${pressure} مدافع`
      : pressure === 0
        ? 'Open (0 Defenders)'
        : `${pressure} Defender${pressure > 1 ? 's' : ''}`;
  document.getElementById('pressureVal').textContent = pText;

  // Quality tier badge
  const qEl = document.getElementById('xgQuality');
  if (clamped >= 0.35) {
    qEl.textContent = currentLang === 'ar' ? 'فرصة محققة' : 'BIG CHANCE';
    qEl.style.color = 'var(--emerald)';
    qEl.style.borderColor = 'rgba(16,185,129,0.4)';
    qEl.style.background = 'rgba(16,185,129,0.14)';
  } else if (clamped >= 0.14) {
    qEl.textContent = currentLang === 'ar' ? 'فرصة جيدة' : 'GOOD CHANCE';
    qEl.style.color = 'var(--cyan)';
    qEl.style.borderColor = 'rgba(0,229,255,0.4)';
    qEl.style.background = 'rgba(0,229,255,0.14)';
  } else {
    qEl.textContent = currentLang === 'ar' ? 'تسديدة صعبة' : 'LOW PROBABILITY';
    qEl.style.color = 'var(--amber)';
    qEl.style.borderColor = 'rgba(245,158,11,0.4)';
    qEl.style.background = 'rgba(245,158,11,0.14)';
  }

  // SHAP-style Feature Impact Bars
  const factors = [
    { name: currentLang === 'ar' ? 'المسافة' : 'Shot Distance', val: distTerm },
    { name: currentLang === 'ar' ? 'زاوية المرمى' : 'Goal Angle', val: angleTerm },
    { name: currentLang === 'ar' ? 'الضغط الدفاعي' : 'Def. Pressure', val: pressTerm },
    { name: currentLang === 'ar' ? 'نوع التمريرة' : 'Assist Context', val: assistTerm },
    { name: currentLang === 'ar' ? 'جزء الجسم' : 'Body Part', val: bodyTerm },
  ];

  const maxAbs = 2.0;
  document.getElementById('shapBars').innerHTML = factors
    .map((f) => {
      const pct = Math.min(100, Math.max(4, (Math.abs(f.val) / maxAbs) * 100));
      const sign = f.val >= 0 ? '+' : '';
      const cls = f.val >= 0 ? 'pos' : 'neg';
      const txtColor = f.val >= 0 ? 'var(--emerald)' : 'var(--amber)';
      return `
        <div class="shap-row">
          <span class="muted">${f.name}</span>
          <div class="shap-track"><div class="shap-fill ${cls}" style="width:${pct.toFixed(0)}%"></div></div>
          <span class="mono" style="color:${txtColor};text-align:end">${sign}${f.val.toFixed(2)}</span>
        </div>
      `;
    })
    .join('');
}

function initXGSimulator() {
  const pitch = document.getElementById('simPitch');
  if (!pitch) return;

  let autoTimer = null;
  let animFrame = null;

  function stopAutoDemo() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
    const autoBtn = document.getElementById('simAutoBtn');
    if (autoBtn) {
      autoBtn.classList.remove('running');
      autoBtn.textContent = currentLang === 'ar' ? '▶ تشغيل تلقائي' : '▶ Auto-Demo';
    }
  }

  function glideToShot(targetX, targetY, body, assist, pressure) {
    if (animFrame) cancelAnimationFrame(animFrame);
    const startX = simState.sx;
    const startY = simState.sy;
    const startT = performance.now();
    const duration = 520;

    document.getElementById('simBody').value = body;
    document.getElementById('simAssist').value = assist;
    document.getElementById('simPressure').value = pressure;

    function step(now) {
      const p = Math.min(1, (now - startT) / duration);
      const ease = 1 - Math.pow(1 - p, 3);
      simState.sx = startX + (targetX - startX) * ease;
      simState.sy = startY + (targetY - startY) * ease;
      computeXG();
      if (p < 1) animFrame = requestAnimationFrame(step);
    }
    animFrame = requestAnimationFrame(step);
  }

  function placeFromPointer(e) {
    stopAutoDemo();
    const rect = pitch.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 420;
    const y = ((e.clientY - rect.top) / rect.height) * 290;
    simState.sx = Math.min(402, Math.max(18, x));
    simState.sy = Math.min(272, Math.max(22, y));
    computeXG();
  }

  let dragging = false;
  pitch.addEventListener('pointerdown', (e) => {
    dragging = true;
    placeFromPointer(e);
  });
  window.addEventListener('pointermove', (e) => {
    if (dragging) placeFromPointer(e);
  });
  window.addEventListener('pointerup', () => (dragging = false));

  ['simBody', 'simAssist', 'simPressure'].forEach((id) => {
    document.getElementById(id).addEventListener('input', () => {
      stopAutoDemo();
      computeXG();
    });
  });

  const presets = {
    tapin: { sx: 210, sy: 44, body: 'foot', assist: 'through', pressure: 0 },
    penalty: { sx: 210, sy: 92, body: 'foot', assist: 'open', pressure: 0 },
    edge: { sx: 210, sy: 144, body: 'foot', assist: 'open', pressure: 2 },
    tight: { sx: 112, sy: 62, body: 'weak', assist: 'cross', pressure: 2 },
  };

  document.querySelectorAll('.preset-btn[data-preset]').forEach((btn) => {
    btn.addEventListener('click', () => {
      stopAutoDemo();
      const p = presets[btn.dataset.preset];
      if (!p) return;
      glideToShot(p.sx, p.sy, p.body, p.assist, p.pressure);
    });
  });

  const autoSeq = [
    { sx: 210, sy: 46, body: 'foot', assist: 'through', pressure: 0 },
    { sx: 278, sy: 88, body: 'foot', assist: 'counter', pressure: 1 },
    { sx: 196, sy: 146, body: 'foot', assist: 'open', pressure: 2 },
    { sx: 132, sy: 66, body: 'header', assist: 'cross', pressure: 2 },
    { sx: 216, sy: 92, body: 'foot', assist: 'through', pressure: 1 },
    { sx: 306, sy: 132, body: 'weak', assist: 'open', pressure: 3 },
  ];
  let seqIdx = 0;

  const autoBtn = document.getElementById('simAutoBtn');
  if (autoBtn) {
    autoBtn.addEventListener('click', () => {
      if (autoTimer) {
        stopAutoDemo();
        return;
      }
      autoBtn.classList.add('running');
      autoBtn.textContent = currentLang === 'ar' ? '⏸ إيقاف' : '⏸ Pause';
      const runNext = () => {
        const s = autoSeq[seqIdx % autoSeq.length];
        seqIdx++;
        glideToShot(s.sx, s.sy, s.body, s.assist, s.pressure);
      };
      runNext();
      autoTimer = setInterval(runNext, 1800);
    });
  }

  computeXG();
}

/* =========================================================
   NEURAL NETWORK CANVAS WITH TRAVELING DATA SIGNAL PULSES
   ========================================================= */
function initNeuralCanvas() {
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height, dpr;
  const mouse = { x: -999, y: -999 };
  const NODE_COUNT = 48;
  const MAX_DIST = 155;
  const nodes = [];
  const pulses = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function seed() {
    nodes.length = 0;
    pulses.length = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        r: Math.random() * 1.9 + 1.3,
        kind: i % 3,
      });
    }
  }

  function frame() {
    ctx.clearRect(0, 0, width, height);

    // Subtle cursor glow aura
    if (mouse.x > 0 && mouse.y > 0) {
      const aura = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 170);
      aura.addColorStop(0, 'rgba(0, 229, 255, 0.14)');
      aura.addColorStop(1, 'rgba(0, 229, 255, 0)');
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 170, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      for (let j = i + 1; j < nodes.length; j++) {
        const m = nodes[j];
        const dist = Math.hypot(n.x - m.x, n.y - m.y);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.28;
          ctx.strokeStyle =
            n.kind === 0
              ? `rgba(0, 229, 255, ${alpha})`
              : n.kind === 1
                ? `rgba(139, 92, 246, ${alpha})`
                : `rgba(16, 185, 129, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();

          // Occasionally spawn a glowing data pulse traveling along this edge
          if (pulses.length < 18 && Math.random() < 0.0025) {
            pulses.push({ from: n, to: m, t: 0, speed: 0.015 + Math.random() * 0.015, kind: n.kind });
          }
        }
      }

      const md = Math.hypot(n.x - mouse.x, n.y - mouse.y);
      if (md < 185) {
        ctx.strokeStyle = `rgba(0, 229, 255, ${(1 - md / 185) * 0.48})`;
        ctx.lineWidth = 1.15;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }

      ctx.fillStyle =
        n.kind === 0
          ? 'rgba(0, 229, 255, 0.84)'
          : n.kind === 1
            ? 'rgba(167, 139, 250, 0.84)'
            : 'rgba(16, 185, 129, 0.85)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Animate traveling signal packets
    for (let k = pulses.length - 1; k >= 0; k--) {
      const p = pulses[k];
      p.t += p.speed;
      if (p.t >= 1) {
        pulses.splice(k, 1);
        continue;
      }
      const px = p.from.x + (p.to.x - p.from.x) * p.t;
      const py = p.from.y + (p.to.y - p.from.y) * p.t;
      ctx.fillStyle = p.kind === 0 ? '#00E5FF' : p.kind === 1 ? '#C4B5FD' : '#34D399';
      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(frame);
  }

  resize();
  seed();
  frame();
  window.addEventListener('resize', () => {
    resize();
    seed();
  });
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
}

/* =========================================================
   LIVE TYPING ROLE ROTATOR (BILINGUAL)
   ========================================================= */
function initTypingRotator() {
  const el = document.getElementById('typingText');
  if (!el) return;

  const phrases = {
    en: [
      'Custom xG Machine Learning Models',
      'Power BI, DAX & Power Query Dashboards',
      'Tactical Match, PPDA & Field Tilt Reports',
      'SQL, Python & Archival Data Validation',
    ],
    ar: [
      'بناء نماذج الأهداف المتوقعة (xG) بتعلم الآلة',
      'لوحات Power BI و DAX و Power Query',
      'تحليل المباريات والضغط (PPDA & Field Tilt)',
      'تنظيف وتدقيق قواعد البيانات بـ SQL و Python',
    ],
  };

  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const list = phrases[currentLang] || phrases.en;
    const word = list[phraseIdx % list.length];

    if (!deleting) {
      charIdx++;
      el.textContent = word.slice(0, charIdx);
      if (charIdx >= word.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 44);
    } else {
      charIdx--;
      el.textContent = word.slice(0, Math.max(0, charIdx));
      if (charIdx <= 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % list.length;
        setTimeout(tick, 320);
        return;
      }
      setTimeout(tick, 24);
    }
  }
  tick();
}

/* =========================================================
   INTERACTIVE 3D TILT + CURSOR SPOTLIGHT ON CARDS
   ========================================================= */
function initTiltCards() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -7;
      const ry = ((x / rect.width) - 0.5) * 7;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
      card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-5px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* =========================================================
   APP INITIALIZATION
   ========================================================= */
let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const dict = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  const pill = document.querySelector('.lang-pill');
  if (pill) pill.textContent = lang === 'en' ? 'عربي' : 'EN';
  computeXG();
}

function initCountersAndReveal() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / 1000, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll('.counter').forEach((c) => counterObserver.observe(c));
}

function openCaseModal(idx) {
  const item = CASE_STUDIES[idx];
  if (!item) return;
  const modal = document.getElementById('projectModal');
  document.getElementById('mCat').textContent = item.cat[currentLang];
  document.getElementById('mTitle').textContent = item.title[currentLang];
  document.getElementById('mSummary').textContent = item.summary[currentLang];
  document.getElementById('mMetrics').innerHTML = item.metrics.map((m) => `<span>${m}</span>`).join('');
  document.getElementById('mBullets').innerHTML = item.bullets[currentLang].map((b) => `<li>${b}</li>`).join('');
  document.getElementById('mTags').innerHTML = item.tags.map((t) => `<span class="tech-chip">${t}</span>`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeCaseModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Scroll progress + navbar background
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 24);
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  });

  // Theme Toggle (Dark / Light)
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  themeBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    themeIcon.textContent = next === 'dark' ? '☀' : '☾';
  });

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  // Language switcher
  document.getElementById('langToggle').addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'ar' : 'en');
  });

  // Hero Telemetry Tabs + Gentle Auto-Cycle (pauses on hover/click)
  const heroModes = ['xg', 'tactical', 'bi'];
  let heroModeIdx = 0;
  let heroPaused = false;

  function selectHeroMode(mode) {
    heroModeIdx = Math.max(0, heroModes.indexOf(mode));
    document.querySelectorAll('.t-tab').forEach((b) => {
      const active = b.dataset.mode === mode;
      b.classList.toggle('active', active);
      b.setAttribute('aria-selected', String(active));
    });
    renderHeroChart(mode);
  }

  selectHeroMode('xg');
  document.querySelectorAll('.t-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      heroPaused = true;
      selectHeroMode(btn.dataset.mode);
    });
  });

  const telemetryCard = document.querySelector('.telemetry-card');
  if (telemetryCard) {
    telemetryCard.addEventListener('mouseenter', () => (heroPaused = true));
    telemetryCard.addEventListener('mouseleave', () => (heroPaused = false));
  }
  setInterval(() => {
    if (heroPaused) return;
    heroModeIdx = (heroModeIdx + 1) % heroModes.length;
    selectHeroMode(heroModes[heroModeIdx]);
  }, 6500);

  // Project Filter Tabs
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach((card) => {
        card.classList.toggle('hidden', !(filter === 'all' || card.dataset.cat === filter));
      });
    });
  });

  // Modal
  document.querySelectorAll('.open-modal').forEach((btn) => {
    btn.addEventListener('click', () => openCaseModal(Number(btn.dataset.project)));
  });
  document.getElementById('modalClose').addEventListener('click', closeCaseModal);
  document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') closeCaseModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCaseModal();
  });

  // Copy Email
  document.getElementById('copyEmailBtn').addEventListener('click', async () => {
    const status = document.getElementById('copyStatus');
    try {
      await navigator.clipboard.writeText(PROFILE_CONFIG.email);
      status.textContent = currentLang === 'ar' ? 'تم النسخ ✓' : 'COPIED ✓';
    } catch {
      status.textContent = PROFILE_CONFIG.email;
    }
    setTimeout(() => (status.textContent = 'COPY'), 2200);
  });

  // Contact Form -> opens real mailto draft to mostafasaad044@gmail.com
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fName').value.trim();
    const email = document.getElementById('fEmail').value.trim();
    const msg = document.getElementById('fMsg').value.trim();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:${PROFILE_CONFIG.email}?subject=${subject}&body=${body}`;

    const fb = document.getElementById('formFeedback');
    fb.textContent =
      currentLang === 'ar'
        ? '✓ تم تجهيز رسالة البريد الإلكتروني إلى mostafasaad044@gmail.com'
        : '✓ Email draft opened for mostafasaad044@gmail.com';
    e.target.reset();
  });

  initXGSimulator();
  initNeuralCanvas();
  initTypingRotator();
  initTiltCards();
  initCountersAndReveal();
});
