// Central bilingual (EN/AR) content for the Yahya Demeriah portfolio site.
// Every string that differs by language is a { en, ar } pair; shared technical
// tags stay as plain strings. Consumed via the useLanguage() `t` helper.

export type Bi<T = string> = { en: T; ar: T }

export const site = {
  name: "Yahya Demeriah",
  logo: "DEMERIAH",
  email: "yahyademeriah@gmail.com",
  website: "yahyademeriah.com",
  websiteUrl: "https://yahyademeriah.com",
  cvPath: "/Yahya_Demeriah_CV.docx",
  socials: {
    linkedin: "https://www.linkedin.com/in/yahya-demeriah",
    github: "https://github.com/XYHDX",
    x: "https://x.com/YDemeriah78064",
  },
}

export const ui = {
  available: { en: "Available for opportunities", ar: "متاح للفرص الجديدة" },
  viewWork: { en: "View My Work", ar: "استعرض المشاريع" },
  downloadCV: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
  getInTouch: { en: "Get in Touch", ar: "تواصل معي" },
  letsConnect: { en: "Let's Connect", ar: "لنتواصل" },
  viewExperience: { en: "View Experience", ar: "استعرض الخبرات" },
  scroll: { en: "Scroll", ar: "مرّر" },
  backToTop: { en: "Back to top", ar: "العودة للأعلى" },
  findMe: { en: "Find me online", ar: "تابعني على المنصّات" },
  // Contact form
  formName: { en: "Name", ar: "الاسم" },
  formEmail: { en: "Email", ar: "البريد الإلكتروني" },
  formSubject: { en: "Subject", ar: "الموضوع" },
  formMessage: { en: "Message", ar: "الرسالة" },
  formNamePlaceholder: { en: "Your name", ar: "اسمك" },
  formEmailPlaceholder: { en: "your@email.com", ar: "your@email.com" },
  formSubjectPlaceholder: { en: "What's this about?", ar: "ما موضوع رسالتك؟" },
  formMessagePlaceholder: { en: "Tell me about your project...", ar: "أخبرني عن مشروعك..." },
  sendMessage: { en: "Send Message", ar: "إرسال الرسالة" },
  sending: { en: "Sending...", ar: "جارٍ الإرسال..." },
  messageSent: { en: "Message sent successfully!", ar: "تم إرسال الرسالة بنجاح!" },
  messageFailed: { en: "Failed to send message.", ar: "تعذّر إرسال الرسالة." },
  messageError: { en: "An error occurred. Please try again.", ar: "حدث خطأ. الرجاء المحاولة مرة أخرى." },
  rateLimited: { en: "You’re sending messages too quickly — please wait a moment and try again.", ar: "أنت ترسل الرسائل بسرعة كبيرة — الرجاء الانتظار قليلاً ثم المحاولة مرة أخرى." },
  pleaseWait: { en: "Please wait…", ar: "الرجاء الانتظار…" },
}

export const nav: { href: string; label: Bi }[] = [
  { href: "#about", label: { en: "About", ar: "نبذة" } },
  { href: "#experience", label: { en: "Experience", ar: "الخبرات" } },
  { href: "#projects", label: { en: "Projects", ar: "المشاريع" } },
  { href: "#achievements", label: { en: "Awards", ar: "الجوائز" } },
  { href: "#skills", label: { en: "Skills", ar: "المهارات" } },
  { href: "#contact", label: { en: "Contact", ar: "تواصل" } },
]

export const hero = {
  badge: ui.available,
  firstName: { en: "Eng. Yahya", ar: "م. يحيى" },
  lastName: { en: "Demeriah", ar: "ضميرية" },
  role: {
    en: "Robotics & AI Engineer · Founder · Mentor",
    ar: "مهندس روبوتيكس وذكاء صناعي · مؤسس · مدرّب",
  },
  bio: {
    en: "Control & Computer Engineering graduate specialized in Robotics. CEO of Robotronics, building Syria's first solar panel cleaning robot. Founder of 3D Titans — pioneering 3D printing in the Syrian market. Award-winning innovator in AI, IoT and intelligent systems.",
    ar: "خريج هندسة التحكم والحاسوب — اختصاص الروبوتيكس. المدير التنفيذي لشركة روبوترونيكس التي تطوّر أول روبوت سوري لتنظيف الألواح الشمسية. مؤسس مشروع 3D Titans والمسؤول عن إدخال الطباعة ثلاثية الأبعاد إلى السوق السوري. حائز على جوائز في الذكاء الصناعي وإنترنت الأشياء.",
  },
  location: { en: "Damascus, Syria", ar: "دمشق، سوريا" },
}

