/* =========================================================
   MOSTAFA SAAD — DUAL-TRACK PORTFOLIO CONFIG
   ========================================================= */
const PROFILE_CONFIG = {
  name: 'Mostafa Saad',
  email: 'mostafasaad0091@gmail.com',
  phone: '+20 101 009 8727',
  phoneRaw: '+201010098727',
  whatsapp: 'https://wa.me/201010098727',
  linkedin: 'https://www.linkedin.com/in/mostafa-saad-171086191/',
  github: 'https://github.com/mostafasaad91',
  substack: 'https://mostafasaad.substack.com/',
  x: 'https://x.com/TacTical_41',
  liveBaseUrl: 'https://mostafasaad91.github.io/',
  powerBiUrl:
    'https://app.powerbi.com/view?r=eyJrIjoiODk5NTM5YjQtMTk4Ny00NGU2LWFiMzUtYTg1N2YwZDUyYWU4IiwidCI6ImI3YTMxZDI1LWYyMzMtNGM4ZC05ODM0LTdiMjVlZDVlMWU4YSIsImMiOjh9',
};

/* =========================================================
   BILINGUAL TRANSLATIONS (EN / AR)
   ========================================================= */
const TRANSLATIONS = {
  en: {
    nav_data_track: 'Data & BI Track',
    nav_foot_track: 'Football Lab',
    nav_insights: 'Insights',
    nav_exp: 'Experience',
    nav_contact: 'Contact',
    nav_cta: 'Hire / Collaborate',
    hero_badge: 'AL JIZAH, EGYPT · OPEN TO REMOTE & ON-SITE',
    hero_title_1: 'Turning Business & Football Data into',
    hero_title_2: 'Actionable Intelligence',
    cv_data_short: '⬇ Data CV (PDF)',
    cv_foot_short: '⬇ Football CV (PDF)',
    cv_data_btn: '⬇ Data Analyst CV (PDF)',
    cv_foot_btn: '⬇ Football Analyst CV (PDF)',
    pbi_gallery_hint: 'ALL 6 DASHBOARD PAGES (CLICK ANY PAGE TO ZOOM):',
    posters_eyebrow: '// VISUAL OUTPUT · 4:5 AMOLED POSTER SUITE',
    posters_title: 'Automated AMOLED Match Posters Gallery',
    posters_desc:
      'Click any 4:5 poster board to inspect full resolution — showcasing the AMOLED visual language of my Football-Match-Analysis toolkit.',
    pos_1: 'Shot Map & xG Race',
    pos_2: 'Passing Sonar & Field Tilt',
    pos_3: 'PPDA & Possession Funnel',
    pos_4: 'Player Role Percentiles',
    ins_eyebrow: '// ANALYTICAL WRITING & BREAKDOWNS',
    ins_title: 'Data & Tactical Insights',
    ins_desc:
      'Concise methodology notes and evidence-led write-ups connecting SQL/ML rigor with executive and coaching clarity.',
    art_1_t: 'Where Does $110M Leak? Point-in-Time Margins & 90x Basket Lift',
    art_1_d:
      'Why using current standard cost distorts historical profit margins, and how writing Python K-Means RFM clusters directly back into SQL Server creates one source of truth for Power BI.',
    art_2_t: 'Beyond Shot Counts: Reading Control via xG, xT/100, PPDA & Field Tilt',
    art_2_d:
      'How combining territorial dominance (Field Tilt), pressing aggression (PPDA), and Expected Threat per 100 touches separates sustainable match control from noisy scorelines.',
    art_3_t: 'Bulletproof Coding Systems: Auditing Multi-Source Archival Datasets',
    art_3_d:
      'Practical lessons from 7+ research & heritage datasets: designing base-ID keys, catching silent duplicate/typo traps, and turning messy spreadsheets into reliable SQL models.',
    read_article: 'Read Breakdown →',
    bento_yrs: 'Years',
    bento_exp_desc: 'Leading 7+ archival, BI & analytics datasets, supervising data teams, and teaching advanced Excel workshops.',
    bento_t1: 'Business BI & ML',
    bento_t2: 'Football Performance Lab',
    rfm_eyebrow: '// INTERACTIVE BUSINESS ML PLAYGROUND',
    rfm_title: 'Live K-Means RFM Customer Segmentation Simulator',
    rfm_desc:
      'Inspired by my AdventureWorks 2022 Python → SQL pipeline: adjust Recency, Frequency & Monetary spend to watch K-Means (k=4) classify the customer on a live scatter plot with business actions and SQL write-back.',
    rfm_plot_hdr: 'LIVE K-MEANS CLUSTER MAP (k=4)',
    rfm_presets: 'PROFILES:',
    rfm_seg_lbl: 'PREDICTED K-MEANS SEGMENT',
    rfm_r_lbl: 'Recency (Days Since Last Order)',
    rfm_f_lbl: 'Frequency (Total Orders)',
    rfm_m_lbl: 'Monetary (Lifetime Spend USD)',
    rfm_action_lbl: 'RECOMMENDED BUSINESS ACTION',
    split_eyebrow: '// DUAL-RENDERER SHOWCASE · #000000 ⇄ #F5F5F5',
    split_title: 'AMOLED vs. Print Light (Ink & Petrol) Split Comparison',
    split_desc:
      'Drag the center handle left or right to inspect how my Football-Match-Analysis engine renders the exact same match board for AMOLED screens and paper print with automatic kit-color contrast lifting.',
    split_card_t: 'Built Once, Published Twice',
    split_card_d:
      'Every match run exports a dark AMOLED #000000 edition for X / mobile feeds and an Ink & Petrol #F5F5F5 edition for print briefings — dynamically lifting dark kit hues on black and darkening light kits on paper.',
    intent_lbl: 'WHAT BRINGS YOU HERE? (AUTO-TAILORS MESSAGE & LINKS)',
    int_1: '💼 Hiring: Data / BI',
    int_2: '⚽ Club / Scouting',
    int_3: '📊 Freelance / Audit',
    int_4: '🎓 Excel / BI Workshop',
    nav_stack: 'Skills',
    nav_services: 'Services',
    stack_eyebrow: '// VERIFIED TOOLKIT · CLICK ANY SKILL FOR PROOF',
    stack_title: 'Interactive Tech Stack & Project Proof Matrix',
    stack_desc:
      'Click any tool below to inspect exactly where and how it was deployed across production datasets, GitHub repos, and match reports.',
    mg_sql: '01 · SQL & DATABASES',
    mg_bi: '02 · BI & REPORTING',
    mg_py: '03 · PYTHON & MACHINE LEARNING',
    mg_foot: '04 · FOOTBALL & TACTICAL ANALYTICS',
    srv_eyebrow: '// FREELANCE, CONSULTING & TRAINING',
    srv_title: 'Services & Workshops',
    srv_desc:
      'Available for project-based engagements, club consulting, and hands-on corporate or 1-on-1 analytics workshops.',
    srv_1_t: 'Power BI Dashboards, SQL & Data Auditing',
    srv_1_d:
      'End-to-end transformation of messy spreadsheets or OLTP databases into clean star-schema models, automated Power Query pipelines, DAX KPIs, and interactive executive dashboards.',
    srv_1_b1: 'Multi-sheet ID reconciliation & anomaly QA',
    srv_1_b2: 'Interactive Power BI / Tableau reporting',
    srv_1_b3: 'Customer segmentation (RFM / K-Means) & cohorts',
    srv_2_t: 'Match, Opposition & Player Scouting Reports',
    srv_2_d:
      'Evidence-led tactical packs for clubs, agencies, and sports media: custom xG/xT event analysis, PPDA pressing maps, player role percentiles, and AMOLED visual boards.',
    srv_2_b1: 'Pre-match opposition & post-match PDF reports',
    srv_2_b2: 'Recruitment shortlists & same-role peer profiles',
    srv_2_b3: 'Bilingual delivery (Arabic & English) + 4:5 posters',
    srv_3_t: 'Advanced Excel, Power Query & BI Workshops',
    srv_3_d:
      'Practical workshops for research teams, NGOs, and analysts — built from 6+ years of supervising data teams and teaching dataset design & Excel automation.',
    srv_3_b1: 'Power Query ETL, Power Pivot & DAX foundations',
    srv_3_b2: 'Dataset coding systems & data cleaning workflows',
    srv_3_b3: 'Tailored corporate or 1-on-1 live sessions',
    srv_cta: 'Request This Service →',
    srv_cta_ws: 'Book a Workshop →',
    hero_subtitle:
      'Data Analyst with 6+ years of experience operating across two specialized tracks: Enterprise BI, SQL & Machine Learning systems, and independent Football Data & Performance Analytics.',
    track_switch_lbl: 'CHOOSE PORTFOLIO VIEW:',
    track_all: 'All Tracks',
    track_data: '📊 Business Data & BI',
    track_foot: '⚽ Football Analytics',
    hero_btn_data: 'Explore Data & BI',
    hero_btn_foot: 'Enter Football Lab ⚽',
    float_impact: 'Business BI & Football Analytics',
    stat_years: 'Years Data Experience',
    stat_aw: 'AdventureWorks E2E Analysis',
    stat_stars: 'GitHub Project Stars',
    stat_certs: 'FA · PFSA · FP Academy Certs',
    data_zone_title: 'Business Intelligence, SQL & Machine Learning',
    data_zone_desc:
      'End-to-end corporate & archival analytics: relational SQL databases, star-schema modeling, Python segmentation & retention models, and live interactive Power BI executive dashboards.',
    copy_data_url: '🔗 Copy Data-Only Link',
    dp_1: 'T-SQL window functions, CTEs, Star Schema views, and point-in-time profitability auditing.',
    dp_2: 'K-Means RFM clustering, cohort retention heatmaps, market basket lift, and automated QA scripts.',
    dp_3: 'PBIP source-controlled dashboards, DAX time intelligence, Power Query ETL, and Excel workshops.',
    aw_title: 'AdventureWorks 2022 — End-to-End Sales Analytics',
    aw_desc:
      'Complete SQL Server → Python (pyodbc live DB write-back) → 6-page Power BI investigation answering 17 business questions: point-in-time profit margins, K-Means RFM clustering, cohort retention (~345d window), and market-basket cross-sell bundles.',
    arch_title: 'Archival & Cultural Heritage Database Systems',
    arch_desc:
      'Designed dataset coding taxonomies, automated cross-sheet ID reconciliation scripts, metadata validation workflows, and executive Power BI / Excel reporting while supervising data teams and delivering advanced Excel workshops.',
    pbi_title: '6-Page Executive Power BI Dashboard (Live)',
    pbi_load_btn: '▶ Load Interactive Dashboard',
    pbi_launch: '▶ Launch Live 6-Page Power BI Report',
    foot_zone_title: 'Football Analytics, xG/xT Models & Tactical Scouting',
    foot_zone_desc:
      'Turning Opta / WhoScored match-event data into automated tactical match reports, AMOLED visual posters, player role profiles, and recruitment intelligence — backed by FA, PFSA & FP Academy credentials.',
    copy_foot_url: '🔗 Copy Football-Only Link',
    fma_title: 'Football Match Analysis — Automated Tactical Pipeline',
    fma_desc:
      'End-to-end Python engine turning a single WhoScored/Opta URL into xG/xT/xGChain models, passing sonars, touch-density heatmaps, player role profiles, 8 AMOLED & Light 4:5 posters, a full PDF report, publishable .docx article, and SQLite match archive across EPL, La Liga & Serie A.',
    scout_title: 'Match, Opposition & Player Recruitment Scouting',
    scout_desc:
      'Translating possession funnels, pressing intensity (PPDA), field tilt, progressive-pass share, and xT per 100 touches into concise tactical briefs and scouting dossiers for coaches and recruitment staff.',
    sim_eyebrow: '// INTERACTIVE FOOTBALL ML PLAYGROUND',
    sim_title: 'Live Expected Goals (xG) Model Simulator',
    sim_desc:
      'Click anywhere on the pitch, adjust shot context, or press Auto-Demo to inspect live xG probability and SHAP-style feature impacts.',
    sim_click_hint: 'CLICK ON PITCH TO PLACE SHOT',
    sim_presets: 'PRESETS:',
    sim_prob_label: 'PREDICTED GOAL PROBABILITY',
    sim_body: 'Body Part',
    sim_assist: 'Situation / Assist',
    sim_pressure: 'Defensive Pressure (Defenders in Cone)',
    sim_shap: 'MODEL FEATURE IMPACT (LOG-ODDS CONTRIBUTION)',
    proj_details: 'Case Study →',
    career_eyebrow: '// TRACK RECORD',
    career_title: 'Experience & Education',
    role_1_t: 'Digital Archivist & Cultural Data Analyst · Metadata Archivist',
    role_1_d:
      'Managing cultural heritage datasets, metadata standardization, cross-database ID reconciliation, and analytical reporting.',
    role_2_t: 'Freelance Data Analyst & Football Performance Analyst',
    role_2_d:
      'End-to-end client BI & data cleaning pipelines (Excel Power Query, Power BI, DAX, SQL, Python) alongside independent football xG/xT modeling, automated match reports, and scouting analytics.',
    role_3_t: 'Senior Data Analyst & Archive Officer (prev. Junior Analyst)',
    role_3_d:
      'Led 7+ archival & social-research dataset projects, designed data coding systems & forecasting indicators in Excel & Power BI, supervised data teams, and taught advanced Excel workshops.',
    role_4_t: 'Content Writer',
    role_4_d:
      'Authored analytical & literary reviews, sharpening clear, structured written communication across Arabic and English audiences.',
    edu_tag: 'EDUCATION',
    edu_deg: "Bachelor's Degree, Business Administration & Management",
    share_tag: 'SMART ROLE-SPECIFIC LINKS',
    share_desc: 'Applying for a specific role? Share a focused link directly to either track:',
    langs_tag: 'BILINGUAL DELIVERY',
    langs_desc:
      'Executive BI dashboards, tactical match reports, and technical documentation delivered fluently in English & Arabic.',
    contact_eyebrow: "// LET'S COLLABORATE",
    contact_title: 'Looking for a Data, BI/ML or Football Analyst?',
    contact_desc:
      'Open to Data Analyst, BI/ML, and Football Data / Performance Analyst roles — remote or on-site, plus freelance consulting & Excel/BI workshops.',
    form_name: 'Your Name',
    form_email: 'Email Address',
    form_msg: 'Role or Project Details',
    form_send: 'Open Email Draft / Send',
    footer_built: 'Turning business and football data into decisions.',
    modal_approach: 'Technical Architecture & Impact',
  },
  ar: {
    nav_data_track: 'مسار البيانات و BI',
    nav_foot_track: 'معمل كرة القدم',
    nav_insights: 'مقالات وتحليلات',
    nav_exp: 'الخبرات',
    nav_contact: 'تواصل معي',
    nav_cta: 'تواصل للعمل',
    hero_badge: 'الجيزة، مصر · متاح عن بُعد أو حضوري',
    hero_title_1: 'أحوّل بيانات الأعمال وكرة القدم إلى',
    hero_title_2: 'ذكاء تحليلي وقرارات دقيقة',
    cv_data_short: '⬇ CV محلل بيانات (PDF)',
    cv_foot_short: '⬇ CV محلل كرة قدم (PDF)',
    cv_data_btn: '⬇ تحميل CV محلل البيانات (PDF)',
    cv_foot_btn: '⬇ تحميل CV محلل كرة القدم (PDF)',
    pbi_gallery_hint: 'جميع صفحات لوحة Power BI الست (اضغط على أي صفحة للتكبير):',
    posters_eyebrow: '// مخرجات بصرية · بوسترات 4:5 AMOLED',
    posters_title: 'معرض بوسترات تحليل المباريات (AMOLED)',
    posters_desc:
      'اضغط على أي بوستر لعرضه بالحجم الكامل — يعكس الهوية البصرية لبرنامج Football-Match-Analysis.',
    pos_1: 'خريطة التسديدات وسباق xG',
    pos_2: 'سونار التمريرات و Field Tilt',
    pos_3: 'شدة الضغط PPDA وقمع الاستحواذ',
    pos_4: 'ملف ومئويات دور اللاعب',
    ins_eyebrow: '// مقالات وتحليلات مختصرة',
    ins_title: 'مقالات وتحليلات في البيانات وكرة القدم',
    ins_desc:
      'خلاصات منهجية وتحليلات مبنية على الأدلة تربط دقة SQL وتعلم الآلة بوضوح القرار التنفيذي والتكتيكي.',
    art_1_t: 'أين تتسرب أرباح $110M؟ الهوامش التاريخية وحزم البيع المتقاطع 90x',
    art_1_d:
      'لماذا يشوّه استخدام التكلفة الحالية حساب الأرباح التاريخية، وكيف يؤدي حفظ نتائج K-Means RFM من Python مباشرة في SQL Server لبناء مصدر بيانات واحد لـ Power BI.',
    art_2_t: 'ما وراء عدد التسديدات: قراءة السيطرة عبر xG و xT و PPDA و Field Tilt',
    art_2_d:
      'كيف يكشف الدمج بين السيطرة الميدانية وشراسة الضغط والتهديد المتوقع لكل 100 لمسة حقيقة الأداء بعيداً عن ضجيج النتيجة النهائية.',
    art_3_t: 'تصميم أنظمة تكويد محصّنة: دروس من تدقيق +7 قواعد بيانات أرشيفية',
    art_3_d:
      'خبرة عملية من قواعد بيانات التراث والأبحاث: بناء المفاتيح الأساسية، اكتشاف التكرارات والأخطاء الصامتة، وتحويل الجداول المتفرقة لنماذج SQL موثوقة.',
    read_article: 'اقرأ التحليل ←',
    bento_yrs: 'سنوات',
    bento_exp_desc: 'قيادة +7 قواعد بيانات أرشيفية وتحليلية، الإشراف على فرق البيانات، وتقديم ورش Excel متقدمة.',
    bento_t1: 'ذكاء الأعمال وتعلم الآلة',
    bento_t2: 'معمل تحليل كرة القدم',
    rfm_eyebrow: '// تجربة تعلم آلي تفاعلية للأعمال',
    rfm_title: 'محاكي تقسيم العملاء بـ K-Means RFM المباشر',
    rfm_desc:
      'مستوحى من مشروع AdventureWorks 2022: حرّك مؤشرات الحداثة والتكرار والإنفاق لتشاهد نموذج K-Means (k=4) يصنّف العميل لحظياً على خريطة العناقيد مع التوصية التجارية وكود SQL.',
    rfm_plot_hdr: 'خريطة عناقيد K-Means المباشرة (k=4)',
    rfm_presets: 'أمثلة عملاء:',
    rfm_seg_lbl: 'الشريحة المتوقعة (K-Means Segment)',
    rfm_r_lbl: 'الحداثة (أيام منذ آخر طلب)',
    rfm_f_lbl: 'التكرار (عدد الطلبات)',
    rfm_m_lbl: 'القيمة (إجمالي الإنفاق بالدولار)',
    rfm_action_lbl: 'التوصية التجارية المقترحة',
    split_eyebrow: '// مقارنة بصرية · AMOLED #000000 ⇄ طباعة #F5F5F5',
    split_title: 'مقارنة تفاعلية: نسخة AMOLED مقابل نسخة الطباعة الفاتحة',
    split_desc:
      'اسحب الخط الفاصل يميناً ويساراً لترى كيف يصدّر محرك Football-Match-Analysis نفس اللوحة التكتيكية بنسختين مع ضبط تلقائي لتباين ألوان القمصان.',
    split_card_t: 'تُبنى مرة واحدة وتُنشر بنسختين',
    split_card_d:
      'كل تشغيل ينتج نسخة AMOLED سوداء للسوشيال والموبايل ونسخة Ink & Petrol فاتحة للتقارير المطبوعة مع رفع ذكي لتباين الألوان الداكنة والفاتحة.',
    intent_lbl: 'ما هدف تواصلك؟ (يخصّص الروابط والرسالة تلقائياً)',
    int_1: '💼 توظيف: Data / BI',
    int_2: '⚽ نادي / سكاوتنج',
    int_3: '📊 مشروع Freelance',
    int_4: '🎓 ورشة Excel / Power BI',
    nav_stack: 'المهارات',
    nav_services: 'الخدمات',
    stack_eyebrow: '// أدوات مثبتة بالمشاريع · اضغط أي مهارة للتفاصيل',
    stack_title: 'مصفوفة المهارات التفاعلية وإثبات التطبيق',
    stack_desc:
      'اضغط على أي أداة بالأسفل لترى فوراً أين وكيف تم تطبيقها فعلياً في قواعد البيانات ومشاريع GitHub وتقارير المباريات.',
    mg_sql: '01 · قواعد البيانات و SQL',
    mg_bi: '02 · ذكاء الأعمال والتقارير (BI)',
    mg_py: '03 · PYTHON وتعلم الآلة',
    mg_foot: '04 · تحليل كرة القدم التكتيكي',
    srv_eyebrow: '// العمل الحر والاستشارات والتدريب',
    srv_title: 'الخدمات وورش العمل',
    srv_desc:
      'متاح للمشاريع الاستشارية، تقارير الأندية والوكالات، وتقديم ورش عمل عملية للشركات والأفراد.',
    srv_1_t: 'لوحات Power BI وهندسة SQL وتدقيق البيانات',
    srv_1_d:
      'تحويل الجداول المتفرقة وقواعد البيانات إلى نماذج Star Schema نظيفة، خطوط Power Query مؤتمتة، مقاييس DAX، ولوحات تنفيذية تفاعلية.',
    srv_1_b1: 'مطابقة الأكواد بين الجداول واكتشاف الأخطاء آلياً',
    srv_1_b2: 'لوحات Power BI و Tableau تفاعلية لصناع القرار',
    srv_1_b3: 'تقسيم العملاء (RFM / K-Means) وتحليل الأفواج',
    srv_2_t: 'تقارير تحليل المباريات والخصوم والسكاوتنج',
    srv_2_d:
      'حزم تحليل تكتيكي مبنية على الأدلة للأندية والوكالات والإعلام الرياضي: نماذج xG/xT، خرائط PPDA، مئويات اللاعبين، وبوسترات AMOLED.',
    srv_2_b1: 'تقارير ما قبل المباراة (الخصم) وما بعدها بصيغة PDF',
    srv_2_b2: 'قوائم ترشيح لاعبين وملفات أدوار مقارنة بنظراء المركز',
    srv_2_b3: 'تسليم بالعربية والإنجليزية + بوسترات 4:5 جاهزة للنشر',
    srv_3_t: 'ورش عمل Excel المتقدم و Power Query و Power BI',
    srv_3_d:
      'تدريب عملي لفرق البحث والمؤسسات والمحللين — مبني على خبرة +6 سنوات في الإشراف على فرق البيانات وتصميم قواعد البيانات.',
    srv_3_b1: 'أساسيات واحتراف Power Query و Power Pivot و DAX',
    srv_3_b2: 'تصميم أنظمة التكويد ومنهجيات تنظيف البيانات',
    srv_3_b3: 'جلسات مخصصة للشركات أو تدريب فردي 1-on-1',
    srv_cta: 'اطلب هذه الخدمة ←',
    srv_cta_ws: 'احجز ورشة عمل ←',
    hero_subtitle:
      'محلل بيانات بخبرة +6 سنوات أعمل عبر مسارين متخصصين منفصلين: أنظمة ذكاء الأعمال وقواعد البيانات وتعلم الآلة (SQL / Python / Power BI)، ومعمل تحليل بيانات وأداء كرة القدم.',
    track_switch_lbl: 'اختر مجال العرض:',
    track_all: 'المسارين معاً',
    track_data: '📊 تحليل البيانات و BI',
    track_foot: '⚽ تحليل كرة القدم',
    hero_btn_data: 'استعرض مسار البيانات و BI',
    hero_btn_foot: 'ادخل معمل كرة القدم ⚽',
    float_impact: 'مساران: BI الأعمال + كرة القدم',
    stat_years: 'سنوات خبرة في البيانات',
    stat_aw: 'تحليل مبيعات AdventureWorks',
    stat_stars: 'نجمة على مشاريع GitHub',
    stat_certs: 'شهادات FA و PFSA و FP Academy',
    data_zone_title: 'ذكاء الأعمال و SQL وتعلم الآلة للشركات',
    data_zone_desc:
      'تحليل بيانات متكامل للمؤسسات والأرشيف: قواعد بيانات SQL، نمذجة Star Schema، نماذج Python للتقسيم والاحتفاظ بالعملاء، ولوحات Power BI تنفيذية تفاعلية لايف.',
    copy_data_url: '🔗 نسخ رابط مسار البيانات فقط',
    dp_1: 'استعلامات T-SQL المتقدمة (Window Functions & CTEs)، نماذج Star Schema، وتدقيق الربحية الزمنية.',
    dp_2: 'تقسيم العملاء بـ K-Means RFM، خرائط الاحتفاظ بالأفواج (Cohorts)، تحليل سلة المشتريات، وفحص الجودة بـ Python.',
    dp_3: 'لوحات Power BI (PBIP)، مقاييس DAX للذكاء الزمني، أتمتة Power Query، وورش عمل Excel متقدمة.',
    aw_title: 'AdventureWorks 2022 — تحليل مبيعات متكامل ($110M)',
    aw_desc:
      'مشروع كامل يربط SQL Server بـ Python (مع كتابة نتائج K-Means مباشرة في قاعدة البيانات عبر pyodbc) ولوحة Power BI من 6 صفحات للإجابة على 17 سؤال عمل: هوامش الربح، تقسيم RFM، الاحتفاظ بالأفواج (~345 يوم)، وحزم البيع المتقاطع (Lift > 90x).',
    arch_title: 'أنظمة قواعد بيانات التراث والأرشيف البحثي',
    arch_desc:
      'تصميم أنظمة التكويد، سكريبتات مطابقة وتدقيق الأكواد بين قواعد البيانات، إدارة الميتاداتا، وبناء تقارير Power BI و Excel مع الإشراف على فرق العمل وتقديم ورش تدريبية متقدمة.',
    pbi_title: 'لوحة Power BI التنفيذية التفاعلية (6 صفحات لايف)',
    pbi_load_btn: '▶ تشغيل اللوحة التفاعلية',
    pbi_launch: '▶ افتح تقرير Power BI التفاعلي (6 صفحات)',
    foot_zone_title: 'تحليل كرة القدم، نماذج xG/xT والاستكشاف التكتيكي',
    foot_zone_desc:
      'تحويل بيانات أحداث المباريات (Opta / WhoScored) إلى تقارير PDF مؤتمتة، بوسترات AMOLED، ملفات أدوار اللاعبين، ورؤى استكشافية — مدعومة بشهادات The FA و PFSA و FP Academy.',
    copy_foot_url: '🔗 نسخ رابط معمل الكرة فقط',
    fma_title: 'Football Match Analysis — منصة تحليل المباريات المؤتمتة',
    fma_desc:
      'أداة Python متكاملة تحوّل رابط مباراة WhoScored/Opta واحد إلى نماذج xG و xT و xGChain، خرائط اللمسات والتمريرات، ملفات اللاعبين، 8 بوسترات AMOLED و Light، تقرير PDF ومقال .docx وأرشيف SQLite للدوريات الكبرى.',
    scout_title: 'تحليل المباريات والخصوم واستكشاف اللاعبين',
    scout_desc:
      'تحويل مؤشرات الاستحواذ، شدة الضغط (PPDA)، Field Tilt، نسبة التمريرات التقدمية، و xT لكل 100 لمسة إلى تقارير مختصرة وعملية للمدربين وكشافي الأندية.',
    sim_eyebrow: '// تجربة تعلم آلي تفاعلية لكرة القدم',
    sim_title: 'محاكي نموذج الأهداف المتوقعة (xG) المباشر',
    sim_desc:
      'اضغط في أي مكان داخل الملعب أو عدّل ظروف التسديدة أو اضغط التشغيل التلقائي لمتابعة احتمالية الهدف وتأثير كل متغير لحظياً.',
    sim_click_hint: 'اضغط على الملعب لتحديد مكان التسديدة',
    sim_presets: 'أمثلة سريعة:',
    sim_prob_label: 'احتمالية تسجيل الهدف المتوقعة (xG)',
    sim_body: 'جزء الجسم',
    sim_assist: 'نوع التمريرة / الموقف',
    sim_pressure: 'الضغط الدفاعي (المدافعون أمام التسديدة)',
    sim_shap: 'تأثير كل متغير على توقع النموذج (Feature Impact)',
    proj_details: 'تفاصيل المشروع ←',
    career_eyebrow: '// المسيرة المهنية',
    career_title: 'الخبرات العملية والتعليم',
    role_1_t: 'محلل بيانات ثقافية وأخصائي أرشفة وميتاداتا',
    role_1_d:
      'إدارة قواعد بيانات التراث الثقافي، توحيد البيانات الوصفية، مطابقة الأكواد بين قواعد البيانات، وإعداد التقارير التحليلية.',
    role_2_t: 'محلل بيانات مستقل ومحلل أداء وبيانات كرة قدم',
    role_2_d:
      'تنفيذ مشاريع Power BI و SQL و Python للعملاء، بجانب تطوير نماذج xG/xT وتقارير المباريات المؤتمتة والسكاوتنج.',
    role_3_t: 'محلل بيانات أول ومسؤول أرشيف (وسابقاً محلل بيانات وباحث)',
    role_3_d:
      'قيادة أكثر من 7 مشاريع لقواعد البيانات البحثية والأرشيفية، تصميم أنظمة التكويد والمؤشرات التنبؤية بـ Excel و Power BI، الإشراف على الفريق، وتقديم ورش عمل متقدمة.',
    role_4_t: 'كاتب محتوى ومراجع تحليلي',
    role_4_d:
      'كتابة مقالات ومراجعات نقدية وتحليلية ساهمت في صقل مهارة السرد التحليلي الواضح بالعربية والإنجليزية.',
    edu_tag: 'التعليم',
    edu_deg: 'بكالوريوس إدارة الأعمال (عام)',
    share_tag: 'روابط ذكية مخصصة حسب الوظيفة',
    share_desc: 'بتقدم على وظيفة معينة؟ ابعت رابط مباشر يفتح المجال المناسب فقط:',
    langs_tag: 'تقارير ثنائية اللغة',
    langs_desc:
      'تقديم لوحات ذكاء الأعمال، التقارير التكتيكية، والوثائق التحليلية بطلاقة باللغتين العربية والإنجليزية.',
    contact_eyebrow: '// لنعمل معاً',
    contact_title: 'تبحث عن محلل بيانات أو BI أو محلل أداء كروي؟',
    contact_desc:
      'متاح لفرص Data Analyst و BI/ML و Football Data / Performance Analyst (عن بُعد أو حضوري)، بالإضافة إلى الاستشارات وورش Excel/BI.',
    form_name: 'الاسم',
    form_email: 'البريد الإلكتروني',
    form_msg: 'تفاصيل الفرصة أو المشروع',
    form_send: 'إرسال عبر البريد الإلكتروني',
    footer_built: 'أحوّل بيانات الأعمال وكرة القدم إلى قرارات.',
    modal_approach: 'البنية التقنية والأثر',
  },
};

