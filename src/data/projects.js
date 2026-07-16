// ─────────────────────────────────────────────────────────────────────────────
//  PROJECTS DATA — bilingual (EN + AR)
//  Each text field has an `_ar` sibling. Use `pick(item, field, lang)` to read.
// ─────────────────────────────────────────────────────────────────────────────

// Pull a localized field. Falls back to EN if the AR variant is missing.
export function pick(obj, field, lang = 'en') {
  if (lang === 'ar') {
    const arVal = obj[`${field}_ar`];
    if (arVal !== undefined && arVal !== null && arVal !== '') return arVal;
  }
  return obj[field];
}

export const PROJECTS = [
  {
    id: 1,
    slug: "noir-collective",
    title: "Noir Collective",
    title_ar: "نوار كولكتيف",
    client: "Noir Atelier — Riyadh",
    client_ar: "نوار أتيليه — الرياض",
    category: "Brand Identity",
    category_ar: "هويّة بصرية",
    services: ["Brand Strategy", "Wordmark", "Typography System", "Print Collateral"],
    services_ar: ["استراتيجية الهويّة", "شعار نصّي", "نظام طباعي", "مطبوعات مساندة"],
    role: "Creative Direction & Design",
    role_ar: "إدارة إبداعية وتصميم",
    duration: "10 weeks",
    duration_ar: "10 أسابيع",
    year: "2024",
    tags: ["Branding", "Typography", "Print"],
    tags_ar: ["هويّة", "طباعة", "مطبوعات"],
    description:
      "Full visual identity for an independent fashion label — wordmark, colour system, and print collateral.",
    description_ar:
      "هويّة بصرية متكاملة لعلامة أزياء مستقلّة — شعار نصّي، نظام لوني، ومطبوعات مساندة.",
    cover:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&h=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485518882345-15568b007407?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    ],
    hue: "#1a1a1a",
    accent: "#FF6B00",
    span: 2,
    featured: true,
    story: {
      brief:
        "Noir Atelier was launching as an independent contemporary fashion label in Riyadh, blending traditional Arabian silhouettes with brutalist editorial styling. They needed an identity that felt confidently underground — never loud, never fashion-cliché — and one that could carry across garment tags, lookbooks, store signage, and social.",
      brief_ar:
        "كانت نوار أتيليه تستعدّ لإطلاق علامة أزياء مستقلّة في الرياض، تمزج بين الصور الظلّية العربية التقليدية وأسلوب تحريري بروتالي. أرادوا هويّةً تشعرك بثقة هادئة — لا صراخ ولا كليشيهات الموضة — قادرةً على الانتقال بين بطاقات الملابس، الكتب البصرية، لافتات المتجر، والسوشال.",
      challenge:
        "The founders explicitly didn't want a 'luxury logo' moment — no script, no gold foil, no monogram. The challenge was to design something that read as premium without leaning on any of the visual shortcuts the category overuses. It also needed to feel native to both Latin and Arabic readers without one feeling like an afterthought.",
      challenge_ar:
        "كان المؤسّسون واضحين: لا شعار «فاخر» — لا خطّ يدوي، لا ورق ذهبي، لا مونوغرام. التحدّي كان تصميم شيءٍ يُقرأ كرفيع المستوى دون الاعتماد على الاختصارات البصرية المستهلَكة في القطاع. وكان لا بدّ أن يبدو أصيلاً للقارئ العربي واللاتيني معاً، دون أن يشعر أحدهما بأنّه مُلحَق لاحقاً.",
      approach:
        "I built the wordmark from a custom-drawn grotesque, with sharpened terminals that mirror the brand's tailoring. The Arabic lockup was developed in parallel — not translated — by re-drawing each glyph to share the same stress and rhythm as the Latin. A single accent colour (oxidised orange) appears once per surface, like a stitched label inside a jacket.",
      approach_ar:
        "بنيتُ الشعار النصّي من خطٍّ غروتيسك مرسوم خصّيصاً، بنهايات حادّة تعكس خياطة العلامة. صيغة الشعار العربية طُوِّرت بالتوازي — لا ترجمة — بإعادة رسم كل حرف ليتشارك التوتّر والإيقاع نفسهما مع اللاتيني. يظهر لونٌ مميِّز واحد (برتقالي مؤكسد) مرّةً واحدة على كل سطح، كعلامةٍ مخيطة داخل سترة.",
      outcome:
        "Launched in Q1 2024 across three stores and an e-commerce site. The opening capsule sold through 80% of stock in eleven days, and the lookbook was featured in three regional fashion publications. The identity has since been extended to a sub-label and a perfume line without modification.",
      outcome_ar:
        "أُطلقت في الربع الأوّل من 2024 عبر ثلاثة متاجر وموقع إلكتروني. باعت المجموعة الافتتاحية 80% من المخزون خلال 11 يوماً، وظهر الكتاب البصري في ثلاث مجلّات أزياء إقليمية. ومنذ ذلك الحين امتدّت الهويّة لعلامة فرعية وخطّ عطور دون أي تعديل.",
    },
    process: [
      { phase: "Discovery", phase_ar: "اكتشاف",   detail: "Founder interviews, competitive audit across 40+ regional labels, mood and material studies.", detail_ar: "مقابلات مع المؤسّسين، دراسة تنافسية لأكثر من 40 علامة إقليمية، ودراسات للمزاج والمواد." },
      { phase: "Strategy",  phase_ar: "استراتيجية", detail: "Positioning statement, three-word brand voice (\"quiet, sharpened, unbothered\"), naming validation.",  detail_ar: "بيان التموضع، صوت العلامة بثلاث كلمات («هادئ، حادّ، غير مكترث»)، والتحقّق من الاسم." },
      { phase: "Identity",  phase_ar: "هويّة",     detail: "Wordmark exploration, custom Arabic glyph drawing, monogram development, palette and texture system.", detail_ar: "استكشاف الشعار النصّي، رسم حروف عربية خاصّة، تطوير المونوغرام، ونظام الألوان والقوام." },
      { phase: "Application", phase_ar: "تطبيق",   detail: "Garment tags, woven labels, packaging, lookbook layout, in-store signage, social grid.", detail_ar: "بطاقات الملابس، التسميات المنسوجة، التعبئة، تنسيق الكتاب البصري، لافتات المتجر، وشبكة السوشال." },
    ],
    deliverables: [
      "Bilingual wordmark (Latin + Arabic)",
      "60-page brand guidelines",
      "Print collateral system",
      "Packaging & woven labels",
      "Editorial template kit",
    ],
    deliverables_ar: [
      "شعار نصّي ثنائي اللغة (لاتيني + عربي)",
      "دليل هويّة من 60 صفحة",
      "نظام مطبوعات مساندة",
      "تعبئة وتسميات منسوجة",
      "حزمة قوالب تحريرية",
    ],
    metrics: [
      { label: "Stock sold (first 11 days)", label_ar: "المخزون المُباع (أول 11 يوماً)", value: "80%" },
      { label: "Press features",             label_ar: "ميزات صحفية",                   value: "3" },
      { label: "Brand recall (post-launch survey)", label_ar: "تذكّر العلامة (استبيان بعد الإطلاق)", value: "+62%" },
    ],
    testimonial: {
      quote:
        "The identity does what we never could in conversation — it tells people exactly what we are before we open our mouths.",
      quote_ar:
        "تفعل الهويّة ما لم نستطع فعله بالكلام — تخبر الناس بالضبط ما نحن قبل أن نفتح أفواهنا.",
      author: "Layla Al-Mansour",
      author_ar: "ليلى المنصور",
      role:   "Co-founder, Noir Atelier",
      role_ar: "شريكة مؤسِّسة، نوار أتيليه",
    },
  },
  {
    id: 7,
    slug: "vera-beaute",
    title: "Véra Beauté",
    title_ar: "فيرا بوتيه",
    client: "Véra Beauté — Paris & Riyadh",
    client_ar: "فيرا بوتيه — باريس والرياض",
    category: "Logo & Packaging",
    category_ar: "شعار وتعبئة",
    services: ["Brand Identity", "Packaging System", "Art Direction", "Launch Campaign"],
    services_ar: ["هويّة بصرية", "نظام تعبئة", "توجيه فنّي", "حملة إطلاق"],
    role: "Creative Direction & Design",
    role_ar: "إدارة إبداعية وتصميم",
    duration: "14 weeks",
    duration_ar: "14 أسبوعاً",
    year: "2025",
    tags: ["Branding", "Packaging", "Luxury"],
    tags_ar: ["هويّة", "تعبئة", "فخامة"],
    description:
      "Identity and packaging system for a luxury skincare house bridging French formulation and Gulf ritual.",
    description_ar:
      "هويّة ونظام تعبئة لدار عناية بالبشرة فاخرة تجمع بين التركيبات الفرنسية وطقوس الخليج.",
    cover:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&h=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    ],
    hue: "#1a1410",
    accent: "#FF6B00",
    span: 2,
    featured: true,
    story: {
      brief:
        "Véra Beauté is a skincare house founded by a Saudi-French duo: formulations developed in a Lyon laboratory, rituals rooted in Gulf beauty culture. Ahead of a launch across Riyadh, Dubai, and Paris, they needed an identity and packaging system that could sit beside heritage French houses in a department-store vitrine without borrowing anyone's history.",
      brief_ar:
        "فيرا بوتيه دار عناية بالبشرة أسّسها ثنائي سعودي-فرنسي: تركيبات طُوِّرت في مختبر في ليون، وطقوس متجذّرة في ثقافة الجمال الخليجية. قبل الإطلاق في الرياض ودبي وباريس، احتاجوا هويّةً ونظام تعبئة يجلس بجانب الدور الفرنسية العريقة في فاترينة متجر كبير دون استعارة تاريخ أحد.",
      challenge:
        "Luxury cosmetics is a category built on codes — serif wordmarks, gold on black, ornament as shorthand for expense. The founders wanted the shelf presence of an heirloom house with none of the borrowed nostalgia. The system also had to carry bilingual packaging as a legal requirement, which most luxury brands treat as a defacement rather than a design opportunity.",
      challenge_ar:
        "مستحضرات التجميل الفاخرة قطاعٌ مبنيّ على شيفرات — شعارات سيريف، ذهبيّ على أسود، وزخرفة كاختصارٍ للثمن. أراد المؤسّسان حضوراً على الرفّ يليق بدارٍ عريقة دون أيّ حنينٍ مستعار. وكان على النظام أيضاً أن يحمل تعبئةً ثنائية اللغة كمتطلَّب قانوني — وهو ما تعامله أغلب العلامات الفاخرة كتشويهٍ لا كفرصة تصميم.",
      approach:
        "We made bilingualism the brand's signature instead of its burden. The wordmark is a matched pair — Latin and Arabic drawn to identical optical weight — and every carton carries both scripts in mirrored lockups, turning the legal requirement into the shelf differentiator. The palette refuses black-and-gold: warm alabaster, oxblood, and a single foil pass reserved for the ritual line. Packaging is uncoated stock with a debossed pattern derived from the founder's grandmother's thobe embroidery.",
      approach_ar:
        "جعلنا ثنائية اللغة توقيع العلامة بدل أن تكون عبئها. الشعار النصّي زوجٌ متطابق — اللاتيني والعربي مرسومان بالوزن البصري نفسه — وكلّ علبة تحمل الخطَّين في صيغ متناظرة، فتحوّل المتطلَّب القانوني إلى ما يميّزها على الرفّ. اللوحة اللونية ترفض الأسود والذهبي: مرمر دافئ، أحمر داكن، وطبقة رقاقة واحدة محجوزة لخطّ الطقوس. التعبئة على ورق غير مطليّ بنقشٍ غائر مستوحى من تطريز ثوب جدّة المؤسِّسة.",
      outcome:
        "The launch collection sold out its first production run in Riyadh within three weeks, and the mirrored bilingual lockup became the brand's most-photographed asset on social. Two regional department stores requested exclusive shades — the clearest sign a new house has earned shelf authority.",
      outcome_ar:
        "نفدت مجموعة الإطلاق من دفعتها الإنتاجية الأولى في الرياض خلال ثلاثة أسابيع، وصارت الصيغة الثنائية المتناظرة أكثر أصول العلامة تصويراً على السوشال. وطلب متجران إقليميان كبيران درجات حصرية — أوضح علامة على أنّ داراً جديدة كسبت سلطة الرفّ.",
    },
    process: [
      { phase: "Immersion",      phase_ar: "انغماس",       detail: "Two weeks between the Lyon lab and Riyadh focus groups; documented how women actually store, gift, and travel with skincare.", detail_ar: "أسبوعان بين مختبر ليون ومجموعات نقاش في الرياض؛ وثّقنا كيف تحفظ النساء منتجات العناية وتُهدينها وتسافر بها فعلاً." },
      { phase: "Bilingual wordmark", phase_ar: "شعار ثنائي اللغة", detail: "Latin and Arabic drawn in parallel over six weeks — 40+ rounds to match stress, rhythm, and optical weight across scripts.", detail_ar: "رُسم اللاتيني والعربي بالتوازي على مدى ستّة أسابيع — أكثر من 40 جولة لمطابقة التوتّر والإيقاع والوزن البصري بين الخطَّين." },
      { phase: "Packaging system",   phase_ar: "نظام التعبئة",   detail: "Structural design for 9 SKUs, deboss pattern development, foil and paper specification with a French converter.",            detail_ar: "تصميم هيكلي لتسعة منتجات، تطوير النقش الغائر، ومواصفات الرقاقة والورق مع مصنّع فرنسي." },
      { phase: "Launch",             phase_ar: "الإطلاق",         detail: "Campaign art direction, vitrine design for two department stores, unboxing choreography for press kits.",                     detail_ar: "توجيه فنّي للحملة، تصميم فاترينات لمتجرَين كبيرَين، وتصميم تجربة فتح العلب لحقائب الصحافة." },
    ],
    deliverables: [
      "Mirrored bilingual wordmark",
      "Packaging across 9 SKUs",
      "80-page brand guidelines",
      "Launch campaign art direction",
      "Vitrine & retail display system",
    ],
    deliverables_ar: [
      "شعار نصّي ثنائي اللغة متناظر",
      "تعبئة لتسعة منتجات",
      "دليل هويّة من 80 صفحة",
      "توجيه فنّي لحملة الإطلاق",
      "نظام فاترينات وعرض تجزئة",
    ],
    metrics: [
      { label: "First run sell-out (Riyadh)", label_ar: "نفاد الدفعة الأولى (الرياض)", value: "3 weeks" },
      { label: "Retail doors at launch",       label_ar: "متاجر عند الإطلاق",           value: "14" },
      { label: "UGC featuring the lockup",     label_ar: "محتوى المستخدمين للشعار",     value: "+2,400 posts" },
    ],
    testimonial: {
      quote:
        "Every luxury brand we admired made us feel like guests in someone else's house. Mohamad built us our own.",
      quote_ar:
        "كلّ علامة فاخرة أعجبتنا جعلتنا نشعر بأنّنا ضيوف في بيت غيرنا. محمد بنى لنا بيتنا.",
      author: "Nour Al-Rashid",
      author_ar: "نور الرشيد",
      role:   "Co-founder, Véra Beauté",
      role_ar: "شريكة مؤسِّسة، فيرا بوتيه",
    },
  },
  {
    id: 2,
    slug: "solstice-festival",
    title: "Solstice Festival",
    title_ar: "مهرجان سولستيس",
    client: "Solstice Arts Foundation",
    client_ar: "مؤسسة سولستيس للفنون",
    category: "Poster Design",
    category_ar: "تصميم ملصقات",
    services: ["Poster Series", "Risograph Print", "Event Identity"],
    services_ar: ["سلسلة ملصقات", "طباعة ريزو", "هويّة فعالية"],
    role: "Lead Designer",
    role_ar: "مصمّم رئيسي",
    duration: "5 weeks",
    duration_ar: "5 أسابيع",
    year: "2024",
    tags: ["Poster", "Illustration"],
    tags_ar: ["ملصق", "رسم"],
    description:
      "Series of three silk-screen event posters with layered risograph textures.",
    description_ar:
      "سلسلة من ثلاثة ملصقات حدثية مطبوعة بالشاشة الحريرية مع طبقات قوامية من طباعة الريزو.",
    cover:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&h=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
    ],
    hue: "#0d1a0d",
    accent: "#FF6B00",
    span: 1,
    featured: false,
    story: {
      brief:
        "Solstice is a three-night experimental music festival held in a converted industrial yard. The 2024 edition introduced an ambient + visual-art programme, and the foundation wanted a poster series that could live both on the street as guerilla wheat-paste and inside the venue as collectible prints.",
      brief_ar:
        "سولستيس مهرجان موسيقى تجريبية لثلاث ليالٍ يُقام في فناء صناعي محوَّل. أدخلت نسخة 2024 برنامج موسيقى أمبيينت وفنون بصرية، وأرادت المؤسسة سلسلة ملصقات تعيش في الشارع كملصقات شوارع وداخل المكان كمطبوعات للاقتناء.",
      challenge:
        "Three nights, three headline acts, three completely different sonic palettes — but it all needed to read as one festival. Riso printing introduces happy accidents that you can't fully control, so the system had to be loose enough to embrace mis-registration but tight enough to stay recognisable in a torn fragment on a wall.",
      challenge_ar:
        "ثلاث ليالٍ، ثلاثة فنّانين رئيسيّين، وثلاث لوحات صوتية مختلفة كلياً — لكن كان لا بدّ أن يُقرأ الكلّ كمهرجان واحد. الريزو يدخل مفاجآت سعيدة لا يمكن التحكّم بها كلياً، فكان النظام لا بدّ أن يكون فضفاضاً ليستوعب انزياح الطبقات، وضيّقاً ليبقى مميَّزاً حتى في قطعة ممزَّقة على جدار.",
      approach:
        "A shared compositional grid across all three posters: typography stays in identical positions, only the central abstract form changes. Each form was hand-drawn in response to the headliner's set, then separated into three riso colours per night. The off-register passes are intentional — not faked digitally.",
      approach_ar:
        "شبكة تكوين موحَّدة عبر الملصقات الثلاثة: الطباعة تبقى في مواقع متطابقة، ويتغيّر فقط الشكل التجريدي المركزي. رُسم كل شكل يدوياً استجابةً لجلسة الفنّان، ثم فُصِل إلى ثلاثة ألوان ريزو لكل ليلة. انزياحات الطباعة مقصودة — لا مزيَّفة رقمياً.",
      outcome:
        "All 600 posters in the limited print run sold out before the festival's closing night, and the series was acquired into the permanent collection of a regional design archive.",
      outcome_ar:
        "نفدت جميع الـ 600 ملصق من الطبعة المحدودة قبل ليلة الختام، واقتُنيَت السلسلة في المجموعة الدائمة لأرشيف تصميم إقليمي.",
    },
    process: [
      { phase: "Listening sessions", phase_ar: "جلسات استماع", detail: "Each headliner sent unreleased material; the visual marks were drawn while listening.", detail_ar: "أرسل كل فنّان مادّة غير منشورة، ورُسمت العلامات البصرية أثناء الاستماع." },
      { phase: "Riso prototyping",   phase_ar: "نماذج ريزو",   detail: "Eleven proof rounds at a local print studio to dial in the colour overlap quality.", detail_ar: "11 جولة تجارب في استوديو طباعة محلّي لضبط جودة تداخل الألوان." },
      { phase: "Production",          phase_ar: "إنتاج",       detail: "600-poster limited print run on uncoated 100gsm stock, signed and numbered.",         detail_ar: "طبعة محدودة من 600 ملصق على ورق غير مطلي 100 غ/م²، موقَّعة ومرقَّمة." },
    ],
    deliverables: [
      "3 limited-edition A2 posters",
      "Digital social cut-downs",
      "On-site signage and wayfinding",
      "Tote bag and programme insert",
    ],
    deliverables_ar: [
      "3 ملصقات A2 محدودة الإصدار",
      "نسخ رقمية للسوشال",
      "لافتات وإرشاد في الموقع",
      "حقيبة قماش وداخلة برنامج",
    ],
    metrics: [
      { label: "Posters sold",      label_ar: "ملصقات مُباعة",          value: "600 / 600" },
      { label: "Pre-event sellout", label_ar: "النفاد قبل الفعالية",     value: "Night 2" },
      { label: "Archive acquisition", label_ar: "اقتناء أرشيفي",        value: "Yes" },
    ],
    testimonial: {
      quote:
        "We've had posters before. This was the first time the posters became part of the programme itself.",
      quote_ar:
        "صنعنا ملصقات من قبل. هذه أوّل مرّة تصبح فيها الملصقات جزءاً من البرنامج نفسه.",
      author: "Daniel Reyes",
      author_ar: "دانيال رييس",
      role:   "Festival Director",
      role_ar: "مدير المهرجان",
    },
  },
  {
    id: 3,
    slug: "helio-coffee",
    title: "Helio Coffee",
    title_ar: "هيليو كوفي",
    client: "Helio Specialty Roasters",
    client_ar: "هيليو لتحميص القهوة المختصّة",
    category: "Logo & Packaging",
    category_ar: "شعار وتعبئة",
    services: ["Brand Identity", "Packaging System", "Menu Design", "Signage"],
    services_ar: ["هويّة بصرية", "نظام تعبئة", "تصميم قائمة", "لافتات"],
    role: "Brand Designer",
    role_ar: "مصمّم هويّة",
    duration: "8 weeks",
    duration_ar: "8 أسابيع",
    year: "2023",
    tags: ["Logo", "Packaging"],
    tags_ar: ["شعار", "تعبئة"],
    description:
      "Warm, minimal brand system for a specialty café — logo, bag design, and menu system.",
    description_ar:
      "نظام هويّة دافئ ومقتضب لمقهى متخصّص — شعار، تصميم أكياس، ونظام قوائم.",
    cover:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&h=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80",
    ],
    hue: "#1a0f0a",
    accent: "#FF6B00",
    span: 1,
    featured: false,
    story: {
      brief:
        "Helio is a single-origin coffee roaster opening their first café after four years of wholesale. They wanted to step into the retail space without losing the credibility they'd built in the wholesale world, and without copying the now-tired 'third-wave minimalism' template.",
      brief_ar:
        "هيليو محمّصة قهوة من منشأ واحد تفتتح أوّل مقهى لها بعد أربع سنوات من البيع بالجملة. أرادت دخول التجزئة دون أن تفقد المصداقية التي بنتها في عالم الجملة، ودون نسخ قالب «الحدّ الأدنى للموجة الثالثة» الذي صار مُستهلَكاً.",
      challenge:
        "The category is exhausted. Every specialty café looks the same: cream paper, single sans-serif, a small mark. The brief was explicit — feel warm and current, not nostalgic, not minimal-for-its-own-sake. We also had a packaging printing budget that ruled out anything fancier than two-colour flexo.",
      challenge_ar:
        "القطاع منهَك. كلّ المقاهي المتخصّصة تتشابه: ورق كريمي، خطّ سان-سيريف واحد، علامة صغيرة. كان البرّيف واضحاً — دافئ ومعاصر، لا حنيني ولا مقتضَب لمجرّد الاقتضاب. وكانت ميزانية الطباعة تستبعد أي شيء أعقد من فليكسو بلونين.",
      approach:
        "I leaned into a sun-as-symbol logomark, drawn with a soft geometric line that reads at any size. The system is built around a single warm orange that prints flat at full strength on kraft and degrades elegantly when overlapped with black on coated stocks. Type is paired — a tight grotesque for product, a single serif used only for the founder's signed origin notes.",
      approach_ar:
        "اعتمدتُ على رمز الشمس كشعار، مرسوم بخطٍّ هندسي ناعم يُقرأ بأي حجم. النظام مبنيّ حول لون برتقالي دافئ واحد يطبع مسطّحاً بكامل قوّته على ورق الكرافت، ويتلاشى بأناقة عند تداخله مع الأسود على الأوراق المطلية. الخطّ مزدوج — غروتيسك محكم للمنتج، وسيريف واحد يُستخدم فقط لملاحظات المنشأ بتوقيع المؤسِّس.",
      outcome:
        "The retail bag is the brand's bestseller in its category at the city's two largest specialty grocers. The café opened in August 2023 and reached profitability inside six months.",
      outcome_ar:
        "كيس التجزئة هو الأكثر مبيعاً في فئته عند أكبر متجرَين متخصّصين في المدينة. افتُتح المقهى في أغسطس 2023 وحقّق الربحية خلال ستّة أشهر.",
    },
    process: [
      { phase: "Audit",       phase_ar: "تدقيق",      detail: "Visited 22 cafés across two cities; documented every visual cliché to avoid.",          detail_ar: "زرت 22 مقهى في مدينتين؛ ووثّقت كل كليشيه بصري ينبغي تجنّبه." },
      { phase: "Mark design", phase_ar: "تصميم العلامة", detail: "Eighteen logomark routes, narrowed to three, refined over four weeks.",                 detail_ar: "18 مساراً للشعار، اختُصرت إلى ثلاثة، وصُقلت على مدى أربعة أسابيع." },
      { phase: "Packaging",   phase_ar: "تعبئة",      detail: "Two-colour flexo specifications for 250g, 500g and 1kg bags; sticker system for daily roast dates.", detail_ar: "مواصفات فليكسو بلونين لأكياس 250 و 500 و 1000 غ؛ نظام ملصقات لتواريخ التحميص اليومية." },
      { phase: "Environment", phase_ar: "بيئة",       detail: "Menu boards, wayfinding, wall typography, takeaway cup specification.",                  detail_ar: "لوحات قائمة، إرشاد، طباعة جدارية، ومواصفات كؤوس السحب." },
    ],
    deliverables: [
      "Logomark and wordmark",
      "Packaging across 3 SKUs",
      "Menu and signage system",
      "Origin-card template",
      "Café environmental graphics",
    ],
    deliverables_ar: [
      "علامة وشعار نصّي",
      "تعبئة لـ 3 أحجام",
      "نظام قوائم ولافتات",
      "قالب بطاقة منشأ",
      "غرافيك بيئي للمقهى",
    ],
    metrics: [
      { label: "Profitability",       label_ar: "الربحية",              value: "6 months" },
      { label: "Wholesale-to-retail conversion", label_ar: "تحويل الجملة إلى التجزئة", value: "41%" },
      { label: "Avg. ticket size lift", label_ar: "ارتفاع متوسط الفاتورة", value: "+18%" },
    ],
    testimonial: {
      quote:
        "It looks like us — finally. We spent four years explaining who we were. Now the bag does the explaining.",
      quote_ar:
        "أخيراً يشبهنا. قضينا أربع سنوات نشرح من نحن. الآن الكيس يقوم بالشرح.",
      author: "Mariam Khoury",
      author_ar: "مريم خوري",
      role:   "Founder, Helio Coffee",
      role_ar: "المؤسِّسة، هيليو كوفي",
    },
  },
  {
    id: 4,
    slug: "atlas-magazine",
    title: "Atlas Magazine",
    title_ar: "مجلّة أطلس",
    client: "Atlas Publishing House",
    client_ar: "دار أطلس للنشر",
    category: "Editorial Design",
    category_ar: "تصميم تحريري",
    services: ["Art Direction", "Editorial Layout", "Cover System", "Type Design"],
    services_ar: ["توجيه فنّي", "تنسيق تحريري", "نظام أغلفة", "تصميم خطّ"],
    role: "Art Director",
    role_ar: "مدير فنّي",
    duration: "16 weeks (issue 01)",
    duration_ar: "16 أسبوعاً (العدد الأول)",
    year: "2023",
    tags: ["Editorial", "Layout"],
    tags_ar: ["تحريري", "تنسيق"],
    description:
      "Art direction and layout design for a 64-page quarterly travel publication.",
    description_ar:
      "توجيه فنّي وتصميم تنسيق لمجلّة سفر فصلية من 64 صفحة.",
    cover:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfd?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfd?auto=format&fit=crop&w=800&h=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=80",
    ],
    hue: "#0a0a1a",
    accent: "#FF6B00",
    span: 1,
    featured: false,
    story: {
      brief:
        "Atlas is an independent quarterly publishing slow-travel essays paired with original commissioned photography. The founders had launched a working prototype but were unhappy with how it read — too many fonts, no consistent grid, photography fighting copy for attention.",
      brief_ar:
        "أطلس مجلّة فصلية مستقلّة تنشر مقالات السفر البطيء مع تصوير فوتوغرافي خاص. أطلق المؤسّسون نموذجاً عاملاً لكنّهم لم يرضوا عن قراءته — خطوط كثيرة، شبكة غير متّسقة، وصور تتنافس مع النصّ على الانتباه.",
      challenge:
        "The publication had to feel considered and quiet without becoming so design-led that the essays — the actual product — felt secondary. The editor was firm that readers should never have to 'figure out' a spread; the design should disappear during reading and reassert itself only at transitions.",
      challenge_ar:
        "كان لا بدّ للمجلّة أن تبدو مدروسة وهادئة دون أن تتحوّل إلى تصميم يطغى على المقالات — المنتج الحقيقي. كان المحرّر حازماً: لا ينبغي أن يضطرّ القارئ إلى «فكّ» أيّ صفحة، ينبغي للتصميم أن يختفي أثناء القراءة ويعود فقط عند الانتقالات.",
      approach:
        "A single-column primary grid with a baseline locked across 64 pages, so body copy aligns whether you flip from page 12 to page 47. A custom display cut was drawn for chapter openers — used nowhere else — to act as visual punctuation. Photography breathes with full-bleed singles and 1/3 page silent margins.",
      approach_ar:
        "شبكة عمود واحد بخطّ قاعدة مُقفَل عبر 64 صفحة، بحيث ينتظم النصّ سواء قفزت من صفحة 12 إلى 47. خطّ عرض مخصَّص مرسوم لافتتاحيات الفصول — لا يُستخدم في أي مكان آخر — كعلامات ترقيم بصرية. الصور تتنفّس مع صفحات كاملة بدون هوامش وصفحات بهوامش صامتة بثلث الصفحة.",
      outcome:
        "Issue 01 sold out in two months and the magazine moved from quarterly to bi-monthly by issue 03. The grid system has carried unchanged across nine issues.",
      outcome_ar:
        "نفد العدد الأوّل خلال شهرين، وانتقلت المجلّة من فصلية إلى شهرية بحلول العدد الثالث. ظلّ نظام الشبكة كما هو دون تغيير عبر تسعة أعداد.",
    },
    process: [
      { phase: "Audit",          phase_ar: "تدقيق",       detail: "Tore apart the prototype issue; identified 14 distinct typographic styles to consolidate to 4.", detail_ar: "فكّكتُ النموذج الأوّلي؛ ورصدتُ 14 نمطاً طباعياً اختُزلت إلى 4." },
      { phase: "Type system",    phase_ar: "نظام طباعي",  detail: "Custom chapter-opener cut commissioned; body and caption pairing tested at print scale.",       detail_ar: "تكليف بقطعة خطّ مخصّصة لافتتاحيات الفصول؛ واختبار اقتران الجسد والتعليق بحجم الطباعة." },
      { phase: "Grid",            phase_ar: "شبكة",       detail: "Baseline grid locked; spread templates for essay, photo essay, interview, sidebar.",            detail_ar: "إقفال شبكة الأساس؛ قوالب صفحات للمقال، المقال المصوّر، الحوار، الشريط الجانبي." },
      { phase: "Production",     phase_ar: "إنتاج",       detail: "Worked with the printer on stock pairing and signature planning to control budget.",            detail_ar: "العمل مع المطبعة على اختيار الأوراق وتخطيط الكرّاسات للتحكّم بالميزانية." },
    ],
    deliverables: [
      "Master grid and templates",
      "Cover system across 4 seasons",
      "Custom display cut",
      "Print production specifications",
      "Digital edition layout",
    ],
    deliverables_ar: [
      "شبكة رئيسية وقوالب",
      "نظام أغلفة لأربعة فصول",
      "خطّ عرض مخصّص",
      "مواصفات إنتاج طباعي",
      "تنسيق نسخة رقمية",
    ],
    metrics: [
      { label: "Issue 01 sell-through", label_ar: "نفاد العدد الأوّل",      value: "100% in 60 days" },
      { label: "Frequency increase",    label_ar: "زيادة التواتر",          value: "Quarterly → Bi-monthly" },
      { label: "Subscriber growth (Y1)", label_ar: "نمو المشتركين (السنة 1)", value: "+340%" },
    ],
    testimonial: {
      quote:
        "The grid disappears when I'm reading, and that's the highest compliment I can pay a designer.",
      quote_ar:
        "تختفي الشبكة حين أقرأ، وهذه أعلى مديح يمكنني تقديمه لمصمّم.",
      author: "Yusra Bint Saleh",
      author_ar: "يُسرى بنت صالح",
      role:   "Editor-in-Chief, Atlas",
      role_ar: "رئيسة التحرير، أطلس",
    },
  },
  {
    id: 8,
    slug: "nabd-launch",
    title: "Nabd",
    title_ar: "نبض",
    client: "Nabd Financial — Riyadh",
    client_ar: "نبض المالية — الرياض",
    category: "Campaign",
    category_ar: "حملة",
    services: ["Brand Identity", "Social Campaign System", "Motion Design", "Launch OOH"],
    services_ar: ["هويّة بصرية", "نظام حملة سوشال", "تصميم موشن", "إعلانات خارجية للإطلاق"],
    role: "Creative Director",
    role_ar: "مدير إبداعي",
    duration: "12 weeks",
    duration_ar: "12 أسبوعاً",
    year: "2025",
    tags: ["Campaign", "Tech", "Motion"],
    tags_ar: ["حملة", "تقنية", "موشن"],
    description:
      "Identity and multi-channel launch campaign for a fintech app built for first-time savers.",
    description_ar:
      "هويّة وحملة إطلاق متعدّدة القنوات لتطبيق مالي مصمَّم للمدّخرين الجدد.",
    cover:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&h=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    ],
    hue: "#0a1216",
    accent: "#FF6B00",
    span: 1,
    featured: false,
    story: {
      brief:
        "Nabd ('pulse') is a savings app aimed at people opening their first account — young, mobile-first, and openly skeptical of banks. The product was strong; the problem was the category. Fintech launches in the region had converged on the same visual promise: gradients, glassmorphism, and a floating 3D coin. Nabd needed a launch that felt like a consumer brand, not a bank with a better font.",
      brief_ar:
        "«نبض» تطبيق ادّخار موجَّه لمن يفتحون حسابهم الأوّل — شبابٌ يعيشون على الجوال ولا يثقون بالبنوك صراحةً. المنتج كان قوياً؛ المشكلة كانت في القطاع. إطلاقات التقنية المالية في المنطقة تقاربت على الوعد البصري نفسه: تدرّجات، زجاجية، وعملة ثلاثية الأبعاد تطفو. احتاج نبض إطلاقاً يُحسّ كعلامة استهلاكية، لا كبنكٍ بخطٍّ أجمل.",
      challenge:
        "The launch had to work three ways at once: an app-store presence that converts, a social system an in-house team of two could sustain after handover, and street-level OOH in Riyadh that regulators would approve. The hardest constraint was tonal — money is serious here, and humour reads as risk. We had to be warm without being casual about people's savings.",
      challenge_ar:
        "كان على الإطلاق أن يعمل بثلاث طرق معاً: حضور في متجر التطبيقات يحوِّل الزوّار، ونظام سوشال يستطيع فريق داخلي من شخصين إدامته بعد التسليم، وإعلانات شوارع في الرياض توافق عليها الجهات التنظيمية. أصعب القيود كان النبرة — المال هنا مسألة جدّية، والمزاح يُقرأ كمخاطرة. كان علينا أن نكون دافئين دون استخفافٍ بمدّخرات الناس.",
      approach:
        "The identity is built on a pulse line — a single continuous stroke that beats through every asset, from the logomark to loading states to a 40-second launch film. The campaign line, 'Your money has a pulse,' framed saving as a living habit rather than a locked vault. The social system is a strict three-template kit — number stories, saver portraits, product proof — designed so two people can produce a month of content in a day. OOH ran the pulse line across sequential billboards on King Fahd Road, readable at 80 km/h.",
      approach_ar:
        "الهويّة مبنيّة على خطّ النبض — ضربة واحدة متّصلة تخفق عبر كلّ أصل، من الشعار إلى حالات التحميل إلى فيلم إطلاق مدّته 40 ثانية. شعار الحملة «لفلوسك نبض» قدّم الادّخار كعادةٍ حيّة لا كخزنةٍ مقفلة. نظام السوشال حزمة صارمة من ثلاثة قوالب — قصص الأرقام، بورتريهات المدّخرين، وإثبات المنتج — مصمَّمة ليُنتج شخصان محتوى شهرٍ كامل في يوم واحد. الإعلانات الخارجية مدّت خطّ النبض عبر لوحات متتابعة على طريق الملك فهد، مقروءةً بسرعة 80 كم/س.",
      outcome:
        "120,000 downloads in the first six weeks against a 40,000 target, with an app-store conversion rate double the regional fintech benchmark. The in-house team has run the social system unchanged for eight months — which is the metric I'm proudest of.",
      outcome_ar:
        "120 ألف تنزيل في الأسابيع الستّة الأولى مقابل هدفٍ من 40 ألفاً، وبمعدّل تحويل في متجر التطبيقات يعادل ضعف المعيار الإقليمي للتقنية المالية. والفريق الداخلي يدير نظام السوشال دون تغيير منذ ثمانية أشهر — وهذا هو الرقم الذي أفخر به أكثر.",
    },
    process: [
      { phase: "Research",        phase_ar: "بحث",           detail: "18 interviews with first-time savers; audit of 30 fintech launches across MENA to map the visual clichés to avoid.",              detail_ar: "18 مقابلة مع مدّخرين جدد؛ وتدقيق 30 إطلاق تقنية مالية في المنطقة لرسم خريطة الكليشيهات البصرية الواجب تجنّبها." },
      { phase: "Identity",        phase_ar: "هويّة",          detail: "Pulse-line logomark and motion behaviour defined together — the mark was designed moving first, static second.",                  detail_ar: "شعار خطّ النبض وسلوكه الحركي حُدِّدا معاً — صُمِّمت العلامة متحرّكةً أوّلاً وثابتةً ثانياً." },
      { phase: "Campaign system", phase_ar: "نظام الحملة",    detail: "Three-template social kit, launch film boards, and a bilingual copy deck tested with the target audience before production.",     detail_ar: "حزمة سوشال من ثلاثة قوالب، لوحات فيلم الإطلاق، ودليل نصوص ثنائي اللغة اختُبر مع الجمهور المستهدف قبل الإنتاج." },
      { phase: "Rollout",         phase_ar: "الإطلاق",        detail: "Sequential OOH on King Fahd Road, app-store asset suite, and a handover sprint embedding the system with the in-house team.",      detail_ar: "لوحات متتابعة على طريق الملك فهد، حزمة أصول متجر التطبيقات، وسباق تسليم لترسيخ النظام لدى الفريق الداخلي." },
    ],
    deliverables: [
      "Pulse-line logomark & motion system",
      "40-second launch film",
      "Three-template social kit",
      "Sequential OOH campaign",
      "App-store asset suite",
    ],
    deliverables_ar: [
      "شعار خطّ النبض ونظام الموشن",
      "فيلم إطلاق من 40 ثانية",
      "حزمة سوشال من ثلاثة قوالب",
      "حملة لوحات خارجية متتابعة",
      "حزمة أصول متجر التطبيقات",
    ],
    metrics: [
      { label: "Downloads (first 6 weeks)", label_ar: "تنزيلات (أوّل 6 أسابيع)",  value: "120,000" },
      { label: "vs. launch target",          label_ar: "مقابل هدف الإطلاق",        value: "3x" },
      { label: "App-store conversion",       label_ar: "تحويل متجر التطبيقات",     value: "2x benchmark" },
    ],
    testimonial: {
      quote:
        "Agencies pitched us dashboards and coins. Mohamad pitched us a heartbeat. Eight months later our two-person team still ships his system every week.",
      quote_ar:
        "عرضت علينا الوكالات لوحات بيانات وعملات. محمد عرض علينا نبضاً. بعد ثمانية أشهر ما زال فريقنا من شخصين يستخدم نظامه كلّ أسبوع.",
      author: "Faisal Al-Otaibi",
      author_ar: "فيصل العتيبي",
      role:   "CEO, Nabd Financial",
      role_ar: "الرئيس التنفيذي، نبض المالية",
    },
  },
  {
    id: 5,
    slug: "forma-studio",
    title: "Forma Studio",
    title_ar: "استوديو فورما",
    client: "Forma — Architecture & Interiors",
    client_ar: "فورما — عمارة وتصميم داخلي",
    category: "Brand Identity",
    category_ar: "هويّة بصرية",
    services: ["Brand Identity", "Website Direction", "Stationery", "Signage"],
    services_ar: ["هويّة بصرية", "توجيه موقع إلكتروني", "قرطاسية", "لافتات"],
    role: "Lead Designer",
    role_ar: "مصمّم رئيسي",
    duration: "12 weeks",
    duration_ar: "12 أسبوعاً",
    year: "2023",
    tags: ["Branding", "Identity"],
    tags_ar: ["هويّة", "علامة"],
    description:
      "Geometric identity system for an architecture and interiors practice.",
    description_ar:
      "نظام هويّة هندسي لمكتب عمارة وتصميم داخلي.",
    cover:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&h=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1200&q=80",
    ],
    hue: "#14100a",
    accent: "#FF6B00",
    span: 2,
    featured: true,
    story: {
      brief:
        "Forma is a six-person architecture and interiors practice that had quietly built a strong portfolio without ever investing in their own brand. After a project with a regional museum, they needed an identity that could put them in front of cultural and institutional clients without overshadowing the buildings they design.",
      brief_ar:
        "فورما مكتب عمارة وتصميم داخلي من ستة أشخاص، بنى ملفّاً قوياً بهدوء دون أن يستثمر يوماً في هويّته. بعد مشروع مع متحف إقليمي، أرادوا هويّةً تضعهم أمام العملاء الثقافيّين والمؤسسيّين دون أن تطغى على المباني التي يصمّمونها.",
      challenge:
        "Architects' identities frequently fall into two traps: aggressively typographic (loud studio-name across every surface) or aggressively neutral (impossible to tell two firms apart). Forma wanted neither — they wanted an identity that felt as carefully proportioned as their floor plans, without ever competing with the work in a portfolio shot.",
      challenge_ar:
        "كثيراً ما تقع هويّات المعماريّين في فخّين: طباعية صاخبة (اسم استوديو ضخم على كل سطح)، أو حيادية مفرطة (يستحيل التمييز بين شركتَين). لم ترد فورما أيّاً منهما — أرادوا هويّةً تشعرك بدقّة نِسبهم في المخطّطات، دون أن تنافس العمل في أي لقطة من الملفّ.",
      approach:
        "The mark is built from a modular grid that scales to any application. Three architectural primitives — line, mass, void — generate every secondary element: line for stationery rules, mass for solid blocks of colour, void as deliberate whitespace at consistent ratios. The colour palette is deliberately restrained: warm white, charcoal, one accent.",
      approach_ar:
        "العلامة مبنيّة من شبكة معيارية تتدرّج لأي تطبيق. ثلاث أوّليات معمارية — خطّ، كتلة، فراغ — تولِّد كل عنصر ثانوي: الخطّ لقواعد القرطاسية، الكتلة لكتل لونية صلبة، والفراغ كبياض متعمَّد بنسب ثابتة. اللوحة اللونية مقيَّدة عمداً: أبيض دافئ، فحمي، ولون مميِّز واحد.",
      outcome:
        "Forma won three institutional pitches in the first year post-launch, two of which were credited in part to a perceived 'maturity' of the new brand. The identity has scaled without modification to a satellite studio.",
      outcome_ar:
        "ربحت فورما ثلاثة عروض مؤسسية في السنة الأولى بعد الإطلاق، اثنان منها نُسبا جزئياً إلى «نضج» الهويّة الجديدة. وامتدّت الهويّة دون تعديل إلى استوديو فرعي.",
    },
    process: [
      { phase: "Embedding",       phase_ar: "اندماج",        detail: "Two weeks spent in their studio reading project archives and sitting in client pitches.", detail_ar: "أمضيتُ أسبوعَين في استوديوهم أقرأ أرشيف المشاريع وأحضر العروض مع العملاء." },
      { phase: "Modular system",  phase_ar: "نظام معياري",  detail: "A grid logic that lets the mark sit on a business card or a 6m signage panel without feeling redrawn.", detail_ar: "منطق شبكة يجعل العلامة تظهر على بطاقة عمل أو لوحة لافتات بطول 6 أمتار دون أن تشعر بأنّها أُعيد رسمها." },
      { phase: "Voice & writing", phase_ar: "صوت وكتابة",   detail: "Worked with a copywriter to define a consistent tone for proposals and bios.",         detail_ar: "العمل مع كاتب نصوص لتحديد نبرة موحّدة للعروض والسير الذاتية." },
      { phase: "Rollout",          phase_ar: "إطلاق",         detail: "Stationery, pitch decks, signage, website art direction, photography brief.",         detail_ar: "قرطاسية، عروض تقديم، لافتات، توجيه فنّي للموقع، وبرّيف تصوير." },
    ],
    deliverables: [
      "Modular logo system",
      "Pitch deck and proposal templates",
      "Stationery suite",
      "Studio signage",
      "Photography art-direction guide",
    ],
    deliverables_ar: [
      "نظام شعار معياري",
      "قوالب عروض تقديم ومقترحات",
      "حزمة قرطاسية",
      "لافتات الاستوديو",
      "دليل توجيه التصوير",
    ],
    metrics: [
      { label: "Institutional pitches won (Y1)", label_ar: "عروض مؤسسية مكسوبة (السنة 1)", value: "3" },
      { label: "Avg. project fee uplift",         label_ar: "ارتفاع متوسط أتعاب المشاريع", value: "+27%" },
      { label: "Satellite studio launch",         label_ar: "إطلاق استوديو فرعي",          value: "12 months" },
    ],
    testimonial: {
      quote:
        "Our buildings finally have a voice that doesn't compete with them. The brand sits where it should — underneath.",
      quote_ar:
        "أخيراً لمبانينا صوتٌ لا ينافسها. الهويّة تجلس حيث ينبغي — تحتها.",
      author: "Rami Haddad",
      author_ar: "رامي حدّاد",
      role:   "Founding Partner, Forma",
      role_ar: "شريك مؤسِّس، فورما",
    },
  },
  {
    id: 6,
    slug: "meridian-type",
    title: "Meridian Type",
    title_ar: "ميريديان للخطوط",
    client: "Meridian Foundry",
    client_ar: "مسبك ميريديان",
    category: "Type Specimen",
    category_ar: "نموذج خطّ",
    services: ["Type Design", "Specimen Layout", "Marketing Site"],
    services_ar: ["تصميم خطّ", "تنسيق نموذج", "موقع تسويقي"],
    role: "Type Designer & Art Director",
    role_ar: "مصمّم خطوط ومدير فنّي",
    duration: "20 weeks",
    duration_ar: "20 أسبوعاً",
    year: "2022",
    tags: ["Typography", "Poster"],
    tags_ar: ["خطّ", "ملصق"],
    description:
      "Custom display typeface and specimen poster for an in-house type release.",
    description_ar:
      "خطّ عرض مخصّص وملصق نموذج لإطلاق خطّ داخلي.",
    cover:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&h=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    ],
    hue: "#120a1a",
    accent: "#FF6B00",
    span: 1,
    featured: false,
    story: {
      brief:
        "An in-house release of a display typeface I drew over a year — high-contrast, condensed, designed for editorial headlines and poster work. The specimen had to introduce the family to designers and licensors without leaning on the usual specimen tropes.",
      brief_ar:
        "إطلاق داخلي لخطّ عرض رسمته على مدى سنة — عالي التباين، مضغوط، مصمَّم للعناوين التحريرية والملصقات. كان لا بدّ للنموذج أن يقدّم العائلة للمصمّمين والمرخِّصين دون الاتكاء على كليشيهات النماذج المعتادة.",
      challenge:
        "Type specimens are notoriously self-referential. The brief I gave myself: design a specimen that would be useful even if you never licensed the face. That meant treating it as an essay on the typeface — its drawing logic, the historical reference points, the calls I made — not a feature checklist.",
      challenge_ar:
        "نماذج الخطوط مشهورة بكونها مرجعية ذاتياً. البرّيف الذي وضعته لنفسي: صمّم نموذجاً يكون مفيداً حتى لو لم ترخّص الخطّ. هذا يعني التعامل معه كمقال عن الخطّ — منطق رسمه، مراجعه التاريخية، والقرارات التي اتّخذتها — لا قائمة ميزات.",
      approach:
        "Two formats released together: a foldable A1 poster for the marketing launch, and a 48-page softcover specimen for licensors. The poster uses the face at extreme size; the specimen interleaves working drawings, kerning tables, and short essays from three writers I commissioned on the face's reference points.",
      approach_ar:
        "صيغتان أُطلِقتا معاً: ملصق A1 قابل للطيّ للإطلاق التسويقي، وكُتيِّب نموذج بغلاف ورقي من 48 صفحة للمرخِّصين. الملصق يستخدم الخطّ بحجم متطرّف؛ والكُتيِّب يتشابك فيه الرسومات التحضيرية، جداول الكيرنينج، ومقالات قصيرة من ثلاثة كتّاب كلّفتُهم بالكتابة عن مراجع الخطّ.",
      outcome:
        "100 licensed seats in the first quarter. The poster has been pinned in three design schools' studios that I'm aware of, which is honestly the part I'm most proud of.",
      outcome_ar:
        "100 ترخيص في الربع الأوّل. والملصق مُعلَّق في استوديوهات ثلاث مدارس تصميم أعرفها، وهو بصراحة أكثر ما أفتخر به.",
    },
    process: [
      { phase: "Drawing",        phase_ar: "رسم",          detail: "12 months of glyph drawing, 14 weight + width permutations.",      detail_ar: "12 شهراً من رسم الحروف، 14 تبديلاً للوزن والعرض." },
      { phase: "Specimen design", phase_ar: "تصميم النموذج", detail: "Layout development for both poster and softcover; commissioned essays.", detail_ar: "تطوير التنسيق للملصق والكُتيِّب؛ وتكليف بكتابة المقالات." },
      { phase: "Licensing site", phase_ar: "موقع الترخيص", detail: "Single-page marketing site with live type tester and licensing flow.", detail_ar: "موقع تسويقي بصفحة واحدة مع مختبر خطّ حيّ وتدفّق ترخيص." },
    ],
    deliverables: [
      "Display typeface family (4 weights)",
      "Folded A1 specimen poster",
      "48-page softcover specimen",
      "Licensing landing page",
    ],
    deliverables_ar: [
      "عائلة خطّ عرض (4 أوزان)",
      "ملصق نموذج مطويّ A1",
      "كُتيِّب نموذج بغلاف ورقي من 48 صفحة",
      "صفحة هبوط للترخيص",
    ],
    metrics: [
      { label: "Seats licensed (Q1)", label_ar: "تراخيص مُباعة (الربع 1)", value: "100" },
      { label: "Tester sessions / day", label_ar: "جلسات مختبر / يوم",       value: "240" },
      { label: "Press coverage",       label_ar: "تغطية صحفية",            value: "7 features" },
    ],
    testimonial: {
      quote:
        "Most specimens tell you what a face does. This one made me want to write something just to use it.",
      quote_ar:
        "أغلب النماذج تخبرك ماذا يفعل الخطّ. هذا جعلني أرغب في كتابة شيءٍ لمجرّد استخدامه.",
      author: "Hana Park",
      author_ar: "هانا بارك",
      role:   "Senior Designer, Independent",
      role_ar: "مصمِّمة أولى، مستقلّة",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  SERVICES
// ─────────────────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    number: "01",
    title: "Brand Identity",
    title_ar: "هويّة بصرية",
    tagline: "Build a brand that lasts longer than a trend cycle.",
    tagline_ar: "ابنِ علامةً تدوم أطول من دورة الموضة.",
    description:
      "Cohesive visual identities built from the ground up — wordmarks, colour palettes, type systems, and brand guidelines that translate across every touchpoint.",
    description_ar:
      "هويّات بصرية متماسكة مبنيّة من الصفر — شعارات نصّية، لوحات ألوان، أنظمة طباعية، وأدلّة هويّة تنتقل بين كل نقاط التماس.",
    longDescription:
      "I treat brand work as a long-term system, not a one-off logo. Every identity starts with positioning, voice, and the practical realities of where the brand will live. The output isn't a folder of files — it's a usable system any future designer can pick up and build on without losing the thread.",
    longDescription_ar:
      "أتعامل مع عمل الهويّة كنظامٍ طويل الأمد، لا كشعارٍ لمرّة واحدة. كل هويّة تبدأ بالتموضع والصوت والواقع العملي لأماكن وجود العلامة. المخرَج ليس مجلّد ملفّات — بل نظامٌ قابل للاستخدام، يمكن لأي مصمّم لاحق أن يلتقطه ويكمل دون أن يفقد الخيط.",
    deliverables: [
      "Logo & Wordmark",
      "Brand Guidelines (40–80 pages)",
      "Visual Identity System",
      "Stationery & Collateral",
      "Brand voice & messaging hooks",
    ],
    deliverables_ar: [
      "شعار وعلامة نصّية",
      "دليل هويّة (40–80 صفحة)",
      "نظام هويّة بصرية",
      "قرطاسية ومطبوعات مساندة",
      "صوت العلامة وعبارات رئيسية",
    ],
    startingFrom: "$8,500",
    timeline: "8–14 weeks",
    timeline_ar: "8 — 14 أسبوعاً",
    bestFor: "Founders launching or repositioning a serious brand.",
    bestFor_ar: "روّاد الأعمال الذين يطلقون أو يعيدون تموضع علامةٍ جادّة.",
  },
  {
    id: 2,
    number: "02",
    title: "Print & Editorial",
    title_ar: "مطبوعات وتحرير",
    tagline: "Make ink on paper feel inevitable.",
    tagline_ar: "اجعل الحبر على الورق يبدو حتمياً.",
    description:
      "From postage-stamp precision to billboard scale. Editorial layouts, packaging, posters, and print collateral crafted for maximum visual impact.",
    description_ar:
      "من دقّة طابع البريد إلى حجم اللوحات الإعلانية. تنسيقات تحريرية، تعبئة، ملصقات، ومطبوعات مساندة مصنوعة لأقصى تأثير بصري.",
    longDescription:
      "Print is unforgiving, which is why I love it. I work end-to-end — from grid system to printer specification — and I sit on press for important runs. Whether it's a 64-page magazine or a single A2 poster, the goal is the same: something that holds up in the hand.",
    longDescription_ar:
      "المطبوعات لا تسامح، ولهذا أحبّها. أعمل من البداية للنهاية — من نظام الشبكة إلى مواصفات المطبعة — وأحضر على الطابعة في الطبعات المهمّة. سواء كانت مجلّة من 64 صفحة أو ملصق A2 واحد، الهدف واحد: شيء يصمد بين اليدين.",
    deliverables: [
      "Editorial & Magazines",
      "Poster Series",
      "Packaging Design",
      "Brochures & Books",
      "Print production supervision",
    ],
    deliverables_ar: [
      "تحرير ومجلّات",
      "سلاسل ملصقات",
      "تصميم تعبئة",
      "كتيّبات وكتب",
      "إشراف على الإنتاج الطباعي",
    ],
    startingFrom: "$4,500",
    timeline: "4–16 weeks",
    timeline_ar: "4 — 16 أسبوعاً",
    bestFor: "Publishers, cultural institutions, premium retail.",
    bestFor_ar: "دور النشر، المؤسسات الثقافية، والتجزئة الفاخرة.",
  },
  {
    id: 3,
    number: "03",
    title: "Digital & Motion",
    title_ar: "رقمي وموشن",
    tagline: "Design that moves — on screen and in time.",
    tagline_ar: "تصميمٌ يتحرّك — على الشاشة وفي الزمن.",
    description:
      "Pixel-sharp assets and UI design for digital products, social media campaigns, and marketing materials that look exceptional on every screen.",
    description_ar:
      "أصول حادّة على مستوى البكسل وتصميم واجهات للمنتجات الرقمية، حملات السوشال، ومواد تسويقية تبدو استثنائية على كل شاشة.",
    longDescription:
      "Digital work blurs the line between graphic design and product. I direct UI, design social systems with weeks of runway, and produce short-form motion in After Effects when a still won't do the talking. Output is shipped, not just delivered.",
    longDescription_ar:
      "العمل الرقمي يطمس الحدّ بين تصميم الجرافيك والمنتج. أُوجّه الواجهات، أصمّم أنظمة سوشال لأسابيع مقدَّماً، وأنتج موشن قصير في After Effects حين لا تكفي الصورة الثابتة. المخرَج يُنشَر، لا يُسلَّم فقط.",
    deliverables: [
      "Social Media Systems",
      "Web UI & Landing Pages",
      "Digital Advertising",
      "Motion Graphics (5–60s)",
      "Animated brand assets",
    ],
    deliverables_ar: [
      "أنظمة سوشال ميديا",
      "واجهات ويب وصفحات هبوط",
      "إعلانات رقمية",
      "موشن جرافيك (5 — 60 ثانية)",
      "أصول علامة متحرّكة",
    ],
    startingFrom: "$3,500",
    timeline: "2–10 weeks",
    timeline_ar: "2 — 10 أسابيع",
    bestFor: "DTC brands, content studios, SaaS launches.",
    bestFor_ar: "علامات البيع المباشر، استوديوهات المحتوى، وإطلاقات SaaS.",
  },
  {
    id: 4,
    number: "04",
    title: "Art Direction",
    title_ar: "توجيه فنّي",
    tagline: "A single voice across many hands.",
    tagline_ar: "صوتٌ واحد عبر أيدٍ كثيرة.",
    description:
      "Direction across campaigns, photo shoots, and multi-channel launches — keeping a brand's voice consistent across every collaborator and surface.",
    description_ar:
      "توجيه عبر الحملات، جلسات التصوير، والإطلاقات متعدّدة القنوات — للحفاظ على اتّساق صوت العلامة بين كل المتعاونين وعلى كل سطح.",
    longDescription:
      "When a brand is scaling, the problem stops being design files and starts being consistency. I work with internal teams, agencies, photographers, and motion studios to keep the voice intact while letting each collaborator do their best work.",
    longDescription_ar:
      "حين تتوسّع علامة، يتوقّف الإشكال عن كونه ملفّات تصميم ويبدأ بكونه اتّساقاً. أعمل مع الفرق الداخلية والوكالات والمصوّرين واستوديوهات الموشن للحفاظ على الصوت سليماً مع ترك كلّ متعاون يقوم بأفضل ما لديه.",
    deliverables: [
      "Campaign concepts",
      "Photography & video direction",
      "Multi-agency coordination",
      "Quality control & approvals",
      "Style updates and evolutions",
    ],
    deliverables_ar: [
      "مفاهيم حملات",
      "توجيه تصوير وفيديو",
      "تنسيق متعدّد الوكالات",
      "مراقبة جودة وموافقات",
      "تحديثات وتطوير الأسلوب",
    ],
    startingFrom: "$2,000 / week",
    timeline: "Ongoing / per campaign",
    timeline_ar: "مستمر / حسب الحملة",
    bestFor: "In-house teams scaling output without losing voice.",
    bestFor_ar: "الفرق الداخلية التي توسِّع الإنتاج دون أن تفقد صوتها.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  SKILLS / TOOLS (mostly product names — no translation needed)
// ─────────────────────────────────────────────────────────────────────────────
export const SKILLS = [
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Photoshop",
  "Adobe After Effects",
  "Adobe Premiere Pro",
  "Figma",
  "Cinema 4D",
  "Glyphs 3",
  "Typography",
  "Brand Strategy",
  "Art Direction",
  "Print Production",
  "Motion Graphics",
  "Packaging Design",
  "Editorial Layout",
  "Risograph",
];

// ─────────────────────────────────────────────────────────────────────────────
//  TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:    "Every luxury brand we admired made us feel like guests in someone else's house. Mohamad built us our own.",
    quote_ar: "كلّ علامة فاخرة أعجبتنا جعلتنا نشعر بأنّنا ضيوف في بيت غيرنا. محمد بنى لنا بيتنا.",
    author: "Nour Al-Rashid",
    author_ar: "نور الرشيد",
    role: "Co-founder, Véra Beauté",
    role_ar: "شريكة مؤسِّسة، فيرا بوتيه",
    project: "Véra Beauté",
    project_ar: "فيرا بوتيه",
  },
  {
    quote:    "The identity does what we never could in conversation — it tells people exactly what we are before we open our mouths.",
    quote_ar: "تفعل الهويّة ما لم نستطع فعله بالكلام — تخبر الناس بالضبط ما نحن قبل أن نفتح أفواهنا.",
    author: "Layla Al-Mansour",
    author_ar: "ليلى المنصور",
    role: "Co-founder, Noir Atelier",
    role_ar: "شريكة مؤسِّسة، نوار أتيليه",
    project: "Noir Collective",
    project_ar: "نوار كولكتيف",
  },
  {
    quote:    "It looks like us — finally. We spent four years explaining who we were. Now the bag does the explaining.",
    quote_ar: "أخيراً يشبهنا. قضينا أربع سنوات نشرح من نحن. الآن الكيس يقوم بالشرح.",
    author: "Mariam Khoury",
    author_ar: "مريم خوري",
    role: "Founder, Helio Coffee",
    role_ar: "المؤسِّسة، هيليو كوفي",
    project: "Helio Coffee",
    project_ar: "هيليو كوفي",
  },
  {
    quote:    "The grid disappears when I'm reading, and that's the highest compliment I can pay a designer.",
    quote_ar: "تختفي الشبكة حين أقرأ، وهذه أعلى مديح يمكنني تقديمه لمصمّم.",
    author: "Yusra Bint Saleh",
    author_ar: "يُسرى بنت صالح",
    role: "Editor-in-Chief, Atlas Magazine",
    role_ar: "رئيسة التحرير، مجلّة أطلس",
    project: "Atlas Magazine",
    project_ar: "مجلّة أطلس",
  },
  {
    quote:    "Our buildings finally have a voice that doesn't compete with them. The brand sits where it should — underneath.",
    quote_ar: "أخيراً لمبانينا صوتٌ لا ينافسها. الهويّة تجلس حيث ينبغي — تحتها.",
    author: "Rami Haddad",
    author_ar: "رامي حدّاد",
    role: "Founding Partner, Forma",
    role_ar: "شريك مؤسِّس، فورما",
    project: "Forma Studio",
    project_ar: "استوديو فورما",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  EXPERIENCE TIMELINE
// ─────────────────────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    period: "2023 — Present",
    period_ar: "2023 — حتى الآن",
    role: "Independent Designer & Creative Director",
    role_ar: "مصمّم مستقل ومدير إبداعي",
    place: "LOMO Studio · Riyadh, KSA",
    place_ar: "استوديو محمد للتصميم · الرياض، السعودية",
    note: "Building brand systems and editorial work for founders, studios and cultural institutions across the region.",
    note_ar: "بناء أنظمة هويّات وأعمال تحرير لرواد الأعمال والاستوديوهات والمؤسسات الثقافية في المنطقة.",
  },
  {
    period: "2021 — 2023",
    period_ar: "2021 — 2023",
    role: "Senior Brand Designer",
    role_ar: "مصمّم هويّة أوّل",
    place: "Studio Practice · Dubai, UAE",
    place_ar: "استوديو براكتس · دبي، الإمارات",
    note: "Lead designer on identity and packaging work for hospitality, F&B and culture clients across the GCC.",
    note_ar: "مصمّم رئيسي على أعمال الهويّة والتعبئة لعملاء الضيافة والمأكولات والثقافة في دول الخليج.",
  },
  {
    period: "2019 — 2021",
    period_ar: "2019 — 2021",
    role: "Graphic & Motion Designer",
    role_ar: "مصمّم جرافيك وموشن",
    place: "House Agency · Riyadh, KSA",
    place_ar: "وكالة هاوس · الرياض، السعودية",
    note: "Producing motion, social systems, and campaign assets for retail and consumer-tech brands.",
    note_ar: "إنتاج موشن وأنظمة سوشال وأصول حملات لعلامات التجزئة وتقنية المستهلك.",
  },
  {
    period: "2018 — 2019",
    period_ar: "2018 — 2019",
    role: "Junior Designer",
    role_ar: "مصمّم مبتدئ",
    place: "Independent Agency · Beirut, LB",
    place_ar: "وكالة مستقلّة · بيروت، لبنان",
    note: "Editorial layout, print collateral, and packaging support work across regional retail clients.",
    note_ar: "تنسيق تحريري، مطبوعات مساندة، وأعمال دعم تعبئة لعملاء التجزئة الإقليميّين.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  AWARDS
// ─────────────────────────────────────────────────────────────────────────────
export const AWARDS = [
  { year: "2025", title: "Dieline Awards — Shortlist",        title_ar: "جوائز Dieline — القائمة القصيرة",       project: "Véra Beauté",              project_ar: "فيرا بوتيه" },
  { year: "2024", title: "Brand New — Noteworthy",            title_ar: "Brand New — جدير بالملاحظة",            project: "Noir Collective",          project_ar: "نوار كولكتيف" },
  { year: "2024", title: "Type Directors Club — Certificate of Excellence", title_ar: "نادي مدراء الخطوط — شهادة تميّز", project: "Meridian Type",            project_ar: "ميريديان للخطوط" },
  { year: "2023", title: "Print Magazine — Regional Showcase", title_ar: "مجلّة Print — معرض إقليمي",            project: "Atlas Magazine, Issue 04", project_ar: "مجلّة أطلس، العدد 4" },
  { year: "2023", title: "It's Nice That — Project Feature",   title_ar: "It's Nice That — تغطية مشروع",         project: "Forma Studio",             project_ar: "استوديو فورما" },
  { year: "2022", title: "Latitude Design Awards — Silver",    title_ar: "جوائز Latitude للتصميم — فضّية",        project: "Helio Coffee Packaging",   project_ar: "تعبئة هيليو كوفي" },
];

// ─────────────────────────────────────────────────────────────────────────────
//  JOURNAL
// ─────────────────────────────────────────────────────────────────────────────
export const JOURNAL = [
  {
    slug: "the-quiet-brief",
    title: "The Quiet Brief",
    title_ar: "البرّيف الهادئ",
    subtitle: "What founders mean when they say 'something different'.",
    subtitle_ar: "ماذا يعني المؤسّسون حين يقولون «شيء مختلف».",
    category: "Process",
    category_ar: "العملية",
    readingTime: "6 min",
    readingTime_ar: "6 د",
    date: "2024-09-12",
    excerpt:
      "Every founder I've worked with has used the phrase 'something different' in the first kickoff call. None of them have meant the same thing by it. Here's how I unpack it.",
    excerpt_ar:
      "كلّ مؤسّس عملت معه استخدم عبارة «شيء مختلف» في مكالمة الانطلاق الأولى. لم يقصد أيٌّ منهم الشيء نفسه. هذه طريقتي في تفكيك العبارة.",
    cover:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "type-as-territory",
    title: "Type as Territory",
    title_ar: "الخطّ كأرض",
    subtitle: "Why one typeface still beats five.",
    subtitle_ar: "لماذا يهزم خطٌّ واحد خمسةً حتى الآن.",
    category: "Typography",
    category_ar: "خطوط",
    readingTime: "8 min",
    readingTime_ar: "8 د",
    date: "2024-07-04",
    excerpt:
      "A brand's typographic territory is the part of the type landscape it owns. Most identities try to occupy too much. Here's a case for occupying less.",
    excerpt_ar:
      "أرض الخطّ لعلامةٍ ما هي الجزء الذي تمتلكه من مشهد الخطوط. أغلب الهويّات تحاول احتلال الكثير. هنا حُجّةٌ لاحتلال أقلّ.",
    cover:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "designing-for-print-in-2025",
    title: "Designing for Print in 2025",
    title_ar: "التصميم للمطبوعات في 2025",
    subtitle: "Print isn't dead — it's specific.",
    subtitle_ar: "المطبوعات لم تمت — صارت محدَّدة.",
    category: "Print",
    category_ar: "مطبوعات",
    readingTime: "5 min",
    readingTime_ar: "5 د",
    date: "2024-05-21",
    excerpt:
      "What I tell clients who ask whether print is 'still worth it'. The honest answer is: only if you treat it as a different medium, not a backup channel.",
    excerpt_ar:
      "ما أقوله للعملاء الذين يسألون إن كانت المطبوعات «لا تزال تستحق». الإجابة الصادقة: فقط إن تعاملت معها كوسيطٍ مختلف، لا قناةٍ احتياطية.",
    cover:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "the-six-month-rebrand",
    title: "The Six-Month Rebrand",
    title_ar: "إعادة العلامة في ستّة أشهر",
    subtitle: "Why timelines should pace the work, not the other way around.",
    subtitle_ar: "لماذا ينبغي للجداول الزمنية أن تضبط إيقاع العمل، لا العكس.",
    category: "Studio",
    category_ar: "الاستوديو",
    readingTime: "7 min",
    readingTime_ar: "7 د",
    date: "2024-03-08",
    excerpt:
      "I no longer take rebrands shorter than ten weeks. Here's what changed my mind, and the project that made me draw the line.",
    excerpt_ar:
      "لم أعد آخذ مشاريع إعادة علامة أقصر من عشرة أسابيع. هذا ما غيّر رأيي، والمشروع الذي جعلني أرسم الخطّ.",
    cover:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  CLIENTS (latin only — names stay as-is)
// ─────────────────────────────────────────────────────────────────────────────
export const CLIENTS = [
  "Noir Atelier",
  "Véra Beauté",
  "Helio Coffee",
  "Atlas Publishing",
  "Nabd Financial",
  "Forma Studio",
  "Meridian Foundry",
  "Solstice Festival",
  "Beit Beirut",
  "Pillar Records",
];