export const stats: { value: string; label: Bi }[] = [
  { value: "8+", label: { en: "Ventures Founded", ar: "شركة ومشروع" } },
  { value: "12+", label: { en: "Engineering Projects", ar: "مشاريع هندسية" } },
  { value: "50+", label: { en: "Students Mentored", ar: "طالب درّبهم" } },
  { value: "5", label: { en: "Competition Awards", ar: "جوائز مسابقات" } },
]

export const about = {
  label: { en: "About Me", ar: "من أنا" },
  titleLead: { en: "Engineering the", ar: "نصنع المستقبل" },
  titleAccent: { en: "Future from Damascus", ar: "من دمشق" },
  paragraphs: [
    {
      en: "I'm Eng. Yahya Demeriah, a graduate of the Faculty of Control & Computer Engineering, specializing in Robotics. My work sits at the intersection of robotics, AI, embedded systems and 3D printing — turning hard engineering problems into practical, production-ready products.",
      ar: "اسمي المهندس يحيى ضميرية، خريج كلية هندسة التحكم والحاسوب اختصاص الروبوتيكس. أعمل عند تقاطع الروبوتيكس والذكاء الصناعي والأنظمة المضمّنة والطباعة ثلاثية الأبعاد — أحوّل المسائل الهندسية الصعبة إلى منتجات عملية جاهزة للإنتاج.",
    },
    {
      en: "As CEO of Robotronics I'm leading the development of a remote-controlled solar panel cleaning robot. As founder of 3D Titans, I'm the engineer who introduced 3D printing into the Syrian market. I also lead Eyronix, an AI-powered smart surveillance platform for facilities and individuals.",
      ar: "بصفتي المدير التنفيذي لشركة روبوترونيكس أقود تطوير روبوت لتنظيف الألواح الشمسية بالريموت كنترول. وبصفتي مؤسس مشروع 3D Titans، أنا المهندس المسؤول عن إدخال الطباعة ثلاثية الأبعاد إلى السوق السوري. كما أقود مشروع Eyronix لأنظمة المراقبة الذكية للمنشآت والأفراد بدعم من الذكاء الصناعي.",
    },
    {
      en: "Beyond company-building, I founded the AI Club at the French School in Damascus, work as Trainer-of-Trainers at Syra Robot, and mentor students competing internationally in robotics and AI.",
      ar: "إلى جانب ريادة الأعمال، أسّستُ نادي الذكاء الصنعي في المدرسة الفرنسية بدمشق وأعمل مدرّباً فيه، كما أعمل مدرّباً للمدربين في نادي سيرا روبوت، وأُشرف على الطلاب في مركز سيرا روبوت.",
    },
  ],
  pills: [
    { en: "CEO · Robotronics", ar: "مدير تنفيذي · روبوترونيكس" },
    { en: "Founder · 3D Titans", ar: "مؤسس · 3D Titans" },
    { en: "Founder · Eyronix", ar: "مؤسس · Eyronix" },
    { en: "AI Club Lead · French School", ar: "مدرّب · نادي الذكاء الصنعي بالمدرسة الفرنسية" },
    { en: "Trainer-of-Trainers · Syra Robot", ar: "مدرّب للمدربين · سيرا روبوت" },
  ],
}

