export const translations = {
  ar: {
    skipToContent: "تجاوز إلى المحتوى الرئيسي",
    themeToggleDark: "تفعيل الوضع الداكن",
    themeToggleLight: "تفعيل الوضع الفاتح",
    langSelectLabel: "اختر اللغة",
    registerNow: "سجّل الآن",
    brandName: "توفير",
    brandLatin: "Tawfir",
    brandTagline: "منصة جزائرية لإنقاذ الطعام",
    nav: {
      home: "الرئيسية",
      features: "المميزات",
      howItWorks: "كيف تعمل",
      charity: "للجمعيات"
    },
    hero: {
      titleLines: [
        ["أنقذ", "الطعام."],
        ["وفّر", "المال."],
        ["اصنع", "الفرق."]
      ],
      subtitle: "توفير يربط التجار والمستهلكين والجمعيات لمكافحة هدر الطعام في الجزائر.",
      wilayaLabel: "عرض الطعام في ولايتك",
      wilayaShort: "ولايتك",
      primaryCta: "حمّل التطبيق",
      secondaryCta: "شاهد كيف تعمل",
      userTrust: "ثقة المستخدم",
      instantVerify: "تحقق فوري",
      trustValue: "٧٣٪",
      qrLabel: "QR"
    },
    wilayas: [
      { value: "algiers", label: "الجزائر العاصمة" },
      { value: "oran", label: "وهران" },
      { value: "constantine", label: "قسنطينة" },
      { value: "annaba", label: "عنابة" },
      { value: "setif", label: "سطيف" }
    ],
    categories: [
      { icon: "🥖", label: "مخبزة", count: 23, suffix: "عرض قريب" },
      { icon: "🍽️", label: "مطعم", count: 31, suffix: "عرض قريب" },
      { icon: "☕", label: "مقهى", count: 18, suffix: "عرض قريب" },
      { icon: "🛒", label: "سوبرماركت", count: 42, suffix: "عرض قريب" },
      { icon: "🍰", label: "حلويات", count: 15, suffix: "عرض قريب" },
      { icon: "🥩", label: "جزارة", count: 9, suffix: "عروض قريبة" }
    ],
    stats: [
      { target: 1200, prefix: "+", label: "تاجر نشط" },
      { target: 48000, prefix: "+", label: "كيلوغرام طعام محفوظ" },
      { target: 15000, prefix: "+", label: "مستخدم راضٍ" }
    ],
    howItWorks: {
      eyebrow: "كيف تعمل",
      title: "كيف يعمل توفير",
      subtitle: "ثلاثة أدوار، مهمة واحدة: تقليل هدر الطعام",
      actors: [
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
      ]
    },
    features: {
      eyebrow: "المميزات",
      title: "منصة واحدة لثلاث مهام يومية",
      subtitle: "تجربة موثوقة لبيع وشراء والتبرع بفائض الطعام بكل شفافية.",
      items: [
        {
          title: "خريطة القرب",
          description: "اكتشف العروض الأقرب إليك مرتبة حسب المسافة بفضل تقنية PostGIS.",
          icon: "pin",
          size: "large",
          chips: ["GPS", "PostGIS", "فرز ذكي"]
        },
        {
          title: "رمز التحقق",
          description: "كل عملية استلام مؤمنة برمز QR موقع بـ HMAC للتحقق الفوري.",
          icon: "qr",
          size: "medium"
        },
        {
          title: "نقاط الإيكو",
          description: "سمعتك مقاسة في الوقت الفعلي. نقاط لكل سلوك إيجابي.",
          icon: "leaf",
          size: "medium"
        },
        {
          title: "دعم ذكاء اصطناعي",
          description: "مساعد ذكي متاح على مدار الساعة مدعوم بـ Llama 3.1 للإجابة على أسئلتك.",
          icon: "chat",
          size: "medium"
        },
        {
          title: "توصيات ذكية",
          description: "محرك التوصيات الهجين يتعلم تفضيلاتك ليعرض لك أفضل العروض.",
          icon: "sparkles",
          size: "wide",
          chips: ["تعلم تفضيلاتك", "تعاون جماعي", "قرب جغرافي"]
        },
        {
          title: "مسار التبرع",
          description: "تصل الجمعيات بسهولة للتبرعات وتقدم تقارير أثر شفافة وموثقة.",
          icon: "heart",
          size: "medium"
        }
      ]
    },
    screenshots: {
      eyebrow: "واجهة التطبيق",
      title: "تجربة استخدام سلسة ومبتكرة",
      subtitle: "تصميم عصري يضع سهولة الاستخدام في المقام الأول، ليضمن لك تنقلاً سريعاً وتجربة ممتعة في كل خطوة.",
      items: [
        { label: "إدارة التجار", file: "merchant-ecosystem.png" },
        { label: "تطبيق المستهلك", file: "screen-1.png" },
        { label: "منصة الجمعيات", file: "charity-ecosystem.png" }
      ]
    },
    ecoScore: {
      eyebrow: "نظام الإيكو سكور",
      title: "الثقة تتحول إلى امتيازات داخل المنصة",
      description: "كل عملية استلام مؤكدة، كل التزام بالوقت، وكل تقرير أثر موثّق يرفع ثقة المستخدم ويمنحه وصولاً أفضل للعروض والطلبات.",
      subtitle: "يجمع السكور بين الموثوقية، الالتزام بالوقت، جودة العمليات، والمساهمة الاجتماعية لحماية النظام البيئي بالكامل.",
      tableLabel: "مستويات الإيكو سكور",
      scoreText: "من ١٠٠",
      scoreValue: 73,
      currentTierLabel: "مستوى موثوق",
      statusText: "النقاط الحالية: ٧٣/١٠٠",
      tiers: [
        { label: "نموذجي", color: "var(--eco-exemplary)" },
        { label: "موثوق", color: "var(--eco-reliable)" },
        { label: "متطوّر", color: "var(--eco-developing)" },
        { label: "بحاجة لتحسين", color: "var(--eco-at-risk)" },
        { label: "معلّق", color: "var(--eco-suspended)" }
      ]
    },
    proximityMap: {
      eyebrow: "اكتشف قربك",
      title: "اكتشف الطعام بالقرب منك",
      subtitle: "اعثر على العروض الأقرب إليك بفضل نظام تحديد المواقع الجغرافية المتقدم لدينا.",
      detectedWilaya: "تم تحديد ولايتك: الجزائر العاصمة",
      offersStats: "٥٦ عرضاً قريباً خلال ٣ كيلومتر",
      locations: [
        { name: "باب الزوار", count: 12, suffix: "عرض" },
        { name: "حيدرة", count: 9, suffix: "عروض" },
        { name: "القبة", count: 7, suffix: "عروض" }
      ]
    },
    testimonials: {
      eyebrow: "آراء المستخدمين",
      title: "ثقة تبدأ من الحي وتكبر مع كل عملية",
      items: [
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
      ]
    },
    charityCta: {
      eyebrow: "للجمعيات",
      title: "كن جزءاً من الحل",
      description: "يمكن للجمعيات استلام تبرعات موثقة، تنظيم عمليات الجمع، ونشر تقارير أثر شفافة للمجتمع.",
      btnText: "انضم كجمعية",
      impacts: [
        { label: "أسرة مستفيدة", value: "+٣٢٠٠" },
        { label: "كيلوغرام طعام محفوظ", value: "+٤٨٠٠٠" },
        { label: "تغطية الولايات", value: "٢٨" }
      ]
    },
    downloadCta: {
      eyebrow: "حمّل التطبيق الآن",
      title: "حمّل توفير الآن مجاناً",
      subtitle: "متوفر على iOS و Android. تحميل مجاني بالكامل.",
      storeApple: "متوفر على",
      storeAppleBold: "App Store",
      storeGoogle: "متوفر على",
      storeGoogleBold: "Google Play",
      waitlistTitle: "أدخل بريدك للحصول على التحديثات",
      emailPlaceholder: "name@example.com",
      emailLabel: "البريد الإلكتروني",
      notifyMe: "أعلمني",
      successMsg: "تم تسجيلك بنجاح. سنرسل لك آخر التحديثات قريباً."
    },
    trustBadges: [
      "🔒 آمن ومضمون",
      "✅ تاجر موثق",
      "⚡ استجابة فورية",
      "🌿 صديق للبيئة",
      "📱 متاح على iOS و Android"
    ],
    footer: {
      about: "نحارب هدر الطعام في الجزائر بمنصة تجمع السعر العادل، الثقة الرقمية، والأثر الاجتماعي.",
      facebook: "فيسبوك",
      instagram: "إنستغرام",
      linkedin: "لينكدإن",
      columns: [
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
            { href: "#", label: "سياسة الخصوصية" },
            { href: "#", label: "الشروط والأحكام" },
            { href: "#", label: "اتصل بنا" }
          ]
        }
      ],
      copyright: "© ٢٠٢٦ توفير. جميع الحقوق محفوظة.",
      wilayaIndex: "مؤشر الولاية: الجزائر العاصمة",
      clockLabel: "الوقت في الجزائر"
    },
    whatsapp: {
      bubble: "تحدث معنا",
      label: "تحدث معنا عبر واتساب",
      message: "أهلاً توفير، أريد معرفة المزيد"
    },
    scrollTop: "العودة إلى الأعلى",
    videoModal: {
      close: "إغلاق الفيديو",
      title: "كيف يعمل توفير",
      subtitle: "شرح مبسط لكيفية إنقاذ الطعام وتوفير المال"
    },
    waitlistService: {
      sending: "جارٍ الإرسال...",
      registered: "تم التسجيل ✓",
      success: "شكراً! سنتواصل معك قريباً.",
      error: "حدث خطأ. حاول مرة أخرى."
    }
  },
  fr: {
    skipToContent: "Passer au contenu principal",
    themeToggleDark: "Activer le mode sombre",
    themeToggleLight: "Activer le mode clair",
    langSelectLabel: "Choisir la langue",
    registerNow: "S'inscrire",
    brandName: "Tawfir",
    brandLatin: "Tawfir",
    brandTagline: "Plateforme algérienne anti-gaspillage",
    nav: {
      home: "Accueil",
      features: "Fonctionnalités",
      howItWorks: "Comment ça marche",
      charity: "Associations"
    },
    hero: {
      titleLines: [
        ["Sauvez", "le repas."],
        ["Économisez", "l'argent."],
        ["Faites", "la différence."]
      ],
      subtitle: "Tawfir connecte marchands, consommateurs et associations pour lutter contre le gaspillage alimentaire en Algérie.",
      wilayaLabel: "Voir les offres dans votre wilaya",
      wilayaShort: "Wilaya",
      primaryCta: "Télécharger l'app",
      secondaryCta: "Voir comment ça marche",
      userTrust: "Confiance Utilisateur",
      instantVerify: "Vérification instantanée",
      trustValue: "73%",
      qrLabel: "QR"
    },
    wilayas: [
      { value: "algiers", label: "Alger" },
      { value: "oran", label: "Oran" },
      { value: "constantine", label: "Constantine" },
      { value: "annaba", label: "Annaba" },
      { value: "setif", label: "Sétif" }
    ],
    categories: [
      { icon: "🥖", label: "Boulangerie", count: 23, suffix: "offres à proximité" },
      { icon: "🍽️", label: "Restaurant", count: 31, suffix: "offres à proximité" },
      { icon: "☕", label: "Café", count: 18, suffix: "offres à proximité" },
      { icon: "🛒", label: "Supermarché", count: 42, suffix: "offres à proximité" },
      { icon: "🍰", label: "Pâtisserie", count: 15, suffix: "offres à proximité" },
      { icon: "🥩", label: "Boucherie", count: 9, suffix: "offres à proximité" }
    ],
    stats: [
      { target: 1200, prefix: "+", label: "Marchands Actifs" },
      { target: 48000, prefix: "+", label: "Kg sauvés" },
      { target: 15000, prefix: "+", label: "Utilisateurs Satisfaits" }
    ],
    howItWorks: {
      eyebrow: "Fonctionnement",
      title: "Comment fonctionne Tawfir",
      subtitle: "Trois rôles, une seule mission : réduire le gaspillage alimentaire",
      actors: [
        {
          title: "Consommateur",
          icon: "cart",
          steps: ["Parcourez les offres proches de vous", "Réservez et payez à la collecte", "Présentez le code QR pour récupérer le repas"]
        },
        {
          title: "Marchand",
          icon: "store",
          steps: ["Ajoutez vos produits excédentaires", "Recevez les réservations et commandes", "Scannez le code QR et confirmez la remise"]
        },
        {
          title: "Associations",
          icon: "heart",
          steps: ["Parcourez les dons disponibles", "Soumettez une demande de collecte avec détails", "Récupérez la nourriture et publiez l'impact"]
        }
      ]
    },
    features: {
      eyebrow: "Fonctionnalités",
      title: "Une plateforme pour trois missions",
      subtitle: "Une expérience fiable pour vendre, acheter et faire des dons alimentaires excédentaires en toute transparence.",
      items: [
        {
          title: "Carte de Proximité",
          description: "Découvrez les offres les plus proches triées par distance grâce à PostGIS.",
          icon: "pin",
          size: "large",
          chips: ["GPS", "PostGIS", "Tri Intelligent"]
        },
        {
          title: "Code de Validation",
          description: "Chaque transaction est sécurisée par un QR code signé HMAC pour une vérification instantanée.",
          icon: "qr",
          size: "medium"
        },
        {
          title: "Eco Score",
          description: "Votre réputation mesurée en temps réel. Des points pour chaque comportement positif.",
          icon: "leaf",
          size: "medium"
        },
        {
          title: "Support IA",
          description: "Assistant intelligent disponible 24/7 alimenté par Llama 3.1 pour répondre à vos questions.",
          icon: "chat",
          size: "medium"
        },
        {
          title: "Recommandations",
          description: "Moteur de recommandation hybride qui apprend vos préférences pour vous proposer les meilleures offres.",
          icon: "sparkles",
          size: "wide",
          chips: ["Apprentissage", "Collaboratif", "Géolocalisation"]
        },
        {
          title: "Dons Simplifiés",
          description: "Les associations accèdent facilement aux dons et soumettent des rapports d'impact transparents.",
          icon: "heart",
          size: "medium"
        }
      ]
    },
    screenshots: {
      eyebrow: "Aperçu de l'application",
      title: "Une expérience utilisateur fluide et moderne",
      subtitle: "Un design épuré axé sur la simplicité pour une navigation rapide et intuitive à chaque étape.",
      items: [
        { label: "Gestion Marchand", file: "merchant-ecosystem.png" },
        { label: "Application Consommateur", file: "screen-1.png" },
        { label: "Plateforme Associations", file: "charity-ecosystem.png" }
      ]
    },
    ecoScore: {
      eyebrow: "Système Eco Score",
      title: "La confiance récompensée par des privilèges",
      description: "Chaque collecte confirmée, respect des horaires et rapport d'impact augmente la confiance et donne un meilleur accès aux offres.",
      subtitle: "Le score combine fiabilité, ponctualité, qualité des transactions et contribution sociale pour protéger l'écosystème.",
      tableLabel: "Niveaux de l'Eco Score",
      scoreText: "sur 100",
      scoreValue: 73,
      currentTierLabel: "Niveau Fiable",
      statusText: "Score actuel : 73/100",
      tiers: [
        { label: "Exemplaire", color: "var(--eco-exemplary)" },
        { label: "Fiable", color: "var(--eco-reliable)" },
        { label: "En développement", color: "var(--eco-developing)" },
        { label: "À améliorer", color: "var(--eco-at-risk)" },
        { label: "Suspendu", color: "var(--eco-suspended)" }
      ]
    },
    proximityMap: {
      eyebrow: "Géolocalisation",
      title: "Découvrez les offres près de chez vous",
      subtitle: "Trouvez les repas disponibles à proximité grâce à notre système de géolocalisation avancé.",
      detectedWilaya: "Wilaya détectée : Alger",
      offersStats: "56 offres disponibles dans un rayon de 3 km",
      locations: [
        { name: "Bab Ezzouar", count: 12, suffix: "offres" },
        { name: "Hydra", count: 9, suffix: "offres" },
        { name: "Kouba", count: 7, suffix: "offres" }
      ]
    },
    testimonials: {
      eyebrow: "Témoignages",
      title: "La confiance commence au coin de la rue",
      items: [
        {
          name: "Hamza Ben Ali",
          role: "Boulanger, Constantine",
          initials: "H",
          typewriter: true,
          quote: "Je jetais environ 30 pains chaque jour. Avec Tawfir, j'en vends 90% et je donne le reste."
        },
        {
          name: "Amina Bouzid",
          role: "Étudiante, Alger",
          initials: "A",
          quote: "J'ai économisé plus de 8000 DA en un seul mois ! Les repas sont frais et à deux pas de chez moi."
        },
        {
          name: "Association El Nour",
          role: "Organisation caritative, Oran",
          initials: "N",
          quote: "Nous pouvons désormais distribuer des repas à des dizaines de familles chaque semaine de manière organisée."
        }
      ]
    },
    charityCta: {
      eyebrow: "Associations",
      title: "Faites partie de la solution",
      description: "Les associations peuvent recevoir des dons certifiés, organiser des collectes et publier des rapports d'impact clairs.",
      btnText: "Rejoindre comme association",
      impacts: [
        { label: "Familles bénéficiaires", value: "+3200" },
        { label: "Nourriture sauvée (kg)", value: "+48000" },
        { label: "Wilayas couvertes", value: "28" }
      ]
    },
    downloadCta: {
      eyebrow: "Obtenir l'application",
      title: "Téléchargez Tawfir gratuitement",
      subtitle: "Disponible sur iOS et Android. Gratuit et sans frais cachés.",
      storeApple: "Disponible sur",
      storeAppleBold: "App Store",
      storeGoogle: "Disponible sur",
      storeGoogleBold: "Google Play",
      waitlistTitle: "Inscrivez-vous pour les nouveautés",
      emailPlaceholder: "nom@exemple.com",
      emailLabel: "Adresse e-mail",
      notifyMe: "M'informer",
      successMsg: "Inscription réussie ! Nous vous tiendrons au courant des nouveautés."
    },
    trustBadges: [
      "🔒 Sécurisé et Garanti",
      "✅ Commerçants Vérifiés",
      "⚡ Réponse Instantanée",
      "🌿 Éco-responsable",
      "📱 Dispo sur iOS & Android"
    ],
    footer: {
      about: "Lutter contre le gaspillage alimentaire en Algérie en combinant prix juste, confiance numérique et impact social.",
      facebook: "Facebook",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      columns: [
        {
          title: "Plateforme",
          links: [
            { href: "#features", label: "Fonctionnalités" },
            { href: "#how", label: "Comment ça marche" },
            { href: "#eco", label: "Eco Score" }
          ]
        },
        {
          title: "Communauté",
          links: [
            { href: "#charity", label: "Associations" },
            { href: "#map", label: "Wilayas" },
            { href: "#testimonials", label: "Témoignages" }
          ]
        },
        {
          title: "Légal",
          links: [
            { href: "#", label: "Confidentialité" },
            { href: "#", label: "Conditions" },
            { href: "#", label: "Contact" }
          ]
        }
      ],
      copyright: "© 2026 Tawfir. Tous droits réservés.",
      wilayaIndex: "Wilaya : Alger",
      clockLabel: "Heure en Algérie"
    },
    whatsapp: {
      bubble: "Discuter",
      label: "Contactez-nous sur WhatsApp",
      message: "Bonjour Tawfir, je souhaite en savoir plus"
    },
    scrollTop: "Retour en haut",
    videoModal: {
      close: "Fermer la vidéo",
      title: "Comment fonctionne Tawfir",
      subtitle: "Un aperçu simple de la façon de sauver la nourriture et économiser de l'argent"
    },
    waitlistService: {
      sending: "Envoi en cours...",
      registered: "Inscrit ✓",
      success: "Merci ! Nous vous contacterons bientôt.",
      error: "Une erreur est survenue. Veuillez réessayer."
    }
  },
  en: {
    skipToContent: "Skip to main content",
    themeToggleDark: "Activate dark mode",
    themeToggleLight: "Activate light mode",
    langSelectLabel: "Choose Language",
    registerNow: "Register Now",
    brandName: "Tawfir",
    brandLatin: "Tawfir",
    brandTagline: "Algerian food-saving platform",
    nav: {
      home: "Home",
      features: "Features",
      howItWorks: "How It Works",
      charity: "Charities"
    },
    hero: {
      titleLines: [
        ["Save", "food."],
        ["Save", "money."],
        ["Make difference."]
      ],
      subtitle: "Tawfir connects merchants, consumers, and charities to fight food waste in Algeria.",
      wilayaLabel: "View food in your wilaya",
      wilayaShort: "Wilaya",
      primaryCta: "Download App",
      secondaryCta: "See How It Works",
      userTrust: "User Trust",
      instantVerify: "Instant Verification",
      trustValue: "73%",
      qrLabel: "QR"
    },
    wilayas: [
      { value: "algiers", label: "Algiers" },
      { value: "oran", label: "Oran" },
      { value: "constantine", label: "Constantine" },
      { value: "annaba", label: "Annaba" },
      { value: "setif", label: "Sétif" }
    ],
    categories: [
      { icon: "🥖", label: "Bakery", count: 23, suffix: "nearby offers" },
      { icon: "🍽️", label: "Restaurant", count: 31, suffix: "nearby offers" },
      { icon: "☕", label: "Café", count: 18, suffix: "nearby offers" },
      { icon: "🛒", label: "Supermarket", count: 42, suffix: "nearby offers" },
      { icon: "🍰", label: "Pastry", count: 15, suffix: "nearby offers" },
      { icon: "🥩", label: "Butcher", count: 9, suffix: "nearby offers" }
    ],
    stats: [
      { target: 1200, prefix: "+", label: "Active Merchants" },
      { target: 48000, prefix: "+", label: "Kg Food Saved" },
      { target: 15000, prefix: "+", label: "Satisfied Users" }
    ],
    howItWorks: {
      eyebrow: "How It Works",
      title: "How Tawfir Works",
      subtitle: "Three roles, one single mission: reduce food waste",
      actors: [
        {
          title: "Consumer",
          icon: "cart",
          steps: ["Browse nearby offers", "Reserve and pay at pickup", "Present QR code and collect your food"]
        },
        {
          title: "Merchant",
          icon: "store",
          steps: ["List your surplus food products", "Receive bookings and orders", "Scan QR code to confirm delivery"]
        },
        {
          title: "Charity",
          icon: "heart",
          steps: ["Browse donation listings", "Submit claim with details", "Collect food and report social impact"]
        }
      ]
    },
    features: {
      eyebrow: "Features",
      title: "One platform for three daily tasks",
      subtitle: "A reliable experience to sell, buy, and donate surplus food with total transparency.",
      items: [
        {
          title: "Proximity Map",
          description: "Discover the closest offers sorted by distance using PostGIS geolocation.",
          icon: "pin",
          size: "large",
          chips: ["GPS", "PostGIS", "Smart Sort"]
        },
        {
          title: "Verification Token",
          description: "Every transaction is secured by a HMAC-signed QR code for instant authentication.",
          icon: "qr",
          size: "medium"
        },
        {
          title: "Eco Score",
          description: "Your reputation measured in real-time. Gain points for positive actions.",
          icon: "leaf",
          size: "medium"
        },
        {
          title: "AI Support",
          description: "Smart assistant available 24/7 powered by Llama 3.1 to answer all questions.",
          icon: "chat",
          size: "medium"
        },
        {
          title: "Smart Recoms",
          description: "Hybrid recommendation engine learns your preferences to show you the best deals.",
          icon: "sparkles",
          size: "wide",
          chips: ["Personalized", "Collaborative", "Location-aware"]
        },
        {
          title: "Donation Pipeline",
          description: "Charities easily access donations and submit transparent impact reports.",
          icon: "heart",
          size: "medium"
        }
      ]
    },
    screenshots: {
      eyebrow: "App Interfaces",
      title: "Smooth and innovative experience",
      subtitle: "Modern design focused on usability, ensuring quick navigation and pleasant interactions at every step.",
      items: [
        { label: "Merchant Dashboard", file: "merchant-ecosystem.png" },
        { label: "Consumer App", file: "screen-1.png" },
        { label: "Charity Platform", file: "charity-ecosystem.png" }
      ]
    },
    ecoScore: {
      eyebrow: "Eco Score System",
      title: "Trust turns into privileges on the platform",
      description: "Every verified pickup, on-time arrival, and verified impact report boosts user trust and unlocks better deals.",
      subtitle: "The score combines reliability, punctuality, transaction quality, and social contribution to protect the ecosystem.",
      tableLabel: "Eco Score Tiers",
      scoreText: "out of 100",
      scoreValue: 73,
      currentTierLabel: "Reliable Level",
      statusText: "Current score: 73/100",
      tiers: [
        { label: "Exemplary", color: "var(--eco-exemplary)" },
        { label: "Reliable", color: "var(--eco-reliable)" },
        { label: "Developing", color: "var(--eco-developing)" },
        { label: "Needs Improvement", color: "var(--eco-at-risk)" },
        { label: "Suspended", color: "var(--eco-suspended)" }
      ]
    },
    proximityMap: {
      eyebrow: "Discover Proximity",
      title: "Discover Food Near You",
      subtitle: "Find the closest listings near you using our advanced geolocation system.",
      detectedWilaya: "Detected Wilaya: Algiers",
      offersStats: "56 nearby offers within 3 km",
      locations: [
        { name: "Bab Ezzouar", count: 12, suffix: "offers" },
        { name: "Hydra", count: 9, suffix: "offers" },
        { name: "Kouba", count: 7, suffix: "offers" }
      ]
    },
    testimonials: {
      eyebrow: "User Reviews",
      title: "Trust starts in the neighborhood and grows",
      items: [
        {
          name: "Hamza Ben Ali",
          role: "Bakery Owner, Constantine",
          initials: "H",
          typewriter: true,
          quote: "I used to throw away about 30 baguettes daily. With Tawfir, I sell 90% of them and donate the rest."
        },
        {
          name: "Amina Bouzid",
          role: "University Student, Algiers",
          initials: "A",
          quote: "Saved over 8000 DA in just one month! The food is fresh and right around the corner."
        },
        {
          name: "El Nour Association",
          role: "Charity Organization, Oran",
          initials: "N",
          quote: "Now we can distribute food to dozens of families weekly with a streamlined, documented process."
        }
      ]
    },
    charityCta: {
      eyebrow: "For Charities",
      title: "Be Part of the Solution",
      description: "Charities can claim verified donations, coordinate pickups, and publish transparent impact reports.",
      btnText: "Join as Charity",
      impacts: [
        { label: "Beneficiary Families", value: "+3200" },
        { label: "Kg Food Saved", value: "+48000" },
        { label: "Wilayas Covered", value: "28" }
      ]
    },
    downloadCta: {
      eyebrow: "Download App Now",
      title: "Download Tawfir Now for Free",
      subtitle: "Available on iOS and Android. Completely free download.",
      storeApple: "Available on",
      storeAppleBold: "App Store",
      storeGoogle: "Available on",
      storeGoogleBold: "Google Play",
      waitlistTitle: "Enter your email for updates",
      emailPlaceholder: "name@example.com",
      emailLabel: "Email address",
      notifyMe: "Notify Me",
      successMsg: "Successfully registered! We will send you updates soon."
    },
    trustBadges: [
      "🔒 Safe & Secure",
      "✅ Verified Merchant",
      "⚡ Instant Response",
      "🌿 Eco Friendly",
      "📱 Available on iOS & Android"
    ],
    footer: {
      about: "Fighting food waste in Algeria through fair pricing, digital trust, and community impact.",
      facebook: "Facebook",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      columns: [
        {
          title: "Platform",
          links: [
            { href: "#features", label: "Features" },
            { href: "#how", label: "How It Works" },
            { href: "#eco", label: "Eco Score" }
          ]
        },
        {
          title: "Community",
          links: [
            { href: "#charity", label: "Charities" },
            { href: "#map", label: "Wilayas" },
            { href: "#testimonials", label: "Testimonials" }
          ]
        },
        {
          title: "Legal",
          links: [
            { href: "#", label: "Privacy Policy" },
            { href: "#", label: "Terms of Service" },
            { href: "#", label: "Contact Us" }
          ]
        }
      ],
      copyright: "© 2026 Tawfir. All rights reserved.",
      wilayaIndex: "Wilaya index: Algiers",
      clockLabel: "Time in Algeria"
    },
    whatsapp: {
      bubble: "Chat with us",
      label: "Chat with us on WhatsApp",
      message: "Hello Tawfir, I would like to know more"
    },
    scrollTop: "Scroll to top",
    videoModal: {
      close: "Close Video",
      title: "How Tawfir Works",
      subtitle: "A simple explanation of how to save food and money"
    },
    waitlistService: {
      sending: "Sending...",
      registered: "Registered ✓",
      success: "Thank you! We will get back to you soon.",
      error: "An error occurred. Please try again."
    }
  }
};
