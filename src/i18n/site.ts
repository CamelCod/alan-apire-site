import type { Locale } from './config';

// ─────────────────────────────────────────────────────────────────────────────
// ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO
// Centralized structured site copy — EN (master) → AR → RU
// Rewrite v3.0 · September 2026 · Knowledge-heavy, SEO-optimised, E-E-A-T compliant
//
// PHOTO PLACEMENT GUIDE (referenced throughout as <!-- 📷 PHOTO: ... -->)
// All images should be placed in /src/assets/ with the filenames noted below.
// ─────────────────────────────────────────────────────────────────────────────

export interface Pillar { title: string; tagline: string; desc: string; scope: string[]; }
export interface Sector { title: string; desc: string; }
export interface Stage { num: string; title: string; desc: string; }

// ─── SERVICE PILLARS ─────────────────────────────────────────────────────────

export const PILLARS: Record<Locale, Pillar[]> = {
  en: [
    {
      title: 'Project Management',
      tagline: 'From project definition to coordinated delivery.',
      desc: 'Industrial projects fail not from lack of ambition but from lack of structure. Our project management practice applies a disciplined five-stage framework — Understand, Define, Coordinate, Deliver, Close — to every assignment, regardless of size. We produce comprehensive baseline schedules, maintain live risk registers, manage multi-contractor interfaces, and provide weekly progress verification that keeps owners informed and in control at every stage of execution.',
      scope: [
        'Comprehensive baseline scheduling (CPM / Primavera P6 compatible)',
        'Multi-contractor interface coordination',
        'Critical-path management and recovery planning',
        'Risk register administration and weekly update',
        'Site progress verification and owner reporting',
        'Technical documentation control and filing discipline',
        'Close-out governance and commissioning support',
      ],
    },
    {
      title: 'Engineering & Technical Consultancy',
      tagline: 'Translating technical requirements into executable project solutions.',
      desc: 'Most advisory firms offer frameworks. We offer engineering substance. Our technical consultancy is grounded in direct hands-on experience across refinery processes, district heating hydraulics, power plant auxiliary systems, and municipal water infrastructure. We conduct feasibility assessments, draft technical specifications, evaluate vendor bids, and run system-level diagnostics — translating complex requirements into documents your contractors, suppliers, and regulators can act upon.',
      scope: [
        'Technical feasibility assessments (process, civil, mechanical)',
        'Equipment and materials specification and evaluation',
        'Process and utility system technical reviews',
        'Infrastructure diagnostics and condition assessment',
        'Vendor and contractor bid technical evaluation',
        'Technical specification drafting to international standards',
        'System integration advisory for multi-unit industrial facilities',
      ],
    },
    {
      title: 'Architectural & Technical Drawings',
      tagline: 'Clear visual and technical documentation for industrial facilities.',
      desc: 'Industrial projects require precise visual documentation at every stage — from early concept layouts that help clients visualise a facility, to detailed equipment arrangement schemes that contractors build from. Our DIEZ-licensed drawing service produces prospective architectural drawings, preliminary space layouts, industrial equipment arrangement schemes, and infrastructure alignment plans for manufacturing plants, processing facilities, utility stations, and warehouse complexes.',
      scope: [
        'Architectural prospective drawings for industrial facilities',
        'Preliminary space-planning layouts',
        'Industrial equipment arrangement and zoning schemes',
        'Infrastructure alignment and routing plans',
        'Drawing package coordination and version control',
        'Facility concept visualisation for client approvals',
        'As-built record drawing coordination support',
      ],
    },
    {
      title: 'Management Consultancy',
      tagline: 'Objective analysis for strategic, capital, and operational decisions.',
      desc: 'Capital-intensive industrial businesses face decisions that cannot be reversed easily. Our management consultancy practice provides the structured analytical rigour that transforms ambiguous strategic questions into clear, evidenced recommendations. We review operational workflows, build project governance frameworks, support CAPEX prioritisation, and provide independent advisory during contractor disputes — always with the engineering context that generic management consultants lack.',
      scope: [
        'Capital expenditure planning and prioritisation',
        'Organisational workflow and process optimisation',
        'Project governance framework design',
        'Contractor dispute resolution advisory and documentation',
        'Operational readiness and pre-commissioning reviews',
        'Strategic advisory for industrial asset owners',
        'Investment feasibility and stage-gate analysis',
      ],
    },
  ],
  ar: [
    {
      title: 'إدارة المشاريع',
      tagline: 'من تعريف المشروع إلى التنفيذ المنسّق.',
      desc: 'تفشل المشاريع الصناعية ليس بسبب نقص الطموح، بل بسبب غياب الهيكل المنظم. تطبق ممارستنا في إدارة المشاريع إطار عمل منضبطًا من خمس مراحل — الفهم، التحديد، التنسيق، التنفيذ، الإغلاق — على كل مهمة بصرف النظر عن حجمها. نضع جداول زمنية أساسية شاملة، ونحافظ على سجلات مخاطر حية، وندير واجهات متعددة المقاولين، ونقدم تحققًا أسبوعيًا من التقدم يُبقي الملاك مطلعين ومتحكمين في كل مرحلة من مراحل التنفيذ.',
      scope: [
        'الجدولة الزمنية الأساسية الشاملة (CPM / متوافق مع Primavera P6)',
        'تنسيق واجهات متعددة المقاولين',
        'إدارة المسار الحرج وتخطيط التعافي',
        'إدارة سجل المخاطر والتحديث الأسبوعي',
        'التحقق من تقدم الموقع وإعداد تقارير الملاك',
        'ضبط الوثائق الفنية ونظام الأرشفة',
        'حوكمة الإغلاق ودعم التشغيل',
      ],
    },
    {
      title: 'الاستشارات الهندسية والفنية',
      tagline: 'تحويل المتطلبات الفنية إلى حلول مشاريع قابلة للتنفيذ.',
      desc: 'تقدم معظم شركات الاستشارات أطر عمل فحسب. نحن نقدم مادة هندسية حقيقية. تستند استشاراتنا الفنية إلى خبرة ميدانية مباشرة في عمليات التكرير وهيدروليكا التدفئة المركزية وأنظمة محطات الطاقة وبنية تحتية للمياه البلدية. نُجري تقييمات الجدوى، ونصوغ المواصفات الفنية، ونقيّم عروض الموردين، وننفذ تشخيصات على مستوى الأنظمة — محولين المتطلبات المعقدة إلى وثائق يستطيع مقاولوك وموردوك وجهاتك التنظيمية التصرف بناءً عليها.',
      scope: [
        'تقييمات الجدوى الفنية (عمليات، مدني، ميكانيكي)',
        'تحديد المعدات والمواد وتقييمها',
        'مراجعات فنية لأنظمة العمليات والمرافق',
        'تشخيص البنية التحتية وتقييم الحالة',
        'التقييم الفني لعروض الموردين والمقاولين',
        'صياغة المواصفات الفنية وفق المعايير الدولية',
        'استشارات تكامل الأنظمة للمنشآت الصناعية متعددة الوحدات',
      ],
    },
    {
      title: 'الرسومات المعمارية والفنية',
      tagline: 'وثائق بصرية وفنية واضحة للمنشآت الصناعية.',
      desc: 'تتطلب المشاريع الصناعية توثيقًا بصريًا دقيقًا في كل مرحلة — من مخططات المفهوم الأولية التي تساعد العملاء على تصور المنشأة، إلى مخططات ترتيب المعدات التفصيلية التي ينفذها المقاولون. تنتج خدمة الرسومات المرخصة لدى DIEZ رسومات معمارية استشرافية ومخططات مساحة أولية ومخططات ترتيب المعدات الصناعية وخطط مواءمة البنية التحتية للمصانع ومنشآت المعالجة ومحطات المرافق والمجمعات الأمبارية.',
      scope: [
        'الرسومات المعمارية الاستشرافية للمنشآت الصناعية',
        'مخططات التخطيط المبدئي للمساحة',
        'مخططات ترتيب المعدات الصناعية وتقسيمها',
        'خطط مواءمة البنية التحتية والتوجيه',
        'تنسيق حزم الرسومات ومراقبة الإصدارات',
        'تصور مفهوم المنشأة لموافقات العملاء',
        'دعم تنسيق رسومات السجل النهائي',
      ],
    },
    {
      title: 'الاستشارات الإدارية',
      tagline: 'تحليل موضوعي للقرارات الاستراتيجية والرأسمالية والتشغيلية.',
      desc: 'تواجه الأعمال الصناعية كثيفة رأس المال قرارات يصعب التراجع عنها. توفر ممارستنا في الاستشارات الإدارية الصرامة التحليلية المنظمة التي تحول الأسئلة الاستراتيجية الغامضة إلى توصيات واضحة ومدعومة بالأدلة. نراجع سير العمل التشغيلي، وننشئ أطر حوكمة المشاريع، وندعم تحديد أولويات النفقات الرأسمالية، ونقدم استشارات مستقلة خلال نزاعات المقاولين — دائمًا مع السياق الهندسي الذي تفتقر إليه شركات الاستشارات الإدارية العامة.',
      scope: [
        'تخطيط وتحديد أولويات النفقات الرأسمالية',
        'تحسين سير العمل التنظيمي والعمليات',
        'تصميم أطر حوكمة المشاريع',
        'استشارات وتوثيق حل نزاعات المقاولين',
        'مراجعات الجاهزية التشغيلية وما قبل التشغيل',
        'الاستشارات الاستراتيجية لأصحاب الأصول الصناعية',
        'جدوى الاستثمار وتحليل بوابات المراحل',
      ],
    },
  ],
  ru: [
    {
      title: 'Управление проектами',
      tagline: 'От определения проекта до скоординированной реализации.',
      desc: 'Промышленные проекты терпят неудачу не из-за недостатка амбиций, а из-за отсутствия структуры. Наша практика управления проектами применяет дисциплинированную пятиэтапную рамку — Понимание, Определение, Координация, Реализация, Закрытие — к каждому заданию, независимо от его масштаба. Мы составляем комплексные базовые календарные планы, ведём актуальные реестры рисков, управляем интерфейсами между несколькими подрядчиками и проводим еженедельную верификацию хода работ, обеспечивая заказчикам полную информированность и контроль на каждом этапе исполнения.',
      scope: [
        'Комплексное базовое календарное планирование (CPM / совместимость с Primavera P6)',
        'Координация интерфейсов нескольких подрядчиков',
        'Управление критическим путём и восстановительное планирование',
        'Ведение реестра рисков и еженедельное обновление',
        'Верификация хода работ на площадке и отчётность для заказчика',
        'Контроль технической документации и архивная дисциплина',
        'Управление закрытием проекта и поддержка пусконаладки',
      ],
    },
    {
      title: 'Инженерно-технический консалтинг',
      tagline: 'Превращаем технические требования в реализуемые проектные решения.',
      desc: 'Большинство консалтинговых компаний предлагают методологии. Мы предлагаем инженерное содержание. Наш технический консалтинг основан на непосредственном практическом опыте в области процессов нефтепереработки, гидравлики систем теплоснабжения, вспомогательных систем электростанций и муниципальной водопроводной инфраструктуры. Мы проводим технико-экономические оценки, разрабатываем технические спецификации, оцениваем предложения поставщиков и выполняем системные диагностики — преобразуя сложные требования в документы, на основе которых могут действовать ваши подрядчики, поставщики и регуляторы.',
      scope: [
        'Технико-экономические оценки (технологические, гражданские, механические)',
        'Спецификация и оценка оборудования и материалов',
        'Технические проверки технологических и инженерных систем',
        'Диагностика инфраструктуры и оценка состояния',
        'Техническая оценка коммерческих предложений поставщиков и подрядчиков',
        'Разработка технических спецификаций по международным стандартам',
        'Консультации по системной интеграции для многоагрегатных промышленных объектов',
      ],
    },
    {
      title: 'Архитектурные и технические чертежи',
      tagline: 'Наглядная визуальная и техническая документация для промышленных объектов.',
      desc: 'Промышленные проекты требуют точной визуальной документации на каждом этапе — от концептуальных планировок, помогающих клиентам представить объект, до детальных схем расстановки оборудования, по которым работают подрядчики. Наш лицензированный DIEZ сервис черчения создаёт перспективные архитектурные чертежи, предварительные планировки, схемы расстановки промышленного оборудования и планы трассировки инфраструктуры для производственных предприятий, перерабатывающих объектов, инженерных станций и складских комплексов.',
      scope: [
        'Перспективные архитектурные чертежи промышленных объектов',
        'Предварительные планировки помещений',
        'Схемы расстановки и зонирования промышленного оборудования',
        'Планы трассировки и маршрутизации инфраструктуры',
        'Координация комплектов чертежей и управление версиями',
        'Концептуальная визуализация объекта для согласований заказчика',
        'Поддержка координации исполнительной документации',
      ],
    },
    {
      title: 'Управленческий консалтинг',
      tagline: 'Объективный анализ для стратегических, капитальных и операционных решений.',
      desc: 'Капиталоёмкие промышленные предприятия принимают решения, которые сложно обратить назад. Наша практика управленческого консалтинга обеспечивает структурированную аналитическую строгость, которая превращает неясные стратегические вопросы в чёткие, обоснованные рекомендации. Мы анализируем операционные процессы, разрабатываем рамки проектного управления, поддерживаем приоритизацию капитальных затрат и предоставляем независимые консультации при спорах с подрядчиками — всегда с инженерным контекстом, которого лишены обычные управленческие консультанты.',
      scope: [
        'Планирование и приоритизация капитальных затрат',
        'Оптимизация организационных процессов',
        'Разработка рамок проектного управления',
        'Консультации по урегулированию споров с подрядчиками и документирование',
        'Проверки операционной готовности и предпускового состояния',
        'Стратегические консультации для владельцев промышленных активов',
        'Инвестиционная жизнеспособность и анализ стейдж-гейт',
      ],
    },
  ],
};

