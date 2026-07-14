/* === SIDEBAR === */
    function toggleSidebar() {
      const s = document.getElementById('sidebar'), o = document.getElementById('sidebarOverlay'), b = document.getElementById('menuBtn');
      if (s.classList.contains('open')) { closeSidebar(); }
      else { s.classList.add('open'); o.classList.add('open'); b.classList.add('open'); document.body.style.overflow = 'hidden'; }
    }
    function closeSidebar() {
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('sidebarOverlay').classList.remove('open');
      document.getElementById('menuBtn').classList.remove('open');
      document.body.style.overflow = '';
    }
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });

    /* === HIDE LOGO ON SCROLL === */
    window.addEventListener('scroll', () => {
      const heroBlock = document.getElementById('home');
      const triggerHeight = heroBlock ? heroBlock.offsetHeight - 50 : 500;
      document.getElementById('navLogo').classList.toggle('hide', window.scrollY > triggerHeight);
    });

    /* === PILL NAV === */
    function togglePillNav() {
      const pn = document.getElementById('pillNav');
      const nl = document.getElementById('navLogo');
      pn.classList.toggle('open');

      // On mobile, hide/show logo when pill is open to prevent overlap
      if (window.innerWidth <= 900) {
        nl.classList.toggle('hide', pn.classList.contains('open'));
      }

      // Close sidebar if it happens to be open (prevents overlaps)
      if (typeof closeSidebar === 'function') {
        closeSidebar();
      }
    }

    /* === QUOTES === */
    const quotes = [
      "Drive Safe &amp; Enjoy Your Journey 🛣️",
      "Aapki Yatra Mangalmay Ho Hamare Saath 🙏",
      "Every Road Tells a Story— Start Yours 🌄",
      "Har Safar Mein Aapka Saathi— NarSingh 🚗",
      "Surakshit Safar, Khush Musafir 😊"
    ];
    let qi = 0;
    const qEl = document.getElementById('heroQuote');
    const dw = document.getElementById('quoteDots');
    quotes.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'qdot' + (i === 0 ? ' active' : '');
      d.onclick = () => goQ(i);
      if (dw) dw.appendChild(d);
    });
    function goQ(idx) {
      if (!qEl) return;
      qEl.classList.remove('fade-in'); qEl.classList.add('fade-out');
      setTimeout(() => {
        qi = idx; qEl.innerHTML = quotes[qi]; qEl.classList.remove('fade-out'); qEl.classList.add('fade-in');
        document.querySelectorAll('.qdot').forEach((d, i) => d.classList.toggle('active', i === qi));
      }, 450);
    }
    setInterval(() => goQ((qi + 1) % quotes.length), 3500);
    /* === DATA === */
    const cars = [
      { name: "Hyundai Aura 2025", type: "Popular", badge: "Popular", bc: "", img: "images/Gemini_Generated_Image_67avns67avns67av.png", seats: 4, fuel: "CNG", price: "₹11", specs: ["Sedan", "CNG", "4 Seater"] },
      { name: "Hyundai Aura 2025", type: "Family", badge: "Top Pick", bc: "gd", img: "images/Gemini_Generated_Image_ujlckrujlckrujlc.png", seats: 5, fuel: "CNG", price: "₹18", specs: ["MUV", "CNG", "5 Seater"] },
      { name: "TATA ZEST", type: "Popular", badge: "Popular", bc: "", img: "images/Gemini_Generated_Image_yzv4j9yzv4j9yzv4.png", seats: 4, fuel: "CNG", price: "₹11", specs: ["Sedan", "CNG", "4 Seater"] },
      { name: "Mahendra Balero", type: "Popular", badge: "Popular", bc: "gd", img: "images/Gemini_Generated_Image_1v4hka1v4hka1v4h.png", seats: 6, fuel: "CNG", price: "₹18", specs: ["Luxury", "CNG", "6 Seater"] },
      { name: "Maruti Suzuki Ertiga", type: "Premium", badge: "Premium", bc: "gd", img: "images/Gemini_Generated_Image_w19t1mw19t1mw19t.png", seats: 7, fuel: "CNG", price: "₹18", specs: ["MUV", "CNG", "7 Seater"] },
      { name: "Maruti Suzuki Baleno", type: "Family", badge: "Family", bc: "", img: "images/Gemini_Generated_Image_wdoai9wdoai9wdoa.png", seats: 4, fuel: "CNG", price: "₹11", specs: ["Luxury", "CNG", "4 Seater"] },
      { name: "Hyundai Creta", type: "Premium", badge: "Premium", bc: "gd", img: "images/Gemini_Generated_Image_81vsv281vsv281vs.png", seats: 5, fuel: "CNG", price: "₹18", specs: ["SUV", "CNG", "5 Seater"] },
      { name: "Honda City", type: "Popular", badge: "New", bc: "", img: "images/Gemini_Generated_Image_2bfziz2bfziz2bfz.png", seats: 5, fuel: "Diesel", price: "₹11", specs: ["Sedan", "Diesel", "5 Seater"] },
      { name: "Mahindra XUV 3XO", type: "Luxury", badge: "Luxury", bc: "gd", img: "images/Gemini_Generated_Image_uy4a51uy4a51uy4a.png", seats: 7, fuel: "CNG", price: "₹18", specs: ["Luxury", "CNG", "7 Seater"] },
      { name: "Hyundai Verna", type: "Premium", badge: "New ", bc: "", img: "images/Gemini_Generated_Image_ijaq9aijaq9aijaq.png", seats: 6, fuel: "Diesel", price: "₹11", specs: ["Sedan", "Diesel", "6 Seater"] },
      { name: "Maruti Suzuki Swift", type: "Family", badge: "Small Family", bc: "", img: "images/Gemini_Generated_Image_tiffxstiffxstiff.png", seats: 4, fuel: "CNG", price: "₹11", specs: ["Sedan", "CNG", "4 Seater"] },
      { name: "TATA Sierra", type: "Premium", badge: "Premium", bc: "gd", img: "images/Gemini_Generated_Image_u0uyovu0uyovu0uy.png", seats: 7, fuel: "Diesel", price: "₹18", specs: ["SUV", "Diesel", "7 Seater"] },
    ];
    const cities = [
      { name: "Ayodhya", icon: "🏯", cars: 5, img: "images/ayodhya.png" },
      { name: "Mumbai", icon: "🏙️", cars: 12, img: "images/mumbai.png" },
      { name: "Delhi", icon: "🕌", cars: 5, img: "images/delhi.png" },
      { name: "Bangalore", icon: "🌆", cars: 8, img: "images/bangalore.png" },
      { name: "Chennai", icon: "🏯", cars: 6, img: "images/chennai.png" },
      { name: "Hyderabad", icon: "🌊", cars: 8, img: "images/hyderabad.png" },
      { name: "Kolkata", icon: "🎡", cars: 4, img: "images/kolkata.png" },
      { name: "Pune", icon: "🏔️", cars: 5, img: "images/pune.png" },
      { name: "Jaipur", icon: "🎪", cars: 7, img: "images/jaipur.png" },
      { name: "Mathura & Vrindavan", icon: "🏯", cars: 7, img: "images/mathura-vrindavan.png" },
      { name: "Agra", icon: "🏖️", cars: 4, img: "images/agra.png" },
      { name: "Kochi", icon: "⛵", cars: 3, img: "images/kochi.png" },
      { name: "Lucknow", icon: "🕍", cars: 15, img: "images/lucknow.png" },
      { name: "Chandigarh", icon: "🌹", cars: 2, img: "images/chandigarh.png" },
      { name: "Kanpur", icon: "🕍", cars: 3, img: "images/kanpur.png" },
      { name: "Varanasi", icon: "🏯", cars: 4, img: "images/varanasi.png" }
    ];
    const reviews = [
      { stars: 5, txt: "Booked Innova Crysta for Delhi-Agra trip. Driver was professional, car was spotless. Highly recommend NarSingh!", name: "Priya Mehta", loc: "Delhi", av: "👩" },
      { stars: 5, txt: "Used NarSingh for my business trip. Ertiga was outstanding and pickup perfectly on time. Will use again.", name: "Arjun Nair", loc: "Bangalore", av: "👨" },
      { stars: 4, txt: "Great experience with Tata Nexon EV for weekend road trip. Smooth, eco-friendly ride and booking was super easy!", name: "Kavya Sharma", loc: "Mumbai", av: "👩‍💼" }
    ];

    function renderCars(f = 'all') {
      const g = document.getElementById('carsGrid');
      const list = f === 'all' ? cars : cars.filter(c => c.type === f);
      g.innerHTML = list.map(c => `<div class="car-card" onclick="openModal('${c.name}','${c.specs[0]}')"><div class="car-img"><img src="${c.img}" loading="lazy" alt="${c.name}"><div class="badge ${c.bc}">${c.badge}</div></div><div class="car-info"><div class="cname">${c.name}</div><div class="cmeta"><span>👤 ${c.seats} Seats</span><span>❄️ AC</span><span>⛽ ${c.fuel}</span></div><div class="cspecs">${c.specs.map(s => `<span class="spc">${s}</span>`).join('')}</div><div class="cfoot"><div class="price">${c.price}<br><small>per km</small></div><button class="bk" onclick="event.stopPropagation();openModal('${c.name}','${c.specs[0]}')">Book Now</button></div></div></div>`).join('');
    }
    function filterCars(t, btn) { document.querySelectorAll('.tab').forEach(x => x.classList.remove('active')); btn.classList.add('active'); renderCars(t); }
    function renderCities() {
      document.getElementById('citiesGrid').innerHTML = cities.map(c => `
        <div class="city-card" style="background-image: url('${c.img}')">
          <div class="city-overlay"></div>
          <div class="city-content">
            <div class="cico">${c.icon}</div>
            <div class="cnm">${c.name}</div>
            <div class="cct">${c.cars}+ cars</div>
          </div>
        </div>
      `).join('');
    }
    function renderReviews() { document.getElementById('reviewsGrid').innerHTML = reviews.map(r => `<div class="review"><div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div><div class="rtxt">"${r.txt}"</div><div class="reviewer"><div class="ava">${r.av}</div><div><div class="rname">${r.name}</div><div class="rloc">📍 ${r.loc}</div></div></div></div>`).join(''); }

    function openModal(n, t) {
      document.getElementById('mcar').textContent = `🚗 ${n} — ${t}`;
      document.getElementById('hiddenCarModel').value = `${n} (${t})`;
      document.getElementById('modal').classList.add('open');
    }
    function closeModal() { document.getElementById('modal').classList.remove('open'); }
    document.getElementById('modal').addEventListener('click', e => { if (e.target === document.getElementById('modal')) closeModal(); });

    // Handle Formspree Submission
    document.getElementById('bookingForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const form = this;
      const btn = document.getElementById('submitBtn');
      const originalText = btn.innerHTML;

      btn.innerHTML = "⌛ Sending...";
      btn.disabled = true;

      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          confirmBooking(); // Show toast and close
          form.reset();
        } else {
          alert("Oops! There was a problem submitting your booking. Please try again.");
          btn.innerHTML = originalText;
          btn.disabled = false;
        }
      }).catch(error => {
        alert("Oops! There was a problem submitting your booking. Please try again.");
        btn.innerHTML = originalText;
        btn.disabled = false;
      });
    });

    function confirmBooking() {
      closeModal();
      const t = document.getElementById('toast');
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 4000);
    }

    const tgts = [50000, 200, 50, 8], ids = ['s1', 's2', 's3', 's4']; let counted = false;
    function animC(id, tgt) { let n = 0, st = tgt / 60; const tm = setInterval(() => { n = Math.min(n + st, tgt); document.getElementById(id).textContent = (n >= 1000 ? Math.round(n / 1000) + 'K' : Math.floor(n)) + '+'; if (n >= tgt) clearInterval(tm); }, 28); }
    new IntersectionObserver(e => { if (e[0].isIntersecting && !counted) { counted = true; ids.forEach((id, i) => animC(id, tgts[i])); } }).observe(document.querySelector('.stats'));

    const vid = document.getElementById('heroVid');
    const vids = ['v1.mp4', 'v2.mp4']; let vi = 0;
    if (vid) { vid.addEventListener('ended', () => { vi = (vi + 1) % vids.length; vid.src = vids[vi]; vid.play(); }); }

    document.querySelectorAll('input[type="date"]').forEach(i => { i.min = new Date().toISOString().split('T')[0]; });
    renderCars(); renderCities(); renderReviews();

    /* === 3D TILT EFFECT === */
    document.querySelectorAll('.feat-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        const dx = (x - rect.width / 2) / (rect.width / 2), dy = (y - rect.height / 2) / (rect.height / 2);
        card.style.transform = `rotateX(${-dy * 10}deg) rotateY(${dx * 10}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });
    });

    /* === SCROLL REVEAL FOR FEATURES === */
    const revealFeats = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) translateZ(30px)';
          revealFeats.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.feat-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(40px)';
      card.style.transition = `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s, box-shadow 0.3s`;
      revealFeats.observe(card);
    });

    /* === CONNECT MODAL JS === */
    function openConnectModal() {
      document.getElementById('connectModal').classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeConnectModal() {
      document.getElementById('connectModal').classList.remove('open');
      document.body.style.overflow = '';
    }
    document.getElementById('connectModal').addEventListener('click', e => {
      if (e.target === document.getElementById('connectModal')) closeConnectModal();
    });
