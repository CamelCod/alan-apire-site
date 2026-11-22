import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const i18nDir = path.join(__dirname, '../src/content/i18n');

if (!fs.existsSync(i18nDir)) {
  fs.mkdirSync(i18nDir, { recursive: true });
}

// Master English content
const en = {
  brand: {
    name: "ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO",
    shortName: "Alanpire",
    licenceNumber: "88988",
    authority: "DIEZA / IFZA, Dubai Silicon Oasis",
    validity: "09 June 2026 – 08 June 2027",
    activities: "Management Consultancies · Project Management Services · Architectural Prospective Drawings",
    email: "info@alanapire.ae",
    phone: "+971558286328",
    address: "Dubai Integrated Economic Zones Authority (DIEZ), Dubai, United Arab Emirates"
  },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    industries: "Industries",
    contact: "Contact",
    cta: "Discuss your project"
  },
  meta: {
    home: {
      title: "Industrial Engineering Support Dubai | Alanpire",
      description: "Project management, technical consultancy, and architectural prospective drawings for industrial infrastructure in Dubai and the UAE."
    },
    about: {
      title: "About Alanpire | Technical Management Consultancies Dubai",
      description: "Alanpire is an IFZA-licensed technical consultancy in Dubai Silicon Oasis providing project management and engineering advisory."
    },
    services: {
      title: "Project Management & Engineering Advisory | Alanpire",
      description: "Critical-path scheduling, hydraulic modelling, bid evaluation, and architectural prospective drawings for industrial facilities."
    },
    industries: {
      title: "Industrial Sectors | Alanpire",
      description: "Technical support for power generation, thermal networks, water transmission, petrochemicals, and manufacturing plants."
    },
    projects: {
      title: "Engineering References and Track Record | Alanpire",
      description: "Documented engineering deliverables from team members, including district heating mains and autonomous boiler facilities."
    },
    team: {
      title: "Technical Leadership | Alanpire",
      description: "Registered chief project engineers and operational managers providing industrial project support in Dubai."
    },
    careers: {
      title: "Careers | Alanpire",
      description: "Technical career opportunities in industrial project management and prospective engineering drawings."
    },
    contact: {
      title: "Contact Alanpire | Dubai Engineering Support",
      description: "Submit project parameters to our technical consultancy team in Dubai Silicon Oasis."
    },
    privacy: {
      title: "Privacy Policy | Alanpire",
      description: "Privacy policy for the Alanpire corporate website."
    },
    terms: {
      title: "Terms and Conditions | Alanpire",
      description: "Terms and conditions for the Alanpire corporate website."
    }
  },
  hero: {
    eyebrow: "Specialist technical partner · Dubai Integrated Economic Zones Authority (DIEZ)",
    headline: "Specialist industrial engineering support for UAE projects",
    sub: "Alanpire provides project management, technical consultancy, and architectural drawings. Our engineers deliver planning, modelling, and technical coordination under the supervision of your licensed UAE consultant.",
    primaryCta: "Discuss your project",
    secondaryCta: "View case studies"
  },
  pillars: {
    heading: "Four Licensed Service Areas",
    intro: "We provide technical engineering support under three directly licensed categories in Dubai, coordinating deliverables with client-appointed consultants.",
    items: [
      {
        key: "pm",
        num: "01",
        title: "Project Management",
        tagline: "Baseline scheduling and contractor interface coordination.",
        desc: "We build critical-path schedules in Primavera P6 and administer live risk registers. Our team verifies site progress weekly and coordinates interfaces across trade contractors.",
        deliverables: [
          "Critical-path baseline schedules in Primavera P6 format",
          "Weekly risk register updates and mitigation tracking",
          "Multi-contractor interface matrices and coordination meetings",
          "Independent weekly site progress verification reports",
          "Document control, submittal tracking, and technical logs",
          "Testing and commissioning close-out packages"
        ]
      },
      {
        key: "tech",
        num: "02",
        title: "Technical Consultancy",
        tagline: "Process modelling, hydraulic calculations, and bid evaluations.",
        desc: "We evaluate equipment specifications, verify hydraulic calculations, and draft tender packages. Our engineers analyse system constraints across district heating networks, pumping stations, and industrial facilities.",
        deliverables: [
          "Thermal and hydraulic network modelling",
          "Process equipment specifications and datasheet reviews",
          "Tender technical evaluations and contractor bid scoring",
          "Existing utility condition assessments and defect logs",
          "Materials compatibility assessments for high-pressure systems",
          "System integration reviews for multi-unit industrial plants"
        ]
      },
      {
        key: "drawings",
        num: "03",
        title: "Architectural Drawings",
        tagline: "Prospective architectural layouts and industrial arrangement plans.",
        desc: "Our DIEZ-licensed service drafts prospective architectural drawings and industrial layouts. We produce equipment arrangements, utility routing corridors, and spatial zoning schemes.",
        deliverables: [
          "Prospective architectural layouts for industrial buildings",
          "Industrial equipment arrangement and zoning drawings",
          "Utility corridor alignment and pipe-rack routing plans",
          "Preliminary space-planning layouts for plant operators",
          "Drawing package coordination and revision control",
          "Concept layouts for client and stakeholder reviews"
        ]
      },
      {
        key: "management",
        num: "04",
        title: "Management Consultancy",
        tagline: "Capital planning, stage-gate reviews, and procurement advisory.",
        desc: "We analyse industrial operating workflows and prepare project governance frameworks. Our consultants evaluate capital expenditure budgets and support dispute resolution with technical documentation.",
        deliverables: [
          "Capital expenditure planning and stage-gate reviews",
          "Project governance frameworks and delegation matrices",
          "Contractor dispute analysis and technical claim documentation",
          "Operational readiness reviews before facility handover",
          "Technical due diligence for industrial asset transactions",
          "Procurement packaging strategies for major equipment"
        ]
      }
    ]
  },
  trust: {
    heading: "Licensing and Technical Qualifications",
    intro: "Alanpire operates under trade licence No. 88988 issued by DIEZ. Technical credentials reflect documented project history by team practitioners.",
    items: [
      {
        label: "UAE Trade Licence",
        value: "DIEZ / IFZA Licence No. 88988",
        detail: "Management Consultancies · Architectural Drawings · Project Management. Valid to 08 June 2027."
      },
      {
        label: "Engineering Reference Approval",
        value: "Conclusion No. 66-1-1-3-028194-2026",
        detail: "Gosexpertiza positive conclusion on 10.5 MWth boiler plant design and survey package. Approved 18 June 2026."
      },
      {
        label: "Design Accreditation (SRO)",
        value: "Reg. P-161-005611025054-2471",
        detail: "Association Mezhregionproekt. Design of capital and industrial facilities via OOO Energodiagnostika."
      },
      {
        label: "Survey Accreditation (SRO)",
        value: "Extract 5611025054-20250325-0804",
        detail: "Geodetic, geological, hydrometeorological, and environmental surveys for engineering designs."
      },
      {
        label: "Chief Project Engineer",
        value: "NOPRIZ Register PI-114432",
        detail: "National register qualification for chief project engineering and statutory technical documentation."
      },
      {
        label: "UAE Operational Model",
        value: "Technical Support Partner",
        detail: "Engineering calculations and drawings delivered to client-appointed licensed UAE engineering consultants."
      }
    ]
  },
  sectors: {
    heading: "Five Industrial Sectors",
    intro: "Our technical experience spans heavy utility, industrial generation, and fluid transport systems.",
    items: [
      {
        title: "Power and Energy Generation",
        desc: "Technical coordination for generation halls, cooling loops, auxiliary piping, and plant expansion programs."
      },
      {
        title: "District Heating and Thermal Utilities",
        desc: "Hydraulic network modelling, thermal expansion compensation, pressure regulation stations, and custody metering nodes."
      },
      {
        title: "Water Infrastructure",
        desc: "Transmission main rehabilitation, pipe material evaluation, pump station hydraulic design, and interface coordination."
      },
      {
        title: "Oil Refining and Petrochemicals",
        desc: "Process unit coordination, piping isometric review, equipment layout schemes, and contractor package governance."
      },
      {
        title: "Industrial Facilities and Manufacturing",
        desc: "Spatial planning, equipment foundation coordinates, utility corridors, and building layout drawings."
      }
    ]
  },
  process: {
    heading: "Five-Stage Delivery Method",
    intro: "Each technical engagement follows a five-stage delivery method with written deliverables at each milestone.",
    items: [
      {
        num: "01",
        title: "Understand",
        desc: "We review existing technical documentation, boundary limits, and statutory constraints to define assignment scope."
      },
      {
        num: "02",
        title: "Define",
        desc: "We establish the baseline schedule, calculation criteria, document submission register, and interface matrix."
      },
      {
        num: "03",
        title: "Coordinate",
        desc: "We resolve contractor technical queries, check drawing revisions, and conduct weekly technical review sessions."
      },
      {
        num: "04",
        title: "Deliver",
        desc: "We produce progress tracking dashboards, evaluate earned-value milestones, and submit verified calculation packages."
      },
      {
        num: "05",
        title: "Close",
        desc: "We assemble as-built drawing sets, review punch-list close-outs, and compile operations handover dossiers."
      }
    ]
  },
  featuredProjects: {
    heading: "Selected Project References",
    intro: "Documented engineering packages completed by our personnel through OOO Energodiagnostika prior to UAE entity establishment.",
    viewCase: "View case"
  },
  caseStudy: {
    factStrip: {
      client: "Client Context",
      location: "Location",
      stage: "Project Stage",
      role: "Team Role",
      keyFigures: "Key Figures",
      record: "Statutory Record"
    },
    sections: {
      contribution: "Engineering Contribution",
      drawing: "Design-Stage Drawing Excerpt",
      approval: "Approval and Compliance Record",
      attribution: "Mandatory Reference Attribution",
      contact: "Discuss a Similar Package"
    },
    viewCase: "View case",
    drawingCaption: "Design-stage drawing excerpt",
    drawingSource: "Source: Working documentation archive, OOO Energodiagnostika."
  },
  about: {
    positioning: "Technical consultancy, project management, and prospective architectural drawings for industrial infrastructure.",
    profile: [
      "Alanpire operates as an IFZA-licensed free zone company under the Dubai Integrated Economic Zones Authority (DIEZ).",
      "Our engineers bring technical experience from heavy industrial facilities, district heating networks, and high-pressure utilities in the CIS region.",
      "In the UAE, our team coordinates with client-appointed, licensed engineering consultants who hold local statutory authority and site supervision remits."
    ],
    corpHeading: "Corporate Registration",
    legalEntityLabel: "Legal Entity Name",
    legalEntity: "ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO",
    jurisdictionLabel: "Jurisdiction",
    jurisdiction: "DIEZA / IFZA, Dubai Silicon Oasis, Dubai, UAE",
    licensedLabel: "Licensed Activities",
    licensed: [
      "Management Consultancies",
      "Project Management Services",
      "Architectural Prospective Drawings"
    ],
    operatingHeading: "Operating Framework in the UAE",
    operating: "Alanpire provides technical analysis, project management services, and architectural prospective drawings. In the UAE, client contracts, statutory authority submissions, engineering stamps, and site supervision remain under client-appointed, locally licensed consultants.",
    brochureHeading: "Capability Portfolio",
    brochureSub: "Download our technical summary covering service scopes, engineering tools, and documented reference projects.",
    brochureBtn: "Download PDF"
  },
  team: {
    heading: "Technical Leadership",
    intro: "Our management and engineering team brings multidisciplinary experience across energy facilities and project governance.",
    members: [
      {
        name: "Alan Marvanovich Biri",
        role: "Chief Project Engineer",
        bio: "Registered chief project engineer (NOPRIZ PI-114432) and technical director at OOO Energodiagnostika. Leads multidisciplinary engineering coordination and statutory documentation for thermal networks and boiler plants."
      },
      {
        name: "Andrei Stepanov",
        role: "General Manager",
        bio: "Executive in commercial operations, capital governance, and project structuring. Leads corporate management, contract administration, and project delivery frameworks."
      },
      {
        name: "Aiham Alhawar",
        role: "Technical Advisor",
        bio: "Mechanical engineer with experience in energy facilities, ISO 9001 and API quality systems, reliability assessments, and contractor interface coordination."
      }
    ]
  },
  cta: {
    heading: "Have an industrial project to deliver?",
    sub: "Send us your project scope, location, and key parameters. Our team will review your requirements and outline a technical support proposal.",
    button: "Discuss your project"
  },
  attribution: {
    statement: "These references reflect prior engineering work by Alanpire team members through OOO Energodiagnostika in Russia. They were not contracts awarded to Alanpire's UAE entity."
  },
  contact: {
    heading: "Contact Alanpire",
    sub: "Our team reviews industrial project parameters and provides technical support proposals.",
    nameLabel: "Full Name",
    companyLabel: "Company Name",
    emailLabel: "Work Email",
    phoneLabel: "Phone Number",
    locationLabel: "Project Location",
    scopeLabel: "Project Scope and Parameters",
    sendButton: "Submit Inquiry"
  },
  footer: {
    entityName: "ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO",
    licenceText: "DIEZ Trade Licence No. 88988 · Dubai Silicon Oasis, Dubai, UAE",
    rights: "All rights reserved."
  },
  projectsIndex: {
    notice: "These references reflect prior engineering work by Alanpire team members through OOO Energodiagnostika in Russia. They were not contracts awarded to Alanpire's UAE entity.",
    emptyNotice: "Additional project case studies are currently undergoing technical archive audit."
  }
};