// ─── SECTORS ─────────────────────────────────────────────────────────────────
// 📷 PHOTO per sector: full-width 16:9 banner at top of each sector section
// Filenames: sector-energy.jpg | sector-heating.jpg | sector-water.jpg
//            sector-refinery.jpg | sector-industrial.jpg

export const SECTORS: Record<Locale, Sector[]> = {
  en: [
    {
      title: 'Energy & Power Generation',
      // 📷 PHOTO: gas turbine hall or cooling tower complex — sector-energy.jpg
      desc: "The GCC's energy infrastructure has expanded at a compound rate of over 6% annually since 2010, driven by industrial diversification, population growth, and the accelerating electrification of desalination and industrial processes. Alan Apire's advisory team has delivered project management and engineering consultancy across power stations, auxiliary utility networks, cooling and water supply systems, and generation capacity expansion programmes — giving clients the technical depth and delivery discipline needed to execute in this high-stakes sector.",
    },
    {
      title: 'District Heating & Thermal Utilities',
      // 📷 PHOTO: pumping station / pipeline trench work — sector-heating.jpg
      desc: 'District heating networks present some of the most technically demanding project management challenges in the infrastructure space: hydraulic balancing across kilometres of buried pipework, pressure reduction schemes at each node, thermal loss management, and the coordination of civil, mechanical, and instrumentation works in operating environments. Our team has first-hand delivery experience in the design, construction coordination, and commissioning support of pumping stations, heat-exchange substations, and pressure-regulation nodes on large-scale thermal distribution networks.',
    },
    {
      title: 'Water & Municipal Infrastructure',
      // 📷 PHOTO: water transmission main / HDPE pipe installation — sector-water.jpg
      desc: 'Urban water infrastructure in the UAE and GCC is undergoing a generational upgrade: ageing ductile iron and steel transmission mains are being replaced with modern HDPE pipework that eliminates corrosion, extends asset life by 50+ years, and reduces leakage losses. Our team has managed trunk-line rehabilitation projects involving detailed technical feasibility assessment, specification of HDPE pipe classes and jointing systems, contractor procurement, and interface coordination with municipal authorities — delivering outcomes that directly improve public utility performance.',
    },
    {
      title: 'Oil Refining & Downstream Petrochemicals',
      // 📷 PHOTO: refinery flare stack or catalytic cracker unit — sector-refinery.jpg
      desc: 'Refinery modernisation is one of the most technically complex and capital-intensive categories of industrial project. From hydrocracking and hydrotreating units that upgrade heavy feedstock into Euro 5-compliant fuels, to delayed coking units that recover value from heavy residues, each project requires the integration of process engineering, civil works, instrumentation, and mechanical installation across dozens of simultaneous contractor packages. Our advisory team has provided project governance and technical consultancy on refinery modernisation programmes achieving refining depths of up to 96% and Euro 5 fuel production shares exceeding 95%.',
    },
    {
      title: 'Heavy Manufacturing & Industrial Facilities',
      // 📷 PHOTO: factory floor / equipment installation — sector-industrial.jpg
      desc: 'From logistics warehouse complexes to manufacturing process-flow redesigns and MEP coordination on industrial facilities, this sector spans the broadest range of project types in our portfolio. Common client challenges include multi-phase facility construction with overlapping contractor interfaces, space-constrained equipment installation, and the transition from design documentation to live operational layouts. Our project management and technical drawing services address these challenges through disciplined coordination, clear documentation, and senior-level accountability from inception to handover.',
    },
  ],
  ar: [
    {
      title: 'الطاقة وتوليد الكهرباء',
      desc: 'توسعت البنية التحتية للطاقة في منطقة مجلس التعاون الخليجي بمعدل مركب يتجاوز 6% سنويًا منذ عام 2010، مدفوعةً بالتنويع الصناعي ونمو السكان والكهربة المتسارعة لعمليات التحلية والعمليات الصناعية. قدّم الفريق الاستشاري لآلان أپاير خدمات إدارة المشاريع والاستشارات الهندسية عبر محطات الطاقة وشبكات المرافق المساعدة وأنظمة التبريد وإمدادات المياه وبرامج توسعة طاقة التوليد — مما يمنح العملاء العمق الفني والانضباط التنفيذي اللازمين للتنفيذ في هذا القطاع ذي المخاطر العالية.',
    },
    {
      title: 'التدفئة المركزية والمرافق الحرارية',
      desc: 'تطرح شبكات التدفئة المركزية بعض أكثر تحديات إدارة المشاريع تقنيةً في مجال البنية التحتية: الموازنة الهيدروليكية عبر كيلومترات من الأنابيب المدفونة، وأنظمة خفض الضغط عند كل عقدة، وإدارة فقدان الحرارة، وتنسيق أعمال الهندسة المدنية والميكانيكية وأجهزة القياس في بيئات تشغيلية. يمتلك فريقنا خبرة تنفيذية مباشرة في التصميم وتنسيق البناء ودعم التشغيل لمحطات الضخ ومحطات تبادل الحرارة وعقد تنظيم الضغط على شبكات التوزيع الحراري واسعة النطاق.',
    },
    {
      title: 'المياه والبنية التحتية البلدية',
      desc: 'تخضع البنية التحتية للمياه الحضرية في الإمارات ودول مجلس التعاون لترقية جيلية: يجري استبدال خطوط النقل القديمة من الحديد الزهر والفولاذ بأنابيب HDPE الحديثة التي تقضي على التآكل وتمدد عمر الأصول لأكثر من 50 عامًا وتقلل خسائر التسرب. أدار فريقنا مشاريع إعادة تأهيل الخطوط الرئيسية التي تضمنت تقييمًا فنيًا دقيقًا للجدوى وتحديد مواصفات فئات أنابيب HDPE وأنظمة التوصيل وتوريد المقاولين والتنسيق مع السلطات البلدية — محققةً نتائج تحسّن أداء المرافق العامة بشكل مباشر.',
    },
    {
      title: 'تكرير النفط والبتروكيماويات',
      desc: 'يُعدّ تحديث المصافي من أكثر فئات المشاريع الصناعية تعقيدًا فنيًا وأعلاها كثافةً رأسمالية. من وحدات التكسير الهيدروجيني والمعالجة الهيدروجينية التي ترقي المادة الخام الثقيلة إلى وقود متوافق مع Euro 5، إلى وحدات التكويك المتأخر التي تستردّ القيمة من المخلفات الثقيلة — يتطلب كل مشروع تكاملًا بين هندسة العمليات والأعمال المدنية والأجهزة والتركيب الميكانيكي عبر عشرات حزم المقاولين المتزامنة. قدّم فريقنا الاستشاري حوكمة المشاريع والاستشارات الفنية في برامج تحديث المصافي التي حققت أعماق تكرير تصل إلى 96% وحصصًا في إنتاج وقود Euro 5 تتجاوز 95%.',
    },
    {
      title: 'التصنيع الثقيل والمنشآت الصناعية',
      desc: 'من مجمعات مستودعات اللوجستيات إلى إعادة تصميم تدفقات العمليات التصنيعية وتنسيق الكهرباء والميكانيكا والسباكة في المنشآت الصناعية، يغطي هذا القطاع أوسع نطاق من أنواع المشاريع في محفظتنا. تشمل تحديات العملاء الشائعة بناء منشآت متعددة المراحل مع واجهات متداخلة للمقاولين، وتركيب معدات في مساحات محدودة، والانتقال من وثائق التصميم إلى المخططات التشغيلية الحية. تعالج خدمات إدارة المشاريع والرسومات الفنية لدينا هذه التحديات من خلال التنسيق المنضبط والتوثيق الواضح والمساءلة على المستوى الأول من الإنشاء إلى التسليم.',
    },
  ],
  ru: [
    {
      title: 'Энергетика и генерация',
      desc: 'Энергетическая инфраструктура Совета сотрудничества Персидского залива расширялась совокупными темпами более 6% в год с 2010 года, движимая промышленной диверсификацией, ростом населения и ускоряющейся электрификацией опреснения и промышленных процессов. Консультационная команда Alan Apire реализовывала управление проектами и инженерный консалтинг на электростанциях, вспомогательных инженерных сетях, системах охлаждения и водоснабжения, а также программах расширения генерирующих мощностей — обеспечивая клиентам техническую глубину и исполнительскую дисциплину для работы в этом высокоответственном секторе.',
    },
    {
      title: 'Районное теплоснабжение и тепловые сети',
      desc: 'Тепловые сети районного теплоснабжения представляют одни из наиболее технически сложных задач управления проектами в инфраструктурной сфере: гидравлическая балансировка на километрах подземных трубопроводов, схемы снижения давления на каждом узле, управление тепловыми потерями, координация гражданских, механических и контрольно-измерительных работ в действующих условиях эксплуатации. Наша команда имеет непосредственный исполнительский опыт в проектировании, координации строительства и поддержке пусконаладки насосных станций, теплообменных подстанций и узлов регулирования давления в крупных тепловых распределительных сетях.',
    },
    {
      title: 'Водоснабжение и муниципальная инфраструктура',
      desc: 'Городская водопроводная инфраструктура в ОАЭ и странах ССАГПЗ переживает масштабную модернизацию: устаревшие водоводы из ковкого чугуна и стали заменяются современными ПНД-трубопроводами, которые исключают коррозию, увеличивают срок службы активов более чем на 50 лет и снижают потери при утечках. Наша команда управляла проектами реабилитации магистральных линий, включавшими детальную технико-экономическую оценку, спецификацию классов ПНД-труб и систем соединений, закупку подрядчиков и координацию интерфейсов с муниципальными органами власти — достигая результатов, которые напрямую повышают производительность общественных коммунальных служб.',
    },
    {
      title: 'Нефтепереработка и нефтехимия',
      desc: 'Модернизация нефтеперерабатывающих заводов — одна из наиболее технически сложных и капиталоёмких категорий промышленных проектов. От установок гидрокрекинга и гидроочистки, обеспечивающих производство топлива стандарта Евро-5 из тяжёлого сырья, до установок замедленного коксования, извлекающих ценность из тяжёлых остатков, — каждый проект требует интеграции технологических процессов, гражданских работ, контрольно-измерительных приборов и механического монтажа в рамках десятков одновременных пакетов подрядчиков. Наша консультационная команда обеспечивала проектное управление и технический консалтинг в программах модернизации НПЗ, достигших глубины переработки до 96% и доли производства топлива стандарта Евро-5 свыше 95%.',
    },
    {
      title: 'Тяжёлая промышленность и производственные объекты',
      desc: 'От логистических складских комплексов до перепроектирования производственных технологических потоков и ОВК-координации промышленных объектов — этот сектор охватывает наиболее широкий спектр типов проектов в нашем портфеле. Типичные задачи клиентов включают многоэтапное строительство объектов с перекрывающимися интерфейсами подрядчиков, монтаж оборудования в условиях ограниченного пространства и переход от проектной документации к живым операционным планировкам. Наши услуги по управлению проектами и техническому черчению решают эти задачи посредством дисциплинированной координации, чёткой документации и личной ответственности руководства от начала до передачи объекта.',
    },
  ],
};