/* =========================================================
   REAL GITHUB & ENTERPRISE CASE STUDIES
   ========================================================= */
const CASE_STUDIES = [
  {
    cat: { en: 'GITHUB REPO · SQL → PYTHON ML → POWER BI', ar: 'مشروع GitHub · SQL + Python + Power BI' },
    title: {
      en: 'AdventureWorks 2022 — End-to-End Sales Analytics ($110M)',
      ar: 'AdventureWorks 2022 — تحليل مبيعات متكامل ($110M)',
    },
    summary: {
      en: 'Single-source-of-truth investigation across a 72-table OLTP SQL Server database (121K sales lines) answering 17 concrete business questions on revenue drivers, margin leaks, customer churn, and cross-sell growth.',
      ar: 'دراسة تحليلية متكاملة على قاعدة بيانات SQL Server من 72 جدولاً (121 ألف صف مبيعات) للإجابة على 17 سؤال عمل حول الإيرادات وتسرب الهوامش وسلوك العملاء.',
    },
    metrics: ['$110M Revenue · 72 Tables', 'K-Means RFM (k=4) Write-Back', 'Basket Lift > 90x · 6-Page Live BI'],
    bullets: {
      en: [
        'T-SQL: Built Sales.vw_LineProfit using point-in-time ProductCostHistory, LAG(12) YoY growth, NTILE(10) Pareto deciles, and a 6-view pbi star schema.',
        'Python (pyodbc + scikit-learn): Log-transformed RFM + K-Means (k=4 elbow method: VIP / At Risk / Hibernating / New-Promising) written straight back into dbo.CustomerSegments.',
        'Cohort & Market Basket: Confirmed ~345-day median repurchase window and uncovered drivetrain bundles with >90x lift.',
        'Power BI (PBIP): 6 interactive pages, 17 DAX measures (SAMEPERIODLASTYEAR, TOTALYTD, dynamic titles) with live public embed.',
      ],
      ar: [
        'T-SQL: بناء عرض Sales.vw_LineProfit بالتكلفة التاريخية وقت البيع، وحساب النمو السنوي بـ LAG(12) وتحليل باريتو بـ NTILE(10) ونموذج Star Schema.',
        'Python (pyodbc + scikit-learn): تقسيم RFM بـ K-Means (k=4) وكتابة النتائج مباشرة داخل جدول dbo.CustomerSegments في SQL Server.',
        'تحليل الأفواج وسلة المشتريات: إثبات دورة إعادة الشراء (~345 يوماً) واكتشاف حزم بيع متقاطع بمعامل رفع > 90 ضعفاً.',
        'Power BI (PBIP): لوحة تفاعلية من 6 صفحات و 17 مقياس DAX منشورة لايف.',
      ],
    },
    tags: ['SQL Server', 'T-SQL', 'Python', 'K-Means', 'RFM', 'Power BI (PBIP)', 'DAX'],
    links: [
      { label: 'GitHub Repository ↗', url: 'https://github.com/mostafasaad91/adventure-works-sales-analytics', cls: 'repo-link' },
      { label: 'Live 6-Page Power BI ↗', url: PROFILE_CONFIG.powerBiUrl, cls: 'repo-link live-bi' },
    ],
  },
  {
    cat: { en: 'ENTERPRISE & ARCHIVAL DATA SYSTEMS', ar: 'أنظمة قواعد البيانات والأرشيف' },
    title: {
      en: 'Archival & Cultural Heritage Database Systems',
      ar: 'أنظمة قواعد بيانات التراث والأرشيف البحثي',
    },
    summary: {
      en: 'Led dataset design, metadata coding taxonomies, cross-database QA validation, team supervision, and advanced Excel workshops across 7+ archival and social-research projects at NADIM Foundation and Daftar Ahwal.',
      ar: 'قيادة تصميم قواعد البيانات وأنظمة التكويد وتدقيق الميتاداتا والإشراف على فرق العمل وتقديم ورش Excel متقدمة عبر أكثر من 7 مشاريع أرشيفية وبحثية في مؤسسة نديم ودفتر أحوال.',
    },
    metrics: ['7+ Research Datasets', 'Automated Python/Excel QA', 'Team Lead & Workshops'],
    bullets: {
      en: [
        'Architected unified ID coding schemes and cross-sheet validation scripts detecting duplicates, typos, and key mismatches.',
        'Built Power Query ETL & Power BI reporting indicators supporting project coordinators and institutional leadership.',
        'Supervised data teams throughout project lifecycles and taught advanced Excel dataset workshops.',
      ],
      ar: [
        'تصميم أنظمة تكويد موحدة وأدوات تحقق لاكتشاف التكرارات وأخطاء الربط بين الجداول.',
        'بناء خطوط Power Query ولوحات Power BI لتوليد مؤشرات وتوقعات دقيقة للإدارة.',
        'الإشراف الفني والإداري على فرق البيانات وتقديم ورش تدريبية متقدمة في Excel.',
      ],
    },
    tags: ['Metadata Archiving', 'Data QA', 'SQL', 'Python', 'Power Query', 'Power BI'],
    links: [],
  },
  {
    cat: { en: 'GITHUB FLAGSHIP (★ 7) · PYTHON + OPTA EVENT DATA', ar: 'مشروع GitHub الرئيسي (★ 7) · تحليل كرة القدم' },
    title: {
      en: 'Football Match Analysis — Automated Tactical Pipeline',
      ar: 'Football Match Analysis — منصة تحليل المباريات المؤتمتة',
    },
    summary: {
      en: 'One WhoScored/Opta URL in → a complete evidence-led post-match package out: xG/xT models, player profiles, 8 AMOLED & Light 4:5 posters, a dynamic PDF report, publishable .docx article, and SQLite match archive.',
      ar: 'رابط مباراة WhoScored/Opta واحد يُنتج حزمة تحليل كاملة: نماذج xG/xT، ملفات اللاعبين، 8 بوسترات AMOLED و Light، تقرير PDF، مقال .docx، وأرشيف SQLite.',
    },
    metrics: ['★ 7 GitHub Stars', '8 AMOLED + Light Posters', 'xG · xT · xGChain · SQLite'],
    bullets: {
      en: [
        'Automated event pipeline computing xG, xT per 100 touches, xGChain, xGBuildup, progressive-pass share, passing sonar, and touch-density heatmaps.',
        'Dual-theme renderer generating AMOLED pure black (#000000) and Light Ink & Petrol (#F5F5F5) editions with adaptive kit-color contrast lifting.',
        'Built-in season fixture CLI across Premier League, La Liga & Serie A plus package_manifest.json provenance tracking and SQLite history replay.',
      ],
      ar: [
        'محرك مؤتمت يحسب xG و xT لكل 100 لمسة و xGChain و xGBuildup ونسبة التمريرات التقدمية وخرائط كثافة اللمس.',
        'نظام تصدير مزدوج الثيم (AMOLED أسود #000000 وثيم فاتح #F5F5F5) مع ضبط تلقائي لتباين ألوان القمصان.',
        'أداة CLI لجداول الدوري الإنجليزي والإسباني والإيطالي مع توثيق package_manifest.json وأرشيف SQLite.',
      ],
    },
    tags: ['Python', 'Opta / WhoScored', 'xG / xT', 'AMOLED Viz', 'Automated PDF', 'SQLite'],
    links: [
      { label: 'GitHub Repository (★ 7) ↗', url: 'https://github.com/mostafasaad91/Football-Match-Analysis', cls: 'repo-link emerald-link' },
    ],
  },
  {
    cat: { en: 'PERFORMANCE & SCOUTING INTELLIGENCE', ar: 'تحليل الأداء واستكشاف اللاعبين' },
    title: {
      en: 'Match, Opposition & Player Recruitment Scouting',
      ar: 'تقارير تحليل المباريات والخصوم واستكشاف اللاعبين',
    },
    summary: {
      en: 'Translating advanced match metrics—Field Tilt, PPDA pressing intensity, nested possession funnels, loss consequences, and player role percentiles—into clear English & Arabic briefs for coaches and scouts.',
      ar: 'تحويل مؤشرات المباريات المتقدمة مثل Field Tilt و PPDA وتحليل فقدان الكرة ومئويات أدوار اللاعبين إلى تقارير عملية بالعربية والإنجليزية للمدربين والكشافين.',
    },
    metrics: ['PPDA & Field Tilt', 'Role Percentiles', 'FA · PFSA · FP Academy'],
    bullets: {
      en: [
        'Evaluates team territorial control, pressing traps, box-entry routes, and score-state performance shifts.',
        'Builds role-specific player profiles requiring statistically valid peer cohorts (min 8 same-role players for percentile ranks).',
        'Combines formal scouting & coaching training (PFSA, The FA, FP Academy, England Football) with quantitative modeling.',
      ],
      ar: [
        'تقييم السيطرة الميدانية ومصائد الضغط ومسارات دخول منطقة الجزاء وتأثير حالة النتيجة.',
        'بناء ملفات أدوار للاعبين وفق معايير إحصائية دقيقة لمقارنة كل لاعب بنظرائه في نفس المركز.',
        'دمج التأهيل التدريبي والاستكشافي المعتمد (PFSA / The FA / FP Academy) مع النمذجة الكمية.',
      ],
    },
    tags: ['PPDA', 'Field Tilt', 'Scouting', 'Opposition Analysis', 'Bilingual Reports'],
    links: [
      { label: 'Football Toolkit Repo ↗', url: 'https://github.com/mostafasaad91/Football-Match-Analysis', cls: 'repo-link emerald-link' },
    ],
  },
];