export const experience = {
  label: { en: "Career Path", ar: "المسيرة المهنية" },
  titleLead: { en: "Professional", ar: "الخبرات" },
  titleAccent: { en: "Experience", ar: "العملية" },
  intro: {
    en: "From founding companies to mentoring the next generation of Syrian engineers.",
    ar: "من تأسيس الشركات إلى تدريب الجيل القادم من المهندسين السوريين.",
  },
  items: [
    {
      period: "2024 — Present",
      location: { en: "Damascus, Syria", ar: "دمشق، سوريا" },
      title: { en: "CEO & Co-founder", ar: "مدير تنفيذي وشريك مؤسس" },
      company: { en: "Robotronics", ar: "روبوترونيكس" },
      link: "https://robotronicsevo.com",
      linkLabel: "robotronicsevo.com",
      desc: {
        en: "Leading the development of Syria's first remote-controlled solar panel cleaning robot. Owning mechanical design, electronics architecture, PCB development, embedded firmware and 3D-printed components — taking the product from concept to field-deployable hardware.",
        ar: "أقود تطوير أول روبوت سوري لتنظيف الألواح الشمسية بالريموت كنترول. أتولى التصميم الميكانيكي وبنية الإلكترونيات وتصميم اللوحات المطبوعة والبرمجيات المضمّنة والقطع المطبوعة ثلاثية الأبعاد — من الفكرة إلى منتج جاهز للنشر الميداني.",
      },
      tags: ["Solar Robotics", "PCB Design", "Embedded", "Renewable Energy"],
    },
    {
      period: "2025 — Present",
      location: { en: "International", ar: "دولي" },
      title: { en: "Founder", ar: "مؤسس" },
      company: { en: "3D Titans", ar: "3D Titans" },
      link: "https://3dtitans.org",
      linkLabel: "3dtitans.org",
      desc: {
        en: "The engineer responsible for introducing 3D printing into the Syrian market. Building a 3D asset marketplace and on-demand fabrication platform with licensing workflows and production-ready model standards.",
        ar: "المهندس المسؤول عن إدخال الطباعة ثلاثية الأبعاد إلى السوق السوري. أبني سوقاً رقمية للأصول الثلاثية الأبعاد ومنصة تصنيع عند الطلب مع نظام تراخيص ومعايير إنتاج.",
      },
      tags: ["3D Printing", "Marketplace", "Manufacturing"],
    },
    {
      period: "2025 — Present",
      location: { en: "Syria", ar: "سوريا" },
      title: { en: "Founder & Technical Lead", ar: "مؤسس وقائد تقني" },
      company: { en: "Eyronix", ar: "Eyronix" },
      link: "https://eyronix.com",
      linkLabel: "eyronix.com",
      desc: {
        en: "Founded a smart-surveillance technology platform installing intelligent monitoring systems for facilities and individuals. Designed the system architecture for AI-powered image analysis — people detection, vehicle detection and behavioral analytics using computer vision.",
        ar: "أسّستُ منصة تقنية لأنظمة المراقبة الذكية للمنشآت والأفراد. صمّمتُ بنية النظام لتحليل الصور بالذكاء الصناعي — كشف الأشخاص والمركبات وتحليل السلوك باستخدام الرؤية الحاسوبية.",
      },
      tags: ["Computer Vision", "AI/ML", "Security", "Networking"],
    },
    {
      period: "2024 — Present",
      location: { en: "Damascus, Syria", ar: "دمشق، سوريا" },
      title: { en: "Trainer-of-Trainers & Student Supervisor", ar: "مدرّب للمدربين ومشرف على الطلاب" },
      company: { en: "Syra Robot", ar: "سيرا روبوت" },
      link: null,
      linkLabel: null,
      desc: {
        en: "Train the trainers who coach the next generation of Syrian robotics students. Personally supervise students at the Syra Robot center across competition prep, hardware projects and applied robotics.",
        ar: "أُدرّب المدرّبين الذين يعلّمون الجيل القادم من طلاب الروبوتيكس في سوريا. أُشرف شخصياً على الطلاب في مركز سيرا روبوت في تجهيز المسابقات والمشاريع.",
      },
      tags: ["Robotics Training", "WRO Coaching", "Mentorship"],
    },
    {
      period: "2024 — Present",
      location: { en: "Damascus, Syria", ar: "دمشق، سوريا" },
      title: { en: "Founder & Trainer · AI Club", ar: "مؤسس ومدرّب · نادي الذكاء الصنعي" },
      company: { en: "French School of Damascus", ar: "المدرسة الفرنسية في دمشق" },
      link: null,
      linkLabel: null,
      desc: {
        en: "Founded the AI club at the French School in Damascus and lead it as the in-house trainer. Built the curriculum from zero, covering machine learning fundamentals, computer vision, and applied AI projects with students.",
        ar: "أسّستُ نادي الذكاء الصنعي في المدرسة الفرنسية بدمشق وأعمل به كمدرّب داخلي. بنيتُ المنهاج من الصفر ليغطّي أساسيات تعلّم الآلة والرؤية الحاسوبية والمشاريع التطبيقية.",
      },
      tags: ["AI Education", "Curriculum Design", "K-12 Mentoring"],
    },
    {
      period: "Sep 2024 — Mar 2025",
      location: { en: "Damascus, Syria", ar: "دمشق، سوريا" },
      title: { en: "Full-Time Lecturer & Project Mentor", ar: "محاضر متفرّغ ومرشد مشاريع" },
      company: { en: "Syrian Private University", ar: "الجامعة السورية الخاصة" },
      link: null,
      linkLabel: null,
      desc: {
        en: "Developed and delivered lab courses in ROS, MATLAB, Proteus, Processing, 8086 Emulator, mikroC, and Arduino C. Mentored graduation and junior projects.",
        ar: "طوّرت وقدّمتُ مختبرات في ROS وMATLAB وProteus وProcessing ومحاكي 8086 وmikroC وArduino C. أرشدتُ مشاريع التخرّج والمشاريع السنوية.",
      },
      tags: ["ROS", "MATLAB", "Arduino", "Education"],
    },
    {
      period: "Mar 2023 — Mar 2025",
      location: { en: "Damascus, Syria", ar: "دمشق، سوريا" },
      title: { en: "Robotics Mentor", ar: "مرشد روبوتيكس" },
      company: { en: "National Center for Distinguished (NCD)", ar: "المركز الوطني للمتميزين (NCD)" },
      link: null,
      linkLabel: null,
      desc: {
        en: "Mentored teams for ARC, WRO, and the Future Science Challenge. Designed custom training modules around problem-solving and applied robotics.",
        ar: "أرشدتُ فرقاً في مسابقات ARC وWRO وFuture Science Challenge. صمّمتُ وحدات تدريبية مخصّصة تركّز على حل المشكلات والروبوتيكس التطبيقي.",
      },
      tags: ["Competition Coaching", "Applied Robotics"],
    },
  ],
}