// Mirroring Arabic translation matching EN sentence-by-sentence
const ar = {
  brand: {
    name: "ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO",
    shortName: "ألانباير",
    licenceNumber: "88988",
    authority: "DIEZA / IFZA, Dubai Silicon Oasis",
    validity: "09 June 2026 – 08 June 2027",
    activities: "الاستشارات الإدارية · خدمات إدارة المشاريع · الرسومات المعمارية المنظورية",
    email: "info@alanapire.ae",
    phone: "+971558286328",
    address: "سلطة دبي للمناطق الاقتصادية المتكاملة (دييز)، دبي، الإمارات العربية المتحدة"
  },
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    projects: "المشاريع",
    industries: "القطاعات",
    contact: "اتصل بنا",
    cta: "ناقش مشروعك"
  },
  meta: {
    home: {
      title: "دعم هندسي صناعي في دبي | ألانباير",
      description: "إدارة المشاريع والاستشارات الفنية والرسومات المعمارية المنظورية للبنية التحتية الصناعية في دبي والإمارات."
    },
    about: {
      title: "من نحن | استشارات إدارية وفنية في دبي | ألانباير",
      description: "ألانباير شركة استشارات مرخصة في واحة دبي للسيليكون تقدم إدارة المشاريع والاستشارات الهندسية."
    },
    services: {
      title: "إدارة المشاريع والاستشارات الهندسية | ألانباير",
      description: "جدولة المسار الحرج والنمذجة الهيدروليكية وتقييم العطاءات والرسومات المعمارية المنظورية للمنشآت الصناعية."
    },
    industries: {
      title: "القطاعات الصناعية | ألانباير",
      description: "دعم فني لتوليد الطاقة وشبكات التدفئة ونقل المياه والبتروكيماويات ومصانع الإنتاج."
    },
    projects: {
      title: "المراجع الهندسية وسجل الأعمال | ألانباير",
      description: "مخرجات هندسية موثقة من أعضاء الفريق، تشمل خطوط التدفئة المركزية ومحطات الغلايات المستقلة."
    },
    team: {
      title: "القيادة الفنية | ألانباير",
      description: "كبار مهندسي المشاريع ومديرو العمليات لتقديم الدعم للمشاريع الصناعية في دبي."
    },
    careers: {
      title: "الوظائف | ألانباير",
      description: "فرص مهنية فنية في إدارة المشاريع الصناعية والرسومات الهندسية المنظورية."
    },
    contact: {
      title: "اتصل بألانباير | دعم هندسي في دبي",
      description: "أرسل معايير مشروعك إلى فريق الاستشارات الفنية في واحة دبي للسيليكون."
    },
    privacy: {
      title: "سياسة الخصوصية | ألانباير",
      description: "سياسة الخصوصية للموقع المؤسسي لشركة ألانباير."
    },
    terms: {
      title: "الشروط والأحكام | ألانباير",
      description: "الشروط والأحكام للموقع المؤسسي لشركة ألانباير."
    }
  },
  hero: {
    eyebrow: "شريك فني متخصص · سلطة دبي للمناطق الاقتصادية المتكاملة (دييز)",
    headline: "دعم هندسي صناعي متخصص للمشاريع في دولة الإمارات",
    sub: "تقدم ألانباير خدمات إدارة المشاريع والاستشارات الفنية والرسومات المعمارية. يقدم مهندسونا التخطيط والنمذجة والتنسيق الفني تحت إشراف استشارك المرخص في الإمارات.",
    primaryCta: "ناقش مشروعك",
    secondaryCta: "عرض دراسات الحالة"
  },
  pillars: {
    heading: "أربعة مجالات خدمات مرخصة",
    intro: "نقدم الدعم الهندسي الفني ضمن ثلاث فئات مرخصة في دبي، بالتنسيق مع الاستشاريين المعينين من قبل العملاء.",
    items: [
      {
        key: "pm",
        num: "01",
        title: "إدارة المشاريع",
        tagline: "جدولة الخط الأساسي وتنسيق واجهات المقاولين.",
        desc: "نبني جداول المسار الحرج في برنامج بريمافيرا P6 وندير سجلات المخاطر المباشرة. يتحقق فريقنا من تقدم الموقع أسبوعياً وينسق الواجهات بين المقاولين.",
        deliverables: [
          "جداول زمنية أساسية للمسار الحرج بصيغة بريمافيرا P6",
          "تحديثات أسبوعية لسجل المخاطر وتتبع إجراءات التخفيف",
          "مصفوفات واجهات المقاولين المتعددين واجتماعات التنسيق",
          "تقارير أسبوعية مستقلة للتحقق من تقدم الأعمال في الموقع",
          "ضبط الوثائق وتتبع المعاملات والسجلات الفنية",
          "حزم الإغلاق النهائي للاختبارات والتشغيل التجريبي"
        ]
      },
      {
        key: "tech",
        num: "02",
        title: "الاستشارات الفنية",
        tagline: "نمذجة العمليات والحسابات الهيدروليكية وتقييم العطاءات.",
        desc: "نقيّم مواصفات المعدات ونتحقق من الحسابات الهيدروليكية ونعد وثائق المناقصات. يحلل مهندسونا محددات الأنظمة عبر شبكات التدفئة ومحطات الضخ والمنشآت الصناعية.",
        deliverables: [
          "النمذجة الحرارية والهيدروليكية لشبكات الأنابيب",
          "مراجعة مواصفات معدات العمليات وجداول البيانات الفنية",
          "التقييم الفني للمناقصات وتسجيل عروض المقاولين",
          "تقييم حالة المرافق القائمة وسجلات حصر العيوب",
          "تقييم توافق المواد للأنظمة العاملة تحت الضغط العالي",
          "مراجعات تكامل الأنظمة للمنشآت الصناعية متعددة الوحدات"
        ]
      },
      {
        key: "drawings",
        num: "03",
        title: "الرسومات المعمارية",
        tagline: "مخططات معمارية منظورية وخطط ترتيب المعدات الصناعية.",
        desc: "تتولى خدماتنا المرخصة في دييز إعداد الرسومات المعمارية المنظورية والمخططات الصناعية. ننتج ترتيبات المعدات ومسارات خطوط المرافق ومخططات تقسيم المساحات.",
        deliverables: [
          "مخططات معمارية منظورية للمباني الصناعية",
          "رسومات ترتيب المعدات الصناعية وتقسيم المناطق التشغيلية",
          "مخططات محاذاة مسارات المرافق وحوامل الأنابيب",
          "مخططات أولية لتخطيط المساحات لمشغلي المحطات",
          "تنسيق حزم الرسومات والتحكم في المراجعات والتعديلات",
          "مخططات مفاهيمية لمراجعات العملاء والجهات المعنية"
        ]
      },
      {
        key: "management",
        num: "04",
        title: "الاستشارات الإدارية",
        tagline: "تخطيط النفقات الرأسمالية ومراجعات المراحل واستشارات المشتريات.",
        desc: "نحلل تدفقات العمليات الصناعية ونعد أطر حوكمة المشاريع. يقيّم مستشارونا ميزانيات النفقات الرأسمالية ويدعمون تسوية النزاعات بوثائق فنية مثبتة.",
        deliverables: [
          "تخطيط النفقات الرأسمالية ومراجعات بوابات المراحل",
          "أطر حوكمة المشاريع ومصفوفات تفويض الصلاحيات",
          "تحليل نزاعات المقاولين وتوثيق المطالبات الفنية",
          "مراجعات الجاهزية التشغيلية قبل تسليم المنشأة",
          "الفحص الفني النافي للجهالة لصفقات الأصول الصناعية",
          "استراتيجيات حزم المشتريات للمعدات الرئيسية"
        ]
      }
    ]
  },
  trust: {
    heading: "التراخيص والمؤهلات الفنية",
    intro: "تعمل ألانباير بموجب رخصة تجارية رقم 88988 صادرة عن دييز. تعكس المؤهلات الفنية سجل مشاريع موثق لممارسي الفريق.",
    items: [
      {
        label: "الرخصة التجارية في الإمارات",
        value: "DIEZ / IFZA Licence No. 88988",
        detail: "استشارات إدارية · رسومات معمارية · إدارة مشاريع. سارية حتى 08 يونيو 2027."
      },
      {
        label: "اعتماد مراجع الهندسة",
        value: "Conclusion No. 66-1-1-3-028194-2026",
        detail: "تقرير إيجابي من هيئة الخبرة الحكومية الروسية لتصميم ومسح محطة غلايات 10.5 ميجاوات حراري. اعتمد 18 يونيو 2026."
      },
      {
        label: "اعتماد التصميم الهندسي (SRO)",
        value: "Reg. P-161-005611025054-2471",
        detail: "جمعية ميجريجيون برويكت. تصميم المنشآت الرأسمالية والصناعية عبر شركة إنرجودياغنوستيكا."
      },
      {
        label: "اعتماد المسوحات الهندسية (SRO)",
        value: "Extract 5611025054-20250325-0804",
        detail: "مسوحات جيوديسية وجيولوجية وهيدرومناخية وبيئية للتصاميم الهندسية."
      },
      {
        label: "كبير مهندسي المشاريع",
        value: "NOPRIZ Register PI-114432",
        detail: "مؤهل السجل الوطني الروسي لإدارة الهندسة وإعداد الوثائق الفنية الرسمية."
      },
      {
        label: "نموذج العمل في الإمارات",
        value: "شريك دعم فني",
        detail: "تسليم الحسابات الهندسية والرسومات لاستشاريي الهندسة المرخصين والمعينين من العميل في الإمارات."
      }
    ]
  },
  sectors: {
    heading: "خمسة قطاعات صناعية",
    intro: "تمتد خبرتنا الفنية عبر المرافق الثقيلة والتوليد الصناعي وأنظمة نقل السوائل.",
    items: [
      {
        title: "توليد الطاقة والكهرباء",
        desc: "التنسيق الفني لقاعات التوليد وحلقات التبريد والأنابيب المساعدة وبرامج توسعة المحطات."
      },
      {
        title: "التدفئة المركزية والمرافق الحرارية",
        desc: "نمذجة الشبكات الهيدروليكية، تعويض التمدد الحراري، محطات تنظيم الضغط، ونقاط القياس الرئيسية."
      },
      {
        title: "البنية التحتية للمياه",
        desc: "إعادة تأهيل خطوط النقل الرئيسية، تقييم مواد الأنابيب، التصميم الهيدروليكي لمحطات الضخ، وتنسيق الواجهات."
      },
      {
        title: "تكرير النفط والبتروكيماويات",
        desc: "تنسيق وحدات المعالجة، مراجعة مخططات الأيزومتريك للأنابيب، مخططات ترتيب المعدات، وحوكمة حزم المقاولين."
      },
      {
        title: "المنشآت الصناعية والتصنيع",
        desc: "التخطيط المكاني، إحداثيات قواعد المعدات، ممرات المرافق العامة، ورسومات تخطيط المباني."
      }
    ]
  },
  process: {
    heading: "منهجية تسليم من خمس مراحل",
    intro: "تتبع كل مهمة فنية منهجية من خمس مراحل مع مخرجات كتابية محددة عند كل مرحلة رئيسية.",
    items: [
      {
        num: "01",
        title: "الفهم",
        desc: "نراجع الوثائق الفنية القائمة وحدود الموقع والضوابط القانونية لتحديد نطاق المهمة."
      },
      {
        num: "02",
        title: "التحديد",
        desc: "نحدد الجدول الزمني الأساسي ومعايير الحسابات وسجل تقديم الوثائق ومصفوفة الواجهات."
      },
      {
        num: "03",
        title: "التنسيق",
        desc: "نحل الاستفسارات الفنية للمقاولين وندقق مراجعات الرسومات ونعقد جلسات مراجعة فنية أسبوعية."
      },
      {
        num: "04",
        title: "التسليم",
        desc: "نعد لوحات متابعة التقدم ونقيّم معالم القيمة المكتسبة ونسلّم حزم الحسابات المعتمدة."
      },
      {
        num: "05",
        title: "الإغلاق",
        desc: "نجمع مجموعات الرسومات كما نُفّذت وندقق إغلاق قوائم الملاحظات ونعد ملفات التسليم التشغيلي."
      }
    ]
  },
  featuredProjects: {
    heading: "مشاريع مرجعية مختارة",
    intro: "حزم هندسية موثقة أنجزها كادرنا عبر شركة إنرجودياغنوستيكا قبل تأسيس كيان الإمارات.",
    viewCase: "عرض الحالة"
  },
  caseStudy: {
    factStrip: {
      client: "سياق العميل",
      location: "الموقع",
      stage: "مرحلة المشروع",
      role: "دور الفريق",
      keyFigures: "أرقام رئيسية",
      record: "السجل الرسمي"
    },
    sections: {
      contribution: "المساهمة الهندسية",
      drawing: "مقتطف مخطط مرحلة التصميم",
      approval: "سجل الاعتماد والمطابقة",
      attribution: "إقرار نسبة المشروع الإلزامي",
      contact: "ناقش حزمة مماثلة"
    },
    viewCase: "عرض الحالة",
    drawingCaption: "مقتطف من مخطط مرحلة التصميم",
    drawingSource: "المصدر: أرشيف وثائق العمل، شركة إنرجودياغنوستيكا."
  },
  about: {
    positioning: "استشارات فنية وإدارة مشاريع ورسومات معمارية منظورية للبنية التحتية الصناعية.",
    profile: [
      "تعمل ألانباير كشركة منطقة حرة مرخصة من إيفزا تحت سلطة دبي للمناطق الاقتصادية المتكاملة (دييز).",
      "يتمتع مهندسونا بخبرة فنية من منشآت صناعية ثقيلة وشبكات تدفئة ومرافق ضغط عالي في منطقة رابطة الدول المستقلة.",
      "في الإمارات، ينسق فريقنا مع استشاريين هندسيين مرخصين ومُعينين من العملاء يتولون الاعتمادات الرسمية والإشراف الموقعي."
    ],
    corpHeading: "التسجيل المؤسسي",
    legalEntityLabel: "اسم الكيان القانوني",
    legalEntity: "ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO",
    jurisdictionLabel: "جهة الاختصاص",
    jurisdiction: "DIEZA / IFZA, Dubai Silicon Oasis, Dubai, UAE",
    licensedLabel: "الأنشطة المرخصة",
    licensed: [
      "الاستشارات الإدارية",
      "خدمات إدارة المشاريع",
      "الرسومات المعمارية المنظورية"
    ],
    operatingHeading: "إطار العمل التشغيلي في دولة الإمارات",
    operating: "تقدم ألانباير التحليلات الفنية وخدمات إدارة المشاريع والرسومات المعمارية المنظورية. في الإمارات، تظل عقود العملاء وتقديمات الجهات الرسمية والأختام الهندسية والإشراف الميداني تحت مسؤولية الاستشاريين المرخصين محلياً والمعينين من العميل.",
    brochureHeading: "ملف القدرات الفنية",
    brochureSub: "حمّل ملخص ملفنا الفني الذي يغطي نطاقات الخدمات والأدوات الهندسية والمشاريع المرجعية الموثقة.",
    brochureBtn: "تحميل PDF"
  },
  team: {
    heading: "القيادة الفنية",
    intro: "يتمتع فريق الإدارة والهندسة لدينا بخبرة متعددة التخصصات في منشآت الطاقة وحوكمة المشاريع.",
    members: [
      {
        name: "Alan Marvanovich Biri",
        role: "كبير مهندسي المشاريع",
        bio: "كبير مهندسي مشاريع مسجل في نوبریز (PI-114432) ومدير فني في شركة إنرجودياغنوستيكا. يقود التنسيق الهندسي والتوثيق الرسمي للشبكات الحرارية ومحطات الغلايات."
      },
      {
        name: "Andrei Stepanov",
        role: "المدير العام",
        bio: "مسؤول تنفيذي في العمليات التجارية وحوكمة رأس المال وتأسيس المشاريع. يقود الإدارة المؤسسية وإدارة العقود وأطر تسليم المشاريع."
      },
      {
        name: "Aiham Alhawar",
        role: "مستشار فني",
        bio: "مهندس ميكانيكي متخصص في منشآت الطاقة وأنظمة الجودة ISO 9001 وAPI وتقييمات الموثوقية وتنسيق واجهات المقاولين."
      }
    ]
  },
  cta: {
    heading: "هل لديك مشروع صناعي تخطط لتنفيذه؟",
    sub: "أرسل لنا نطاق مشروعك وموقعه والمعايير الرئيسية. سيراجع فريقنا المتطلبات ويقدم مقترح دعم فني منظم.",
    button: "ناقش مشروعك"
  },
  attribution: {
    statement: "These references reflect prior engineering work by Alanpire team members through OOO Energodiagnostika in Russia. They were not contracts awarded to Alanpire's UAE entity."
  },
  contact: {
    heading: "اتصل بشركة ألانباير",
    sub: "يراجع فريقنا معايير المشاريع الصناعية ويقدم مقترحات الدعم الفني.",
    nameLabel: "الاسم الكامل",
    companyLabel: "اسم الشركة",
    emailLabel: "البريد الإلكتروني للعمل",
    phoneLabel: "رقم الهاتف",
    locationLabel: "موقع المشروع",
    scopeLabel: "نطاق المشروع ومعاييره",
    sendButton: "إرسال الاستفسار"
  },
  footer: {
    entityName: "ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO",
    licenceText: "DIEZ Trade Licence No. 88988 · Dubai Silicon Oasis, Dubai, UAE",
    rights: "جميع الحقوق محفوظة."
  },
  projectsIndex: {
    notice: "تعكس هذه المراجع أعمالاً هندسية سابقة نفذها أعضاء فريق ألانباير من خلال شركة إنرجودياغنوستيكا في روسيا. ولم تكن عقوداً ممنوحة لكيان ألانباير في دولة الإمارات.",
    emptyNotice: "تخضع دراسات حالة المشاريع الإضافية حالياً للتدقيق الفني في الأرشيف."
  }
};

