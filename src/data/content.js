export const brand = {
  arabicName: "توفير",
  latinName: "Tawfir",
  tagline: "منصة جزائرية لإنقاذ الطعام"
};

export const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#features", label: "المميزات" },
  { href: "#how", label: "كيف تعمل" },
  { href: "#charity", label: "للجمعيات" }
];

export const hero = {
  titleLines: [
    ["أنقذ", "الطعام."],
    ["وفّر", "المال."],
    ["اصنع", "الفرق."]
  ],
  subtitleAr: "توفير يربط التجار والمستهلكين والجمعيات لمكافحة هدر الطعام في الجزائر.",
  subtitleFr: "Tawfir connecte marchands, consommateurs et associations pour lutter contre le gaspillage alimentaire en Algérie.",
  wilayaLabel: "عرض الطعام في ولايتك",
  primaryCta: "حمّل التطبيق",
  secondaryCta: "شاهد كيف تعمل"
};

export const wilayas = [
  { value: "algiers", label: "الجزائر العاصمة" },
  { value: "oran", label: "وهران" },
  { value: "constantine", label: "قسنطينة" },
  { value: "annaba", label: "عنابة" },
  { value: "setif", label: "سطيف" }
];

export const categories = [
  { icon: "🥖", label: "مخبزة", count: "٢٣ عرض قريب" },
  { icon: "🍽️", label: "مطعم", count: "٣١ عرض قريب" },
  { icon: "☕", label: "مقهى", count: "١٨ عرض قريب" },
  { icon: "🛒", label: "سوبرماركت", count: "٤٢ عرض قريب" },
  { icon: "🍰", label: "حلويات", count: "١٥ عرض قريب" },
  { icon: "🥩", label: "جزارة", count: "٩ عروض قريبة" }
];

export const stats = [
  { target: 1200, prefix: "+", labelAr: "تاجر نشط", labelFr: "marchands actifs" },
  { target: 48000, prefix: "+", labelAr: "كيلوغرام طعام محفوظ", labelFr: "kg de nourriture sauvés" },
  { target: 15000, prefix: "+", labelAr: "مستخدم راضٍ", labelFr: "utilisateurs satisfaits" }
];

export const howItWorksActors = [
  {
    title: "للمستهلك",
    icon: "cart",
    steps: ["تصفّح القوائم القريبة منك", "احجز وادفع عند الاستلام", "اعرض رمز QR واستلم طعامك"]
  },
  {
    title: "للتاجر",
    icon: "store",
    steps: ["أضف منتجاتك الفائضة", "استقبل الحجوزات والطلبات", "امسح رمز QR وأكّد الاستلام"]
  },
  {
    title: "للجمعيات",
    icon: "heart",
    steps: ["تصفّح قوائم التبرعات", "قدّم طلب استلام مع التفاصيل", "اجمع الطعام وارفع تقرير الأثر"]
  }
];

export const features = [
  {
    title: "خريطة القرب",
    description: "Découvrez les offres les plus proches triées par distance grâce à PostGIS.",
    icon: "pin",
    size: "large",
    chips: ["GPS", "PostGIS", "فرز ذكي"]
  },
  {
    title: "رمز التحقق",
    description: "Chaque transaction est sécurisée par un QR code signé HMAC pour une vérification instantanée.",
    icon: "qr",
    size: "medium"
  },
  {
    title: "نقاط الإيكو",
    description: "Votre réputation mesurée en temps réel. Des points pour chaque bon comportement.",
    icon: "leaf",
    size: "medium"
  },
  {
    title: "دعم ذكاء اصطناعي",
    description: "Assistant intelligent disponible 24/7 alimenté par Llama 3.1 pour répondre à toutes vos questions.",
    icon: "chat",
    size: "medium"
  },
  {
    title: "توصيات ذكية",
    description: "Notre moteur de recommandation hybride apprend vos préférences pour vous montrer les meilleures offres.",
    icon: "sparkles",
    size: "wide",
    chips: ["تعلم تفضيلاتك", "تعاون جماعي", "قرب جغرافي"]
  },
  {
    title: "مسار التبرع",
    description: "Les associations accèdent facilement aux dons et soumettent des rapports d'impact transparents.",
    icon: "heart",
    size: "medium"
  }
];

export const screenshots = [
  { label: "إدارة التجار", file: "merchant-ecosystem.png" },
  { label: "تطبيق المستهلك", file: "screen-1.png" },
  { label: "منصة الجمعيات", file: "charity-ecosystem.png" }
];

export const ecoTiers = [
  { ar: "نموذجي", fr: "Exemplary", color: "var(--eco-exemplary)" },
  { ar: "موثوق", fr: "Reliable", color: "var(--eco-reliable)" },
  { ar: "متطوّر", fr: "Developing", color: "var(--eco-developing)" },
  { ar: "بحاجة لتحسين", fr: "At Risk", color: "var(--eco-at-risk)" },
  { ar: "معلّق", fr: "Suspended", color: "var(--eco-suspended)" }
];

export const nearbyLocations = [
  { name: "باب الزوار", offers: "١٢ عرض" },
  { name: "حيدرة", offers: "٩ عروض" },
  { name: "القبة", offers: "٧ عروض" }
];

export const testimonials = [
  {
    name: "حمزة بن علي",
    role: "صاحب مخبزة، قسنطينة",
    initials: "ح",
    typewriter: true,
    quote: "كنت أرمي ما يقارب ٣٠ خبزة كل يوم. مع توفير، أصبحت أبيع ٩٠٪ منها وأتبرع بالباقي."
  },
  {
    name: "أمينة بوزيد",
    role: "طالبة جامعية، الجزائر العاصمة",
    initials: "أ",
    quote: "وفّرت أكثر من ٨٠٠٠ دينار في شهر واحد فقط! الطعام طازج وقريب من البيت."
  },
  {
    name: "جمعية النور",
    role: "جمعية خيرية، وهران",
    initials: "ن",
    quote: "الآن نستطيع توزيع الطعام على عشرات الأسر أسبوعياً بنظام منظّم وموثّق."
  }
];

export const charityImpact = [
  { label: "أسرة مستفيدة", value: "+٣٢٠٠" },
  { label: "كيلوغرام طعام محفوظ", value: "+٤٨٠٠٠" },
  { label: "تغطية الولايات", value: "٢٨" }
];

export const trustBadges = [
  "🔒 آمن ومضمون",
  "✅ تاجر موثق",
  "⚡ استجابة فورية",
  "🌿 صديق للبيئة",
  "📱 متاح على iOS و Android"
];

export const footerColumns = [
  {
    title: "المنصة",
    links: [
      { href: "#features", label: "المميزات" },
      { href: "#how", label: "كيف تعمل" },
      { href: "#eco", label: "الإيكو سكور" }
    ]
  },
  {
    title: "للمجتمع",
    links: [
      { href: "#charity", label: "للجمعيات" },
      { href: "#map", label: "الولايات" },
      { href: "#testimonials", label: "آراء المستخدمين" }
    ]
  },
  {
    title: "قانوني",
    links: [
      { href: "#", label: "Confidentialité", lang: "fr" },
      { href: "#", label: "Conditions", lang: "fr" },
      { href: "#", label: "Contact", lang: "fr" }
    ]
  }
];
