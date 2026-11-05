// Edit this list to add your plants. Each plant needs a matching folder in plants/.
const plants = [
  {
    slug: 'sunflower', name: 'Sunflower', latin: 'Helianthus annuus', category: 'flower', categoryLabel: 'Flower', color: 'Golden yellow', season: 'Summer',
    image: 'photo-1597848212624-e6e3b0f1f0fa', imagePosition: 'center center', description: 'A tall annual flower with bright yellow petals and edible seeds.',
    gallery: ['photo-1597848212624-e6e3b0f1f0fa', 'photo-1470252649378-9c29740c9fa8', 'photo-1500382017468-9049fed747ef'],
    info: [
      ['About this plant', 'Sunflowers are annuals native to North America. Their familiar flower head is made up of many tiny flowers, and young plants turn to follow the sun.'],
      ['Sowing your seeds', 'Sow outdoors after the last frost, about 2.5 cm (1 in) deep. Give each plant room to grow, and choose a sunny spot protected from strong wind.'],
      ['Light & water', 'Full sun is best: aim for at least 6–8 hours a day. Water deeply while the plant is young; established plants are fairly drought tolerant.'],
      ['Additional notes', 'Flowers attract bees and birds. Save a few mature seed heads to dry for next year or leave them out as a snack for wildlife.']
    ]
  },
  {
    slug: 'sweet-basil', name: 'Sweet Basil', latin: 'Ocimum basilicum', category: 'herb', categoryLabel: 'Herb', color: 'Fresh green', season: 'Warm months',
    image: 'photo-1618164436241-4473940d1f5c', imagePosition: 'center center', description: 'A culinary herb with aromatic leaves commonly used fresh or dried.',
    gallery: ['photo-1618164436241-4473940d1f5c', 'photo-1618375569909-3c8616cf7733', 'photo-1466692476868-aef1dfb1e735'],
    info: [
      ['About this plant', 'Sweet basil is a tender, leafy annual herb loved for its aromatic leaves. Warmth, regular picking, and a bright windowsill help it flourish.'],
      ['Sowing your seeds', 'Start indoors in a warm place, barely covering the seeds. Move seedlings outside only after nights are reliably warm, or keep them in a sunny pot.'],
      ['Light & water', 'Give basil 6 or more hours of sunlight and keep the soil evenly moist, not soggy. Good drainage helps keep roots healthy.'],
      ['Additional notes', 'Pinch off the tips above a pair of leaves to encourage bushier growth. Remove flower buds to keep the leaves coming.']
    ]
  },
  {
    slug: 'lavender', name: 'Lavender', latin: 'Lavandula angustifolia', category: 'flower', categoryLabel: 'Flower', color: 'Soft violet', season: 'Summer',
    image: 'photo-1470252649378-9c29740c9fa8', imagePosition: 'center center', description: 'A fragrant perennial shrub with purple flower spikes that attract pollinators.',
    gallery: ['photo-1470252649378-9c29740c9fa8', 'photo-1499002238440-d264edd596ec', 'photo-1497250681960-ef046c08a56e'],
    info: [
      ['About this plant', 'English lavender is a woody perennial known for its scented foliage and purple flower spikes. Once established, it prefers life on the drier side.'],
      ['Sowing your seeds', 'Lavender seeds can be slow to sprout. Sow on the surface of a free-draining seed mix, keep lightly moist, and be patient; germination may take a few weeks.'],
      ['Light & water', 'Choose full sun and well-drained soil. Water young plants as they establish, then let the soil dry between waterings.'],
      ['Additional notes', 'Trim lightly after flowering to keep a neat shape, but avoid cutting into old woody stems.']
    ]
  },
  {
    slug: 'monstera', name: 'Monstera', latin: 'Monstera deliciosa', category: 'houseplant', categoryLabel: 'Houseplant', color: 'Deep green', season: 'Year-round',
    image: 'photo-1501004318641-b39e6451bec6', imagePosition: 'center center', description: 'A tropical climbing houseplant with large, split leaves. It grows best in bright, indirect light.',
    gallery: ['photo-1501004318641-b39e6451bec6', 'photo-1485955903447-4fcbf3f13fd0', 'photo-1497250681960-ef046c08a56e'],
    info: [
      ['About this plant', 'Monstera deliciosa is a tropical climbing plant. In bright conditions, mature leaves develop natural splits and holes that give the plant its iconic look.'],
      ['Starting from seed', 'Fresh seeds are best. Sow soon after collecting in a warm, moist seed mix; seeds sold dried may not germinate. Many people grow monstera from cuttings instead.'],
      ['Light & water', 'Place in bright, indirect light. Water when the top few centimetres of soil feel dry, and let excess water drain away.'],
      ['Additional notes', 'A moss pole gives this climber support as it grows. Wipe leaves occasionally to keep them dust-free. Keep away from pets.']
    ]
  }
];

