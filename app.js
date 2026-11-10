// Plant entries: edit the Arabic/English names here, then fill in the seven fact fields when verified.
const plants = [
  ['artaa', 'الأرطى', 'Arta'], ['basbas', 'البسباس', 'Basbas'], ['akhrit', 'الأخريط', 'Akhrit'],
  ['khuzama', 'الخزامى', 'Khuzama'], ['raghl', 'الرغل', 'Raghl'], ['raqrouq', 'الرقروق', 'Raqrouq'],
  ['sidr-bari', 'السدر البري', 'Sidr bari'], ['samar', 'السمر', 'Samar'], ['wahat', 'الوهط', 'Wahat'],
  ['hajlije', 'الهجليج', 'Hajlije'], ['qufl', 'القفل', 'Qufl'], ['arfaj', 'العرفج', 'Arfaj'],
  ['humayd', 'الحميض', 'Humayd'], ['nassi', 'النصي', 'Nassi'], ['shinnan', 'الشنان', 'Shinnan'],
  ['dhamran', 'الضمران', 'Dhamran'], ['ban-arabi', 'البان العربي', 'Al ban al arabi'], ['talh-najdi', 'الطلح النجدي', 'Talh najdi'],
  ['sidr-jabali', 'السدر الجبلي', 'Sidr jabali'], ['ratam', 'الرتم', 'Ratam'], ['qarad-arabi', 'القرض العربي', 'Qarad arabi'],
  ['arak', 'الأراك', 'Arak'], ['marakh', 'المرخ', 'Marakh'], ['ruthah', 'الروثة', 'Ruthah'],
  ['ghada', 'الغضا', 'Ghada'], ['fars', 'الفرس', 'Fars'], ['qaysum', 'القيصوم', 'Qaysum'],
  ['buaythiran', 'البعيثران', 'Buaythiran'], ['ghaf', 'الغاف', 'Ghaf'], ['shafallah', 'الشفلح', 'Shafallah'],
  ['shih', 'الشيح', 'Shih'], ['salm', 'السلم', 'Salm'], ['tahmah', 'الطحمة', 'Tahmah'],
  ['arar', 'العرعر', 'Arar'], ['asal', 'الأسل', 'Asal'], ['rabalah', 'الربلة', 'Rabalah'],
  ['raqaah', 'الرقاعة', 'Raqaah'], ['qatif', 'القطف', 'Qatif'], ['sibat', 'السبط', 'Sibat'],
  ['jada', 'الجعدة', 'Jada'], ['thamaam', 'الثمام', 'Thamaam'], ['lasaf', 'اللصف', 'Lasaf']
].map(([slug, name, nameEn], index) => ({
  slug,
  name,
  nameEn,
  commonNames: '',
  scientificName: '',
  family: '',
  botanicalDescription: '',
  geographicDistribution: '',
  ecologyReproduction: '',
  otherUses: '',
  // These are general sample photos, not confirmed photos of the named species.
  image: ['photo-1497250681960-ef046c08a56e', 'photo-1501004318641-b39e6451bec6', 'photo-1485955903447-4fcbf3f13fd0'][index % 3],
  gallery: [
    'photo-1497250681960-ef046c08a56e',
    'photo-1501004318641-b39e6451bec6',
    'photo-1485955903447-4fcbf3f13fd0'
  ]
}));