export const SECTOR_LABELS: Record<Locale, string[]> = {
  en: ['Energy & Power', 'Water Infrastructure', 'District Heating', 'Oil & Gas', 'Industrial Infrastructure'],
  ar: ['الطاقة والكهرباء', 'البنية التحتية للمياه', 'التدفئة المركزية', 'النفط والغاز', 'البنية التحتية الصناعية'],
  ru: ['Энергетика', 'Водная инфраструктура', 'Теплоснабжение', 'Нефть и газ', 'Промышленная инфраструктура'],
};

// ─── FIVE-STAGE PROCESS ───────────────────────────────────────────────────────
// 📷 PHOTO: team at planning session / whiteboard / site visit per stage
// Use a horizontal timeline or vertical card layout; one photo at the top of the section
// Filename: approach-team.jpg

export const STAGES: Record<Locale, Stage[]> = {
  en: [
    { num: '01', title: 'Understand', desc: 'Before a single schedule line is drawn, we invest time in understanding the real project — the stakeholders, constraints, technical boundary conditions, regulatory requirements, and existing site conditions. This stage produces a written Project Definition Report that becomes the contractual reference for all subsequent work.' },
    { num: '02', title: 'Define', desc: 'We convert the understanding of stage one into a structured technical framework: a baseline schedule, a risk register, a documentation matrix, and a contractor management plan. Nothing proceeds to execution until the client has approved the framework in writing.' },
    { num: '03', title: 'Coordinate', desc: 'Execution without coordination produces conflict. In this stage we manage all contractor and vendor interfaces — holding weekly progress meetings, resolving technical queries, controlling drawing submissions, tracking procurement schedules, and maintaining the risk register in real time.' },
    { num: '04', title: 'Deliver', desc: 'Senior-level site oversight, owner reporting packages, earned-value tracking, and proactive schedule recovery actions keep the project on trajectory. Clients receive a structured weekly progress report with a traffic-light dashboard, critical path analysis, and forward-look planning.' },
    { num: '05', title: 'Close', desc: 'Commissioning, testing, and handover are where poorly managed projects unravel. We provide close-out governance: punch-list management, commissioning coordination, as-built drawing review, operations and maintenance documentation assembly, and formal acceptance support.' },
  ],
  ar: [
    { num: '01', title: 'الفهم', desc: 'قبل رسم أي سطر في الجدول الزمني، نستثمر الوقت في فهم المشروع الحقيقي — أصحاب المصلحة، والقيود، وحدود الشروط الفنية، والمتطلبات التنظيمية، والظروف القائمة في الموقع. تُنتج هذه المرحلة تقرير تعريف مكتوب للمشروع يصبح المرجع التعاقدي لجميع الأعمال اللاحقة.' },
    { num: '02', title: 'التحديد', desc: 'نحوّل فهم المرحلة الأولى إلى إطار فني منظم: جدول زمني أساسي، وسجل مخاطر، ومصفوفة توثيق، وخطة إدارة المقاولين. لا شيء ينتقل إلى التنفيذ حتى يوافق العميل على الإطار خطيًا.' },
    { num: '03', title: 'التنسيق', desc: 'التنفيذ بدون تنسيق ينتج صراعًا. في هذه المرحلة ندير جميع واجهات المقاولين والموردين — نعقد اجتماعات تقدم أسبوعية، وحل الاستفسارات الفنية، ومراقبة تسليم الرسومات، وتتبع جداول التوريد، وتحديث سجل المخاطر في الوقت الفعلي.' },
    { num: '04', title: 'التنفيذ', desc: 'تُبقي الإشراف الميداني على المستوى الأول وحزم التقارير لأصحاب المشروع وتتبع القيمة المكتسبة وإجراءات الاسترداد الاستباقية للجدول الزمني المشروع على المسار الصحيح. يتلقى العملاء تقريرًا أسبوعيًا منظمًا للتقدم مع لوحة إشارات مرور ملونة وتحليل المسار الحرج والتخطيط التطلعي.' },
    { num: '05', title: 'الإغلاق', desc: 'التشغيل والاختبار والتسليم هي المرحلة التي تنهار فيها المشاريع سيئة الإدارة. نوفر حوكمة الإغلاق: إدارة قائمة البنود المتبقية، وتنسيق التشغيل، ومراجعة الرسومات النهائية، وتجميع وثائق التشغيل والصيانة، ودعم القبول الرسمي.' },
  ],
  ru: [
    { num: '01', title: 'Понимание', desc: 'Прежде чем будет составлена единственная строка расписания, мы тратим время на понимание реального проекта — стейкхолдеров, ограничений, технических граничных условий, нормативных требований и существующих условий на площадке. На этом этапе создаётся письменный Отчёт об определении проекта, который становится контрактным справочником для всех последующих работ.' },
    { num: '02', title: 'Определение', desc: 'Мы преобразуем понимание первого этапа в структурированную техническую рамку: базовый календарный план, реестр рисков, матрицу документации и план управления подрядчиками. Ни один вид работ не переходит к исполнению до тех пор, пока клиент письменно не одобрит рамку.' },
    { num: '03', title: 'Координация', desc: 'Исполнение без координации порождает конфликты. На этом этапе мы управляем всеми интерфейсами подрядчиков и поставщиков — проводим еженедельные совещания по ходу работ, разрешаем технические запросы, контролируем представление чертежей, отслеживаем графики поставок и ведём реестр рисков в режиме реального времени.' },
    { num: '04', title: 'Реализация', desc: 'Надзор на площадке силами старших специалистов, пакеты отчётности для заказчика, отслеживание освоенного объёма и превентивные меры по восстановлению графика удерживают проект на курсе. Клиенты получают структурированный еженедельный отчёт о ходе работ с цветовой индикаторной панелью, анализом критического пути и перспективным планированием.' },
    { num: '05', title: 'Закрытие', desc: 'Пуско-наладка, испытания и передача — именно здесь рассыпаются плохо управляемые проекты. Мы обеспечиваем управление закрытием: ведение punch-листа, координацию пуско-наладки, проверку исполнительных чертежей, комплектацию эксплуатационно-технической документации и поддержку официальной приёмки.' },
  ],
};

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
// 📷 PHOTO PLACEMENTS — HOMEPAGE:
//   hero-bg.jpg       → Hero section full-width background (industrial facility, aerial, 16:9)
//   why-team.jpg      → "Why Choose Us" sidebar or card (team at desk / site, 4:3)
//   cta-bg.jpg        → Bottom CTA section background (pipeline / refinery dusk, 16:9)

