// Edit this list to add your plants. Each plant needs a matching folder in plants/.
const plants = [
  {
    slug: 'sunflower', name: 'Sunflower', latin: 'Helianthus annuus', category: 'flower', categoryLabel: 'Flower', color: 'Golden yellow', season: 'Summer',
    image: 'photo-1597848212624-e6e3b0f1f0fa', imagePosition: 'center center', description: 'A cheerful, sun-chasing bloom that can grow taller than you. Sunflowers bring a little summer wherever they land.',
    gallery: ['photo-1597848212624-e6e3b0f1f0fa', 'photo-1470252649378-9c29740c9fa8', 'photo-1500382017468-9049fed747ef'],
    info: [
      ['About this plant', 'Sunflowers are annuals native to North America. Their familiar flower head is made up of many tiny flowers, and young plants turn to follow the sun.'],
      ['Sowing your seeds', 'Sow outdoors after the last frost, about 2.5 cm (1 in) deep. Give each plant room to grow, and choose a sunny spot protected from strong wind.'],
      ['Light & water', 'Full sun is best: aim for at least 6–8 hours a day. Water deeply while the plant is young; established plants are fairly drought tolerant.'],
      ['Little notes', 'Flowers attract bees and birds. Save a few mature seed heads to dry for next year or leave them out as a snack for wildlife.']
    ]
  },
  {
    slug: 'sweet-basil', name: 'Sweet Basil', latin: 'Ocimum basilicum', category: 'herb', categoryLabel: 'Herb', color: 'Fresh green', season: 'Warm months',
    image: 'photo-1618164436241-4473940d1f5c', imagePosition: 'center center', description: 'A fragrant kitchen favorite with soft green leaves and a sunny disposition. Pinch a little for pasta, pesto, or a windowsill.',
    gallery: ['photo-1618164436241-4473940d1f5c', 'photo-1618375569909-3c8616cf7733', 'photo-1466692476868-aef1dfb1e735'],
    info: [
      ['About this plant', 'Sweet basil is a tender, leafy annual herb loved for its aromatic leaves. Warmth, regular picking, and a bright windowsill help it flourish.'],
      ['Sowing your seeds', 'Start indoors in a warm place, barely covering the seeds. Move seedlings outside only after nights are reliably warm, or keep them in a sunny pot.'],
      ['Light & water', 'Give basil 6 or more hours of sunlight and keep the soil evenly moist, not soggy. Good drainage helps keep roots healthy.'],
      ['Little notes', 'Pinch off the tips above a pair of leaves to encourage bushier growth. Remove flower buds to keep the leaves coming.']
    ]
  },
  {
    slug: 'lavender', name: 'Lavender', latin: 'Lavandula angustifolia', category: 'flower', categoryLabel: 'Flower', color: 'Soft violet', season: 'Summer',
    image: 'photo-1470252649378-9c29740c9fa8', imagePosition: 'center center', description: 'A calming, fragrant favorite for sunny spots. Its purple flower spikes are loved by pollinators and make a lovely dried bouquet.',
    gallery: ['photo-1470252649378-9c29740c9fa8', 'photo-1499002238440-d264edd596ec', 'photo-1497250681960-ef046c08a56e'],
    info: [
      ['About this plant', 'English lavender is a woody perennial known for its scented foliage and purple flower spikes. Once established, it prefers life on the drier side.'],
      ['Sowing your seeds', 'Lavender seeds can be slow to sprout. Sow on the surface of a free-draining seed mix, keep lightly moist, and be patient; germination may take a few weeks.'],
      ['Light & water', 'Choose full sun and well-drained soil. Water young plants as they establish, then let the soil dry between waterings.'],
      ['Little notes', 'Trim lightly after flowering to keep a neat shape, but avoid cutting into old woody stems. The flowers are wonderful for pollinators.']
    ]
  },
  {
    slug: 'monstera', name: 'Monstera', latin: 'Monstera deliciosa', category: 'houseplant', categoryLabel: 'Houseplant', color: 'Deep green', season: 'Year-round',
    image: 'photo-1501004318641-b39e6451bec6', imagePosition: 'center center', description: 'A bold, easygoing tropical houseplant with big, characterful leaves. Give it a bright corner and something to climb.',
    gallery: ['photo-1501004318641-b39e6451bec6', 'photo-1485955903447-4fcbf3f13fd0', 'photo-1497250681960-ef046c08a56e'],
    info: [
      ['About this plant', 'Monstera deliciosa is a tropical climbing plant. In bright conditions, mature leaves develop natural splits and holes that give the plant its iconic look.'],
      ['Starting from seed', 'Fresh seeds are best. Sow soon after collecting in a warm, moist seed mix; seeds sold dried may not germinate. Many people grow monstera from cuttings instead.'],
      ['Light & water', 'Place in bright, indirect light. Water when the top few centimetres of soil feel dry, and let excess water drain away.'],
      ['Little notes', 'A moss pole gives this climber support as it grows. Wipe leaves occasionally to keep them dust-free. Keep away from curious pets.']
    ]
  }
];