// Taxonomy records use GBIF backbone IDs; synonym differences are shown rather than hidden.
const plantTaxonomy = {
  akhrit: { scientificName: 'Salsola imbricata', family: 'Amaranthaceae', gbifId: 7889407, acceptedName: 'Caroxylon imbricatum' },
  raghl: { scientificName: 'Atriplex leucoclada', family: 'Amaranthaceae', gbifId: 10668498, acceptedName: 'Atriplex turcomanica', taxonomyNote: { ar: 'تختلف قواعد البيانات في هذا الاسم؛ يعامل GBIF الاسم المرادف على أنه Atriplex turcomanica. صفحة القصيم المحلية تربط «الرغل» بنوع آخر، لذا يلزم التحقق من بطاقة العينة.', en: 'Taxonomic databases differ: GBIF treats this name as a synonym of Atriplex turcomanica. The Qassim flora uses “Raghl” for another species, so verify the seed label.' } },
  raqrouq: { scientificName: 'Helianthemum sancti', family: 'Cistaceae', gbifId: 2874068, taxonomyNote: { ar: 'لم يؤكد GBIF تطابقًا على مستوى النوع لهذا الاسم؛ يعرض سجل الجنس فقط. تحقّق من بطاقة العينة قبل اعتماد الاسم.', en: 'GBIF did not confirm a species-level match for this name; its linked record is for the genus only. Verify the seed label before relying on it.' } },
  'sidr-bari': { scientificName: 'Ziziphus nummularia', family: 'Rhamnaceae', gbifId: 3039427, saudiRange: true },
  samar: { scientificName: 'Acacia tortilis', family: 'Fabaceae', gbifId: 3974700, acceptedName: 'Vachellia tortilis', saudiRange: true },
  wahat: { scientificName: 'Vachellia tortilis', family: 'Fabaceae', gbifId: 3974700, saudiRange: true },
  hajlije: { scientificName: 'Balanites aegyptiaca', family: 'Zygophyllaceae', gbifId: 5421115, saudiRange: true },
  qufl: { scientificName: 'Commiphora kataf', family: 'Burseraceae', gbifId: 7286751, saudiRange: true },
  shinnan: { scientificName: 'Seidlitzia rosmarinus', family: 'Amaranthaceae', gbifId: 3757361, taxonomyNote: { ar: 'يُظهر سجل GBIF المرتبط جنس Soda فقط، بينما تصف مصادر أخرى الاسم على مستوى النوع. تحقّق من بطاقة العينة.', en: 'The linked GBIF record resolves only to genus Soda, while other references treat the supplied name as a species. Verify the seed label.' }, alternateSource: 'https://eol.org/search?q=Seidlitzia%20rosmarinus' },
  dhamran: { scientificName: 'Traganum nudatum', family: 'Amaranthaceae', gbifId: 3760351, saudiRange: true },
  'ban-arabi': { scientificName: 'Moringa peregrina', family: 'Moringaceae', gbifId: 3752342, saudiRange: true },
  'talh-najdi': { scientificName: 'Acacia gerrardii', family: 'Fabaceae', gbifId: 3974764, acceptedName: 'Vachellia gerrardii', saudiRange: true },
  'sidr-jabali': { scientificName: 'Ziziphus glabrata', family: 'Rhamnaceae', gbifId: 12257700, saudiRange: true },
  ratam: { scientificName: 'Retama raetam', family: 'Fabaceae', gbifId: 2965095, saudiRange: true },
  'qarad-arabi': { scientificName: 'Vachellia nilotica', family: 'Fabaceae', gbifId: 3974744, saudiRange: true },
  arak: { scientificName: 'Salvadora persica', family: 'Salvadoraceae', gbifId: 5580727, saudiRange: true },
  marakh: { scientificName: 'Leptadenia pyrotechnica', family: 'Apocynaceae', gbifId: 3580180, saudiRange: true },
  ruthah: { scientificName: 'Salsola villosa', family: 'Amaranthaceae', gbifId: 8103486 },
  ghada: { scientificName: 'Haloxylon persicum', family: 'Amaranthaceae', gbifId: 7673414, saudiRange: true },
  fars: { scientificName: 'Salsola tetrandra', family: 'Amaranthaceae', gbifId: 3759360, acceptedName: 'Caroxylon tetrandrum', saudiRange: true },
  qaysum: { scientificName: 'Achillea fragrantissima', family: 'Asteraceae', gbifId: 3120394, saudiRange: true },
  buaythiran: { scientificName: 'Artemisia judaica', family: 'Asteraceae', gbifId: 3120789, saudiRange: true },
  ghaf: { scientificName: 'Prosopis cineraria', family: 'Fabaceae', gbifId: 5358521, saudiRange: true },
  shafallah: { scientificName: 'Capparis spinosa', family: 'Capparaceae', gbifId: 6370689, saudiRange: true },
  shih: { scientificName: 'Artemisia sieberi', family: 'Asteraceae', gbifId: 3121020, saudiRange: true },
  salm: { scientificName: 'Vachellia flava', family: 'Fabaceae', gbifId: 7971466, saudiRange: true },
  tahmah: { scientificName: 'Salsola schweinfurthii', family: 'Amaranthaceae', gbifId: 11233681, acceptedName: 'Soda schweinfurthii', saudiRange: true },
  arar: { scientificName: 'Juniperus procera', family: 'Cupressaceae', gbifId: 2684500, saudiRange: true },
  asal: { scientificName: 'Juncus rigidus', family: 'Juncaceae', gbifId: 2701397, saudiRange: true },
  rabalah: { scientificName: 'Plantago ovata', family: 'Plantaginaceae', gbifId: 3189723, saudiRange: true },
  raqaah: { scientificName: 'Ficus vasta', family: 'Moraceae', gbifId: 5571755, saudiRange: true },
  qatif: { scientificName: 'Atriplex halimus', family: 'Amaranthaceae', gbifId: 3083718, saudiRange: true },
  sibat: { scientificName: 'Stipagrostis drarii', family: 'Poaceae', gbifId: 5943202, saudiRange: true },
  jada: { scientificName: 'Teucrium polium', family: 'Lamiaceae', gbifId: 3887764 },
  thamaam: { scientificName: 'Panicum turgidum', family: 'Poaceae', gbifId: 4121027, saudiRange: true, taxonomyNote: { ar: 'تستخدم صفحة نباتات القصيم الاسم Pennisetum divisum للاسم المحلي «الثمام»، بينما تذكر قائمتك Panicum turgidum. لم أدمج وصف الصفحة قبل التحقق من التطابق.', en: 'The Qassim flora page uses Pennisetum divisum for this local name, while your list gives Panicum turgidum. Its description is not attributed here until the identification is confirmed.' } },
  lasaf: { scientificName: 'Capparis cartilaginea', family: 'Capparaceae', gbifId: 5601795, spellingNote: true, saudiRange: true }
};