/* =========================================================
   HERO INTERACTIVE TELEMETRY MODES (BI/ML + xG + TACTICAL)
   ========================================================= */
const TELEMETRY_MODES = {
  bi: {
    tag: 'REPO: ADVENTUREWORKS · $110M OLTP',
    title: 'SQL Server → Python K-Means → Power BI',
    kpis: [
      { label: 'REVENUE', val: '$110M', delta: '72 TABLES', color: 'cyan' },
      { label: 'RFM K-MEANS', val: 'k = 4', delta: 'LIFT > 90x', color: 'violet' },
      { label: 'POWER BI', val: '6 Pages', delta: '17 DAX', color: 'emerald' },
    ],
    cmd: 'SELECT segment, COUNT(*) FROM dbo.CustomerSegments GROUP BY 1;',
    type: 'bars',
    values: [58, 72, 66, 84, 91, 79, 96, 89, 98],
    labels: ['VIP', 'Core', 'New', 'Risk', 'Q1', 'Q2', 'Q3', 'Q4', 'LTV'],
  },
  xg: {
    tag: 'REPO: FOOTBALL-MATCH-ANALYSIS (★ 7)',
    title: 'Opta Event Data → xG / xT Shot Map',
    kpis: [
      { label: 'TOTAL xG', val: '2.46', delta: '11 SHOTS', color: 'emerald' },
      { label: 'OUTPUTS', val: '8 Posters', delta: 'AMOLED/LIGHT', color: 'cyan' },
      { label: 'PPDA', val: '7.8', delta: 'HIGH PRESS', color: 'violet' },
    ],
    cmd: 'python football_match_analysis.py  # 1 WhoScored URL -> PDF + 8 Posters',
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
    title: 'Field Tilt, Pressing (PPDA) & xT Threat',
    kpis: [
      { label: 'FIELD TILT', val: '64.2%', delta: '+11.4% AVG', color: 'cyan' },
      { label: 'xT / 100', val: '1.84', delta: '92nd PCTL', color: 'violet' },
      { label: 'xG DIFF', val: '+1.68', delta: 'DOMINANT', color: 'emerald' },
    ],
    cmd: 'python -m football_analysis.pipeline.fixtures arsenal --last --url',
    type: 'tacticalBars',
    items: [
      { name: 'Field Tilt', val: 64, opp: 36, unit: '%' },
      { name: 'Possession', val: 60, opp: 40, unit: '%' },
      { name: 'Box Entries', val: 78, opp: 32, unit: '' },
      { name: 'Pressing (Inv PPDA)', val: 82, opp: 45, unit: '' },
      { name: 'xT Progression', val: 76, opp: 39, unit: '' },
    ],
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
      <rect x="24" y="14" width="392" height="190" rx="8" fill="rgba(16,185,129,0.08)" stroke="rgba(255,255,255,0.24)" stroke-width="1.4"/>
      <rect x="184" y="6" width="72" height="8" rx="1.5" fill="rgba(16,185,129,0.22)" stroke="#10B981" stroke-width="1.5"/>
      <rect x="108" y="14" width="224" height="96" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.2"/>
      <rect x="164" y="14" width="112" height="36" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.2"/>
      <circle cx="220" cy="76" r="2.2" fill="rgba(255,255,255,0.5)"/>
      <path d="M178 110 A 48 48 0 0 0 262 110" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.2"/>
      <line class="shot-ray" x1="196" y1="74" x2="216" y2="12" stroke="rgba(16,185,129,0.6)" stroke-width="1.5" stroke-dasharray="5 5"/>
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
            <circle class="chart-pt shot-pop" cx="${s.x}" cy="${s.y}" r="${r}" fill="#10B981" stroke="#ffffff" stroke-width="1.6" style="animation-delay:${delay}s" data-tip="${s.lbl}"/>
          `;
        }
        return `<circle class="chart-pt shot-pop" cx="${s.x}" cy="${s.y}" r="${r}" fill="rgba(0,229,255,0.32)" stroke="#00E5FF" stroke-width="1.5" style="animation-delay:${delay}s" data-tip="${s.lbl}"/>`;
      })
      .join('');
    svg.innerHTML = pitchMarkup + shotsMarkup;
  } else if (cfg.type === 'tacticalBars') {
    const startY = 26;
    const rowH = 34;
    svg.innerHTML =
      cfg.items
        .map((item, i) => {
          const y = startY + i * rowH;
          const barMax = 210;
          const w1 = (item.val / 100) * barMax;
          const w2 = (item.opp / 100) * barMax;
          const delay = (i * 0.09).toFixed(2);
          return `
            <text x="14" y="${y + 8}" fill="#9ca3af" font-size="10.5" font-family="JetBrains Mono">${item.name}</text>
            <rect x="155" y="${y - 4}" width="${barMax}" height="10" rx="5" fill="rgba(255,255,255,0.08)"/>
            <rect class="chart-pt bar-grow-x" x="155" y="${y - 4}" width="${w1}" height="10" rx="5" fill="url(#tacGrad)" style="animation-delay:${delay}s" data-tip="${item.name}: Team ${item.val}${item.unit} vs Opp ${item.opp}${item.unit}"/>
            <rect class="bar-grow-x" x="155" y="${y + 9}" width="${w2}" height="5" rx="2.5" fill="rgba(167,139,250,0.55)" style="animation-delay:${(i * 0.09 + 0.1).toFixed(2)}s"/>
            <text x="378" y="${y + 6}" fill="#10B981" font-size="10.5" font-family="JetBrains Mono">${item.val}${item.unit}</text>
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
      grid += `<line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3 4"/>`;
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
            <rect class="chart-pt bar-grow" x="${x}" y="${y}" width="${barW}" height="${h}" rx="5" fill="url(#barGrad)" opacity="0.92" style="animation-delay:${delay}s"
              data-tip="${cfg.labels[i]} · Index ${v}% · AdventureWorks SQL + Python + BI"/>
            <text x="${x + barW / 2}" y="${H - 8}" text-anchor="middle" fill="#6b7280" font-size="9.5" font-family="JetBrains Mono">${cfg.labels[i]}</text>
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
const simState = { sx: 210, sy: 92 };

function computeXG() {
  const goalX = 210;
  const goalY = 16;
  const pxPerMeter = 6.9;

  const dxM = (simState.sx - goalX) / pxPerMeter;
  const dyM = Math.max(0.8, (simState.sy - goalY) / pxPerMeter);
  const distM = Math.hypot(dxM, dyM);

  const a1 = Math.atan2(dyM, dxM + 3.66);
  const a2 = Math.atan2(dyM, dxM - 3.66);
  const angleRad = Math.abs(a1 - a2);
  const angleDeg = (angleRad * 180) / Math.PI;

  const body = document.getElementById('simBody').value;
  const assist = document.getElementById('simAssist').value;
  const pressure = Number(document.getElementById('simPressure').value);

  const intercept = -0.35;
  const distTerm = -0.145 * (distM - 11.0);
  const angleTerm = 1.65 * (angleRad - 0.52);
  const bodyMap = { foot: 0.15, weak: -0.28, header: -0.68 };
  const assistMap = { through: 0.36, open: 0.0, cross: -0.32, counter: 0.52 };
  const bodyTerm = bodyMap[body] || 0;
  const assistTerm = assistMap[assist] || 0;
  const pressTerm = -0.34 * (pressure - 1);

  const logit = intercept + distTerm + angleTerm + bodyTerm + assistTerm + pressTerm;
  const clamped = Math.min(0.96, Math.max(0.01, 1 / (1 + Math.exp(-logit))));

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
  document.getElementById('shotCone').setAttribute('points', `${simState.sx},${simState.sy} 174,16 246,16`);

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
   NEURAL NETWORK CANVAS WITH TRAVELING DATA PULSES
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
      'SQL Server → Python K-Means → Power BI ($110M)',
      'Opta Event Data → xG / xT & 8 AMOLED Match Posters',
      'Cohort Retention, RFM Segmentation & DAX Modeling',
      'Tactical Scouting: PPDA, Field Tilt & Role Profiles',
    ],
    ar: [
      'SQL Server ← Python K-Means ← لوحات Power BI',
      'بيانات Opta ← نماذج xG / xT وبوسترات AMOLED',
      'تحليل الأفواج وتقسيم العملاء RFM ومقاييس DAX',
      'التحليل التكتيكي والسكاوتنج: PPDA و Field Tilt',
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
      setTimeout(tick, 42);
    } else {
      charIdx--;
      el.textContent = word.slice(0, Math.max(0, charIdx));
      if (charIdx <= 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % list.length;
        setTimeout(tick, 320);
        return;
      }
      setTimeout(tick, 22);
    }
  }
  tick();
}