export const projects = {
  label: { en: "Portfolio", ar: "الأعمال" },
  titleLead: { en: "Featured", ar: "أبرز" },
  titleAccent: { en: "Projects", ar: "المشاريع" },
  intro: {
    en: "A selection of robotics, AI and IoT projects — shipped, in development, and personal R&D.",
    ar: "مجموعة مختارة من مشاريع الروبوتيكس والذكاء الصناعي وإنترنت الأشياء — مشاريع منشورة وأخرى قيد التطوير وأبحاث شخصية.",
  },
  comingSoon: { en: "Case study coming soon", ar: "دراسة الحالة قريباً" },
  items: [
    {
      category: { en: "Robotronics · Robotics", ar: "روبوترونيكس · روبوتيكس" },
      title: { en: "Solar Panel Cleaning Robot", ar: "روبوت تنظيف الألواح الشمسية" },
      desc: {
        en: "Remote-controlled robot for cleaning photovoltaic solar panels — currently in active development. Targets renewable-energy maintenance in arid environments where dust dramatically reduces panel efficiency.",
        ar: "روبوت يُدار بالريموت كنترول لتنظيف الألواح الكهروضوئية — قيد التطوير حالياً. يستهدف صيانة منظومات الطاقة المتجدّدة في البيئات الجافة حيث يقلّل الغبار من كفاءة الألواح بشكل كبير.",
      },
      tags: ["RC", "PCB", "3D Print", "Solar"],
      href: "https://robotronicsevo.com",
      foot: { en: "robotronicsevo.com", ar: "robotronicsevo.com" },
      badge: null,
      icon: "sun",
    },
    {
      category: { en: "3D Titans · Platform", ar: "3D Titans · منصة" },
      title: { en: "3D Titans — Syria's 3D Printing Pioneer", ar: "3D Titans — رائد الطباعة ثلاثية الأبعاد في سوريا" },
      desc: {
        en: "Founded the venture that brought 3D printing into the Syrian market. Marketplace for production-ready 3D assets plus on-demand fabrication and licensing workflows.",
        ar: "المشروع الذي أدخل الطباعة ثلاثية الأبعاد إلى السوق السوري. سوق رقمية للأصول الثلاثية الأبعاد الجاهزة للإنتاج إضافةً إلى خدمات تصنيع عند الطلب وتراخيص.",
      },
      tags: ["3D Print", "Marketplace", "SaaS"],
      href: "https://3dtitans.org",
      foot: { en: "3dtitans.org", ar: "3dtitans.org" },
      badge: null,
      icon: "box",
    },
    {
      category: { en: "actuators.me · Startup OS", ar: "actuators.me · منصة ريادة الأعمال" },
      title: { en: "actuators.me — Syria's Entrepreneurship OS", ar: "actuators.me — نظام التشغيل لريادة الأعمال في سوريا" },
      desc: {
        en: "The operating system for post-conflict entrepreneurship. Syria's first digital backbone for founders, teams, and the capital that connects them. Founder, currently building the platform.",
        ar: "نظام التشغيل لريادة الأعمال في مرحلة ما بعد النزاع. أول بنية تحتية رقمية في سوريا للمؤسسين والفِرق ورأس المال الذي يربط بينهم. أعمل عليها كمؤسس، وهي قيد التطوير حالياً.",
      },
      tags: ["Startup OS", "Entrepreneurship", "Founders", "Capital"],
      href: "https://actuators.me",
      foot: { en: "actuators.me", ar: "actuators.me" },
      badge: { en: "In Development", ar: "قيد التطوير" },
      icon: "rocket",
    },
    {
      category: { en: "DTS · Smart City", ar: "DTS · مدينة ذكية" },
      title: { en: "Damascus Transportation System (DTS)", ar: "مشروع تنظيم النقل في دمشق (DTS)" },
      desc: {
        en: "In-development smart-city project aimed at solving Damascus traffic congestion through data-driven transport optimization. Currently iterating on the web platform.",
        ar: "مشروع مدينة ذكية قيد التطوير يهدف إلى حلّ الاختناق المروري في دمشق عبر تحليل البيانات وتحسين النقل. حالياً نعمل على تطوير المنصة الإلكترونية.",
      },
      tags: ["Smart City", "Optimization", "Web"],
      href: "https://dts-brown.vercel.app",
      foot: { en: "dts-brown.vercel.app", ar: "dts-brown.vercel.app" },
      badge: { en: "In Development", ar: "قيد التطوير" },
      icon: "server",
    },
    {
      category: { en: "CleanTech · R&D", ar: "تقنيات نظيفة · بحث وتطوير" },
      title: { en: "Solar-to-Water Atmospheric Generator", ar: "مولّد ماء بالطاقة الشمسية" },
      desc: {
        en: "Converts solar energy into drinkable water for remote regions, using atmospheric water condensation that borrows from the working principle of an air conditioner. Designed for off-grid deployments.",
        ar: "مشروع تحويل الطاقة الشمسية إلى مياه شرب في المناطق النائية باستخدام تكثيف المياه من الجو على مبدأ عمل المكيّف. مصمَّم للنشر في المناطق غير المرتبطة بالشبكة.",
      },
      tags: ["Solar", "Thermodynamics", "Humanitarian"],
      href: null,
      foot: null,
      badge: null,
      icon: "sun",
    },
    {
      category: { en: "MedTech · Assistive Device", ar: "تقنيات طبية · جهاز مساعِد" },
      title: { en: "Smart Spoon for Parkinson's Patients", ar: "الملعقة الذكية لمرضى باركنسون" },
      desc: {
        en: "Active-stabilization spoon that produces counter-motion to cancel the involuntary tremor of Parkinson's patients, keeping the spoon level so patients can eat independently.",
        ar: "ملعقة ذات تثبيت نشط تنتج حركة معاكسة للحركة الاهتزازية اللاإرادية لمرضى باركنسون، تحافظ على ثبات الملعقة كي يتمكّن المريض من تناول الطعام باستقلالية.",
      },
      tags: ["IMU", "Active Control", "Healthcare"],
      href: null,
      foot: null,
      badge: null,
      icon: "cpu",
    },
    {
      category: { en: "Communications · R&D", ar: "اتصالات · بحث وتطوير" },
      title: { en: "Laser Voice Transmission via Li-Fi", ar: "نقل الصوت عبر الليزر باستخدام Li-Fi" },
      desc: {
        en: "Voice transmission over a modulated laser beam using Li-Fi (light fidelity) technology — wireless audio without radio spectrum, line-of-sight, with potential for secure point-to-point links.",
        ar: "نقل الصوت عبر شعاع ليزر مُعدَّل باستخدام تقنية Li-Fi — صوت لاسلكي بدون طيف الراديو، ضمن خط البصر، مع إمكانية إنشاء وصلات نقطة-إلى-نقطة آمنة.",
      },
      tags: ["Li-Fi", "Laser", "Optical Comms"],
      href: null,
      foot: null,
      badge: null,
      icon: "shield",
    },
    {
      category: { en: "Aerospace · Personal R&D", ar: "فضاء · بحث شخصي" },
      title: { en: "Anti-Drone Interceptor Drone", ar: "الدرون الاعتراضية للدرونات" },
      desc: {
        en: "Personal R&D project: an interceptor drone designed to detect and neutralize hostile drones. Currently in active development.",
        ar: "مشروع شخصي قيد التطوير: درون اعتراضي مصمَّم لرصد وتحييد الدرونات المعادية.",
      },
      tags: ["UAV", "Detection", "Defense"],
      href: null,
      foot: null,
      badge: { en: "In Development", ar: "قيد التطوير" },
      icon: "shield",
    },
    {
      category: { en: "AI / IoT · Award Winner", ar: "ذكاء صناعي / إنترنت الأشياء · فائز بجائزة" },
      title: { en: "Smart Home Electricity Forecasting", ar: "التنبؤ باستهلاك كهرباء المنزل الذكي" },
      desc: {
        en: "ML system that forecasts smart-home electricity consumption and recommends concrete actions to reduce it. Won the Best Engineer award (Professionals) at the Rashid bin Hamdan bin Rashid AI & IoT Competition 2025.",
        ar: "نظام تعلّم آلة يتنبّأ باستهلاك الكهرباء في المنزل الذكي ويقترح طرقاً لتخفيض الاستهلاك. حاز جائزة أفضل مهندس (فئة المحترفين) في مسابقة راشد بن حمدان بن راشد للذكاء الصنعي وإنترنت الأشياء 2025.",
      },
      tags: ["ML", "IoT", "Energy", "Forecasting"],
      href: null,
      foot: null,
      badge: { en: "🏆 Best Engineer 2025", ar: "🏆 أفضل مهندس 2025" },
      icon: "bot",
    },
    {
      category: { en: "Robotics · WRO 2024", ar: "روبوتيكس · WRO 2024" },
      title: { en: "Omni-Wheel Product Sorting Line", ar: "خط فرز المنتجات بدواليب الأومني" },
      desc: {
        en: "Automated product sorting line built on omni-directional wheels for the World Robot Olympiad 2024 — vision-based classification driving multi-axis mechanical sorting.",
        ar: "خط فرز منتجات آلي مبني على دواليب أومني-اتجاهية لمسابقة WRO 2024 — تصنيف بصري يُحرّك آلية فرز ميكانيكية متعدّدة المحاور.",
      },
      tags: ["Omni Wheels", "Vision", "Automation"],
      href: null,
      foot: { en: "WRO 2024 entry", ar: "مشاركة WRO 2024" },
      badge: null,
      icon: "bot",
    },
    {
      category: { en: "Robotics · ARC 2026", ar: "روبوتيكس · ARC 2026" },
      title: { en: "Sumo Combat Robot", ar: "روبوت السومو القتالي" },
      desc: {
        en: "Custom-built sumo robot for the Annual Robotic Competition (ARC) 2026 — 1st place nationally in Syria. Focus on traction, low-profile chassis design and opponent-tracking strategy.",
        ar: "روبوت سومو مصمَّم خصيصاً لمسابقة ARC 2026 — حصل على المركز الأول على سوريا. التركيز على الجرّ وتصميم الهيكل المنخفض واستراتيجية تعقّب الخصم.",
      },
      tags: ["Combat", "Robotics", "Strategy"],
      href: null,
      foot: null,
      badge: { en: "🥇 1st place — Syria", ar: "🥇 المركز الأول على سوريا" },
      icon: "bot",
    },
    {
      category: { en: "Graduation Project · AI/Robotics", ar: "مشروع تخرّج · ذكاء صناعي/روبوتيكس" },
      title: { en: "Vision-Based Waste Sorting System", ar: "نظام فرز النفايات بالرؤية الحاسوبية" },
      desc: {
        en: "Automated waste classification and mechanical sorting driven by computer-vision object detection. Achieved ~40% efficiency improvement in waste segregation.",
        ar: "تصنيف وفرز النفايات آلياً عبر كشف الأجسام بالرؤية الحاسوبية. حقّق تحسيناً بنحو 40% في كفاءة الفرز.",
      },
      tags: ["Object Detection", "Python", "Automation"],
      href: null,
      foot: null,
      badge: null,
      icon: "bot",
    },
  ],
}