// Taxonomy links below identify the source record for each plant; accepted names are noted separately.
const botanicalProfiles = {
  artaa: { scientificName: 'Calligonum comosum', family: 'Polygonaceae', gbifId: 8082975, saudiRange: true, regionalUrl: 'https://www.qrflora.com/erta', commonNames: 'أرطى النفود',
    botanicalDescription: { ar: 'شجيرة معمّرة ذات أفرع وأوراق دقيقة أسطوانية، وأزهار خضراء مصفرّة. يصفها مرجع الغطاء النباتي لمنطقة القصيم بأنها تنمو في الرمال والنفود.', en: 'A perennial shrub with slender cylindrical foliage and yellow-green flowers. The Qassim flora account records it in sandy areas and dunes.' },
    ecologyReproduction: { ar: 'تعيش في البيئات الرملية الصحراوية. لم أجد في المرجع المحلي وصفًا موثقًا لطريقة تكاثرها.', en: 'It occurs in sandy desert habitats. The local flora source does not describe its reproduction.' },
    otherUses: { ar: 'يُستخدم خشب الجذور الجاف وقودًا، كما ترعاه الإبل والماشية.', en: 'The dry root wood is used as fuel, and the plant is browsed by camels and livestock.' } },
  basbas: { scientificName: 'Anisosciadium lanatum', family: 'Apiaceae', gbifId: 3641795, saudiRange: true, regionalUrl: 'https://www.qrflora.com/bsbas',
    botanicalDescription: { ar: 'عشبة موسمية منفرشة، بأوراق صغيرة رمحية متقابلة وأزهار بيضاء صغيرة. يذكر مرجع القصيم أنها قد تتجاوز 30 سم عرضًا.', en: 'A seasonal, spreading herb with small opposite lance-shaped leaves and tiny white flowers. The Qassim flora account says it can spread over 30 cm.' },
    ecologyReproduction: { ar: 'تظهر في الأراضي اللينة والرملية والمتماسكة، وتتحول أزهارها بعد الإزهار إلى بنى شوكية.', en: 'It grows in soft, sandy, and compact soils; its flowers develop into prickly structures.' },
    otherUses: { ar: 'يؤكل النبات محليًا، وتَرعاه الماشية.', en: 'The plant is eaten locally and browsed by livestock.' } },
  khuzama: { scientificName: 'Horwoodia dicksoniae', family: 'Brassicaceae', gbifId: 3050777, saudiRange: true, regionalUrl: 'https://www.qrflora.com/khzama',
    botanicalDescription: { ar: 'عشبة موسمية زاحفة ذات أزهار بنفسجية وأوراق صغيرة متقابلة. تذكر مرجعية القصيم أن أفرعها تنتشر مع موسم الأمطار.', en: 'A seasonal, spreading herb with purple flowers and small opposite leaves. The Qassim flora account notes its spreading growth during the rainy season.' },
    ecologyReproduction: { ar: 'تظهر بعد الأمطار في الأراضي اللينة والرملية.', en: 'It appears after rain in soft and sandy soils.' },
    otherUses: { ar: 'تَرعاه الماشية.', en: 'It is browsed by livestock.' } },
  humayd: { scientificName: 'Rumex vesicarius', family: 'Polygonaceae', gbifId: 2888986, saudiRange: true, regionalUrl: 'https://www.qrflora.com/hemaidh',
    botanicalDescription: { ar: 'عشبة موسمية ذات أوراق شبه مستديرة خضراء فاتحة وأزهار حمراء داكنة، بحسب مرجع الغطاء النباتي لمنطقة القصيم.', en: 'A seasonal herb with pale green, nearly round leaves and deep red flowers, according to the Qassim flora account.' },
    ecologyReproduction: { ar: 'تنمو في الأراضي اللينة والمتماسكة، ويذكر مرجع القصيم قلة وجودها في الرياض.', en: 'It grows in soft and compact soils; the Qassim flora account notes it is uncommon in depressions (riyad).' },
    otherUses: { ar: 'أوراقه مأكولة، ولها مذاق حامض.', en: 'Its leaves are eaten and have a sour taste.' } },
  nassi: { scientificName: 'Stipagrostis plumosa', family: 'Poaceae', gbifId: 4130292, saudiRange: true, regionalUrl: 'https://www.qrflora.com/nesi',
    taxonomyNote: { ar: 'تستخدم صفحة نباتات القصيم الاسم Aristida plumosa للاسم المحلي «النصي»، بينما تذكر قائمتك Stipagrostis plumosa. لم أدمج وصف الصفحة قبل التحقق من أن الاسمين يشيران إلى النوع نفسه.', en: 'The Qassim flora page uses Aristida plumosa for this local name, while your list gives Stipagrostis plumosa. Its description is not attributed here until the two identifications are confirmed.' } },
  arfaj: { scientificName: 'Rhanterium epapposum', family: 'Asteraceae', gbifId: 3110118, saudiRange: true, regionalUrl: 'https://www.qrflora.com/alaarfj',
    botanicalDescription: { ar: 'شجيرة معمّرة متفرعة، بأوراق رمحية صغيرة وأزهار صفراء كثيرة. يذكر مرجع القصيم أن ارتفاعها يقارب 80 سم.', en: 'A perennial shrub with small lance-shaped leaves and numerous yellow flowers. The Qassim flora account reports a height of about 80 cm.' },
    ecologyReproduction: { ar: 'تنمو في الأراضي اللينة والرملية والمتماسكة.', en: 'It grows in soft, sandy, and compact soils.' },
    otherUses: { ar: 'تَرعاه الإبل، ويُضاف زهره إلى الشاي محليًا لإكسابه نكهة ورائحة.', en: 'It is browsed by camels; its flowers are locally added to tea for flavour and aroma.' } }
  qatif: {
    botanicalDescription: { ar: 'جنبة طولها 1-2 م، تكسوها أوبار حويصلية. السوق منتصبة، كثيرة التفرع، متخشبة، فضية - مبيَضة اللون. الأوراق بسيطة، معلاقية، أبعادها 10-60×4-40 مم، متناوبة (شبه متقابلة في الأسفل)، بيضوية - معينية إلى مثلثية الشكل، وتدية أو سهمية القاعدة، تامة أو متموجة أو مسننة الحافة، فضية-بيضاء اللون، الأعصاب غير بارزة الأوراق العلوية ضيقة، رمحية. الأزهار وحيدة الجنس، تجتمع في مجموعات كثيفة، تشكل سنابل انتهائية لا تحمل أوراقاُ. الأزهار الذكرية غير جلية، قطعها الكمَية 5، غشائية، توجد في قمة النورة. الأزهار الأنثوية في أسفل محور النورة عديمة الكم، لكنها تملك قنابتين، قوامهما جلدي، يدعيان "مصراعين" ينموان مع الثمرة ويحيطان بها. الثمرة قربية (أكينة)، محيطها الثمري غشائي حر. المصراع مدور أو شبه مدور أو كلوي، قاعدته وتدية قصيرة، حافته تامة أو مسننة، سطحه ناعم أو شبكي لكنه ليس درنياً، قطره نحو 4-5 مم. البذور 1-2 مم، عمودية، عدسية، بنية داكنة اللون، الجنين مدور. الإزهار في ابريل إلى أكتوبر.', en: 'not translated yet'}
  }
};
plants.forEach(plant => {
  Object.assign(plant, plantTaxonomy[plant.slug] || {}, botanicalProfiles[plant.slug] || {});
  plant.scientificSlug = (plant.scientificName || plant.nameEn)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  plant.geographicDistribution = plant.saudiRange
    ? { ar: 'يسجل مرجع قائمة النباتات الوعائية العالمية (WCVP) وجود هذا النوع في المملكة العربية السعودية؛ راجع سجل GBIF المرتبط للاطلاع على نطاقه الأوسع.', en: 'The World Checklist of Vascular Plants (WCVP) records this taxon in Saudi Arabia; see its linked GBIF record for the broader range.' }
    : { ar: 'لم أضف نطاقًا جغرافيًا قبل التحقق من تطابق الاسم مع النوع المقصود. راجع سجل المصدر المرتبط أدناه.', en: 'A range has not been added until the supplied name is verified against the intended species. See the linked source record below.' };
});