/* =========================================================
   3D TILT + CURSOR SPOTLIGHT
   ========================================================= */
function initTiltCards() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = (y / rect.height - 0.5) * -7;
      const ry = (x / rect.width - 0.5) * 7;
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
   DUAL-TRACK MODE + POWER BI EMBED + APP INIT
   ========================================================= */
let currentLang = 'en';
let selectHeroModeGlobal = null;

function syncSmartCvBtn(track) {
  const btn = document.getElementById('smartCvBtn');
  const lbl = document.getElementById('smartCvLabel');
  if (!btn || !lbl) return;
  if (track === 'football') {
    btn.href = 'cv/Mostafa_Saad_Football_Analyst_CV.pdf';
    lbl.textContent = TRANSLATIONS[currentLang].cv_foot_short;
  } else {
    btn.href = 'cv/Mostafa_Saad_Data_Analyst_CV.pdf';
    lbl.textContent = TRANSLATIONS[currentLang].cv_data_short;
  }
}

function applyTrackMode(track, scrollToTrack = false) {
  const valid = ['all', 'data', 'football'].includes(track) ? track : 'all';
  document.documentElement.setAttribute('data-track', valid);

  document.querySelectorAll('.track-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.trackBtn === valid);
  });

  // Ensure reveal zones become visible immediately when switched
  document.querySelectorAll('.track-zone').forEach((z) => z.classList.add('visible'));
  syncSmartCvBtn(valid);

  // Sync hero telemetry preview with selected track
  if (selectHeroModeGlobal) {
    if (valid === 'football') selectHeroModeGlobal('xg');
    else if (valid === 'data') selectHeroModeGlobal('bi');
  }

  // Update URL query cleanly without reloading
  const url = new URL(window.location.href);
  if (valid === 'all') url.searchParams.delete('track');
  else url.searchParams.set('track', valid);
  window.history.replaceState({}, '', url);

  if (scrollToTrack && valid !== 'all') {
    const target = document.getElementById(valid === 'data' ? 'data-track' : 'football-track');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

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
  syncSmartCvBtn(document.documentElement.getAttribute('data-track') || 'all');
  computeXG();
  if (typeof updateRFMGlobal === 'function') updateRFMGlobal();
  if (typeof renderIntentGlobal === 'function') renderIntentGlobal();
  if (typeof renderSkillProofGlobal === 'function') renderSkillProofGlobal();
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
    { threshold: 0.08 }
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
  document.getElementById('mLinks').innerHTML = (item.links || [])
    .map((l) => `<a href="${l.url}" target="_blank" rel="noopener" class="${l.cls} mono">${l.label}</a>`)
    .join('');

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeCaseModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

const ARTICLES = [
  {
    tag: { en: 'DATA & BI BREAKDOWN · ADVENTUREWORKS', ar: 'تحليل بيانات و BI · AdventureWorks' },
    title: {
      en: 'Where Does $110M Leak? Point-in-Time Margins, K-Means RFM & 90x Basket Lift',
      ar: 'أين تتسرب أرباح $110M؟ الهوامش التاريخية وتقسيم K-Means وحزم 90x',
    },
    body: {
      en: `
        <p>When analyzing a multi-year sales database like AdventureWorks 2022 ($110M across 72 OLTP tables), the most dangerous mistake is joining sales lines to <strong>current</strong> product standard cost. Doing so retroactively rewrites historical profit margins.</p>
        <div class="article-callout"><strong>Key Architecture Principle:</strong> Build a reusable SQL view (<code>Sales.vw_LineProfit</code>) joining each order date to <code>ProductCostHistory</code> at the exact time of sale — then feed SQL, Python, and Power BI from one single source of truth.</div>
        <h4>1. Closing the Loop Between SQL &amp; Python ML</h4>
        <p>Instead of exporting CSVs and letting notebooks drift out of sync, Python reads directly via <code>pyodbc</code>, log-transforms heavily right-skewed Frequency/Monetary distributions, runs K-Means clustering (k=4 chosen via elbow method), and writes business-labeled segments (VIP, At Risk, Hibernating, New-Promising) straight back into <code>dbo.CustomerSegments</code>.</p>
        <h4>2. Actionable Growth Findings</h4>
        <p>Cohort retention heatmaps independently confirmed a ~345-day median repurchase window found in T-SQL, while Market Basket Affinity exposed drivetrain component bundles with <strong>lift &gt; 90x</strong> — immediate, zero-guesswork cross-sell packages surfaced inside the 6-page live Power BI dashboard.</p>
      `,
      ar: `
        <p>عند تحليل قاعدة بيانات مبيعات تمتد لعدة سنوات مثل AdventureWorks 2022 (بإيرادات $110M عبر 72 جدولاً)، أخطر خطأ تحليلي هو ربط الفواتير القديمة بالتكلفة القياسية <strong>الحالية</strong> للمنتج — لأن ذلك يشوّه هوامش الربح التاريخية بالكامل.</p>
        <div class="article-callout"><strong>المبدأ الهندسي الأساسي:</strong> بناء View موحّد في SQL (<code>Sales.vw_LineProfit</code>) يربط تاريخ كل فاتورة بالتكلفة التاريخية وقت البيع من جدول <code>ProductCostHistory</code>، لتغذية SQL و Python و Power BI من مصدر حقيقة واحد.</div>
        <h4>1. إغلاق الحلقة بين SQL وتعلم الآلة في Python</h4>
        <p>بدلاً من تصدير ملفات CSV منفصلة، يتصل Python مباشرة بـ SQL Server عبر <code>pyodbc</code>، يعالج التواء التوزيع بالتحويل اللوغاريتمي، يطبّق خوارزمية K-Means (k=4)، ثم يعيد كتابة شرائح العملاء (VIP / معرض للمغادرة / خامل / واعد) داخل جدول <code>dbo.CustomerSegments</code>.</p>
        <h4>2. نتائج عملية للنمو</h4>
        <p>أثبتت خرائط الاحتفاظ بالأفواج (Cohorts) دورة إعادة شراء متوسطها ~345 يوماً، بينما كشف تحليل سلة المشتريات حزم مكونات دراجات بمعامل رفع يتجاوز <strong>90 ضعفاً (Lift &gt; 90x)</strong>، معروضة جميعها في لوحة Power BI التفاعلية من 6 صفحات.</p>
      `,
    },
  },
  {
    tag: { en: 'FOOTBALL ANALYTICS · TACTICAL METHODOLOGY', ar: 'معمل كرة القدم · المنهجية التكتيكية' },
    title: {
      en: 'Beyond Shot Counts: Reading Match Control via xG, xT/100, PPDA & Field Tilt',
      ar: 'ما وراء عدد التسديدات: قراءة السيطرة عبر xG و xT و PPDA و Field Tilt',
    },
    body: {
      en: `
        <p>Raw shot totals and headline possession percentages routinely mislead post-match reviews. A team can hold 62% possession in sterile zones while conceding high-value transitions, or register 16 low-angle shots worth less than 0.80 combined xG.</p>
        <div class="article-callout"><strong>Four-Lens Match Control Framework:</strong> Combine <em>Field Tilt</em> (final-third pass share), <em>PPDA</em> (pressing intensity), <em>xT per 100 touches</em> (ball progression threat), and <em>calibrated xG</em> (finishing chance quality).</div>
        <h4>Why Provenance &amp; Role Context Matter</h4>
        <p>In my open-source <code>Football-Match-Analysis</code> toolkit, player percentile dots are strictly gated on having at least 8 eligible same-role peers—preventing noisy comparisons between a deep-lying #6 and a touchline winger. Every automated run also writes a <code>package_manifest.json</code> recording metric versions and model limitations.</p>
        <h4>Dual-Theme Communication for Coaches &amp; Social Media</h4>
        <p>Analysis only creates value when coaches and fans can read it instantly: that's why the pipeline exports both an <strong>AMOLED #000000</strong> edition and a print-ready light copy with adaptive kit-color contrast lifting so team identities never vanish against the canvas.</p>
      `,
      ar: `
        <p>الأرقام التقليدية مثل إجمالي التسديدات أو نسبة الاستحواذ العامة غالباً ما تكون مضللة؛ فقد يمتلك فريق 62% استحواذاً سلبياً بينما يتلقى تحولات خطيرة، أو يسدد 16 كرة من زوايا صعبة بقيمة إجمالية أقل من 0.80 xG.</p>
        <div class="article-callout"><strong>إطار قراءة السيطرة من 4 عدسات:</strong> الدمج بين <em>Field Tilt</em> (حصة التمريرات في الثلث الأخير)، و <em>PPDA</em> (شراسة الضغط)، و <em>xT لكل 100 لمسة</em> (التهديد التقدمي)، و <em>xG المعايَر</em> (جودة الفرص).</div>
        <h4>لماذا يهم سياق الدور والشفافية الإحصائية؟</h4>
        <p>في أداة <code>Football-Match-Analysis</code> مفتوحة المصدر، لا تُعرض مئويات اللاعب إلا عند توفر 8 لاعبين على الأقل في نفس الدور التكتيكي لتجنب المقارنات المضللة، كما يُسجَّل كل تشغيل في ملف <code>package_manifest.json</code> لتوثيق إصدار المقاييس وحدود النموذج.</p>
        <h4>تصميم مزدوج لخدمة المدربين والنشر السريع</h4>
        <p>التحليل لا يصنع فرقاً إلا إذا كان واضحاً فور صافرة النهاية؛ لذلك يصدّر النظام نسخة <strong>AMOLED سوداء (#000000)</strong> ونسخة فاتحة للطباعة مع ضبط ذكي لتباين ألوان قمصان الفرق تلقائياً.</p>
      `,
    },
  },
  {
    tag: { en: 'DATA QUALITY & GOVERNANCE', ar: 'جودة البيانات وهيكلة الأرشيف' },
    title: {
      en: 'Bulletproof Coding Systems: Auditing Multi-Source Archival Datasets',
      ar: 'تصميم أنظمة تكويد محصّنة: دروس من تدقيق +7 قواعد بيانات أرشيفية',
    },
    body: {
      en: `
        <p>Across 6+ years managing institutional, cultural heritage, and social-research datasets at NADIM Foundation and Daftar Ahwal, I learned that 80% of downstream dashboard errors originate in silent ID inconsistencies—not formula bugs.</p>
        <div class="article-callout"><strong>Audit Rule #1:</strong> Separate your <em>Primary Base Entity ID</em> from secondary attribute suffixes (such as Face A/B or Left/Right components) before reconciling cross-table joins.</div>
        <h4>Catching Silent Data Traps Automatically</h4>
        <p>Manual spreadsheet review misses transposed digits (e.g., Monument 385 vs 358), code drift (<code>MN</code> vs <code>MB</code>), and duplicate keys disguised by trailing whitespace. Automated Python/SQL audit checks catch 100% of schema drift in seconds and generate clean exception Excel logs for domain specialists.</p>
      `,
      ar: `
        <p>خلال أكثر من 6 سنوات في إدارة قواعد بيانات التراث الثقافي والأبحاث الاجتماعية في مؤسسة نديم ومعهد دفتر أحوال، تأكدت أن 80% من أخطاء اللوحات والتقارير سببها تعارضات صامتة في أكواد الربط (IDs) وليس أخطاء في المعادلات.</p>
        <div class="article-callout"><strong>القاعدة الذهبية للتدقيق:</strong> افصل دائماً <em>الرقم الأساسي للكيان (Base ID)</em> عن اللواحق الثانوية (مثل الوجه A/B أو الضلفة يمين/شمال) قبل مطابقة الجداول.</div>
        <h4>اكتشاف الأخطاء الصامتة آلياً</h4>
        <p>المراجعة اليدوية تفوّت الأرقام المقلوبة (مثل 385 بدلاً من 358)، أو اختلاف أكواد التصنيف (<code>MN</code> مقابل <code>MB</code>)، أو التكرارات الخفية. استخدام سكريبتات فحص تلقائي بـ Python و SQL يكشف كل التعارضات في ثوانٍ ويصدر ملف إكسيل واضح للمراجعة الفورية.</p>
      `,
    },
  },
];

function openLightbox(src, caption) {
  const modal = document.getElementById('lightboxModal');
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxCap').textContent = caption || '';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function openArticleModal(idx) {
  const art = ARTICLES[idx];
  if (!art) return;
  const modal = document.getElementById('articleModal');
  document.getElementById('aTag').textContent = art.tag[currentLang];
  document.getElementById('aTitle').textContent = art.title[currentLang];
  document.getElementById('aBody').innerHTML = art.body[currentLang];
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeArticleModal() {
  const modal = document.getElementById('articleModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function mountPowerBI() {
  const stage = document.getElementById('pbiStage');
  if (!stage || stage.querySelector('iframe')) return;
  stage.innerHTML = `<iframe class="pbi-iframe" title="AdventureWorks 2022 Live Power BI Dashboard" src="${PROFILE_CONFIG.powerBiUrl}" frameborder="0" allowFullScreen="true"></iframe>`;
  const btn = document.getElementById('loadPbiBtn');
  if (btn) btn.textContent = currentLang === 'ar' ? '✓ اللوحة قيد التشغيل' : '✓ Dashboard Live';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 24);
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  });

  // Theme Toggle
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  themeBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    themeIcon.textContent = next === 'dark' ? '☀' : '☾';
  });

  // Mobile Menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  // Language Switcher
  document.getElementById('langToggle').addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'ar' : 'en');
  });

  // Hero Telemetry Tabs + Auto-Cycle
  const heroModes = ['bi', 'xg', 'tactical'];
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
  selectHeroModeGlobal = selectHeroMode;

  selectHeroMode('bi');
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

  // Dual-Track Switcher + URL Param (?track=data or ?track=football)
  document.querySelectorAll('.track-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyTrackMode(btn.dataset.trackBtn, false);
    });
  });

  // Navbar Track Links automatically ensure that track is visible
  document.querySelector('.nav-data-link')?.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-track') === 'football') applyTrackMode('all', false);
  });
  document.querySelector('.nav-foot-link')?.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-track') === 'data') applyTrackMode('all', false);
  });

  // Copy Track-Specific Shareable Links
  document.querySelectorAll('.copy-track-link').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const track = btn.dataset.copyTrack;
      const shareUrl = `${PROFILE_CONFIG.liveBaseUrl}?track=${track}`;
      const orig = btn.textContent;
      try {
        await navigator.clipboard.writeText(shareUrl);
        btn.textContent = currentLang === 'ar' ? `✓ تم نسخ رابط ${track}` : `✓ Copied ?track=${track}`;
      } catch {
        btn.textContent = shareUrl;
      }
      setTimeout(() => (btn.textContent = orig), 2400);
    });
  });

  // Read initial ?track= from URL
  const initialTrack = new URLSearchParams(window.location.search).get('track');
  if (initialTrack === 'data' || initialTrack === 'football') {
    applyTrackMode(initialTrack, false);
  }

  // Live Power BI Mount Buttons
  document.getElementById('loadPbiBtn')?.addEventListener('click', mountPowerBI);
  document.getElementById('loadPbiOverlayBtn')?.addEventListener('click', mountPowerBI);

  // Modals (Case Study + Lightbox + Article Reader)
  document.querySelectorAll('.open-modal').forEach((btn) => {
    btn.addEventListener('click', () => openCaseModal(Number(btn.dataset.project)));
  });
  document.getElementById('modalClose').addEventListener('click', closeCaseModal);
  document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') closeCaseModal();
  });

  document.querySelectorAll('.lightbox-trigger').forEach((btn) => {
    btn.addEventListener('click', () => openLightbox(btn.dataset.src, btn.dataset.cap));
  });
  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lightboxModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightboxModal') closeLightbox();
  });

  document.querySelectorAll('.open-article').forEach((btn) => {
    btn.addEventListener('click', () => openArticleModal(Number(btn.dataset.article)));
  });
  document.getElementById('articleClose')?.addEventListener('click', closeArticleModal);
  document.getElementById('articleModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'articleModal') closeArticleModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCaseModal();
      closeLightbox();
      closeArticleModal();
    }
  });

  // Copy Email & Copy Phone
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

  document.getElementById('copyPhoneBtn')?.addEventListener('click', async () => {
    const status = document.getElementById('copyPhoneStatus');
    try {
      await navigator.clipboard.writeText('01010098727');
      status.textContent = currentLang === 'ar' ? 'تم النسخ ✓' : 'COPIED ✓';
    } catch {
      status.textContent = '01010098727';
    }
    setTimeout(() => (status.textContent = 'COPY'), 2200);
  });

  // Contact Form
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
        ? '✓ تم تجهيز رسالة البريد الإلكتروني إلى mostafasaad0091@gmail.com'
        : '✓ Email draft opened for mostafasaad0091@gmail.com';
    e.target.reset();
  });

  initXGSimulator();
  initRFMSimulator();
  initSplitCompare();
  initCommandPalette();
  initGitHubLiveSync();
  initSmartIntent();
  initTechStackMatrix();
  initQuickDock();
  initMagneticButtons();
  initNeuralCanvas();
  initTypingRotator();
  initTiltCards();
  initCountersAndReveal();
});