export const awards = {
  label: { en: "Recognition", ar: "التكريم" },
  titleLead: { en: "Awards &", ar: "الجوائز" },
  titleAccent: { en: "Competitions", ar: "والمسابقات" },
  intro: {
    en: "Awards earned across Syrian and international robotics, AI and IoT competitions.",
    ar: "جوائز حازها يحيى في مسابقات الروبوتيكس والذكاء الصناعي وإنترنت الأشياء، محلياً وعالمياً.",
  },
  items: [
    {
      year: "2025",
      title: { en: "Best Engineer — Professionals", ar: "أفضل مهندس — فئة المحترفين" },
      org: { en: "Rashid bin Hamdan bin Rashid AI & IoT Competition", ar: "مسابقة راشد بن حمدان بن راشد للذكاء الصنعي وإنترنت الأشياء" },
      location: { en: "UAE · International", ar: "الإمارات · دولي" },
      prize: { en: "🏆 Best Engineer Award", ar: "🏆 جائزة أفضل مهندس" },
    },
    {
      year: "2026",
      title: { en: "1st Place · Syria — Sumo Category", ar: "المركز الأول · سوريا — فئة السومو" },
      org: { en: "Annual Robotic Competition (ARC)", ar: "المسابقة السنوية للروبوت (ARC)" },
      location: { en: "Syria", ar: "سوريا" },
      prize: { en: "🥇 National Winner", ar: "🥇 بطل على مستوى سوريا" },
    },
    {
      year: "2024",
      title: { en: "WRO Future Innovators", ar: "WRO Future Innovators" },
      org: { en: "World Robot Olympiad — Omni-Wheel Sorting Line", ar: "الأولمبياد العالمي للروبوت — خط فرز بدواليب الأومني" },
      location: { en: "Syria", ar: "سوريا" },
      prize: { en: "🥉 3rd Place", ar: "🥉 المركز الثالث" },
    },
    {
      year: "2024",
      title: { en: "1st Place — Annual Robotic Competition", ar: "المركز الأول — المسابقة السنوية للروبوت" },
      org: { en: "ARC Syria", ar: "ARC سوريا" },
      location: { en: "Syria", ar: "سوريا" },
      prize: { en: "🥇 National Winner", ar: "🥇 بطل على مستوى سوريا" },
    },
    {
      year: "2025",
      title: { en: "Senior Best Engineer", ar: "أفضل مهندس — فئة الكبار" },
      org: { en: "Future Science Challenge", ar: "تحدّي علوم المستقبل" },
      location: { en: "UAE", ar: "الإمارات" },
      prize: { en: "🏆 Senior Category", ar: "🏆 فئة الكبار" },
    },
    {
      year: "2023",
      title: { en: "Take the Lead Program", ar: "برنامج Take the Lead" },
      org: { en: "Cornell University", ar: "جامعة كورنيل" },
      location: { en: "", ar: "" },
      prize: { en: "Certificate of Completion", ar: "شهادة إتمام" },
    },
    {
      year: "2023",
      title: { en: "Certified LEGO EV3 Trainer", ar: "مدرّب معتمَد LEGO EV3" },
      org: { en: "Syrian Robotic Academy", ar: "الأكاديمية السورية للروبوت" },
      location: { en: "", ar: "" },
      prize: { en: "Trainer Certification", ar: "شهادة تدريب" },
    },
    {
      year: "2018",
      title: { en: "Cisco CCNA Routing & Switching", ar: "Cisco CCNA Routing & Switching" },
      org: { en: "Cisco Systems", ar: "Cisco Systems" },
      location: { en: "", ar: "" },
      prize: { en: "Networking Certification", ar: "شهادة شبكات" },
    },
  ],
}