// Keep the scientific, geographic, and species-specific sections separate for clear sourcing.
const informationGroups = [
  ['botanicalDescription', 'botanicalDescriptionHeading'],
  ['geographicDistribution', 'geographicDistributionHeading'],
  ['ecologyReproduction', 'ecologyReproductionHeading'],
  ['otherUses', 'otherUsesHeading']
];

const translations = {
  en: {
    collectionTitle: 'Plant collection', catalogHeading: 'All plants', swipeHeading: 'Browse plants',
    swipeHint: 'Swipe a card or use the arrows', siteSettings: 'Site settings',
    searchLabel: 'Search plants', searchPlaceholder: 'Search plants',
    browsePlants: 'Browse plants', previousPlant: 'Previous plant', nextPlant: 'Next plant',
    swipePosition: 'Plant {current} of {total}: {name}', emptyState: 'No plants found. Try another search.',
    backToTop: 'Back to top ↑', darkMode: 'Dark mode', lightMode: 'Light mode',
    switchLanguage: 'العربية', plantCountOne: 'plant', plantCountMany: 'plants', inCollection: 'in the collection',
    viewPlant: 'View', seed: 'Plant', allPlants: 'All plants', seedNote: 'Plant information',
    photo: 'Photo', previousPhoto: 'Previous photo', nextPhoto: 'Next photo',
    photoGallery: 'Plant photo gallery', aboutPlant: 'Plant information',
    qrTitle: 'Plant QR code', qrDescription: 'Scan to open this plant page.',
    openPage: 'Open this page', shareLink: 'Page link', copyLink: 'Copy page link',
    copied: 'Link copied!', copyManually: 'Select and copy the link above.',
    qrCredit: 'Creating the code requires an internet connection.', morePlants: 'More plants',
    notFoundTitle: 'Plant not found', notFoundDescription: 'This plant page is not in the collection.',
    backToCollection: 'Back to the collection', missingInfo: 'This information has not been added yet.',
    commonNamesHeading: 'Common name', commonNamesEmpty: 'Other names not added',
    scientificNameHeading: 'Scientific name', familyHeading: 'Family',
    botanicalDescriptionHeading: 'Botanical description', geographicDistributionHeading: 'Geographic distribution',
    ecologyReproductionHeading: 'Ecology and reproduction', otherUsesHeading: 'Other uses',
    acceptedNameLabel: 'GBIF accepted name', taxonomyNoteLabel: 'Identification note',
    spellingNote: 'Scientific name spelling corrected from the supplied list.',
    sourcesHeading: 'Sources', gbifSource: 'GBIF taxonomy record', regionalSource: 'Qassim flora profile',
    alternateTaxonomySource: 'Additional taxonomy reference',
    samplePhotos: 'General sample photos; replace these with photos of this plant.'
  },
  ar: {
    collectionTitle: 'مجموعة النباتات', catalogHeading: 'كل النباتات', swipeHeading: 'تصفح النباتات',
    swipeHint: 'اسحب البطاقة أو استخدم الأسهم', siteSettings: 'إعدادات الموقع',
    searchLabel: 'ابحث عن نبات', searchPlaceholder: 'ابحث عن نبات',
    browsePlants: 'تصفح النباتات', previousPlant: 'النبات السابق', nextPlant: 'النبات التالي',
    swipePosition: 'النبات {current} من {total}: {name}', emptyState: 'لم يتم العثور على نباتات. جرّب بحثًا آخر.',
    backToTop: 'العودة إلى الأعلى ↑', darkMode: 'الوضع الداكن', lightMode: 'الوضع الفاتح',
    switchLanguage: 'English', plantCountOne: 'نبات', plantCountMany: 'نباتات', inCollection: 'في المجموعة',
    viewPlant: 'عرض', seed: 'نبات', allPlants: 'كل النباتات', seedNote: 'معلومات النبات',
    photo: 'صورة', previousPhoto: 'الصورة السابقة', nextPhoto: 'الصورة التالية',
    photoGallery: 'معرض صور النبات', aboutPlant: 'معلومات النبات',
    qrTitle: 'رمز QR للنبات', qrDescription: 'امسح الرمز لفتح صفحة النبات.',
    openPage: 'فتح الصفحة', shareLink: 'رابط الصفحة', copyLink: 'نسخ رابط الصفحة',
    copied: 'تم نسخ الرابط!', copyManually: 'حدّد الرابط أعلاه وانسخه.',
    qrCredit: 'يحتاج إنشاء الرمز إلى اتصال بالإنترنت.', morePlants: 'نباتات أخرى',
    notFoundTitle: 'النبات غير موجود', notFoundDescription: 'صفحة هذا النبات غير موجودة في المجموعة.',
    backToCollection: 'العودة إلى المجموعة', missingInfo: 'لم تتم إضافة هذه المعلومة بعد.',
    commonNamesHeading: 'الاسم العام', commonNamesEmpty: 'أسماء أخرى غير مضافة',
    scientificNameHeading: 'الاسم العلمي', familyHeading: 'الفصيلة',
    botanicalDescriptionHeading: 'الوصف النباتي', geographicDistributionHeading: 'التوزيع الجغرافي',
    ecologyReproductionHeading: 'البيئية و التكاثر', otherUsesHeading: 'الاستعمالات الأخرى',
    acceptedNameLabel: 'الاسم المقبول في GBIF', taxonomyNoteLabel: 'ملاحظة حول تحديد النوع',
    spellingNote: 'تم تصحيح تهجئة الاسم العلمي مقارنة بالقائمة الواردة.',
    sourcesHeading: 'المصادر', gbifSource: 'سجل التصنيف في GBIF', regionalSource: 'صفحة نباتات القصيم',
    alternateTaxonomySource: 'مرجع تصنيفي إضافي',
    samplePhotos: 'صور تجريبية عامة؛ استبدلها بصور النبات الصحيح.'
  }
};