const photoUrl = (id, width = 780) => id.startsWith('http')
  ? id
  : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const grid = document.querySelector('#plant-grid');
if (grid) {
  const search = document.querySelector('#plant-search');
  const count = document.querySelector('#collection-count');
  const empty = document.querySelector('#empty-state');
  let selectedFilter = 'all';
  function renderPlants() {
    const query = search.value.trim().toLowerCase();
    const visiblePlants = plants.filter(plant =>
      (selectedFilter === 'all' || plant.category === selectedFilter) &&
      `${plant.name} ${plant.latin} ${plant.categoryLabel}`.toLowerCase().includes(query)
    );
    count.textContent = `${visiblePlants.length} ${visiblePlants.length === 1 ? 'plant' : 'plants'} in the collection`;
    empty.hidden = visiblePlants.length > 0;
    grid.innerHTML = visiblePlants.map(plant => `
      <article class="plant-card">
        <a class="card-image-link" href="plants/${plant.slug}/" aria-label="View ${plant.name}">
          <img class="card-image" src="${photoUrl(plant.image)}" alt="${plant.name} plant" loading="lazy" style="object-position:${plant.imagePosition}">
          <span class="card-number">SEED 0${plants.indexOf(plant) + 1}</span>
        </a>
        <div class="card-content">
          <p class="card-category">${plant.categoryLabel}</p>
          <h3 class="card-title"><a href="plants/${plant.slug}/">${plant.name}</a></h3>
          <p class="card-latin">${plant.latin}</p>
          <div class="card-bottom"><span>${plant.season} · ${plant.color}</span><a class="card-link" href="plants/${plant.slug}/" aria-label="Learn about ${plant.name}">↗</a></div>
        </div>
      </article>`).join('');
  }
  search.addEventListener('input', renderPlants);
  document.querySelectorAll('.filter-chip').forEach(button => button.addEventListener('click', () => {
    selectedFilter = button.dataset.filter;
    document.querySelectorAll('.filter-chip').forEach(chip => {
      const active = chip === button;
      chip.classList.toggle('is-active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    renderPlants();
  }));
  renderPlants();
}

const detail = document.querySelector('[data-plant]');
if (detail) {
  const plant = plants.find(item => item.slug === detail.dataset.plant);
  if (!plant) {
    document.title = 'Plant not found — Seed & Soil';
    detail.innerHTML = '<div class="not-found"><h1>Oops, no seed here.</h1><p>This plant page is not in the collection yet.</p><a class="button button-dark" href="../../">Back to the collection</a></div>';
  } else {
    document.title = `${plant.name} — Seed & Soil`;
    const url = window.location.href;
    detail.innerHTML = `
      <p class="breadcrumb"><a href="../../">← All plants</a> <span aria-hidden="true">/</span> ${plant.name}</p>
      <section class="detail-hero" aria-labelledby="plant-title">
        <div class="detail-copy">
          <p class="eyebrow"><span class="eyebrow-dot"></span> ${plant.categoryLabel} seed note</p>
          <h1 class="detail-title" id="plant-title">${plant.name}</h1>
          <p class="detail-latin">${plant.latin}</p>
          <p class="detail-description">${plant.description}</p>
          <div class="detail-tags"><span class="detail-tag">${plant.season}</span><span class="detail-tag">${plant.color}</span></div>
        </div>
        <div>
          <figure class="detail-visual"><img id="gallery-image" src="${photoUrl(plant.gallery[0], 1100)}" alt="${plant.name}, photo 1 of ${plant.gallery.length}"><figcaption class="gallery-caption">${plant.name} · photo 1</figcaption></figure>
          <div class="gallery-controls" aria-label="Plant photo gallery">
            <button type="button" class="gallery-button" id="gallery-prev" aria-label="Previous photo">←</button>
            <span class="gallery-count" id="gallery-count" aria-live="polite">1 / ${plant.gallery.length}</span>
            <button type="button" class="gallery-button" id="gallery-next" aria-label="Next photo">→</button>
          </div>
        </div>
      </section>
      <section class="detail-content" aria-labelledby="info-title">
        <div><h2 id="info-title">A little about ${plant.name.toLowerCase()}</h2>
          <div class="info-list">${plant.info.map((item, index) => `<details class="info-group"${index === 0 ? ' open' : ''}><summary>${item[0]}</summary><div class="info-body"><p>${item[1]}</p></div></details>`).join('')}</div>
        </div>
        <aside class="qr-card" aria-labelledby="qr-title">
          <h3 id="qr-title">Take me home</h3><p>Scan this code to visit the ${plant.name} seed note.</p>
          <img class="qr-image" src="https://api.qrserver.com/v1/create-qr-code/?size=320x320&format=png&data=${encodeURIComponent(url)}" alt="QR code linking to this ${plant.name} page">
          <a class="qr-open" href="${url}">Open this page ↗</a>
          <label class="sr-only" for="page-url">Shareable page link</label><input id="page-url" class="url-field" readonly value="${url}">
          <button class="copy-button" type="button" id="copy-link">Copy page link</button><p class="copy-status" id="copy-status" aria-live="polite"></p>
          <p class="qr-credit">QR image provided by QR Server.</p>
        </aside>
      </section>
      <section class="more-plants"><h2>More things growing</h2><a class="more-link" href="../../">← Back to the collection</a></section>`;

    let photoIndex = 0;
    const galleryImage = detail.querySelector('#gallery-image');
    const galleryCount = detail.querySelector('#gallery-count');
    function showPhoto(nextIndex) {
      photoIndex = (nextIndex + plant.gallery.length) % plant.gallery.length;
      galleryImage.src = photoUrl(plant.gallery[photoIndex], 1100);
      galleryImage.alt = `${plant.name}, photo ${photoIndex + 1} of ${plant.gallery.length}`;
      detail.querySelector('.gallery-caption').textContent = `${plant.name} · photo ${photoIndex + 1}`;
      galleryCount.textContent = `${photoIndex + 1} / ${plant.gallery.length}`;
    }
    detail.querySelector('#gallery-prev').addEventListener('click', () => showPhoto(photoIndex - 1));
    detail.querySelector('#gallery-next').addEventListener('click', () => showPhoto(photoIndex + 1));
    detail.querySelector('#copy-link').addEventListener('click', async () => {
      const status = detail.querySelector('#copy-status');
      try {
        await navigator.clipboard.writeText(url);
        status.textContent = 'Link copied!';
      } catch {
        detail.querySelector('#page-url').select();
        status.textContent = 'Select and copy the link above.';
      }
    });
  }
}