export const HOME = {
  hero: {
    eyebrow: {
      en: 'Engineering & Project Delivery Consultancy · Dubai Integrated Economic Zones Authority (DIEZ) · Dubai, UAE',
      ar: 'استشارات هندسية وتسليم مشاريع · سلطة دبي للمناطق الاقتصادية المتكاملة (دايز) · دبي، الإمارات',
      ru: 'Инжиниринговый и проектный консалтинг · Dubai Integrated Economic Zones Authority (DIEZ) · Дубай, ОАЭ',
    },
    headline: {
      en: 'Engineering Projects. Managed from Concept to Delivery.',
      ar: 'مشاريع هندسية. تُدار من الفكرة إلى التسليم.',
      ru: 'Инжиниринговые проекты. Управление от концепции до сдачи.',
    },
    sub: {
      en: 'ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO is a Dubai-based engineering and project delivery consultancy licensed under the Dubai Integrated Economic Zones Authority. We provide project management, management consultancy, and architectural technical drawing services for industrial and infrastructure projects across the UAE, GCC, and international markets. Our team combines direct execution experience on Russian and European refinery, utility, and infrastructure programmes with the structured delivery discipline demanded by today\'s complex industrial developments.',
      ar: 'آلان وأپاير للاستشارات الإدارية – ش.ذ.م.م منطقة حرة هي شركة استشارات هندسية وتسليم مشاريع مقرها دبي، مرخصة من قِبل سلطة دبي للمناطق الاقتصادية المتكاملة. نقدم خدمات إدارة المشاريع والاستشارات الإدارية والرسومات الفنية المعمارية للمشاريع الصناعية والبنية التحتية في الإمارات ودول مجلس التعاون الخليجي والأسواق الدولية. يجمع فريقنا بين خبرة التنفيذ المباشر في برامج المصافي والمرافق والبنية التحتية الروسية والأوروبية والانضباط التسليمي المنظم الذي تستلزمه التطورات الصناعية المعقدة اليوم.',
      ru: 'ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO — дубайская консалтинговая компания в сфере инжиниринга и реализации проектов, лицензированная Dubai Integrated Economic Zones Authority. Мы оказываем услуги управления проектами, управленческого консалтинга и архитектурно-технического черчения для промышленных и инфраструктурных проектов в ОАЭ, странах ССАГПЗ и на международных рынках. Наша команда сочетает непосредственный опыт исполнения российских и европейских программ на НПЗ, объектах коммунальной инфраструктуры с дисциплинированным структурированным подходом к реализации, которого требуют сегодняшние сложные промышленные объекты.',
    },
    primaryCta: { en: 'Discuss a Project', ar: 'ناقش مشروعك', ru: 'Обсудить проект' },
    secondaryCta: { en: 'View Our Projects', ar: 'اطلع على مشاريعنا', ru: 'Смотреть проекты' },
  },
  pillarsHeading: {
    en: 'Four Integrated Service Pillars',
    ar: 'أربع ركائز خدمية متكاملة',
    ru: 'Четыре интегрированных направления услуг',
  },
  pillarsIntro: {
    en: 'Unlike generalist consultancies that hand off engineering to separate firms, Alan Apire holds three directly licensed activities under one entity: management consultancy, project management, and architectural technical drawings. This means one contract, one accountable team, and one point of escalation across the entire technical scope of your project.',
    ar: 'على عكس شركات الاستشارات العامة التي تحيل الهندسة إلى شركات منفصلة، تمتلك آلان أپاير ثلاثة أنشطة مرخصة مباشرة ضمن كيان واحد: الاستشارات الإدارية وإدارة المشاريع والرسومات الفنية المعمارية. هذا يعني عقدًا واحدًا وفريقًا واحدًا مسؤولًا ونقطة تصعيد واحدة عبر النطاق الفني بأكمله لمشروعك.',
    ru: 'В отличие от компаний-универсалов, передающих инжиниринг отдельным фирмам, Alan Apire держит три напрямую лицензированных вида деятельности в рамках одного юридического лица: управленческий консалтинг, управление проектами и архитектурно-технические чертежи. Это означает один договор, одну ответственную команду и одну точку эскалации по всему техническому объёму вашего проекта.',
  },
  sectorsHeading: {
    en: 'Five Sectors. Verified Delivery Experience.',
    ar: 'خمسة قطاعات. خبرة تنفيذ موثقة.',
    ru: 'Пять отраслей. Подтверждённый опыт реализации.',
  },
  sectorsIntro: {
    en: 'Our advisory team\'s track record spans five industrial and infrastructure sectors where technical depth is not optional — it is the prerequisite for every decision made on site.',
    ar: 'يمتد سجل فريقنا الاستشاري عبر خمسة قطاعات صناعية وبنية تحتية يُعدّ فيها العمق الفني ليس اختياريًا — بل شرطًا أساسيًا لكل قرار يُتخذ في الموقع.',
    ru: 'Послужной список нашей консультационной команды охватывает пять промышленных и инфраструктурных секторов, где техническая глубина не является опцией — она является предпосылкой для каждого принимаемого на площадке решения.',
  },
  featuredHeading: {
    en: 'Selected Project Experience — Advisory Team',
    ar: 'خبرات مختارة من المشاريع — الفريق الاستشاري',
    ru: 'Избранный проектный опыт — консультационная команда',
  },
  featuredIntro: {
    en: 'The following case studies reflect verified delivery assignments completed by our advisory team across Russia, Europe, and the UAE. Client names are held confidential where commercially required.',
    ar: 'تعكس دراسات الحالة التالية مهام تنفيذ موثقة أتمها فريقنا الاستشاري في روسيا وأوروبا والإمارات. تُحفظ أسماء العملاء سرية حيث يقتضي ذلك تجاريًا.',
    ru: 'Следующие кейсы отражают подтверждённые исполнительские задания, выполненные нашей консультационной командой в России, Европе и ОАЭ. Имена клиентов сохраняются конфиденциальными там, где это коммерчески необходимо.',
  },
  approachHeading: {
    en: 'Our Approach — Five-Stage Operating Framework',
    ar: 'منهجيتنا — إطار عمل من خمس مراحل',
    ru: 'Наш подход — пятиэтапная операционная рамка',
  },
  approachIntro: {
    en: 'Every Alan Apire engagement follows the same five-stage framework, regardless of whether the assignment is a full project management mandate or a targeted technical feasibility study. The framework is designed to ensure that the right questions are answered before money is spent, that contractors are accountable to a documented baseline, and that handover documentation is complete and actionable.',
    ar: 'يتبع كل مشروع في آلان أپاير إطار العمل المكوّن من خمس مراحل ذاته، بصرف النظر عما إذا كانت المهمة تفويضًا كاملًا لإدارة المشاريع أم دراسة جدوى فنية محددة. صُمّم هذا الإطار لضمان الإجابة على الأسئلة الصحيحة قبل إنفاق الأموال، وأن يكون المقاولون مسؤولين أمام خط أساس موثق، وأن تكون وثائق التسليم كاملة وقابلة للتنفيذ.',
    ru: 'Каждый проект Alan Apire следует одной и той же пятиэтапной рамке, независимо от того, является ли задание полноценным мандатом управления проектом или целевым технико-экономическим исследованием. Рамка разработана для обеспечения того, чтобы правильные вопросы были решены до расходования средств, чтобы подрядчики были подотчётны задокументированному базовому плану, и чтобы приёмо-передаточная документация была полной и пригодной для практического использования.',
  },
  whyHeading: {
    en: 'Why Alan Apire',
    ar: 'لماذا آلان أپاير',
    ru: 'Почему Alan Apire',
  },
  why: {
    en: [
      {
        title: 'Engineering Substance, Not Theoretical Advice',
        desc: 'Our practitioners have sat in the planning meetings, walked the construction sites, and managed the contractor interfaces on real refinery, utility, and infrastructure projects across Russia and Europe. When we advise on hydrocracking project governance or HDPE pipeline rehabilitation, we are drawing on first-hand delivery experience — not textbook methodology.'
      },
      {
        title: 'Three Licences. One Contract.',
        desc: 'Alan Apire holds three directly licensed activities under its DIEZ FZCO registration: management consultancies, project management services, and architectural prospective drawings services. Clients in the UAE do not need to engage a separate engineering firm, a separate drawing office, and a separate PM company — we cover all three scopes under a single accountable entity.'
      },
      {
        title: 'Disciplined Project Governance From Day One',
        desc: 'Every assignment begins with a written Project Definition Report. Every execution phase runs against a documented baseline schedule and risk register. Every week, clients receive a structured progress report. This level of governance discipline — standard on every Alan Apire project — is typically reserved for megaprojects at larger firms.'
      },
      {
        title: 'Russian, European, and UAE Project Track Record',
        desc: 'Industrial projects in the UAE and GCC frequently involve CIS-origin engineering standards, Russian-manufactured equipment, and Russian-speaking technical counterparts. Our multilingual team (EN · AR · RU) bridges the technical and communication gap that purely Western or purely regional firms struggle to navigate.'
      },
    ],
    ar: [
      {
        title: 'مادة هندسية حقيقية، لا نصائح نظرية',
        desc: 'حضر ممارسونا اجتماعات التخطيط، وجالوا في مواقع البناء، وأداروا واجهات المقاولين في مشاريع حقيقية للمصافي والمرافق والبنية التحتية في روسيا وأوروبا. حين نقدم المشورة بشأن حوكمة مشاريع التكسير الهيدروجيني أو إعادة تأهيل خطوط أنابيب HDPE، فإننا نستند إلى خبرة تنفيذية مباشرة — لا إلى منهجية من الكتب المدرسية.'
      },
      {
        title: 'ثلاثة تراخيص. عقد واحد.',
        desc: 'تمتلك آلان أپاير ثلاثة أنشطة مرخصة مباشرةً ضمن تسجيلها كـ FZCO تحت سلطة DIEZ: الاستشارات الإدارية، وخدمات إدارة المشاريع، وخدمات الرسومات المعمارية الاستشرافية. لا يحتاج العملاء في الإمارات إلى الاستعانة بشركة هندسية منفصلة ومكتب رسوم منفصل وشركة إدارة مشاريع منفصلة — نغطي النطاقات الثلاثة ضمن كيان واحد مسؤول.'
      },
      {
        title: 'انضباط حوكمة المشاريع منذ اليوم الأول',
        desc: 'يبدأ كل مشروع بتقرير تعريف مكتوب. تسير كل مرحلة تنفيذية وفق جدول زمني أساسي موثق وسجل مخاطر. يتلقى العملاء كل أسبوع تقريرًا منظمًا عن التقدم. هذا المستوى من انضباط الحوكمة — المعياري في كل مشروع لآلان أپاير — عادةً ما يُحتجز للمشاريع العملاقة في الشركات الكبرى.'
      },
      {
        title: 'سجل مشاريع في روسيا وأوروبا والإمارات',
        desc: 'كثيرًا ما تتضمن المشاريع الصناعية في الإمارات ودول مجلس التعاون معايير هندسية من دول الكومنولث المستقل ومعدات روسية الصنع وشركاء تقنيين يتحدثون الروسية. يسدّ فريقنا متعدد اللغات (الإنجليزية · العربية · الروسية) الفجوة الفنية والتواصلية التي تعاني منها الشركات الغربية البحتة أو الإقليمية البحتة.'
      },
    ],
    ru: [
      {
        title: 'Инженерное содержание, а не теоретические советы',
        desc: 'Наши специалисты-практики присутствовали на плановых совещаниях, обходили строительные площадки и управляли интерфейсами подрядчиков на реальных проектах НПЗ, коммунальной инфраструктуры в России и Европе. Когда мы консультируем по проектному управлению установками гидрокрекинга или реабилитации ПНД-трубопровода, мы опираемся на непосредственный исполнительский опыт — а не на учебниковую методологию.'
      },
      {
        title: 'Три лицензии. Один договор.',
        desc: 'Alan Apire располагает тремя напрямую лицензированными видами деятельности в рамках регистрации FZCO под DIEZ: управленческий консалтинг, услуги управления проектами и услуги перспективных архитектурных чертежей. Клиентам в ОАЭ не нужно привлекать отдельную инжиниринговую компанию, отдельное проектное бюро и отдельную компанию по управлению проектами — мы охватываем все три области в рамках единого ответственного юридического лица.'
      },
      {
        title: 'Дисциплина проектного управления с первого дня',
        desc: 'Каждый проект начинается с письменного Отчёта об определении проекта. Каждый этап исполнения ведётся по задокументированному базовому календарному плану и реестру рисков. Каждую неделю клиенты получают структурированный отчёт о ходе работ. Такой уровень управленческой дисциплины — стандарт для каждого проекта Alan Apire — в крупных компаниях обычно применяется только к мегапроектам.'
      },
      {
        title: 'Опыт проектов в России, Европе и ОАЭ',
        desc: 'Промышленные проекты в ОАЭ и странах ССАГПЗ нередко предусматривают стандарты проектирования СНГ, оборудование российского производства и русскоязычных технических контрагентов. Наша многоязычная команда (EN · AR · RU) устраняет технический и коммуникационный разрыв, с которым с трудом справляются чисто западные или чисто региональные компании.'
      },
    ],
  },
  cta: {
    headline: {
      en: 'Have an Industrial or Infrastructure Project to Deliver?',
      ar: 'لديك مشروع صناعي أو بنية تحتية لتنفيذه؟',
      ru: 'Есть промышленный или инфраструктурный проект к реализации?',
    },
    sub: {
      en: 'Tell us about your project — sector, location, timeline, and scope. Our team will review the parameters and outline a structured project management or technical advisory approach within 48 hours.',
      ar: 'أخبرنا عن مشروعك — القطاع والموقع والجدول الزمني والنطاق. سيراجع فريقنا المعطيات ويضع نهجًا منظمًا لإدارة المشاريع أو الاستشارات الفنية خلال 48 ساعة.',
      ru: 'Расскажите нам о вашем проекте — сектор, локация, сроки и объём. Наша команда оценит параметры и изложит структурированный подход к управлению проектом или техническому консалтингу в течение 48 часов.',
    },
    button: { en: 'Discuss a Project', ar: 'ناقش مشروعك', ru: 'Обсудить проект' },
  },
} as const;