function readPreference(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}
function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn('Could not save this preference in the browser.', error);
  }
}

let language = readPreference('seed-soil-language', 'ar');
const photoUrl = (id, width = 780) => id.startsWith('http')
  ? id
  : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const text = key => translations[language][key];
const plantText = plant => ({ name: language === 'ar' ? plant.name : plant.nameEn });
const plantPageHref = plant => `plants/index.html?plant=${encodeURIComponent(plant.scientificSlug)}`;

function applyPreferences() {
  const isArabic = language === 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.title = document.querySelector('[data-plant-page]')
    ? `${text('aboutPlant')} — Seed & Soil`
    : `${text('collectionTitle')} — Seed & Soil`;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = text(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    element.placeholder = text(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', text(element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-language-button]').forEach(button => {
    button.textContent = text('switchLanguage');
    button.setAttribute('aria-label', isArabic ? 'تغيير اللغة إلى الإنجليزية' : 'Switch language to Arabic');
  });
  document.querySelectorAll('[data-theme-button]').forEach(button => {
    const dark = document.documentElement.dataset.theme === 'dark';
    button.textContent = text(dark ? 'lightMode' : 'darkMode');
    button.setAttribute('aria-pressed', String(dark));
  });
  document.querySelectorAll('[data-site-logo]').forEach(image => {
    image.src = document.documentElement.dataset.theme === 'dark'
      ? image.dataset.logoDark
      : image.dataset.logoLight;
    image.alt = isArabic
      ? 'المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر'
      : 'National Center for Vegetation Cover Development and Combating Desertification';
    image.parentElement.setAttribute('aria-label', image.alt);
  });
  document.querySelectorAll('.brand[aria-label]').forEach(link => {
    link.setAttribute('aria-label', isArabic ? 'الصفحة الرئيسية - Seed & Soil' : 'Seed and Soil home');
  });
}

document.documentElement.dataset.theme = readPreference('seed-soil-theme', 'light');
applyPreferences();
document.querySelectorAll('[data-language-button]').forEach(button => button.addEventListener('click', () => {
  language = language === 'en' ? 'ar' : 'en';
  savePreference('seed-soil-language', language);
  applyPreferences();
  renderPlants();
  renderPlantDetail();
}));
document.querySelectorAll('[data-theme-button]').forEach(button => button.addEventListener('click', () => {
  document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  savePreference('seed-soil-theme', document.documentElement.dataset.theme);
  applyPreferences();
}));

const grid = document.querySelector('#plant-grid');
const swipeStack = document.querySelector('#swipe-stack');
const swipeStage = document.querySelector('#swipe-stage');
const swipeSection = document.querySelector('.swipe-section');
let deckIndex = 0;
let deckInitialized = false;
let visiblePlants = [];
let suppressSwipeClick = false;
let deckCards = [];
const preloadedDeckImages = new Set();

function plantCardDetails(plant) {
  const localized = plantText(plant);
  return { localized };
}

function renderPlants() {
  if (!grid) return;
  window.clearTimeout(deckAnimationTimer);
  deckAdvancing = false;
  swipeQueue = [];
  pointerStart = null;
  const search = document.querySelector('#plant-search');
  const count = document.querySelector('#collection-count');
  const empty = document.querySelector('#empty-state');
  const query = search.value.trim().toLocaleLowerCase(language);
  visiblePlants = plants.filter(plant => {
    const { localized } = plantCardDetails(plant);
    return `${plant.name} ${localized.name} ${plant.commonNames} ${plant.scientificName}`
      .toLocaleLowerCase(language).includes(query);
  });
  if (!deckInitialized && visiblePlants.length) {
    // Choose a different starting plant on each page load; all following cards stay in list order.
    deckIndex = Math.floor(Math.random() * visiblePlants.length);
    deckInitialized = true;
  }
  deckIndex = visiblePlants.length ? deckIndex % visiblePlants.length : 0;
  const formattedCount = language === 'ar' ? visiblePlants.length.toLocaleString('ar') : visiblePlants.length;
  const countNoun = language === 'ar'
    ? visiblePlants.length === 1 ? 'نبات' : text('plantCountMany')
    : visiblePlants.length === 1 ? text('plantCountOne') : text('plantCountMany');
  count.textContent = `${formattedCount} ${countNoun} ${text('inCollection')}`;
  empty.hidden = visiblePlants.length > 0;
  grid.hidden = visiblePlants.length === 0;
  grid.innerHTML = visiblePlants.map(plant => {
    const { localized } = plantCardDetails(plant);
    const link = plantPageHref(plant);
    return `
      <article class="plant-card">
        <a class="card-image-link" href="${link}" aria-label="${text('viewPlant')} ${localized.name}">
          <img class="card-image" src="${photoUrl(plant.image)}" alt="${text('samplePhotos')}" loading="lazy">
          <span class="card-number">${text('seed')} ${String(plants.indexOf(plant) + 1).padStart(2, '0')}</span>
        </a>
        <div class="card-content">
          <p class="card-category">${text('seed')} ${String(plants.indexOf(plant) + 1).padStart(2, '0')}</p>
          <h2 class="card-title"><a href="${link}">${localized.name}</a></h2>
          <div class="card-bottom"><span>${text('seedNote')}</span><a class="card-link" href="${link}" aria-label="${text('viewPlant')} ${localized.name}">↗</a></div>
        </div>
      </article>`;
  }).join('');
}

function renderDeck() {
  if (!swipeStack) return;
  if (!visiblePlants.length) {
    swipeStack.innerHTML = '';
    deckCards = [];
    document.querySelector('#swipe-position').textContent = text('emptyState');
    return;
  }
  visiblePlants.forEach(plant => {
    const url = photoUrl(plant.image, 900);
    if (preloadedDeckImages.has(url)) return;
    const image = new Image();
    image.src = url;
    preloadedDeckImages.add(url);
  });
  swipeStack.innerHTML = '';
  deckCards = Array.from({ length: Math.min(visiblePlants.length, 4) }, () => {
    const card = document.createElement('a');
    card.className = 'swipe-card';
    swipeStack.append(card);
    return card;
  });
  deckCards.forEach((card, depth) => {
    const plant = visiblePlants[(deckIndex + depth) % visiblePlants.length];
    updateDeckCard(card, plant, depth);
  });
  updateDeckPosition();
}

function updateDeckCard(card, plant, depth) {
  const { localized } = plantCardDetails(plant);
  const plantNumber = String(plants.indexOf(plant) + 1).padStart(2, '0');
  card.style.removeProperty('--swipe-x');
  card.style.removeProperty('--swipe-rotation');
  setDeckCardState(card, depth);
  card.href = plantPageHref(plant);
  card.style.setProperty('--stack-depth', depth);
  card.setAttribute('aria-label', `${text('viewPlant')} ${localized.name}`);
  card.innerHTML = `
    <img class="swipe-card-image" src="${photoUrl(plant.image, 900)}" alt="${text('samplePhotos')}" draggable="false">
    <span class="swipe-card-tint"></span>
    <span class="swipe-card-content">
      <span class="swipe-card-category">${text('seed')} ${plantNumber}</span>
      <span class="swipe-card-title">${localized.name}</span>
      <span class="swipe-card-meta">${text('seedNote')}</span>
    </span>`;
}

function setDeckCardState(card, depth) {
  const isActive = depth === 0;
  card.className = `swipe-card ${isActive ? 'is-active' : 'is-underlay'}`;
  if (isActive) {
    card.removeAttribute('aria-hidden');
    card.removeAttribute('tabindex');
    card.setAttribute('data-swipe-card', '');
  } else {
    card.setAttribute('aria-hidden', 'true');
    card.tabIndex = -1;
    card.removeAttribute('data-swipe-card');
  }
}

function updateDeckPosition() {
  if (!visiblePlants.length) return;
  const total = visiblePlants.length;
  const current = language === 'ar' ? (deckIndex + 1).toLocaleString('ar') : deckIndex + 1;
  const formattedTotal = language === 'ar' ? total.toLocaleString('ar') : total;
  const active = plantCardDetails(visiblePlants[deckIndex]);
  document.querySelector('#swipe-position').textContent = text('swipePosition')
    .replace('{current}', current)
    .replace('{total}', formattedTotal)
    .replace('{name}', active.localized.name);
}

let deckAnimationTimer;
let deckAdvancing = false;
let swipeQueue = [];
let pointerStart = null;

function finishDeckSwipe() {
  const direction = swipeQueue.shift();
  const card = deckCards[0];
  if (!card || direction === undefined) return;
  deckAdvancing = true;
  card.classList.remove('is-dragging');
  card.classList.add(direction > 0 ? 'is-swiping-left' : 'is-swiping-right');
  window.clearTimeout(deckAnimationTimer);
  const animationDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 220;
  deckAnimationTimer = window.setTimeout(() => {
    deckIndex = (deckIndex + direction + visiblePlants.length) % visiblePlants.length;
    if (direction > 0) {
      const outgoingCard = deckCards.shift();
      deckCards.push(outgoingCard);
      updateDeckCard(outgoingCard, visiblePlants[(deckIndex + deckCards.length - 1) % visiblePlants.length], deckCards.length - 1);
    } else {
      const outgoingCard = deckCards.pop();
      deckCards.unshift(outgoingCard);
      deckCards.forEach((deckCard, depth) => {
        updateDeckCard(deckCard, visiblePlants[(deckIndex + depth) % visiblePlants.length], depth);
      });
    }
    deckCards.forEach((deckCard, depth) => {
      deckCard.style.setProperty('--stack-depth', depth);
      setDeckCardState(deckCard, depth);
    });
    updateDeckPosition();
    deckAdvancing = false;
    if (pointerStart) {
      const remainder = pointerStart.latestDx - pointerStart.processedDistance;
      const nextCard = deckCards[0];
      if (nextCard && remainder) {
        nextCard.classList.add('is-dragging');
        nextCard.style.setProperty('--swipe-x', `${remainder}px`);
      }
    }
    if (swipeQueue.length) finishDeckSwipe();
  }, animationDuration);
}

function advanceDeck(direction) {
  if (visiblePlants.length < 2) return;
  swipeQueue.push(direction);
  if (!deckAdvancing) finishDeckSwipe();
}

function queuePointerSwipes() {
  const threshold = 90;
  let remainder = pointerStart.latestDx - pointerStart.processedDistance;
  while (Math.abs(remainder) >= threshold) {
    const direction = remainder < 0 ? 1 : -1;
    pointerStart.processedDistance += Math.sign(remainder) * threshold;
    swipeQueue.push(direction);
    pointerStart.dragged = true;
    remainder = pointerStart.latestDx - pointerStart.processedDistance;
  }
  if (!deckAdvancing && swipeQueue.length) finishDeckSwipe();
}

function updateDraggedCard() {
  if (!pointerStart || deckAdvancing) return;
  const card = swipeStack.querySelector('.is-active');
  const remainder = pointerStart.latestDx - pointerStart.processedDistance;
  if (!card) return;
  card.classList.toggle('is-dragging', pointerStart.dragged);
  card.style.setProperty('--swipe-x', `${remainder}px`);
}

/*
 * Swipe a stack continuously: pointer capture stays on the stage while each
 * card animates away, so one long drag can advance through several plants.
 */
function handlePointerDown(event) {
  const card = event.target.closest('[data-swipe-card]');
  if (!card || visiblePlants.length < 2 || event.button > 0 || !event.isPrimary) return;
  pointerStart = {
    x: event.clientX,
    y: event.clientY,
    latestDx: 0,
    processedDistance: 0,
    dragged: false,
    pointerId: event.pointerId
  };
  swipeStage.setPointerCapture(event.pointerId);
}

function handlePointerMove(event) {
  if (!pointerStart || pointerStart.pointerId !== event.pointerId) return;
  pointerStart.latestDx = event.clientX - pointerStart.x;
  const dy = event.clientY - pointerStart.y;
  if (Math.abs(pointerStart.latestDx) > Math.abs(dy) && Math.abs(pointerStart.latestDx) > 8) {
    pointerStart.dragged = true;
    queuePointerSwipes();
    updateDraggedCard();
  }
}

function handlePointerEnd(event) {
  if (!pointerStart || pointerStart.pointerId !== event.pointerId) return;
  pointerStart.latestDx = event.clientX - pointerStart.x;
  const dy = event.clientY - pointerStart.y;
  if (Math.abs(pointerStart.latestDx) > Math.abs(dy) && Math.abs(pointerStart.latestDx) > 8) {
    pointerStart.dragged = true;
    queuePointerSwipes();
  }
  const dragged = pointerStart.dragged;
  const tappedCard = swipeStack.querySelector('.is-active');
  pointerStart = null;
  const card = swipeStack.querySelector('.is-active');
  if (card && !deckAdvancing) {
    card.classList.remove('is-dragging');
    card.style.removeProperty('--swipe-x');
    card.style.removeProperty('--swipe-rotation');
  }
  if (dragged) {
    suppressSwipeClick = true;
    window.setTimeout(() => { suppressSwipeClick = false; }, 300);
  } else if (tappedCard) {
    suppressSwipeClick = true;
    window.location.href = tappedCard.href;
  }
}

function handlePointerCancel(event) {
  if (!pointerStart || pointerStart.pointerId !== event.pointerId) return;
  const card = swipeStack.querySelector('.is-active');
  if (card && !deckAdvancing) {
    card.classList.remove('is-dragging');
    card.style.removeProperty('--swipe-x');
    card.style.removeProperty('--swipe-rotation');
  }
  pointerStart = null;
}

if (grid && swipeStack) {
  document.querySelector('#plant-search').addEventListener('input', renderPlants);
  document.querySelector('#swipe-prev').addEventListener('click', () => advanceDeck(-1));
  document.querySelector('#swipe-next').addEventListener('click', () => advanceDeck(1));
  swipeStage.addEventListener('pointerdown', handlePointerDown);
  swipeStage.addEventListener('pointermove', handlePointerMove);
  swipeStage.addEventListener('pointerup', handlePointerEnd);
  swipeStage.addEventListener('pointercancel', handlePointerCancel);
  swipeStage.addEventListener('lostpointercapture', handlePointerCancel);
  swipeStage.addEventListener('click', event => {
    if (!suppressSwipeClick) return;
    event.preventDefault();
    event.stopPropagation();
  }, true);
}

const detail = document.querySelector('[data-plant-page]');
function renderPlantDetail() {
  if (!detail) return;
  // Scientific-name slugs identify pages; old short slugs remain valid for existing QR codes.
  const slug = new URLSearchParams(window.location.search).get('plant');
  const plant = plants.find(item => item.scientificSlug === slug || item.slug === slug);
  if (!plant) {
    document.title = `${text('notFoundTitle')} — Seed & Soil`;
    detail.innerHTML = `<div class="not-found"><h1>${text('notFoundTitle')}</h1><p>${text('notFoundDescription')}</p><a class="button button-dark" href="../">${text('backToCollection')}</a></div>`;
    return;
  }

  const localized = plantText(plant);
  document.title = `${plant.scientificName} — Seed & Soil`;
  const shareUrl = new URL(window.location.href);
  shareUrl.searchParams.set('plant', plant.scientificSlug);
  if (slug !== plant.scientificSlug) window.history.replaceState(null, '', shareUrl.href);
  const url = shareUrl.href;
  const groups = informationGroups.map(([field, headingKey]) => {
    const rawValue = plant[field];
    const value = typeof rawValue === 'string' ? rawValue : rawValue?.[language];
    const content = value || text('missingInfo');
    return `<details class="info-group"${field === 'botanicalDescription' ? ' open' : ''}>
      <summary><span class="info-heading">${text(headingKey)}</span><span class="info-symbol" aria-hidden="true"></span></summary>
      <div class="info-panel"><div class="info-body"><p>${content}</p></div></div>
    </details>`;
  }).join('');
  const taxonomyNote = plant.taxonomyNote?.[language];
  const sourceLinks = [
    plant.gbifId ? `<a href="https://www.gbif.org/species/${plant.gbifId}" target="_blank" rel="noopener noreferrer">${text('gbifSource')}</a>` : '',
    plant.alternateSource ? `<a href="${plant.alternateSource}" target="_blank" rel="noopener noreferrer">${text('alternateTaxonomySource')}</a>` : '',
    plant.regionalUrl ? `<a href="${plant.regionalUrl}" target="_blank" rel="noopener noreferrer">${text('regionalSource')}</a>` : ''
  ].filter(Boolean).join('');
  const correctionNote = plant.spellingNote ? `<p class="taxonomy-note">${text('spellingNote')}</p>` : '';
  const acceptedNameNote = plant.acceptedName
    ? `<p class="taxonomy-note"><span>${text('acceptedNameLabel')}:</span> <em>${plant.acceptedName}</em></p>`
    : '';
  detail.innerHTML = `
    <p class="breadcrumb"><a href="../">← ${text('allPlants')}</a> <span aria-hidden="true">/</span> ${localized.name}</p>
    <section class="detail-hero" aria-labelledby="plant-title">
      <div class="detail-copy">
        <p class="eyebrow">${text('commonNamesHeading')}</p>
        <h1 class="detail-title" id="plant-title">${localized.name}</h1>
        ${plant.commonNames ? `<p class="detail-common-names">${plant.commonNames}</p>` : ''}
        <div class="plant-identification" aria-label="${text('aboutPlant')}">
          <p><span>${text('scientificNameHeading')}</span><em>${plant.scientificName}</em></p>
          <p><span>${text('familyHeading')}</span>${plant.family}</p>
        </div>
        ${acceptedNameNote}${correctionNote}
        ${taxonomyNote ? `<p class="taxonomy-note"><span>${text('taxonomyNoteLabel')}:</span> ${taxonomyNote}</p>` : ''}
      </div>
      <div>
        <figure class="detail-visual"><img id="gallery-image" src="${photoUrl(plant.gallery[0], 1100)}" alt="${text('samplePhotos')}"><figcaption class="gallery-caption">${text('samplePhotos')}</figcaption></figure>
        <div class="gallery-controls" aria-label="${text('photoGallery')}">
          <button type="button" class="gallery-button" id="gallery-prev" aria-label="${text('previousPhoto')}">←</button>
          <span class="gallery-count" id="gallery-count" aria-live="polite">${language === 'ar' ? '١' : '1'} / ${language === 'ar' ? plant.gallery.length.toLocaleString('ar') : plant.gallery.length}</span>
          <button type="button" class="gallery-button" id="gallery-next" aria-label="${text('nextPhoto')}">→</button>
        </div>
      </div>
    </section>
    <section class="detail-content" aria-labelledby="info-title">
      <div><h2 id="info-title">${text('aboutPlant')}</h2>
        <div class="info-list">${groups}</div>
        ${sourceLinks ? `<div class="plant-sources"><h3>${text('sourcesHeading')}</h3>${sourceLinks}</div>` : ''}
      </div>
      <aside class="qr-card" aria-labelledby="qr-title">
        <h3 id="qr-title">${text('qrTitle')}</h3><p>${text('qrDescription')}</p>
        <img class="qr-image" src="https://api.qrserver.com/v1/create-qr-code/?size=320x320&format=png&color=5aaa35&bgcolor=ffffff&qzone=1&data=${encodeURIComponent(url)}" alt="${text('qrTitle')} — ${localized.name}">
        <a class="qr-open" href="${url}">${text('openPage')} ↗</a>
        <label class="sr-only" for="page-url">${text('shareLink')}</label><input id="page-url" class="url-field" readonly value="${url}">
        <button class="copy-button" type="button" id="copy-link">${text('copyLink')}</button><p class="copy-status" id="copy-status" aria-live="polite"></p>
        <p class="qr-credit">${text('qrCredit')}</p>
      </aside>
    </section>
    <section class="more-plants"><h2>${text('morePlants')}</h2><a class="more-link" href="../">← ${text('backToCollection')}</a></section>`;

  let photoIndex = 0;
  const galleryImage = detail.querySelector('#gallery-image');
  const galleryCount = detail.querySelector('#gallery-count');
  function showPhoto(nextIndex) {
    photoIndex = (nextIndex + plant.gallery.length) % plant.gallery.length;
    const digits = language === 'ar' ? (photoIndex + 1).toLocaleString('ar') : photoIndex + 1;
    galleryImage.src = photoUrl(plant.gallery[photoIndex], 1100);
    galleryImage.alt = text('samplePhotos');
    detail.querySelector('.gallery-caption').textContent = text('samplePhotos');
    galleryCount.textContent = `${digits} / ${language === 'ar' ? plant.gallery.length.toLocaleString('ar') : plant.gallery.length}`;
  }
  detail.querySelector('#gallery-prev').addEventListener('click', () => showPhoto(photoIndex - 1));
  detail.querySelector('#gallery-next').addEventListener('click', () => showPhoto(photoIndex + 1));
  detail.querySelector('#copy-link').addEventListener('click', async () => {
    const status = detail.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(url);
      status.textContent = text('copied');
    } catch {
      detail.querySelector('#page-url').select();
      status.textContent = text('copyManually');
    }
  });

  // Keep the native details/summary controls for keyboard and screen-reader access, and animate their panels.
  detail.querySelectorAll('.info-group').forEach(group => {
    const summary = group.querySelector('summary');
    const panel = group.querySelector('.info-panel');
    let animationId = 0;
    let opening = group.open;
    summary.addEventListener('click', event => {
      event.preventDefault();
      opening = !opening;
      animationId += 1;
      const currentAnimationId = animationId;
      const currentOpacity = Number.parseFloat(window.getComputedStyle(panel).opacity);
      const startHeight = opening ? 0 : panel.getBoundingClientRect().height;
      if (panel.getAnimations) panel.getAnimations().forEach(animation => animation.cancel());
      if (opening) {
        group.open = true;
      }
      panel.style.height = `${startHeight}px`;
      panel.style.opacity = String(opening ? 0 : currentOpacity);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        group.open = opening;
        panel.style.height = '';
        panel.style.opacity = '';
        panel.style.overflow = '';
        return;
      }
      if (typeof panel.animate !== 'function') {
        group.open = opening;
        panel.style.height = '';
        panel.style.opacity = '';
        panel.style.overflow = '';
        return;
      }
      panel.style.overflow = 'hidden';
      const endHeight = opening ? panel.scrollHeight : 0;
      const animation = panel.animate(
        [{ height: `${startHeight}px`, opacity: opening ? 0 : 1 }, { height: `${endHeight}px`, opacity: opening ? 1 : 0 }],
        { duration: 240, easing: 'ease-out' }
      );
      animation.onfinish = () => {
        if (animationId !== currentAnimationId) return;
        group.open = opening;
        panel.style.height = '';
        panel.style.opacity = '';
        panel.style.overflow = '';
      };
    });
  });
}

renderPlants();
renderPlantDetail();