/* =========================================================
   1. LIVE K-MEANS RFM CUSTOMER SEGMENTATION SIMULATOR
   ========================================================= */
let updateRFMGlobal = null;

function initRFMSimulator() {
  const svg = document.getElementById('rfmChart');
  if (!svg) return;

  const CLUSTERS = [
    {
      id: 'VIP',
      en: 'VIP CHAMPION',
      ar: 'عميل VIP متميز',
      color: '#10B981',
      cx: 335,
      cy: 62,
      action: {
        en: 'Prioritize VIP loyalty perks & cross-sell high-lift drivetrain bundles (>90x basket lift).',
        ar: 'تقديم مزايا ولاء حصرية وعروض حزم البيع المتقاطع ذات معامل الرفع المرتفع (>90x).',
      },
    },
    {
      id: 'New-Promising',
      en: 'NEW PROMISING',
      ar: 'عميل جديد واعد',
      color: '#00E5FF',
      cx: 132,
      cy: 78,
      action: {
        en: 'Trigger 60-day onboarding sequence & helmet/bottle checkout add-ons to accelerate 2nd order.',
        ar: 'تفعيل حملة ترحيب ذكية وعروض إكسسوارات مكمّلة لتسريع الطلب الثاني قبل مرور 60 يوماً.',
      },
    },
    {
      id: 'At Risk',
      en: 'AT RISK',
      ar: 'عميل معرّض للمغادرة',
      color: '#F59E0B',
      cx: 315,
      cy: 192,
      action: {
        en: 'High historical spend but approaching the 345-day churn cliff — deploy targeted win-back offer.',
        ar: 'إنفاق تاريخي مرتفع مع اقتراب حاجز الـ 345 يوماً — إطلاق عرض استعادة مخصص فوراً.',
      },
    },
    {
      id: 'Hibernating',
      en: 'HIBERNATING',
      ar: 'عميل خامل',
      color: '#A78BFA',
      cx: 120,
      cy: 202,
      action: {
        en: 'Low margin ROI for heavy discounts — include only in automated seasonal reactivation campaigns.',
        ar: 'تجنب الخصومات المكلفة — الاكتفاء بإدراجه في حملات إعادة التنشيط الموسمية المؤتمتة.',
      },
    },
  ];

  // Deterministic background cluster dots
  const bgPoints = [];
  const seeds = [
    [-22, -14], [18, -18], [-10, 20], [26, 12], [-30, 8], [8, -26], [34, -6], [-16, -24], [14, 24], [-26, 18],
  ];
  CLUSTERS.forEach((c) => {
    seeds.forEach(([dx, dy]) => {
      bgPoints.push({ x: c.cx + dx, y: c.cy + dy, color: c.color });
    });
  });

  function updateRFM() {
    const r = Number(document.getElementById('rfmR').value);
    const f = Number(document.getElementById('rfmF').value);
    const m = Number(document.getElementById('rfmM').value);

    // Map (F, M) -> X axis [48..390], Recency -> Y axis [34..234] (low recency = top = better!)
    const fmNorm = 0.45 * (Math.log1p(f) / Math.log1p(20)) + 0.55 * (Math.log1p(m) / Math.log1p(15000));
    const rNorm = (r - 2) / 363;
    const ux = 48 + fmNorm * 336;
    const uy = 34 + rNorm * 200;

    // Nearest centroid (K-Means k=4)
    let best = CLUSTERS[0];
    let minD = Infinity;
    CLUSTERS.forEach((c) => {
      const d = Math.hypot(ux - c.cx, uy - c.cy);
      if (d < minD) {
        minD = d;
        best = c;
      }
    });

    const score = Math.round(Math.min(99, Math.max(12, fmNorm * 62 + (1 - rNorm) * 38)));

    document.getElementById('rfmCoords').textContent = `R: ${r}d · F: ${f} · $${m.toLocaleString()}`;
    document.getElementById('rfmRVal').textContent = currentLang === 'ar' ? `${r} يوم` : `${r} days`;
    document.getElementById('rfmFVal').textContent = currentLang === 'ar' ? `${f} طلب` : `${f} orders`;
    document.getElementById('rfmMVal').textContent = `$${m.toLocaleString()}`;

    const segEl = document.getElementById('rfmSegTitle');
    segEl.textContent = best[currentLang];
    segEl.style.color = best.color;

    const badge = document.getElementById('rfmScoreBadge');
    badge.textContent = `RFM ${score}/100`;
    badge.style.color = best.color;
    badge.style.borderColor = best.color;

    document.getElementById('rfmActionText').textContent = best.action[currentLang];
    document.getElementById('rfmSqlPreview').textContent =
      `MERGE dbo.CustomerSegments SET Segment='${best.id}', RFM_Score=${score} WHERE Recency=${r} AND Freq=${f};`;

    svg.innerHTML = `
      <rect x="38" y="18" width="366" height="226" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)"/>
      <line x1="221" y1="18" x2="221" y2="244" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4"/>
      <line x1="38" y1="131" x2="404" y2="131" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4"/>
      ${CLUSTERS.map(
        (c) => `
        <circle cx="${c.cx}" cy="${c.cy}" r="50" fill="${c.color}" opacity="${c.id === best.id ? 0.16 : 0.05}"/>
        <text x="${c.cx}" y="${c.cy - 34}" text-anchor="middle" fill="${c.color}" font-size="9.2" font-family="JetBrains Mono" font-weight="700" opacity="${c.id === best.id ? 1 : 0.55}">${c.id.toUpperCase()}</text>
      `
      ).join('')}
      ${bgPoints.map((pt) => `<circle cx="${pt.x}" cy="${pt.y}" r="3.1" fill="${pt.color}" opacity="0.45"/>`).join('')}
      <line class="shot-ray" x1="${ux.toFixed(1)}" y1="${uy.toFixed(1)}" x2="${best.cx}" y2="${best.cy}" stroke="${best.color}" stroke-width="1.6" stroke-dasharray="4 4"/>
      <circle class="shot-sonar" cx="${ux.toFixed(1)}" cy="${uy.toFixed(1)}" r="12" fill="none" stroke="${best.color}" stroke-width="1.8"/>
      <circle cx="${ux.toFixed(1)}" cy="${uy.toFixed(1)}" r="6.8" fill="${best.color}" stroke="#ffffff" stroke-width="2.2"/>
      <text x="221" y="261" text-anchor="middle" fill="#6b7280" font-size="9" font-family="JetBrains Mono">Log(Frequency + Monetary Spend) →</text>
      <text x="14" y="135" text-anchor="middle" fill="#6b7280" font-size="9" font-family="JetBrains Mono" transform="rotate(-90 14 135)">← Recent | Churn Risk →</text>
    `;
  }

  updateRFMGlobal = updateRFM;

  ['rfmR', 'rfmF', 'rfmM'].forEach((id) => {
    document.getElementById(id).addEventListener('input', updateRFM);
  });

  const presets = {
    vip: { r: 18, f: 14, m: 11200 },
    promising: { r: 24, f: 2, m: 950 },
    risk: { r: 285, f: 11, m: 8900 },
    hibernating: { r: 330, f: 1, m: 420 },
  };
  document.querySelectorAll('.rfm-preset').forEach((btn) => {
    btn.addEventListener('click', () => {
      const p = presets[btn.dataset.rfm];
      if (!p) return;
      document.getElementById('rfmR').value = p.r;
      document.getElementById('rfmF').value = p.f;
      document.getElementById('rfmM').value = p.m;
      updateRFM();
    });
  });

  updateRFM();
}