// ─── HEADER / SHARED CTA ─────────────────────────────────────────────────────
// Alias kept for Header.astro + Page.astro. Single source of truth lives in
// HOME.hero.primaryCta / HOME.cta.button (identical copy) — do not duplicate.
export const CTA_LABEL = HOME.hero.primaryCta;

// ─── COMPATIBILITY SHIMS (layouts import these names) ────────────────────────
// Footer section headings — reuse the HOME section headings as source of truth.
export const FOOTER_COPY = {
  pillarsHeading: HOME.pillarsHeading,
  sectorsHeading: HOME.sectorsHeading,
} as const;

// Contact page headings — concise trilingual literals (no other source exists).
export const CONTACT_COPY = {
  heading: {
    en: 'Contact Us',
    ar: 'اتصل بنا',
    ru: 'Свяжитесь с нами',
  },
  intro: {
    en: 'Tell us about your project — sector, location, timeline, and scope. We respond within 48 hours.',
    ar: 'أخبرنا عن مشروعك — القطاع والموقع والجدول الزمني والنطاق. نرد خلال 48 ساعة.',
    ru: 'Расскажите о вашем проекте — сектор, локация, сроки и объём. Ответим в течение 48 часов.',
  },
  detailsHeading: {
    en: 'Our Details',
    ar: 'بياناتنا',
    ru: 'Наши данные',
  },
} as const;