export const skills = {
  label: { en: "Technical Arsenal", ar: "الترسانة التقنية" },
  titleLead: { en: "Skills &", ar: "المهارات" },
  titleAccent: { en: "Expertise", ar: "والخبرات" },
  groups: [
    { title: { en: "Programming", ar: "البرمجة" }, items: ["Python", "C / C++", "Arduino C", "MATLAB", "JavaScript"] },
    { title: { en: "Robotics & AI", ar: "الروبوتيكس والذكاء الصناعي" }, items: ["ROS", "Computer Vision", "Object Detection", "Machine Learning", "Raspberry Pi", "Arduino"] },
    { title: { en: "Electronics & Hardware", ar: "الإلكترونيات والعتاد" }, items: ["PCB Design", "Embedded Systems", "Sensors", "Actuators", "3D Printing", "Mechanical Design"] },
    { title: { en: "Networking & IT", ar: "الشبكات وتقنية المعلومات" }, items: ["Cisco CCNA", "Packet Tracer", "IT Infrastructure", "IoT"] },
    { title: { en: "Leadership", ar: "القيادة" }, items: ["System Design", "Technical Leadership", "Mentoring", "Curriculum Design"] },
    { title: { en: "Tools", ar: "الأدوات" }, items: ["Proteus", "mikroC", "8086 Emulator", "Processing", "Git / GitHub"] },
  ],
}