// Mirroring Russian translation matching EN sentence-by-sentence
const ru = {
  brand: {
    name: "ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO",
    shortName: "Alanpire",
    licenceNumber: "88988",
    authority: "DIEZA / IFZA, Dubai Silicon Oasis",
    validity: "09 June 2026 – 08 June 2027",
    activities: "Управленческий консалтинг · Управление проектами · Перспективные архитектурные чертежи",
    email: "info@alanapire.ae",
    phone: "+971558286328",
    address: "Dubai Integrated Economic Zones Authority (DIEZ), Dubai, United Arab Emirates"
  },
  nav: {
    home: "Главная",
    about: "О компании",
    services: "Услуги",
    projects: "Проекты",
    industries: "Отрасли",
    contact: "Контакты",
    cta: "Обсудить проект"
  },
  meta: {
    home: {
      title: "Инженерная поддержка проектов в Дубае | Alanpire",
      description: "Управление проектами, технический консалтинг и перспективные архитектурные чертежи для промышленной инфраструктуры в Дубае и ОАЭ."
    },
    about: {
      title: "О компании | Технический консалтинг в Дубае | Alanpire",
      description: "Alanpire — лицензированная IFZA консалтинговая компания в Dubai Silicon Oasis, предоставляющая услуги управления проектами."
    },
    services: {
      title: "Управление проектами и инженерный консалтинг | Alanpire",
      description: "Календарно-сетевое планирование, гидравлическое моделирование, оценка тендеров и перспективные архитектурные чертежи."
    },
    industries: {
      title: "Промышленные отрасли | Alanpire",
      description: "Техническая поддержка генерации энергии, тепловых сетей, магистрального водоснабжения, нефтехимии и производственных предприятий."
    },
    projects: {
      title: "Инженерные референсы и опыт реализации | Alanpire",
      description: "Документированные инженерные результаты участников команды, включая магистральные тепловые сети и автономные котельные."
    },
    team: {
      title: "Техническое руководство | Alanpire",
      description: "Главные инженеры проектов и операционные менеджеры по сопровождению промышленных проектов в Дубае."
    },
    careers: {
      title: "Карьера | Alanpire",
      description: "Инженерные вакансии в управлении промышленными проектами и разработке перспективных чертежей."
    },
    contact: {
      title: "Контакты Alanpire | Инженерная поддержка в Дубае",
      description: "Отправьте параметры вашего проекта инженерной консалтинговой команде в Dubai Silicon Oasis."
    },
    privacy: {
      title: "Политика конфиденциальности | Alanpire",
      description: "Политика конфиденциальности корпоративного сайта Alanpire."
    },
    terms: {
      title: "Условия использования | Alanpire",
      description: "Условия и положения корпоративного сайта Alanpire."
    }
  },
  hero: {
    eyebrow: "Специализированный технический партнер · Dubai Integrated Economic Zones Authority (DIEZ)",
    headline: "Специализированная инженерная поддержка промышленных проектов в ОАЭ",
    sub: "Alanpire предоставляет услуги управления проектами, технического консалтинга и архитектурных чертежей. Наши инженеры выполняют планирование, моделирование и координацию под контролем вашего лицензированного консультанта в ОАЭ.",
    primaryCta: "Обсудить проект",
    secondaryCta: "Смотреть кейсы"
  },
  pillars: {
    heading: "Четыре лицензированных направления",
    intro: "Мы оказываем инженерно-техническую поддержку по трем лицензированным направлениям в Дубае, взаимодействуя с назначенными клиентом консультантами.",
    items: [
      {
        key: "pm",
        num: "01",
        title: "Управление проектами",
        tagline: "Базовые графики и координация межподрядных интерфейсов.",
        desc: "Мы разрабатываем графики критического пути в Primavera P6 и ведем реестры рисков. Наша команда еженедельно проверяет прогресс на площадке и координирует подрядчиков.",
        deliverables: [
          "Базовые календарно-сетевые графики критического пути в формате Primavera P6",
          "Еженедельная актуализация реестров рисков и контроль компенсирующих мероприятий",
          "Матрицы интерфейсов между подрядчиками и координационные совещания",
          "Независимые еженедельные отчеты о верификации прогресса на площадке",
          "Документооборот, учет проектной документации и технические журналы",
          "Комплекты документации для пусконаладочных работ и ввода в эксплуатацию"
        ]
      },
      {
        key: "tech",
        num: "02",
        title: "Технический консалтинг",
        tagline: "Моделирование процессов, гидравлические расчеты и оценка тендеров.",
        desc: "Мы оцениваем спецификации оборудования, проверяем гидравлические расчеты и формируем тендерные пакеты. Инженеры анализируют тепловые сети, насосные станции и промышленные объекты.",
        deliverables: [
          "Тепловое и гидравлическое моделирование трубопроводных сетей",
          "Анализ спецификаций технологического оборудования и опросных листов",
          "Техническая оценка тендерных заявок и ранжирование предложений подрядчиков",
          "Обследование технического состояния существующих сетей и дефектные ведомости",
          "Оценка совместимости материалов для систем высокого давления",
          "Анализ системной интеграции для многоблочных промышленных производств"
        ]
      },
      {
        key: "drawings",
        num: "03",
        title: "Архитектурные чертежи",
        tagline: "Перспективные архитектурные планировки и компоновочные планы.",
        desc: "Наша лицензированная служба готовит перспективные чертежи и промышленные компоновки. Мы разрабатываем расстановку оборудования, коридоры инженерных сетей и схемы зонирования.",
        deliverables: [
          "Перспективные архитектурные планы промышленных зданий",
          "Чертежи компоновки промышленного оборудования и технологического зонирования",
          "Планы трассировки коридоров инженерных коммуникаций и кабельно-трубных эстакад",
          "Предварительные объемно-планировочные решения для эксплуатационного персонала",
          "Координация комплектов чертежей и контроль внесения изменений",
          "Концептуальные планировки для рассмотрения заказчиком и стейкхолдерами"
        ]
      },
      {
        key: "management",
        num: "04",
        title: "Управленческий консалтинг",
        tagline: "Планирование CAPEX, анализ контрольных точек и закупки оборудования.",
        desc: "Мы анализируем операционные процессы и формируем регламенты управления проектами. Консультанты оценивают бюджеты капитальных затрат и обосновывают претензии техническими расчетами.",
        deliverables: [
          "Планирование капитальных затрат и прохождение контрольных точек проекта",
          "Регламенты управления проектами и матрицы распределения полномочий",
          "Технический анализ споров с подрядчиками и подготовка доказательной базы",
          "Проверка операционной готовности перед передачей объекта в эксплуатацию",
          "Технический аудит при сделках с промышленными активами",
          "Стратегии контрактования и формирования пакетов закупки основного оборудования"
        ]
      }
    ]
  },
  trust: {
    heading: "Лицензии и техническая квалификация",
    intro: "Alanpire действует на основании коммерческой лицензии № 88988, выданной DIEZ. Квалификация подтверждена документированным опытом специалистов.",
    items: [
      {
        label: "Лицензия ОАЭ",
        value: "DIEZ / IFZA Licence No. 88988",
        detail: "Управленческий консалтинг · Архитектурные чертежи · Управление проектами. Срок действия до 08 июня 2027 года."
      },
      {
        label: "Экспертное заключение по референсу",
        value: "Conclusion No. 66-1-1-3-028194-2026",
        detail: "Положительное заключение Госэкспертизы по проекту котельной 10.5 МВт и инженерным изысканиям. Утверждено 18 июня 2026 года."
      },
      {
        label: "Проектное СРО",
        value: "Reg. P-161-005611025054-2471",
        detail: "Ассоциация «Межрегионпроект». Проектирование объектов капитального строительства через ООО «Энергодиагностика»."
      },
      {
        label: "Изыскательское СРО",
        value: "Extract 5611025054-20250325-0804",
        detail: "Геодезические, геологические, гидрометеорологические и экологические изыскания."
      },
      {
        label: "Главный инженер проекта",
        value: "NOPRIZ Register PI-114432",
        detail: "Национальный реестр специалистов в области инженерных изысканий и архитектурно-строительного проектирования."
      },
      {
        label: "Операционная модель в ОАЭ",
        value: "Партнер по технической поддержке",
        detail: "Передача расчетов и чертежей генеральному проектировщику, имеющему лицензию на проектирование в ОАЭ."
      }
    ]
  },
  sectors: {
    heading: "Пять промышленных отраслей",
    intro: "Наш опыт охватывает коммунальную энергетику, промышленную генерацию и трубопроводные транспортные системы.",
    items: [
      {
        title: "Энергетика и генерация",
        desc: "Координация машинных залов, контуров охлаждения, вспомогательных трубопроводов и расширения мощностей."
      },
      {
        title: "Тепловые сети и теплоснабжение",
        desc: "Гидравлическое моделирование сетей, компенсация температурных расширений, узлы регулирования и коммерческий учет."
      },
      {
        title: "Водная инфраструктура",
        desc: "Реконструкция магистральных водоводов, подбор материалов труб, гидравлический расчет насосных станций и интерфейсы."
      },
      {
        title: "Нефтепереработка и нефтехимия",
        desc: "Сопровождение технологических установок, проверка изометрических схем, компоновка оборудования и контроль подрядчиков."
      },
      {
        title: "Промышленные производства",
        desc: "Пространственное планирование, привязка фундаментов оборудования, инженерные коридоры и планы производственных корпусов."
      }
    ]
  },
  process: {
    heading: "Пятиэтапная методология реализации",
    intro: "Каждый проект реализуется по пятиэтапной методологии с формированием документированных результатов на каждом этапе.",
    items: [
      {
        num: "01",
        title: "Анализ",
        desc: "Изучаем исходно-разрешительную документацию, границы проектирования и нормативные требования для формирования ТЗ."
      },
      {
        num: "02",
        title: "Определение",
        desc: "Формируем базовый график, методики расчетов, реестр проектной документации и матрицу интерфейсов."
      },
      {
        num: "03",
        title: "Координация",
        desc: "Снимаем технические замечания подрядчиков, ведем нормоконтроль ревизий чертежей и проводим регулярные техсоветы."
      },
      {
        num: "04",
        title: "Выпуск",
        desc: "Формируем отчетные панели прогресса, оцениваем освоенный объем и передаем верифицированные расчетные комплекты."
      },
      {
        num: "05",
        title: "Завершение",
        desc: "Комплектуем исполнительную документацию, контролируем устранение дефектов и формируем пакет сдачи в эксплуатацию."
      }
    ]
  },
  featuredProjects: {
    heading: "Избранные инженерные референсы",
    intro: "Документированные проекты, выполненные нашими специалистами в составе ООО «Энергодиагностика» до учреждения юридического лица в ОАЭ.",
    viewCase: "Смотреть кейс"
  },
  caseStudy: {
    factStrip: {
      client: "Заказчик",
      location: "Локация",
      stage: "Стадия проекта",
      role: "Роль команды",
      keyFigures: "Ключевые показатели",
      record: "Экспертное согласование"
    },
    sections: {
      contribution: "Инженерный вклад",
      drawing: "Фрагмент проектного чертежа",
      approval: "Согласование и соответствие нормам",
      attribution: "Обязательное указание авторства",
      contact: "Обсудить аналогичный объем"
    },
    viewCase: "Смотреть кейс",
    drawingCaption: "Фрагмент проектного чертежа стадии РД",
    drawingSource: "Источник: Архив рабочей документации, ООО «Энергодиагностика»."
  },
  about: {
    positioning: "Технический консалтинг, управление проектами и перспективные архитектурные чертежи для промышленной инфраструктуры.",
    profile: [
      "Alanpire зарегистрирована в юрисдикции IFZA при Управлении интегрированных экономических зон Дубая (DIEZ).",
      "Наши инженеры обладают опытом проектирования и координации объектов энергетики, тепловых сетей и систем высокого давления.",
      "В ОАЭ наша команда взаимодействует с генеральным проектировщиком заказчика, обладающим лицензией на согласование и авторский надзор."
    ],
    corpHeading: "Регистрационные данные",
    legalEntityLabel: "Юридическое наименование",
    legalEntity: "ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO",
    jurisdictionLabel: "Юрисдикция",
    jurisdiction: "DIEZA / IFZA, Dubai Silicon Oasis, Dubai, UAE",
    licensedLabel: "Виды деятельности",
    licensed: [
      "Управленческий консалтинг",
      "Управление проектами",
      "Перспективные архитектурные чертежи"
    ],
    operatingHeading: "Модель работы в ОАЭ",
    operating: "Alanpire оказывает услуги технического анализа, управления проектами и подготовки перспективных чертежей. В ОАЭ договорные обязательства перед заказчиком, согласования в государственных органах, печати и авторский надзор закреплены за лицензированным местным консультантом.",
    brochureHeading: "Техническое портфолио",
    brochureSub: "Скачайте обзорное резюме с описанием направлений работы, расчетных комплексов и документированных референсов.",
    brochureBtn: "Скачать PDF"
  },
  team: {
    heading: "Техническое руководство",
    intro: "Руководители и инженеры компании обладают междисциплинарным опытом реализации энергетических и промышленных проектов.",
    members: [
      {
        name: "Alan Marvanovich Biri",
        role: "Главный инженер проекта",
        bio: "Главный инженер проекта, включенный в реестр НОПРИЗ (PI-114432), технический директор ООО «Энергодиагностика». Руководит междисциплинарной координацией и разработкой проектной документации тепловых сетей и котельных."
      },
      {
        name: "Andrei Stepanov",
        role: "Генеральный директор",
        bio: "Руководитель коммерческих операций, корпоративного управления и структурирования проектов. Отвечает за контрактное администрирование и проектные регламенты."
      },
      {
        name: "Aiham Alhawar",
        role: "Технический советник",
        bio: "Инженер-механик с опытом работы на энергообъектах, внедрения стандартов ISO 9001 и API, анализа надежности и координации подрядчиков."
      }
    ]
  },
  cta: {
    heading: "Планируете промышленный проект?",
    sub: "Направьте нам техническое задание, локацию и основные параметры. Специалисты изучат требования и подготовят предложение по технической поддержке.",
    button: "Обсудить проект"
  },
  attribution: {
    statement: "These references reflect prior engineering work by Alanpire team members through OOO Energodiagnostika in Russia. They were not contracts awarded to Alanpire's UAE entity."
  },
  contact: {
    heading: "Связаться с Alanpire",
    sub: "Наша команда изучит параметры промышленного проекта и подготовит предложение по технической поддержке.",
    nameLabel: "ФИО",
    companyLabel: "Наименование компании",
    emailLabel: "Корпоративный email",
    phoneLabel: "Номер телефона",
    locationLabel: "Локация объекта",
    scopeLabel: "Параметры и объем проекта",
    sendButton: "Отправить запрос"
  },
  footer: {
    entityName: "ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO",
    licenceText: "DIEZ Trade Licence No. 88988 · Dubai Silicon Oasis, Dubai, UAE",
    rights: "Все права защищены."
  },
  projectsIndex: {
    notice: "Данные референсы отражают предшествующий инженерный опыт участников команды Alanpire в составе ООО «Энергодиагностика» в России. Они не являются контрактами, заключенными юридическим лицом Alanpire в ОАЭ.",
    emptyNotice: "Дополнительные материалы проектных кейсов в настоящее время проходят аудит архивной документации."
  }
};

fs.writeFileSync(path.join(i18nDir, 'en.json'), JSON.stringify(en, null, 2) + '\n', 'utf8');
fs.writeFileSync(path.join(i18nDir, 'ar.json'), JSON.stringify(ar, null, 2) + '\n', 'utf8');
fs.writeFileSync(path.join(i18nDir, 'ru.json'), JSON.stringify(ru, null, 2) + '\n', 'utf8');

console.log('Successfully generated en.json, ar.json, and ru.json with identical structure.');