// Industries section intro — reuse HOME.sectorsIntro as source of truth.
export const INDUSTRIES_COPY = {
  intro: HOME.sectorsIntro,
} as const;

// Projects index notice + case-study disclosure.
export const PROJECTS_COPY = {
  notice: {
    en: 'Selected project experience of our advisory team. Client names are held confidential where commercially required.',
    ar: 'خبرات مختارة لفريقنا الاستشاري. تُحفظ أسماء العملاء سرية حيث يقتضي ذلك تجاريًا.',
    ru: 'Избранный проектный опыт нашей консультационной команды. Имена клиентов конфиденциальны там, где это коммерчески необходимо.',
  },
  disclosure: {
    en: 'Case studies reflect verified delivery assignments of our advisory team. Client names are withheld where confidentiality applies.',
    ar: 'تعكس دراسات الحالة مهام تنفيذ موثقة لفريقنا الاستشاري. تُحجب أسماء العملاء حيث تنطبق السرية.',
    ru: 'Кейсы отражают подтверждённые задания нашей консультационной команды. Имена клиентов не раскрываются по условиям конфиденциальности.',
  },
} as const;

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
// 📷 PHOTO PLACEMENTS — ABOUT:
//   about-office.jpg     → Company profile section (Dubai skyline / DIEZ zone, 16:9)
//   about-history.jpg    → History section (industrial site, Russia/Europe, 4:3)
//   about-model.jpg      → Operating model section (team working, 4:3)