export const education = {
  label: { en: "Education", ar: "التعليم" },
  titleLead: { en: "Academic", ar: "الأساس" },
  titleAccent: { en: "Foundation", ar: "الأكاديمي" },
  degree: {
    en: "Bachelor of Engineering — Control & Computer Engineering, Robotics Specialization",
    ar: "بكالوريوس هندسة — التحكم والحاسوب، اختصاص الروبوتيكس",
  },
  school: {
    en: "Syrian Private University · Faculty of Control & Computer Engineering",
    ar: "الجامعة السورية الخاصة · كلية هندسة التحكم والحاسوب",
  },
  years: "2016 — 2024",
  projectLabel: { en: "Graduation Project", ar: "مشروع التخرّج" },
  projectName: { en: "Waste Sorting System Using Object Detection", ar: "نظام فرز نفايات باستخدام كشف الأجسام" },
  projectDesc: {
    en: "Designed and implemented an automated vision-based waste classification and mechanical sorting system. Achieved ~40% efficiency improvement in waste segregation versus baseline.",
    ar: "تصميم وتنفيذ نظام آلي لتصنيف النفايات وفرزها ميكانيكياً بالاعتماد على الرؤية الحاسوبية. تحقيق تحسين بنحو 40% في كفاءة الفرز مقارنة بالخط المرجعي.",
  },
}