/* =========================================================
   2. AMOLED vs PRINT LIGHT SPLIT-SCREEN DRAG SLIDER
   ========================================================= */
function initSplitCompare() {
  const stage = document.getElementById('splitStage');
  const overlay = document.getElementById('splitOverlay');
  const handle = document.getElementById('splitHandle');
  if (!stage || !overlay || !handle) return;

  let pct = 50;
  function setSplit(val) {
    pct = Math.min(96, Math.max(4, val));
    overlay.style.clipPath = `inset(0 ${(100 - pct).toFixed(1)}% 0 0)`;
    handle.style.left = `${pct.toFixed(1)}%`;
    handle.setAttribute('aria-valuenow', String(Math.round(pct)));
  }

  let dragging = false;
  function moveFromEvent(e) {
    const rect = stage.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSplit(x);
  }

  stage.addEventListener('pointerdown', (e) => {
    dragging = true;
    stage.setPointerCapture?.(e.pointerId);
    moveFromEvent(e);
  });
  stage.addEventListener('pointermove', (e) => {
    if (dragging) moveFromEvent(e);
  });
  stage.addEventListener('pointerup', () => (dragging = false));

  handle.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') setSplit(pct - 5);
    if (e.key === 'ArrowRight') setSplit(pct + 5);
  });

  document.querySelectorAll('[data-split-pos]').forEach((btn) => {
    btn.addEventListener('click', () => setSplit(Number(btn.dataset.splitPos)));
  });

  setSplit(50);
}