export const ABOUT = {
  positioning: {
    en: 'Engineering knowledge. Project discipline. Practical delivery.',
    ar: 'معرفة هندسية. انضباط في المشاريع. تنفيذ عملي.',
    ru: 'Инженерные знания. Проектная дисциплина. Практическая реализация.',
  },
  corpHeading: {
    en: 'Corporate Information',
    ar: 'المعلومات المؤسسية',
    ru: 'Корпоративная информация',
  },
  legalEntityLabel: {
    en: 'Legal Entity',
    ar: 'الكيان القانوني',
    ru: 'Юридическое лицо',
  },
  legalEntity: 'ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO',
  jurisdictionLabel: {
    en: 'Jurisdiction',
    ar: 'الاختصاص',
    ru: 'Юрисдикция',
  },
  jurisdiction: {
    en: 'Dubai Integrated Economic Zones Authority (DIEZ), Dubai, UAE',
    ar: 'سلطة دبي للمناطق الاقتصادية المتكاملة (دايز)، دبي، الإمارات',
    ru: 'Dubai Integrated Economic Zones Authority (DIEZ), Дубай, ОАЭ',
  },
  licensedLabel: {
    en: 'Licensed Activities',
    ar: 'الأنشطة المرخصة',
    ru: 'Лицензированные виды деятельности',
  },
  licensed: {
    en: ['Management consultancies', 'Project management services', 'Architectural prospective drawings services'],
    ar: ['الاستشارات الإدارية', 'خدمات إدارة المشاريع', 'خدمات الرسومات المعمارية الاستشرافية'],
    ru: ['Управленческий консалтинг', 'Услуги управления проектами', 'Услуги перспективных архитектурных чертежей'],
  },
  operatingHeading: {
    en: 'Our Operating Model',
    ar: 'نموذج عملنا',
    ru: 'Наша операционная модель',
  },
  operating: {
    en: 'One contract, one accountable team, and one point of escalation across the entire technical scope of your project.',
    ar: 'عقد واحد وفريق واحد مسؤول ونقطة تصعيد واحدة عبر النطاق الفني بأكمله لمشروعك.',
    ru: 'Один договор, одна ответственная команда и одна точка эскалации по всему техническому объёму вашего проекта.',
  },
  profile: {
    en: [
      'ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO is an engineering and project delivery consultancy established and licensed under the Dubai Integrated Economic Zones Authority (DIEZ), operating as a Free Zone Company (FZCO) in Dubai, United Arab Emirates.',
      'The company was founded to address a specific gap in the GCC industrial consultancy market: the shortage of advisory firms that combine genuine engineering-level technical understanding with rigorous project management discipline. Most consultancies in the region either offer senior strategic advisory without execution depth, or execution-level services without the technical substance to challenge and improve contractor outputs. Alan Apire was built to do both.',
      'Our advisory team brings direct, hands-on delivery experience from large-scale industrial projects in the Russian and European markets — including refinery modernisation programmes, district heating network expansions, power station auxiliary system upgrades, municipal water infrastructure rehabilitation, and manufacturing facility developments. This experience is now deployed from Dubai to serve clients across the UAE, GCC, and international markets.',
    ],
    ar: [
      'آلان وأپاير للاستشارات الإدارية – ش.ذ.م.م منطقة حرة هي شركة استشارات هندسية وتسليم مشاريع مرخصة من قِبل سلطة دبي للمناطق الاقتصادية المتكاملة (دايز)، تعمل كشركة منطقة حرة (FZCO) في دبي، الإمارات العربية المتحدة.',
      'تأسست الشركة لمعالجة فجوة محددة في سوق الاستشارات الصناعية في منطقة الخليج: شُح شركات الاستشارات التي تجمع بين فهم هندسي تقني حقيقي وانضباط صارم في إدارة المشاريع.',
      'يجمع فريقنا الاستشاري بين خبرة تنفيذية مباشرة من مشاريع صناعية واسعة النطاق في الأسواق الروسية والأوروبية وبين الانضباط التسليمي المنظم الذي تستلزمه التطورات الصناعية المعقدة اليوم في الإمارات ودول مجلس التعاون الخليجي والأسواق الدولية.',
    ],
    ru: [
      'ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO — консалтинговая компания в сфере инжиниринга и реализации проектов, учреждённая и лицензированная Dubai Integrated Economic Zones Authority (DIEZ), действующая как Free Zone Company (FZCO) в Дубае, Объединённые Арабские Эмираты.',
      'Компания была основана для устранения конкретного пробела на рынке промышленного консалтинга ГКС: нехватки консультационных фирм, сочетающих подлинное инженерное техническое понимание со строгой дисциплиной управления проектами.',
      'Наша консультационная команда привносит непосредственный практический опыт реализации крупных промышленных проектов на российских и европейских рынках в работу с клиентами в ОАЭ, странах ССАГПЗ и на международных рынках.',
    ],
  },
};