export const contact = {
  label: { en: "Get In Touch", ar: "تواصل معي" },
  titleLead: { en: "Let's Build", ar: "لنبنِ" },
  titleAccent: { en: "Something Real", ar: "شيئاً حقيقياً" },
  intro: {
    en: "Open to engineering collaborations, robotics partnerships, speaking, and mentoring opportunities.",
    ar: "منفتح على التعاونات الهندسية وشراكات الروبوتيكس والمحاضرات وفرص الإرشاد.",
  },
  cards: [
    { key: "email", label: { en: "Email", ar: "البريد الإلكتروني" }, value: "yahyademeriah@gmail.com", href: "mailto:yahyademeriah@gmail.com" },
    { key: "linkedin", label: { en: "LinkedIn", ar: "لينكدإن" }, value: "@yahya-demeriah", href: "https://www.linkedin.com/in/yahya-demeriah" },
    { key: "github", label: { en: "GitHub", ar: "غيت هَب" }, value: "@XYHDX", href: "https://github.com/XYHDX" },
    { key: "x", label: { en: "X / Twitter", ar: "إكس / تويتر" }, value: "@YDemeriah78064", href: "https://x.com/YDemeriah78064" },
  ],
}

export const footer = {
  tagline: {
    en: "Robotics & AI Engineer building practical, production-ready systems from Damascus — and mentoring the next generation of Syrian engineers.",
    ar: "مهندس روبوتيكس وذكاء صناعي يبني أنظمة عملية جاهزة للإنتاج من دمشق — ويُدرّب الجيل القادم من المهندسين السوريين.",
  },
  copyright: {
    en: "© 2026 Yahya Demeriah · Built with engineering & care",
    ar: "© 2026 يحيى ضميرية · بُني بهندسة وعناية",
  },
}