/* =========================================================
   3. COMMAND PALETTE (Ctrl+K / ⌘K)
   ========================================================= */
function initCommandPalette() {
  const modal = document.getElementById('cmdModal');
  const input = document.getElementById('cmdInput');
  const listEl = document.getElementById('cmdList');
  const trigger = document.getElementById('cmdTrigger');
  if (!modal || !input || !listEl) return;

  const commands = [
    { title: 'Switch to Business Data & BI Track', hint: '?track=data', run: () => applyTrackMode('data', true) },
    { title: 'Switch to Football Analytics Lab', hint: '?track=football', run: () => applyTrackMode('football', true) },
    { title: 'Show All Tracks (Full Portfolio)', hint: 'ALL', run: () => applyTrackMode('all', false) },
    { title: 'Download Data Analyst CV (PDF)', hint: 'PDF', run: () => window.open('cv/Mostafa_Saad_Data_Analyst_CV.pdf', '_blank') },
    { title: 'Download Football Analyst CV (PDF)', hint: 'PDF', run: () => window.open('cv/Mostafa_Saad_Football_Analyst_CV.pdf', '_blank') },
    { title: 'Jump to Live K-Means RFM Simulator', hint: 'ML', run: () => { applyTrackMode('all'); document.getElementById('rfm-simulator')?.scrollIntoView({ behavior: 'smooth' }); } },
    { title: 'Jump to Live xG Pitch Simulator', hint: 'xG', run: () => { applyTrackMode('all'); document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' }); } },
    { title: 'Launch Live 6-Page Power BI Report', hint: 'BI', run: () => { applyTrackMode('all'); mountPowerBI(); document.getElementById('pbiStage')?.scrollIntoView({ behavior: 'smooth' }); } },
    { title: 'Compare AMOLED vs Print Light Slider', hint: 'UI', run: () => { applyTrackMode('all'); document.getElementById('splitStage')?.scrollIntoView({ behavior: 'smooth' }); } },
    { title: 'Toggle Language (Arabic / English)', hint: 'AR/EN', run: () => applyLanguage(currentLang === 'en' ? 'ar' : 'en') },
    { title: 'Toggle Theme (AMOLED Dark / Light)', hint: 'THEME', run: () => document.getElementById('themeToggle')?.click() },
    { title: 'Copy Email (mostafasaad0091@gmail.com)', hint: 'COPY', run: () => document.getElementById('copyEmailBtn')?.click() },
    { title: 'Chat on WhatsApp (+20 101 009 8727)', hint: 'WHATSAPP', run: () => window.open(PROFILE_CONFIG.whatsapp, '_blank') },
    { title: 'Copy Phone Number (01010098727)', hint: 'PHONE', run: () => document.getElementById('copyPhoneBtn')?.click() },
    { title: 'Open GitHub Profile (mostafasaad91)', hint: 'GITHUB', run: () => window.open(PROFILE_CONFIG.github, '_blank') },
    { title: 'Read Articles on Substack', hint: 'SUBSTACK', run: () => window.open(PROFILE_CONFIG.substack, '_blank') },
    { title: 'Open X / Twitter (@TacTical_41)', hint: 'X / TACTICAL', run: () => window.open(PROFILE_CONFIG.x, '_blank') },
  ];

  let filtered = commands;
  let activeIdx = 0;

  function render() {
    const q = input.value.trim().toLowerCase();
    filtered = commands.filter((c) => c.title.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q));
    activeIdx = Math.min(activeIdx, Math.max(0, filtered.length - 1));
    listEl.innerHTML = filtered
      .map(
        (c, i) => `
        <li class="cmd-item ${i === activeIdx ? 'selected' : ''}" data-cmd-idx="${i}" role="option">
          <span>${c.title}</span>
          <span class="cmd-hint">${c.hint}</span>
        </li>
      `
      )
      .join('');
    listEl.querySelectorAll('.cmd-item').forEach((li) => {
      li.addEventListener('click', () => runItem(Number(li.dataset.cmdIdx)));
    });
  }

  function openCmd() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    input.value = '';
    activeIdx = 0;
    render();
    setTimeout(() => input.focus(), 40);
  }

  function closeCmd() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  function runItem(idx) {
    const item = filtered[idx];
    closeCmd();
    if (item) item.run();
  }

  trigger?.addEventListener('click', openCmd);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCmd();
  });
  input.addEventListener('input', () => {
    activeIdx = 0;
    render();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = (activeIdx + 1) % Math.max(1, filtered.length);
      render();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = (activeIdx - 1 + Math.max(1, filtered.length)) % Math.max(1, filtered.length);
      render();
    } else if (e.key === 'Enter' && filtered.length) {
      e.preventDefault();
      runItem(activeIdx);
    }
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('open')) closeCmd();
      else openCmd();
    } else if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeCmd();
    }
  });
}

/* =========================================================
   4. LIVE GITHUB API SYNC (STARS & LAST UPDATED)
   ========================================================= */
async function initGitHubLiveSync() {
  try {
    const res = await fetch('https://api.github.com/users/mostafasaad91/repos?per_page=30');
    if (!res.ok) return;
    const repos = await res.json();
    if (!Array.isArray(repos)) return;

    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
    const liveStarsEl = document.getElementById('ghLiveStars');
    if (liveStarsEl && totalStars > 0) liveStarsEl.textContent = String(totalStars);

    const aw = repos.find((r) => r.name === 'adventure-works-sales-analytics');
    const fma = repos.find((r) => r.name === 'Football-Match-Analysis');

    if (aw) {
      const b = document.getElementById('awStarsBadge');
      if (b) b.textContent = `★ ${aw.stargazers_count} · LIVE BI`;
    }
    if (fma) {
      const b = document.getElementById('fmaStarsBadge');
      if (b) b.textContent = `★ ${fma.stargazers_count} STARS · LIVE`;
    }

    const latest = repos
      .map((r) => new Date(r.pushed_at || r.updated_at))
      .sort((a, b) => b - a)[0];
    const syncEl = document.getElementById('ghLastSync');
    if (syncEl && latest && !Number.isNaN(latest.getTime())) {
      syncEl.textContent = latest.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }
  } catch {
    // Graceful fallback to static counts if offline or rate-limited
  }
}

/* =========================================================
   5. SMART INTENT SELECTOR (CONTACT FORM)
   ========================================================= */
let renderIntentGlobal = null;

function initSmartIntent() {
  const banner = document.getElementById('intentBanner');
  const msgEl = document.getElementById('fMsg');
  if (!banner || !msgEl) return;

  let activeIntent = 'data_role';
  const INTENTS = {
    data_role: {
      en: {
        text: 'Recommended for BI / Data hiring teams: AdventureWorks $110M + Live Power BI.',
        linkLabel: '⬇ Data Analyst CV (PDF)',
        linkHref: 'cv/Mostafa_Saad_Data_Analyst_CV.pdf',
        placeholder: 'Hi Mostafa, we are hiring for a Data / BI Analyst role and would love to connect...',
      },
      ar: {
        text: 'الأنسب لفرق توظيف البيانات و BI: مشروع AdventureWorks $110M ولوحة Power BI الحية.',
        linkLabel: '⬇ تحميل CV محلل البيانات',
        linkHref: 'cv/Mostafa_Saad_Data_Analyst_CV.pdf',
        placeholder: 'أهلاً مصطفى، نبحث عن محلل بيانات / BI للانضمام لفريقنا...',
      },
    },
    foot_role: {
      en: {
        text: 'Recommended for clubs & agencies: Football-Match-Analysis (★ 7) + FA/PFSA Certs.',
        linkLabel: '⬇ Football Analyst CV (PDF)',
        linkHref: 'cv/Mostafa_Saad_Football_Analyst_CV.pdf',
        placeholder: 'Hi Mostafa, we are looking for a Football Data / Performance Analyst...',
      },
      ar: {
        text: 'الأنسب للأندية والوكالات: محرك تحليل المباريات (★ 7) + شهادات FA و PFSA.',
        linkLabel: '⬇ تحميل CV محلل كرة القدم',
        linkHref: 'cv/Mostafa_Saad_Football_Analyst_CV.pdf',
        placeholder: 'أهلاً مصطفى، نبحث عن محلل بيانات وأداء كرة قدم / سكاوتنج...',
      },
    },
    freelance: {
      en: {
        text: 'Need a Power BI dashboard, SQL cleanup, or database audit? Share your dataset scope below.',
        linkLabel: '↗ View Live Power BI',
        linkHref: PROFILE_CONFIG.powerBiUrl,
        placeholder: 'Hi Mostafa, I need help building a Power BI dashboard / cleaning a dataset...',
      },
      ar: {
        text: 'تحتاج لوحة Power BI أو تنظيف وتدقيق قاعدة بيانات؟ اكتب تفاصيل بياناتك بالأسفل.',
        linkLabel: '↗ معاينة لوحة Power BI',
        linkHref: PROFILE_CONFIG.powerBiUrl,
        placeholder: 'أهلاً مصطفى، لدي مشروع تحليل بيانات / بناء داشبورد Power BI...',
      },
    },
    workshop: {
      en: {
        text: 'Hands-on training in Advanced Excel, Power Query, Power Pivot & Dataset Design.',
        linkLabel: '↗ LinkedIn Profile',
        linkHref: PROFILE_CONFIG.linkedin,
        placeholder: 'Hi Mostafa, we would like to book an Advanced Excel / Power BI workshop for our team...',
      },
      ar: {
        text: 'تدريب عملي متقدم في Excel و Power Query و Power Pivot وبناء قواعد البيانات.',
        linkLabel: '↗ بروفايل LinkedIn',
        linkHref: PROFILE_CONFIG.linkedin,
        placeholder: 'أهلاً مصطفى، نرغب في تنظيم ورشة عمل Excel / Power BI لفريقنا...',
      },
    },
  };

  function renderIntent() {
    const cfg = INTENTS[activeIntent][currentLang];
    const isPdf = cfg.linkHref.endsWith('.pdf');
    banner.innerHTML = `
      <span>${cfg.text}</span>
      <a href="${cfg.linkHref}" ${isPdf ? 'download' : 'target="_blank" rel="noopener"'}>${cfg.linkLabel}</a>
    `;
    msgEl.placeholder = cfg.placeholder;
  }

  renderIntentGlobal = renderIntent;

  document.querySelectorAll('.intent-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.intent-pill').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeIntent = btn.dataset.intent;
      renderIntent();
    });
  });

  renderIntent();
}

/* =========================================================
   6. SUBTLE MAGNETIC HOVER BUTTONS
   ========================================================= */
function initMagneticButtons() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = ((e.clientX - r.left) / r.width - 0.5) * 10;
      const dy = ((e.clientY - r.top) / r.height - 0.5) * 8;
      el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}


/* =========================================================
   7. INTERACTIVE TECH STACK PROOF MATRIX + SERVICE SHORTCUTS
   ========================================================= */
let renderSkillProofGlobal = null;

