/**
 * Bollo.work Rapid Cloner & Scaffolder
 * Generates an instant, pixel-accurate, self-contained frontend application
 * mimicking all features and UI of bollo.work in under 60 seconds.
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Bollo.work 30-Minute Rapid Clone Scaffolder...');

const dbPath = path.join(__dirname, 'seed_bollo_db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const outputDir = path.join(process.cwd(), 'bollo-app');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate self-contained high-fidelity interactive SPA
const appHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bollo | Trusted Professionals for Every Task in Cameroon</title>
  <meta name="description" content="Bollo connects you with reliable service providers across Cameroon. Post a task or find the right expert in minutes." />
  
  <!-- Fonts: Plus Jakarta Sans & DM Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            bollo: {
              50: '#f0fdfa',
              100: '#ccfbf1',
              500: '#14b8a6',
              600: '#0d7377',
              700: '#0a5a5d',
              800: '#115e59',
              accent: '#14ffec',
              dark: '#0f172a'
            }
          },
          fontFamily: {
            display: ['"Plus Jakarta Sans"', 'sans-serif'],
            sans: ['"DM Sans"', 'sans-serif']
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      vertical-align: middle;
    }
  </style>
</head>
<body class="bg-[#f8fafc] text-slate-800 font-sans antialiased min-h-screen flex flex-col">

  <!-- Top Announcement -->
  <div class="bg-bollo-600 text-white text-xs py-2 px-4 text-center font-medium flex justify-between items-center max-w-7xl mx-auto w-full">
    <span>🇨🇲 Connect with 500+ Verified Service Pros across Douala, Yaoundé &amp; Buea</span>
    <div class="flex items-center gap-4">
      <a href="https://wa.me/237670000000" target="_blank" class="hover:underline flex items-center gap-1 font-semibold">
        <span class="material-symbols-outlined text-sm">support_agent</span> WhatsApp Support
      </a>
    </div>
  </div>

  <!-- Header Navigation -->
  <header class="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div class="flex items-center gap-8">
        <a href="#" class="flex items-center gap-2 text-bollo-600">
          <span class="material-symbols-outlined text-3xl font-extrabold text-bollo-600">handyman</span>
          <span class="font-display font-black text-2xl tracking-tight text-slate-900">bollo<span class="text-bollo-600">.work</span></span>
        </a>
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#services" class="hover:text-bollo-600 transition">Browse Services</a>
          <a href="#categories" class="hover:text-bollo-600 transition">Categories</a>
          <a href="#how-it-works" class="hover:text-bollo-600 transition">How It Works</a>
        </nav>
      </div>

      <div class="flex items-center gap-3">
        <button onclick="openPostTaskModal()" class="hidden sm:inline-flex items-center gap-2 border border-bollo-600 text-bollo-600 px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-bollo-50 transition">
          <span class="material-symbols-outlined text-sm">add_circle</span> Post a Task
        </button>
        <button onclick="openBookingModal()" class="bg-bollo-600 hover:bg-bollo-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-sm transition">
          Book a Pro
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative bg-gradient-to-b from-bollo-50/60 to-white py-16 sm:py-24 border-b border-slate-100">
    <div class="max-w-5xl mx-auto px-4 text-center">
      <div class="inline-flex items-center gap-2 bg-bollo-100 text-bollo-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6">
        <span class="w-2 h-2 rounded-full bg-bollo-600 animate-pulse"></span>
        Over 500+ Verified Technicians in Cameroon
      </div>
      <h1 class="font-display font-extrabold text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
        Trusted Professionals for <br class="hidden sm:inline" />
        <span class="text-bollo-600">Every Task</span> in Cameroon
      </h1>
      <p class="mt-5 text-lg text-slate-600 max-w-2xl mx-auto font-normal">
        From emergency AC repair in Bonapriso to home deep cleaning in Bastos. Hire rated, insured, and verified experts in minutes.
      </p>

      <!-- Search Bar Pill (Exactly as Bollo.work) -->
      <div class="mt-10 bg-white p-3 rounded-2xl sm:rounded-full shadow-lg border border-slate-200 flex flex-col sm:flex-row items-center gap-3 max-w-4xl mx-auto">
        <div class="flex items-center gap-3 flex-1 w-full px-4 py-2">
          <span class="material-symbols-outlined text-slate-400">search</span>
          <input type="text" id="searchInput" oninput="filterServices()" placeholder="Search a service, provider or task..." class="w-full bg-transparent text-sm focus:outline-none text-slate-800" />
        </div>
        <div class="h-8 w-px bg-slate-200 hidden sm:block"></div>
        <div class="flex items-center gap-3 flex-1 w-full px-4 py-2">
          <span class="material-symbols-outlined text-slate-400">location_on</span>
          <select id="townSelect" onchange="filterServices()" class="w-full bg-transparent text-sm focus:outline-none text-slate-800 cursor-pointer">
            <option value="all">Anywhere in Cameroon</option>
            <option value="douala">Douala (Bonapriso, Akwa, Makepe)</option>
            <option value="yaounde">Yaoundé (Bastos, Mvan, Mendong)</option>
            <option value="buea">Buea (Molyko, Clerks Qtrs)</option>
            <option value="limbe">Limbe (Down Beach, New Town)</option>
            <option value="bamenda">Bamenda</option>
          </select>
        </div>
        <button onclick="filterServices()" class="w-full sm:w-auto bg-bollo-600 hover:bg-bollo-700 text-white font-semibold text-sm px-7 py-3.5 rounded-xl sm:rounded-full transition flex items-center justify-center gap-2">
          <span>Search</span>
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>

      <!-- Quick Category Pills -->
      <div class="mt-8 flex flex-wrap justify-center gap-2" id="quickCategories"></div>
    </div>
  </section>

  <!-- Categories Section -->
  <section id="categories" class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div class="flex justify-between items-end mb-8">
      <div>
        <h2 class="font-display font-bold text-2xl text-slate-900">Popular Categories</h2>
        <p class="text-sm text-slate-500 mt-1">Explore verified services requested every day across Cameroon</p>
      </div>
      <button onclick="resetFilters()" class="text-sm font-semibold text-bollo-600 hover:underline">View All</button>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" id="categoriesGrid"></div>
  </section>

  <!-- Marketplace Services Catalog -->
  <section id="services" class="py-12 bg-slate-50 border-t border-slate-200 flex-1">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 class="font-display font-bold text-2xl text-slate-900">Featured Service Listings</h2>
          <p class="text-sm text-slate-500 mt-1" id="resultsCount">Showing verified providers</p>
        </div>
        <div class="flex items-center gap-3">
          <select id="priceFilter" onchange="filterServices()" class="bg-white border border-slate-200 text-xs font-medium px-3 py-2 rounded-lg text-slate-700">
            <option value="any">Any Price</option>
            <option value="15000">Under 15,000 XAF</option>
            <option value="25000">Under 25,000 XAF</option>
            <option value="50000">Under 50,000 XAF</option>
          </select>
          <select id="ratingFilter" onchange="filterServices()" class="bg-white border border-slate-200 text-xs font-medium px-3 py-2 rounded-lg text-slate-700">
            <option value="0">Any Rating</option>
            <option value="4.5">★ 4.5 &amp; Up</option>
            <option value="4.8">★ 4.8 &amp; Up</option>
          </select>
        </div>
      </div>

      <!-- Service Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="servicesGrid"></div>
    </div>
  </section>

  <!-- Mobile App Banner (Bollo Native App) -->
  <section class="bg-bollo-800 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <span class="text-bollo-accent font-semibold text-xs uppercase tracking-wider">Fast &amp; Reliable on Mobile</span>
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl mt-2">Get the Bollo App</h2>
        <p class="text-slate-300 mt-2 max-w-xl text-sm">Post tasks on the go, chat directly with technicians in Cameroon, track arrivals, and pay securely via Mobile Money.</p>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <a href="https://play.google.com" target="_blank" class="bg-slate-900 hover:bg-black text-white px-5 py-3 rounded-xl flex items-center gap-3 border border-slate-700 transition">
          <span class="material-symbols-outlined text-2xl">android</span>
          <div class="text-left">
            <div class="text-[10px] uppercase text-slate-400">Get it on</div>
            <div class="text-sm font-bold leading-tight">Google Play</div>
          </div>
        </a>
        <a href="https://apple.com" target="_blank" class="bg-slate-900 hover:bg-black text-white px-5 py-3 rounded-xl flex items-center gap-3 border border-slate-700 transition">
          <span class="material-symbols-outlined text-2xl">phone_iphone</span>
          <div class="text-left">
            <div class="text-[10px] uppercase text-slate-400">Download on</div>
            <div class="text-sm font-bold leading-tight">App Store</div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-slate-900 text-slate-400 py-12 text-sm border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div class="flex items-center gap-2 text-white mb-4">
          <span class="material-symbols-outlined text-2xl text-bollo-500">handyman</span>
          <span class="font-display font-bold text-xl text-white">bollo.work</span>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed">
          The verified marketplace connecting Cameroon with reliable everyday service professionals.
        </p>
      </div>
      <div>
        <h4 class="text-white font-semibold text-xs uppercase tracking-wider mb-3">Popular Towns</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="#" onclick="setTown('douala'); return false;" class="hover:text-white">Services in Douala</a></li>
          <li><a href="#" onclick="setTown('yaounde'); return false;" class="hover:text-white">Services in Yaoundé</a></li>
          <li><a href="#" onclick="setTown('buea'); return false;" class="hover:text-white">Services in Buea</a></li>
          <li><a href="#" onclick="setTown('limbe'); return false;" class="hover:text-white">Services in Limbe</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold text-xs uppercase tracking-wider mb-3">Company</h4>
        <ul class="space-y-2 text-xs">
          <li><a href="#" class="hover:text-white">About Bollo</a></li>
          <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-white">Terms of Service</a></li>
          <li><a href="#" class="hover:text-white">Support &amp; Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold text-xs uppercase tracking-wider mb-3">Contact Support</h4>
        <p class="text-xs text-slate-400">Douala &amp; Yaoundé, Cameroon</p>
        <p class="text-xs text-bollo-accent mt-2 font-medium">+237 670 000 000</p>
        <p class="text-xs text-slate-400">contact@bollo.work</p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
      &copy; 2026 Bollo.work. All rights reserved. Built for Cameroon.
    </div>
  </footer>

  <!-- Booking Modal Wizard -->
  <div id="bookingModal" class="fixed inset-0 bg-slate-900/60 z-50 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
      <button onclick="closeBookingModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="flex items-center gap-2 text-bollo-600 font-semibold text-xs uppercase">
        <span class="material-symbols-outlined text-sm">verified</span> Direct Booking Wizard
      </div>
      <h3 class="font-display font-bold text-xl text-slate-900 mt-1" id="modalServiceTitle">Book a Verified Pro</h3>
      <p class="text-xs text-slate-500 mt-1" id="modalServiceDetails">Direct booking connected with Mobile Money and WhatsApp confirmation.</p>

      <form onsubmit="submitBooking(event)" class="mt-6 space-y-4 text-left">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
          <input type="text" id="custName" required placeholder="e.g. Samuel Eto'o" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-bollo-600" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Cameroon Phone / WhatsApp</label>
            <input type="tel" id="custPhone" required placeholder="+237 6..." class="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-bollo-600" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
            <input type="date" id="custDate" required class="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-bollo-600" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Task Location / Neighborhood</label>
          <input type="text" id="custAddress" required placeholder="e.g. Bonapriso, near Super U" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-bollo-600" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Task Details &amp; Instructions</label>
          <textarea id="custNotes" rows="2" placeholder="Briefly describe what needs to be done..." class="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-bollo-600"></textarea>
        </div>
        <button type="submit" class="w-full bg-bollo-600 hover:bg-bollo-700 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2">
          <span>Confirm Task &amp; WhatsApp Pro</span>
          <span class="material-symbols-outlined text-sm">send</span>
        </button>
      </form>
    </div>
  </div>

  <!-- Application Script -->
  <script>
    const DATA = ${JSON.stringify(db, null, 2)};
    let activeCategory = 'all';

    function init() {
      renderCategories();
      renderServices(DATA.listings);
    }

    function renderCategories() {
      const grid = document.getElementById('categoriesGrid');
      const quick = document.getElementById('quickCategories');
      
      grid.innerHTML = DATA.categories.map(c => \`
        <div onclick="selectCategory('\${c.id}')" class="bg-white p-5 rounded-2xl border border-slate-200 hover:border-bollo-600 hover:shadow-md transition cursor-pointer group">
          <div class="w-12 h-12 rounded-xl bg-bollo-50 text-bollo-600 flex items-center justify-center mb-3 group-hover:bg-bollo-600 group-hover:text-white transition">
            <span class="material-symbols-outlined">\${c.icon}</span>
          </div>
          <h4 class="font-display font-bold text-slate-900 group-hover:text-bollo-600 transition text-base">\${c.name}</h4>
          <p class="text-xs text-slate-500 mt-1 line-clamp-2">\${c.description}</p>
          <span class="inline-block mt-3 text-[11px] font-semibold text-bollo-600">\${c.servicesCount} Pros Available</span>
        </div>
      \`).join('');

      quick.innerHTML = \`
        <button onclick="selectCategory('all')" class="bg-white border border-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full hover:border-bollo-600 transition">All Tasks</button>
      \` + DATA.categories.slice(0, 5).map(c => \`
        <button onclick="selectCategory('\${c.id}')" class="bg-white border border-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full hover:border-bollo-600 transition">\${c.name}</button>
      \`).join('');
    }

    function renderServices(items) {
      const grid = document.getElementById('servicesGrid');
      const countEl = document.getElementById('resultsCount');
      countEl.innerText = \`Showing \${items.length} verified listings\`;

      if (items.length === 0) {
        grid.innerHTML = \`
          <div class="col-span-full py-16 text-center">
            <span class="material-symbols-outlined text-5xl text-slate-300">search_off</span>
            <p class="text-base text-slate-600 mt-2 font-medium">No service providers match your current filters.</p>
            <button onclick="resetFilters()" class="mt-4 bg-bollo-600 text-white text-xs font-semibold px-4 py-2 rounded-lg">Reset Filters</button>
          </div>
        \`;
        return;
      }

      grid.innerHTML = items.map(s => \`
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col">
          <div class="relative h-48 w-full bg-slate-100 overflow-hidden">
            <img src="\${s.image}" alt="\${s.title}" class="w-full h-full object-cover hover:scale-105 transition duration-500" />
            <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <span class="material-symbols-outlined text-xs text-bollo-600">location_on</span>
              \${s.neighborhood}
            </span>
            <span class="absolute top-3 right-3 bg-bollo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              \${s.price.toLocaleString()} XAF
            </span>
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <img src="\${s.provider.avatar}" class="w-7 h-7 rounded-full object-cover border border-slate-200" />
                <span class="text-xs font-medium text-slate-700">\${s.provider.name}</span>
                <span class="material-symbols-outlined text-xs text-emerald-500" title="Verified Professional">verified</span>
              </div>
              <h3 class="font-display font-bold text-slate-900 text-base leading-snug hover:text-bollo-600 cursor-pointer" onclick="openBookingModal('\${s.title}', \${s.price})">\${s.title}</h3>
              <p class="text-xs text-slate-500 mt-2 line-clamp-2">\${s.description}</p>
            </div>

            <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div class="flex items-center gap-1 text-xs font-bold text-slate-800">
                <span class="text-amber-500">★</span> \${s.rating}
                <span class="text-slate-400 font-normal">(\${s.reviews})</span>
              </div>
              <button onclick="openBookingModal('\${s.title}', \${s.price})" class="bg-bollo-50 hover:bg-bollo-600 hover:text-white text-bollo-600 text-xs font-bold px-3.5 py-2 rounded-lg transition">
                Book Task
              </button>
            </div>
          </div>
        </div>
      \`).join('');
    }

    function filterServices() {
      const q = document.getElementById('searchInput').value.toLowerCase().trim();
      const town = document.getElementById('townSelect').value;
      const maxPrice = document.getElementById('priceFilter').value;
      const minRating = parseFloat(document.getElementById('ratingFilter').value);

      const filtered = DATA.listings.filter(item => {
        const matchesQuery = !q || item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || item.provider.name.toLowerCase().includes(q);
        const matchesTown = town === 'all' || item.city === town;
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const matchesPrice = maxPrice === 'any' || item.price <= parseInt(maxPrice);
        const matchesRating = minRating === 0 || item.rating >= minRating;
        return matchesQuery && matchesTown && matchesCategory && matchesPrice && matchesRating;
      });

      renderServices(filtered);
    }

    function selectCategory(catId) {
      activeCategory = catId;
      filterServices();
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    function setTown(townId) {
      document.getElementById('townSelect').value = townId;
      filterServices();
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    function resetFilters() {
      document.getElementById('searchInput').value = '';
      document.getElementById('townSelect').value = 'all';
      document.getElementById('priceFilter').value = 'any';
      document.getElementById('ratingFilter').value = '0';
      activeCategory = 'all';
      filterServices();
    }

    function openBookingModal(title = 'Bespoke Task Service', price = null) {
      document.getElementById('modalServiceTitle').innerText = title;
      if (price) {
        document.getElementById('modalServiceDetails').innerText = \`Estimated Task Rate: \${price.toLocaleString()} XAF • Response time: < 30 mins\`;
      }
      document.getElementById('bookingModal').classList.remove('hidden');
    }

    function closeBookingModal() {
      document.getElementById('bookingModal').classList.add('hidden');
    }

    function openPostTaskModal() {
      openBookingModal('Post a Custom Task in Cameroon');
    }

    function submitBooking(e) {
      e.preventDefault();
      const name = document.getElementById('custName').value;
      const phone = document.getElementById('custPhone').value;
      const date = document.getElementById('custDate').value;
      const addr = document.getElementById('custAddress').value;
      const title = document.getElementById('modalServiceTitle').innerText;
      const notes = document.getElementById('custNotes').value;

      const message = \`Hello Bollo.work Cameroon!%0A%0A*Task Booking Request*%0A*Service:* \${title}%0A*Client Name:* \${name}%0A*Phone:* \${phone}%0A*Date:* \${date}%0A*Location:* \${addr}%0A*Notes:* \${notes}\`;
      window.open(\`https://wa.me/237670000000?text=\${message}\`, '_blank');
      closeBookingModal();
      alert('Thank you! Your task booking has been forwarded to the technician and Bollo support.');
    }

    window.onload = init;
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(outputDir, 'index.html'), appHtml, 'utf8');
console.log('✅ Generated standalone Bollo application at: bollo-app/index.html');
console.log('✅ Full features, search, Cameroon cities, provider cards, and booking flow initialized!');
