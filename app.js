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

// The heading keys match translations below; the field names match each plant entry above.
const informationGroups = [
  ['commonNames', 'commonNamesHeading'],
  ['scientificName', 'scientificNameHeading'],
  ['family', 'familyHeading'],
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

function plantCardDetails(plant) {
  const localized = plantText(plant);
  return { localized };
}

function renderPlants() {
  if (!grid || !swipeStack) return;
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
    return `${plant.name} ${localized.name} ${plant.commonNames}`.toLocaleLowerCase(language).includes(query);
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
  swipeSection.hidden = visiblePlants.length === 0;
  grid.hidden = visiblePlants.length === 0;
  document.querySelectorAll('.swipe-button').forEach(button => {
    button.disabled = visiblePlants.length < 2;
  });
  renderDeck();
  grid.innerHTML = visiblePlants.map(plant => {
    const { localized } = plantCardDetails(plant);
    const link = `plants/index.html?plant=${encodeURIComponent(plant.slug)}`;
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
  const position = document.querySelector('#swipe-position');
  if (!visiblePlants.length) {
    swipeStack.innerHTML = '';
    position.textContent = text('emptyState');
    return;
  }
  const total = visiblePlants.length;
  const current = language === 'ar' ? (deckIndex + 1).toLocaleString('ar') : deckIndex + 1;
  const formattedTotal = language === 'ar' ? total.toLocaleString('ar') : total;
  const active = plantCardDetails(visiblePlants[deckIndex]);
  position.textContent = text('swipePosition')
    .replace('{current}', current)
    .replace('{total}', formattedTotal)
    .replace('{name}', active.localized.name);
  // Render the current plant plus a few neighbors to make the visible fan.
  const cards = [];
  for (let depth = Math.min(total, 4) - 1; depth >= 0; depth--) {
    const index = (deckIndex + depth) % total;
    const plant = visiblePlants[index];
    const { localized } = plantCardDetails(plant);
    const link = `plants/index.html?plant=${encodeURIComponent(plant.slug)}`;
    const isActive = depth === 0;
    const content = `
      <img class="swipe-card-image" src="${photoUrl(plant.image, 900)}" alt="${text('samplePhotos')}" draggable="false">
      <span class="swipe-card-tint"></span>
      <span class="swipe-card-content">
        <span class="swipe-card-category">${text('seed')} ${String(plants.indexOf(plant) + 1).padStart(2, '0')}</span>
        <span class="swipe-card-title">${localized.name}</span>
        <span class="swipe-card-meta">${text('seedNote')}</span>
      </span>`;
    cards.push(isActive
      ? `<a class="swipe-card is-active" href="${link}" aria-label="${text('viewPlant')} ${localized.name}" data-swipe-card>${content}</a>`
      : `<div class="swipe-card is-underlay" aria-hidden="true" style="--stack-depth:${depth};--stack-x:${depth * (depth % 2 ? 10 : -10)}px;--stack-angle:${depth * (depth % 2 ? 3 : -3)}deg">${content}</div>`);
  }
  swipeStack.innerHTML = cards.join('');
}

let deckAnimationTimer;
let deckAdvancing = false;
let swipeQueue = [];
let pointerStart = null;

function finishDeckSwipe() {
  const direction = swipeQueue.shift();
  const card = swipeStack.querySelector('.is-active');
  if (!card || direction === undefined) return;
  deckAdvancing = true;
  card.classList.remove('is-dragging');
  card.classList.add(direction > 0 ? 'is-swiping-left' : 'is-swiping-right');
  window.clearTimeout(deckAnimationTimer);
  const animationDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 270;
  deckAnimationTimer = window.setTimeout(() => {
    deckIndex = (deckIndex + direction + visiblePlants.length) % visiblePlants.length;
    deckAdvancing = false;
    renderDeck();
    if (pointerStart) {
      const remainder = pointerStart.latestDx - pointerStart.processedDistance;
      const nextCard = swipeStack.querySelector('.is-active');
      if (nextCard && remainder) {
        nextCard.classList.add('is-dragging');
        nextCard.style.setProperty('--swipe-x', `${remainder}px`);
        nextCard.style.setProperty('--swipe-rotation', `${remainder * 0.055}deg`);
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
  card.style.setProperty('--swipe-rotation', `${remainder * 0.055}deg`);
}

/*
 * Swipe a stack continuously: pointer capture stays on the stage while each
 * card animates away, so one long drag can advance through several plants.
 */
function handlePointerDown(event) {
  const card = event.target.closest('[data-swipe-card]');
  if (!card || event.button > 0 || !event.isPrimary) return;
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
  // The slug in each card link selects one plant from the shared detail-page template.
  const slug = new URLSearchParams(window.location.search).get('plant');
  const plant = plants.find(item => item.slug === slug);
  if (!plant) {
    document.title = `${text('notFoundTitle')} — Seed & Soil`;
    detail.innerHTML = `<div class="not-found"><h1>${text('notFoundTitle')}</h1><p>${text('notFoundDescription')}</p><a class="button button-dark" href="../">${text('backToCollection')}</a></div>`;
    return;
  }

  const localized = plantText(plant);
  document.title = `${localized.name} — Seed & Soil`;
  const shareUrl = new URL(window.location.href);
  shareUrl.searchParams.set('plant', plant.slug);
  const url = shareUrl.href;
  const firstPhotoNumber = language === 'ar' ? '١' : '1';
  const groups = informationGroups.map(([field, headingKey]) => {
    const value = field === 'commonNames' ? localized.name : plant[field];
    const content = value || text('missingInfo');
    const otherNames = field === 'commonNames'
      ? `<small class="info-other-names">${plant.commonNames || text('commonNamesEmpty')}</small>`
      : '';
    return `<details class="info-group">
      <summary><span class="info-heading">${text(headingKey)}${otherNames}</span><span class="info-symbol" aria-hidden="true"></span></summary>
      <div class="info-panel"><div class="info-body"><p>${content}</p></div></div>
    </details>`;
  }).join('');
  detail.innerHTML = `
    <p class="breadcrumb"><a href="../">← ${text('allPlants')}</a> <span aria-hidden="true">/</span> ${localized.name}</p>
    <section class="detail-hero" aria-labelledby="plant-title">
      <div class="detail-copy">
        <p class="eyebrow">${text('seedNote')}</p>
        <h1 class="detail-title" id="plant-title">${localized.name}</h1>
        <p class="detail-description">${text('missingInfo')}</p>
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
    let opening = false;
    let animationId = 0;
    summary.addEventListener('click', event => {
      event.preventDefault();
      opening = !opening;
      animationId += 1;
      const currentAnimationId = animationId;
      const startHeight = panel.getBoundingClientRect().height;
      if (panel.getAnimations) panel.getAnimations().forEach(animation => animation.cancel());
      if (opening) group.open = true;
      panel.style.overflow = 'hidden';
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        group.open = opening;
        panel.style.height = '';
        panel.style.overflow = '';
        return;
      }
      const endHeight = opening ? panel.scrollHeight : 0;
      const animation = panel.animate(
        [{ height: `${startHeight}px`, opacity: opening ? 0 : 1 }, { height: `${endHeight}px`, opacity: opening ? 1 : 0 }],
        { duration: 260, easing: 'ease-in-out' }
      );
      animation.onfinish = () => {
        if (animationId !== currentAnimationId) return;
        group.open = opening;
        panel.style.height = '';
        panel.style.overflow = '';
      };
    });
  });
}

renderPlants();
renderPlantDetail();