function initTechStackMatrix() {
  const card = document.getElementById('skillProofCard');
  if (!card) return;

  const PROOFS = {
    tsql: {
      cat: { en: 'SQL & DATABASES', ar: 'قواعد البيانات و SQL' },
      title: 'SQL Server (T-SQL)',
      desc: {
        en: 'Explored a live 72-table OLTP database ($110M revenue) using CTEs, LAG(12) YoY comparisons, NTILE(10) Pareto deciles, ROW_NUMBER() repurchase gaps, and point-in-time cost views.',
        ar: 'تحليل قاعدة بيانات OLTP من 72 جدولاً ($110M) باستخدام CTEs ودوال LAG(12) و NTILE(10) و ROW_NUMBER() وحساب الهوامش بالتكلفة التاريخية.',
      },
      metrics: ['72 OLTP Tables', 'Sales.vw_LineProfit', '13/17 Qs in Pure SQL'],
      where: { en: 'Deployed in: AdventureWorks 2022 Sales Analytics', ar: 'مطبّق في: مشروع AdventureWorks 2022' },
      links: [{ label: 'View SQL Scripts ↗', url: 'https://github.com/mostafasaad91/adventure-works-sales-analytics' }],
    },
    star: {
      cat: { en: 'DATA MODELING', ar: 'نمذجة البيانات' },
      title: 'Star Schema & Views',
      desc: {
        en: 'Architected a clean `pbi` schema with 1 FactSales view (121K sales lines) and 5 conformed dimensions (Date, Product, Customer, Territory, SalesPerson) so Power BI never queries raw OLTP tables.',
        ar: 'تصميم Star Schema نظيف يضم جدول حقائق FactSales (121 ألف صف) و 5 أبعاد متوافقة لتغذية Power BI دون المساس بالجداول الخام.',
      },
      metrics: ['1 Fact + 5 Dimensions', '121K Fact Rows', 'Zero Raw-Table Coupling'],
      where: { en: 'Deployed in: AdventureWorks 2022 & Freelance BI', ar: 'مطبّق في: AdventureWorks ومشاريع BI' },
      links: [{ label: 'Live Power BI Model ↗', url: PROFILE_CONFIG.powerBiUrl }],
    },
    sqlite: {
      cat: { en: 'DATA GOVERNANCE & QA', ar: 'حوكمة وتدقيق البيانات' },
      title: 'SQLite & Archival QA',
      desc: {
        en: 'Built SQLite match-history replay databases in Football-Match-Analysis alongside multi-sheet archival ID validation systems catching duplicates, transposed digits, and code drift across 7+ datasets.',
        ar: 'بناء أرشيف SQLite لتاريخ المباريات بجانب أنظمة تدقيق ومطابقة أكواد عبر أكثر من 7 قواعد بيانات أرشيفية وبحثية.',
      },
      metrics: ['7+ Archival Datasets', 'SQLite Replay DB', 'Automated Anomaly QA'],
      where: { en: 'Deployed in: NADIM Foundation · Daftar Ahwal · Football Engine', ar: 'مطبّق في: مؤسسة نديم · دفتر أحوال · محرك الكرة' },
      links: [{ label: 'Football Repo ↗', url: 'https://github.com/mostafasaad91/Football-Match-Analysis' }],
    },
    powerbi: {
      cat: { en: 'BUSINESS INTELLIGENCE', ar: 'ذكاء الأعمال' },
      title: 'Power BI (PBIP) & DAX',
      desc: {
        en: 'Delivered a source-controlled PBIP 6-page executive dashboard powered by 17 DAX measures (SAMEPERIODLASTYEAR, TOTALYTD, running totals, dynamic slicer titles, rule-based conditional formatting).',
        ar: 'بناء لوحة Power BI من 6 صفحات بنظام PBIP و 17 مقياس DAX للذكاء الزمني والعناوين الديناميكية والتنسيق الشرطي للخسائر.',
      },
      metrics: ['6 Interactive Pages', '17 DAX Measures', 'Live Public Embed'],
      where: { en: 'Deployed in: AdventureWorks 2022 & Client BI', ar: 'مطبّق في: AdventureWorks ولوحات العملاء' },
      links: [{ label: 'Open Live Dashboard ↗', url: PROFILE_CONFIG.powerBiUrl }],
    },
    excel: {
      cat: { en: 'BI & AUTOMATION', ar: 'الأتمتة وتحليل الأعمال' },
      title: 'Excel · Power Query · Power Pivot',
      desc: {
        en: '6+ years designing coding systems, automated Power Query ETL pipelines, Power Pivot DAX models, and facilitating hands-on Advanced Excel workshops for institutional teams.',
        ar: 'خبرة +6 سنوات في تصميم أنظمة التكويد وأتمتة Power Query ونماذج Power Pivot وتقديم ورش عمل Excel متقدمة.',
      },
      metrics: ['6+ Years Production Use', 'Team Workshops Taught', 'Power Query ETL'],
      where: { en: 'Deployed in: Daftar Ahwal · NADIM · Freelance Consulting', ar: 'مطبّق في: دفتر أحوال · نديم · الاستشارات' },
      links: [],
    },
    tableau: {
      cat: { en: 'DATA VISUALIZATION', ar: 'التصور البياني' },
      title: 'Tableau & KPI Storytelling',
      desc: {
        en: 'Executive KPI architecture, visual hierarchy design, and decision-oriented storytelling delivered fluently in both English and Arabic for stakeholders.',
        ar: 'تصميم مؤشرات الأداء التنفيذية والسرد البصري للبيانات بلغة واضحة بالعربية والإنجليزية لصناع القرار.',
      },
      metrics: ['KPI Architecture', 'EN & AR Storytelling', 'Executive Ready'],
      where: { en: 'Deployed in: BI Consulting & Research Reporting', ar: 'مطبّق في: استشارات BI والتقارير البحثية' },
      links: [],
    },
    kmeans: {
      cat: { en: 'MACHINE LEARNING', ar: 'تعلم الآلة' },
      title: 'K-Means & RFM Segmentation',
      desc: {
        en: 'Log-transformed heavily right-skewed Frequency/Monetary distributions, validated k=4 via elbow method, ranked centroids into VIP / At Risk / Hibernating / New-Promising, and wrote results back to SQL.',
        ar: 'معالجة التواء التوزيع بالتحويل اللوغاريتمي وتطبيق K-Means (k=4) لتصنيف العملاء وإعادة حفظ الشرائح مباشرة في SQL Server.',
      },
      metrics: ['k=4 Elbow Validated', 'SQL Live Write-Back', 'Interactive Simulator Above'],
      where: { en: 'Deployed in: AdventureWorks 2022 (01_customer_segmentation.ipynb)', ar: 'مطبّق في: مشروع AdventureWorks 2022' },
      links: [{ label: 'Open Notebook Repo ↗', url: 'https://github.com/mostafasaad91/adventure-works-sales-analytics' }],
    },
    python: {
      cat: { en: 'DATA ENGINEERING & ML', ar: 'هندسة البيانات وتعلم الآلة' },
      title: 'Python · Pandas · Scikit-Learn · pyodbc',
      desc: {
        en: 'End-to-end Python workflows: live SQL Server connections via pyodbc, automated Selenium/Opta match pipelines, Matplotlib AMOLED visual engines, and Scikit-Learn modeling.',
        ar: 'بناء خطوط عمل كاملة بـ Python: اتصال مباشر بـ SQL عبر pyodbc، محرك تحليل المباريات المؤتمت، وتوليد الرسوم ونماذج Scikit-Learn.',
      },
      metrics: ['pyodbc Live DB', 'Automated Pipelines', 'Matplotlib + Sklearn'],
      where: { en: 'Deployed in: Both GitHub Flagship Repositories', ar: 'مطبّق في: مشروعي GitHub الرئيسيين' },
      links: [{ label: 'GitHub Profile ↗', url: PROFILE_CONFIG.github }],
    },
    basket: {
      cat: { en: 'GROWTH ANALYTICS', ar: 'تحليلات النمو' },
      title: 'Cohort Retention & Market Basket',
      desc: {
        en: 'Built monthly cohort retention heatmaps confirming a ~345-day repurchase cycle and computed support/confidence/lift across product pairs, uncovering drivetrain bundles with >90x lift.',
        ar: 'بناء خرائط الاحتفاظ بالأفواج (~345 يوماً) وحساب معامل الرفع بين المنتجات لاكتشاف حزم بيع متقاطع برفع يتجاوز 90 ضعفاً.',
      },
      metrics: ['~345d Repurchase Cycle', 'Drivetrain Lift > 90x', 'Checkout Attach Rates'],
      where: { en: 'Deployed in: AdventureWorks 2022 (02_cohorts_market_basket.ipynb)', ar: 'مطبّق في: مشروع AdventureWorks 2022' },
      links: [{ label: 'View Repo ↗', url: 'https://github.com/mostafasaad91/adventure-works-sales-analytics' }],
    },
    xgxt: {
      cat: { en: 'FOOTBALL ML MODELING', ar: 'نمذجة كرة القدم' },
      title: 'xG, xT, xGChain & xGBuildup',
      desc: {
        en: 'Engineered custom Expected Goals (xG) and Expected Threat (xT per 100 touches) models from event coordinates alongside xGChain, xGBuildup, and progressive-pass share.',
        ar: 'بناء نماذج الأهداف المتوقعة (xG) والتهديد المتوقع (xT لكل 100 لمسة) و xGChain و xGBuildup من إحداثيات أحداث المباراة.',
      },
      metrics: ['Custom xG & xT', 'xGChain & xGBuildup', 'Live xG Simulator Above'],
      where: { en: 'Deployed in: Football-Match-Analysis (★ 7)', ar: 'مطبّق في: محرك Football-Match-Analysis (★ 7)' },
      links: [{ label: 'GitHub Repo (★ 7) ↗', url: 'https://github.com/mostafasaad91/Football-Match-Analysis' }],
    },
    opta: {
      cat: { en: 'AUTOMATED SPORTS PIPELINE', ar: 'أتمتة تحليل المباريات' },
      title: 'Opta / WhoScored Engine',
      desc: {
        en: 'One match URL in → full evidence-led PDF report, 8 AMOLED & Light 4:5 posters with adaptive kit-color contrast lift, .docx article, CSV tables, and package_manifest.json provenance.',
        ar: 'رابط مباراة واحد ينتج تقرير PDF، 8 بوسترات AMOLED و Light، مقال .docx، جداول CSV، وملف provenance تلقائياً.',
      },
      metrics: ['1 URL -> Full Package', 'AMOLED + Print Dual Copy', 'EPL · La Liga · Serie A'],
      where: { en: 'Deployed in: Football-Match-Analysis & @TacTical_41', ar: 'مطبّق في: Football-Match-Analysis وحساب @TacTical_41' },
      links: [
        { label: 'GitHub Repo ↗', url: 'https://github.com/mostafasaad91/Football-Match-Analysis' },
        { label: '𝕏 @TacTical_41 ↗', url: PROFILE_CONFIG.x },
      ],
    },
    scouting: {
      cat: { en: 'TACTICAL & RECRUITMENT', ar: 'التحليل التكتيكي والسكاوتنج' },
      title: 'PPDA, Field Tilt & Scouting Profiles',
      desc: {
        en: 'Combines FA, PFSA & FP Academy training with event metrics: PPDA pressing intensity, Field Tilt, passing sonars, nested possession funnels, and same-role player percentiles (n ≥ 8).',
        ar: 'دمج شهادات FA و PFSA و FP Academy مع مؤشرات PPDA و Field Tilt وسونار التمريرات وملفات مئويات اللاعبين.',
      },
      metrics: ['FP Academy · PFSA · FA', 'Role Percentiles (n≥8)', 'Substack Articles'],
      where: { en: 'Published on: Substack & @TacTical_41', ar: 'منشور على: Substack وحساب @TacTical_41' },
      links: [{ label: 'Read on Substack ↗', url: PROFILE_CONFIG.substack }],
    },
  };

  let activeKey = 'tsql';

  function renderProof() {
    const p = PROOFS[activeKey];
    if (!p) return;
    document.getElementById('proofCat').textContent = p.cat[currentLang];
    document.getElementById('proofTitle').textContent = p.title;
    document.getElementById('proofDesc').textContent = p.desc[currentLang];
    document.getElementById('proofMetrics').innerHTML = p.metrics.map((m) => `<span>${m}</span>`).join('');
    document.getElementById('proofWhere').textContent = p.where[currentLang];
    document.getElementById('proofActions').innerHTML = (p.links || [])
      .map((l) => `<a href="${l.url}" target="_blank" rel="noopener" class="repo-link mono">${l.label}</a>`)
      .join('');
  }

  renderSkillProofGlobal = renderProof;

  document.querySelectorAll('.skill-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.skill-pill').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeKey = btn.dataset.skill;
      renderProof();
    });
  });

  // Service cards jump straight to Contact + auto-select matching Smart Intent!
  document.querySelectorAll('.srv-cta[data-pick-intent]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const intentKey = btn.dataset.pickIntent;
      const pill = document.querySelector(`.intent-pill[data-intent="${intentKey}"]`);
      if (pill) pill.click();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  renderProof();
}

/* =========================================================
   8. FLOATING QUICK-ACTION DOCK (ON SCROLL)
   ========================================================= */
function initQuickDock() {
  const dock = document.getElementById('quickDock');
  const dockCmd = document.getElementById('dockCmdBtn');
  if (!dock) return;

  window.addEventListener('scroll', () => {
    dock.classList.toggle('show', window.scrollY > 420);
  });

  dockCmd?.addEventListener('click', () => {
    document.getElementById('cmdTrigger')?.click();
  });
}