const translations = {
  en: {
    collectionTitle: 'Plant collection', wheelHub: 'SEED LIBRARY', siteSettings: 'Site settings', searchLabel: 'Search plants', searchPlaceholder: 'Search plants',
    filterLabel: 'Filter plants by type', allFilter: 'All', flowerFilter: 'Flowers', herbFilter: 'Herbs',
    houseplantFilter: 'Houseplants', wheelControls: 'Turn the plant wheel', wheelLabel: 'Interactive plant wheel',
    previousPlant: 'Previous plant', nextPlant: 'Next plant', wheelPosition: 'Plant {current} of {total}: {name}',
    emptyState: 'No plants found. Try another search.', backToTop: 'Back to top ↑', darkMode: 'Dark mode',
    lightMode: 'Light mode', switchLanguage: 'العربية', plantCountOne: 'plant', plantCountMany: 'plants',
    inCollection: 'in the collection', viewPlant: 'View', seed: 'SEED',
    allPlants: 'All plants', seedNote: 'plant profile', photo: 'Photo', previousPhoto: 'Previous photo',
    nextPhoto: 'Next photo', photoGallery: 'Plant photo gallery', aboutPlant: 'About the plant',
    qrTitle: 'Plant QR code', qrDescription: 'Scan to open this plant page.', openPage: 'Open this page',
    shareLink: 'Shareable page link', copyLink: 'Copy page link', copied: 'Link copied!',
    copyManually: 'Select and copy the link above.', qrCredit: 'QR code provided by QR Server.',
    morePlants: 'More plants', notFoundTitle: 'Plant not found', notFoundDescription: 'This plant page is not in the collection yet.',
    backToCollection: 'Back to the collection', categoryFlower: 'Flower', categoryHerb: 'Herb',
    categoryHouseplant: 'Houseplant', seasonSummer: 'Summer', seasonWarm: 'Warm season',
    seasonYearRound: 'Year-round', colorYellow: 'Golden yellow', colorGreen: 'Fresh green',
    colorViolet: 'Soft violet', colorDeepGreen: 'Deep green'
  },
  ar: {
    collectionTitle: 'مجموعة النباتات', wheelHub: 'مجموعة النباتات', siteSettings: 'إعدادات الموقع', searchLabel: 'ابحث عن نبات', searchPlaceholder: 'ابحث عن نبات',
    filterLabel: 'تصفية النباتات حسب النوع', allFilter: 'الكل', flowerFilter: 'أزهار', herbFilter: 'أعشاب',
    houseplantFilter: 'نباتات منزلية', wheelControls: 'تدوير عجلة النباتات', wheelLabel: 'عجلة تفاعلية للنباتات',
    previousPlant: 'النبات السابق', nextPlant: 'النبات التالي', wheelPosition: 'النبات {current} من {total}: {name}',
    emptyState: 'لم يتم العثور على نباتات. جرّب بحثًا آخر.', backToTop: 'العودة إلى الأعلى ↑', darkMode: 'الوضع الداكن',
    lightMode: 'الوضع الفاتح', switchLanguage: 'English', plantCountOne: 'نبات', plantCountMany: 'نباتات',
    inCollection: 'في المجموعة', viewPlant: 'عرض', seed: 'بذرة',
    allPlants: 'كل النباتات', seedNote: 'معلومات النبات', photo: 'صورة', previousPhoto: 'الصورة السابقة',
    nextPhoto: 'الصورة التالية', photoGallery: 'معرض صور النبات', aboutPlant: 'عن النبات',
    qrTitle: 'رمز QR للنبات', qrDescription: 'امسح الرمز لفتح صفحة النبات.', openPage: 'فتح الصفحة',
    shareLink: 'رابط الصفحة', copyLink: 'نسخ رابط الصفحة', copied: 'تم نسخ الرابط!',
    copyManually: 'حدّد الرابط أعلاه وانسخه.', qrCredit: 'رمز QR مقدم من QR Server.',
    morePlants: 'نباتات أخرى', notFoundTitle: 'النبات غير موجود', notFoundDescription: 'صفحة هذا النبات غير موجودة في المجموعة.',
    backToCollection: 'العودة إلى المجموعة', categoryFlower: 'زهرة', categoryHerb: 'عشب',
    categoryHouseplant: 'نبات منزلي', seasonSummer: 'الصيف', seasonWarm: 'الموسم الدافئ',
    seasonYearRound: 'طوال العام', colorYellow: 'أصفر ذهبي', colorGreen: 'أخضر نضر',
    colorViolet: 'بنفسجي فاتح', colorDeepGreen: 'أخضر داكن',
    plants: {
      sunflower: {
        name: 'عبّاد الشمس', description: 'نبات حولي طويل بأزهار صفراء زاهية وبذور صالحة للأكل.',
        info: [
          ['عن النبات', 'عبّاد الشمس نبات حولي موطنه الأصلي أمريكا الشمالية. يتكوّن رأس الزهرة من أزهار صغيرة كثيرة، وتتبع النباتات الفتية حركة الشمس.'],
          ['زراعة البذور', 'ازرع البذور في الخارج بعد انتهاء الصقيع، على عمق نحو ٢٫٥ سم. اترك مساحة كافية لكل نبتة واختر مكانًا مشمسًا محميًا من الرياح القوية.'],
          ['الضوء والماء', 'يفضل النبات الشمس المباشرة لمدة ٦ إلى ٨ ساعات يوميًا. اسقه بعمق في بداية نموه؛ فالنباتات الناضجة تتحمل الجفاف نسبيًا.'],
          ['ملاحظات', 'تجذب الأزهار النحل والطيور. جفف بعض رؤوس البذور الناضجة للزراعة في العام المقبل أو اتركها غذاءً للطيور.']
        ]
      },
      'sweet-basil': {
        name: 'الريحان الحلو', description: 'عشبة تستخدم في الطهي، ذات أوراق عطرية تستعمل طازجة أو مجففة.',
        info: [
          ['عن النبات', 'الريحان الحلو عشبة حولية محبة للدفء، تشتهر بأوراقها العطرية. يساعده الدفء والقطف المنتظم والضوء الساطع على النمو.'],
          ['زراعة البذور', 'ابدأ بزراعته داخل المنزل في مكان دافئ، وغطِّ البذور بطبقة خفيفة من التربة. انقله للخارج بعد اعتدال الليالي أو أبقه في أصيص مشمس.'],
          ['الضوء والماء', 'وفّر له ضوء الشمس لمدة ٦ ساعات أو أكثر، وحافظ على رطوبة التربة دون إغراقها. يساعد تصريف الماء الجيد على صحة الجذور.'],
          ['ملاحظات', 'اقطف أطراف الأغصان فوق زوج من الأوراق لتشجيع النمو الكثيف. أزل براعم الأزهار للحفاظ على نمو الأوراق.']
        ]
      },
      lavender: {
        name: 'الخُزامى', description: 'شجيرة معمرة عطرية ذات أزهار بنفسجية تجذب الملقحات.',
        info: [
          ['عن النبات', 'الخُزامى الإنجليزية نبات معمر خشبي، تشتهر أوراقه وأزهاره البنفسجية برائحتها. يفضل التربة الأقل رطوبة بعد استقراره.'],
          ['زراعة البذور', 'قد يتأخر إنبات بذور الخُزامى. ضعها على سطح تربة جيدة التصريف، وحافظ على رطوبتها الخفيفة؛ فقد يستغرق الإنبات بضعة أسابيع.'],
          ['الضوء والماء', 'اختر مكانًا مشمسًا وتربة جيدة التصريف. اسقِ النباتات الفتية حتى تستقر، ثم اترك التربة تجف بين مرات الري.'],
          ['ملاحظات', 'قلّم النبات قليلًا بعد الإزهار للحفاظ على شكله، وتجنب قصّ الأغصان الخشبية القديمة. تجذب الأزهار الملقحات.']
        ]
      },
      monstera: {
        name: 'مونستيرا', description: 'نبات منزلي استوائي متسلق بأوراق كبيرة مشققة. يفضل الضوء الساطع غير المباشر.',
        info: [
          ['عن النبات', 'مونستيرا دليسيوزا نبات متسلق استوائي. تظهر الشقوق والفتحات الطبيعية على أوراقه الناضجة عند نموه في ضوء ساطع.'],
          ['الزراعة من البذور', 'استخدم البذور الطازجة وازرعها سريعًا في تربة دافئة ورطبة؛ فقد لا تنبت البذور المجففة. يزرع كثيرون المونستيرا من العقل بدلًا من البذور.'],
          ['الضوء والماء', 'ضعه في ضوء ساطع غير مباشر. اسقه عندما تجف الطبقة العليا من التربة، واترك الماء الزائد يتصرف.'],
          ['ملاحظات', 'تساعده دعامة من ألياف جوز الهند على التسلق. امسح الغبار عن الأوراق، وأبعده عن الحيوانات الأليفة.']
        ]
      }
    }
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
const plantText = plant => language === 'ar' ? translations.ar.plants[plant.slug] : plant;

function applyPreferences() {
  const isArabic = language === 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.title = document.querySelector('[data-plant]')
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
let selectedFilter = 'all';
let wheelOffset = 0;
let visiblePlants = [];
function updateWheelRadius() {
  if (!grid) return;
  const widthRatio = window.matchMedia('(max-width: 600px)').matches ? 0.26 : 0.32;
  const radius = Math.min(grid.clientWidth * widthRatio, 245);
  grid.style.setProperty('--wheel-radius', visiblePlants.length < 2 ? '0px' : `${-radius}px`);
}

function renderPlants() {
  if (!grid) return;
  const search = document.querySelector('#plant-search');
  const count = document.querySelector('#collection-count');
  const empty = document.querySelector('#empty-state');
  const query = search.value.trim().toLocaleLowerCase(language);
  visiblePlants = plants.filter(plant => {
    const localized = plantText(plant);
    return (selectedFilter === 'all' || plant.category === selectedFilter) &&
      `${plant.name} ${localized.name} ${plant.latin} ${localized.categoryLabel || text(`category${plant.category[0].toUpperCase()}${plant.category.slice(1)}`)}`.toLocaleLowerCase(language).includes(query);
  });
  const formattedCount = language === 'ar' ? visiblePlants.length.toLocaleString('ar') : visiblePlants.length;
  const countNoun = language === 'ar'
    ? visiblePlants.length === 1 ? 'نبات' : text('plantCountMany')
    : visiblePlants.length === 1 ? text('plantCountOne') : text('plantCountMany');
  count.textContent = `${formattedCount} ${countNoun} ${text('inCollection')}`;
  empty.hidden = visiblePlants.length > 0;
  grid.classList.toggle('has-plants', visiblePlants.length > 0);
  document.querySelectorAll('.wheel-button').forEach(button => {
    button.disabled = visiblePlants.length < 2;
  });
  if (visiblePlants.length) wheelOffset %= visiblePlants.length;
  updateWheelRadius();
  grid.dataset.wheelLabel = text('wheelHub');
  const wheelPosition = document.querySelector('#wheel-position');
  if (wheelPosition && visiblePlants.length) {
    const currentPlant = plantText(visiblePlants[wheelOffset]);
    const current = language === 'ar' ? (wheelOffset + 1).toLocaleString('ar') : wheelOffset + 1;
    const total = language === 'ar' ? visiblePlants.length.toLocaleString('ar') : visiblePlants.length;
    wheelPosition.textContent = text('wheelPosition')
      .replace('{current}', current)
      .replace('{total}', total)
      .replace('{name}', currentPlant.name);
  } else if (wheelPosition) {
    wheelPosition.textContent = text('emptyState');
  }
  grid.innerHTML = visiblePlants.map((plant, index) => {
    const localized = plantText(plant);
    const season = language === 'ar' ? text(plant.season === 'Summer' ? 'seasonSummer' : plant.season === 'Year-round' ? 'seasonYearRound' : 'seasonWarm') : plant.season;
    const color = language === 'ar' ? text(({ 'Golden yellow': 'colorYellow', 'Fresh green': 'colorGreen', 'Soft violet': 'colorViolet', 'Deep green': 'colorDeepGreen' })[plant.color]) : plant.color;
    const category = language === 'ar' ? text(({ flower: 'categoryFlower', herb: 'categoryHerb', houseplant: 'categoryHouseplant' })[plant.category]) : plant.categoryLabel;
    const angle = visiblePlants.length
      ? index * (360 / visiblePlants.length) - wheelOffset * (360 / visiblePlants.length)
      : 0;
    return `
      <article class="plant-card" style="--wheel-angle:${angle}deg;--wheel-counter-angle:${-angle}deg">
        <a class="plant-card-link" href="plants/${plant.slug}/" aria-label="${text('viewPlant')} ${localized.name}">
        <span class="card-image-link">
          <img class="card-image" src="${photoUrl(plant.image)}" alt="${localized.name}" loading="lazy" style="object-position:${plant.imagePosition}">
          <span class="card-number">${text('seed')} 0${plants.indexOf(plant) + 1}</span>
        </span>
        <div class="card-content">
          <p class="card-category">${category}</p>
          <h2 class="card-title">${localized.name}</h2>
          <p class="card-latin">${plant.latin}</p>
          <div class="card-bottom"><span>${season} · ${color}</span><span class="card-link" aria-hidden="true">↗</span></div>
        </div>
        </a>
      </article>`;
  }).join('');
}
function updateWheelPositions() {
  if (!grid || !visiblePlants.length) return;
  const step = 360 / visiblePlants.length;
  grid.querySelectorAll('.plant-card').forEach((card, index) => {
    const angle = index * step - wheelOffset * step;
    card.style.setProperty('--wheel-angle', `${angle}deg`);
    card.style.setProperty('--wheel-counter-angle', `${-angle}deg`);
  });
  const currentPlant = plantText(visiblePlants[wheelOffset]);
  const current = language === 'ar' ? (wheelOffset + 1).toLocaleString('ar') : wheelOffset + 1;
  const total = language === 'ar' ? visiblePlants.length.toLocaleString('ar') : visiblePlants.length;
  document.querySelector('#wheel-position').textContent = text('wheelPosition')
    .replace('{current}', current)
    .replace('{total}', total)
    .replace('{name}', currentPlant.name);
}
if (grid) {
  window.addEventListener('resize', updateWheelRadius);
  document.querySelector('#plant-search').addEventListener('input', renderPlants);
  document.querySelectorAll('.filter-chip').forEach(button => button.addEventListener('click', () => {
    selectedFilter = button.dataset.filter;
    document.querySelectorAll('.filter-chip').forEach(chip => {
      const active = chip === button;
      chip.classList.toggle('is-active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    renderPlants();
  }));
  function rotateWheel(direction) {
    if (!visiblePlants.length) return;
    wheelOffset = (wheelOffset + direction + visiblePlants.length) % visiblePlants.length;
    updateWheelPositions();
  }
  document.querySelector('#wheel-prev').addEventListener('click', () => rotateWheel(-1));
  document.querySelector('#wheel-next').addEventListener('click', () => rotateWheel(1));
  grid.addEventListener('keydown', event => {
    if (event.target.closest('a')) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      rotateWheel(language === 'ar' ? 1 : -1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      rotateWheel(language === 'ar' ? -1 : 1);
    }
  });
  let dragStart = null;
  grid.addEventListener('pointerdown', event => {
    if (event.target.closest('a, button')) return;
    dragStart = event.clientX;
  });
  window.addEventListener('pointerup', event => {
    if (dragStart === null) return;
    const distance = event.clientX - dragStart;
    if (Math.abs(distance) > 40) rotateWheel(distance < 0 ? 1 : -1);
    dragStart = null;
  });
  grid.addEventListener('pointercancel', () => {
    dragStart = null;
  });
}

const detail = document.querySelector('[data-plant]');
function renderPlantDetail() {
  if (!detail) return;
  const plant = plants.find(item => item.slug === detail.dataset.plant);
  if (!plant) {
    document.title = `${text('notFoundTitle')} — Seed & Soil`;
    detail.innerHTML = `<div class="not-found"><h1>${text('notFoundTitle')}</h1><p>${text('notFoundDescription')}</p><a class="button button-dark" href="../../">${text('backToCollection')}</a></div>`;
    return;
  }

  const localized = plantText(plant);
  const info = language === 'ar' ? localized.info : plant.info;
  const category = language === 'ar' ? text(({ flower: 'categoryFlower', herb: 'categoryHerb', houseplant: 'categoryHouseplant' })[plant.category]) : plant.categoryLabel;
  const season = language === 'ar' ? text(plant.season === 'Summer' ? 'seasonSummer' : plant.season === 'Year-round' ? 'seasonYearRound' : 'seasonWarm') : plant.season;
  const color = language === 'ar' ? text(({ 'Golden yellow': 'colorYellow', 'Fresh green': 'colorGreen', 'Soft violet': 'colorViolet', 'Deep green': 'colorDeepGreen' })[plant.color]) : plant.color;
  document.title = `${localized.name} — Seed & Soil`;
  const url = window.location.href;
  const firstPhotoNumber = language === 'ar' ? '١' : '1';
  detail.innerHTML = `
    <p class="breadcrumb"><a href="../../">← ${text('allPlants')}</a> <span aria-hidden="true">/</span> ${localized.name}</p>
    <section class="detail-hero" aria-labelledby="plant-title">
      <div class="detail-copy">
        <p class="eyebrow">${category} · ${text('seedNote')}</p>
        <h1 class="detail-title" id="plant-title">${localized.name}</h1>
        <p class="detail-latin">${plant.latin}</p>
        <p class="detail-description">${localized.description}</p>
        <div class="detail-tags"><span class="detail-tag">${season}</span><span class="detail-tag">${color}</span></div>
      </div>
      <div>
        <figure class="detail-visual"><img id="gallery-image" src="${photoUrl(plant.gallery[0], 1100)}" alt="${localized.name}، ${text('photo')} ${firstPhotoNumber} ${language === 'ar' ? 'من' : 'of'} ${plant.gallery.length}"><figcaption class="gallery-caption">${localized.name} · ${text('photo')} ${firstPhotoNumber}</figcaption></figure>
        <div class="gallery-controls" aria-label="${text('photoGallery')}">
          <button type="button" class="gallery-button" id="gallery-prev" aria-label="${text('previousPhoto')}">←</button>
          <span class="gallery-count" id="gallery-count" aria-live="polite">${language === 'ar' ? '١' : '1'} / ${language === 'ar' ? plant.gallery.length.toLocaleString('ar') : plant.gallery.length}</span>
          <button type="button" class="gallery-button" id="gallery-next" aria-label="${text('nextPhoto')}">→</button>
        </div>
      </div>
    </section>
    <section class="detail-content" aria-labelledby="info-title">
      <div><h2 id="info-title">${text('aboutPlant')}</h2>
        <div class="info-list">${info.map((item, index) => `<details class="info-group"${index === 0 ? ' open' : ''}><summary>${item[0]}</summary><div class="info-body"><p>${item[1]}</p></div></details>`).join('')}</div>
      </div>
      <aside class="qr-card" aria-labelledby="qr-title">
        <h3 id="qr-title">${text('qrTitle')}</h3><p>${text('qrDescription')}</p>
        <img class="qr-image" src="https://api.qrserver.com/v1/create-qr-code/?size=320x320&format=png&data=${encodeURIComponent(url)}" alt="${text('qrTitle')} — ${localized.name}">
        <a class="qr-open" href="${url}">${text('openPage')} ↗</a>
        <label class="sr-only" for="page-url">${text('shareLink')}</label><input id="page-url" class="url-field" readonly value="${url}">
        <button class="copy-button" type="button" id="copy-link">${text('copyLink')}</button><p class="copy-status" id="copy-status" aria-live="polite"></p>
        <p class="qr-credit">${text('qrCredit')}</p>
      </aside>
    </section>
    <section class="more-plants"><h2>${text('morePlants')}</h2><a class="more-link" href="../../">← ${text('backToCollection')}</a></section>`;

  let photoIndex = 0;
  const galleryImage = detail.querySelector('#gallery-image');
  const galleryCount = detail.querySelector('#gallery-count');
  function showPhoto(nextIndex) {
    photoIndex = (nextIndex + plant.gallery.length) % plant.gallery.length;
    const digits = language === 'ar' ? (photoIndex + 1).toLocaleString('ar') : photoIndex + 1;
    galleryImage.src = photoUrl(plant.gallery[photoIndex], 1100);
    galleryImage.alt = `${localized.name}، ${text('photo')} ${digits} ${language === 'ar' ? 'من' : 'of'} ${plant.gallery.length}`;
    detail.querySelector('.gallery-caption').textContent = `${localized.name} · ${text('photo')} ${digits}`;
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
}

renderPlants();
renderPlantDetail();
