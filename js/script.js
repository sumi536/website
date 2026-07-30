/* ============================================================
   PRODUCT DATA
   ============================================================ */
const products = [
  {
    id: 1, name: 'AirPulse Pro', category: 'Audio',
    price: 249, originalPrice: 299, rating: 4.8, reviews: 2453,
    image: 'https://images.unsplash.com/photo-1573065370939-a6049e64b3d5?w=600&q=80',
    badge: 'Best Seller',
    description: 'Industry-leading active noise cancellation with adaptive transparency mode. Spatial audio with dynamic head tracking places sound all around you.',
    specs: { 'Driver': 'Custom H2 chip', 'Battery': '30h total', 'Water Resistant': 'IPX4', 'Weight': '5.3g each' }
  },
  {
    id: 2, name: 'Orbit Watch Ultra', category: 'Wearables',
    price: 599, originalPrice: null, rating: 4.7, reviews: 1820,
    image: 'https://images.unsplash.com/photo-1762768771889-39edca398901?w=600&q=80',
    badge: 'New',
    description: 'Rugged titanium smartwatch with precision dual-frequency GPS, 100m water resistance, and a bright always-on Retina display.',
    specs: { 'Display': '1.92" LTPO OLED', 'Battery': '72h', 'Chip': 'S9 SiP', 'Material': 'Titanium' }
  },
  {
    id: 3, name: 'SkyView Drone 4K', category: 'Drones',
    price: 1299, originalPrice: 1499, rating: 4.9, reviews: 876,
    image: 'https://images.unsplash.com/photo-1658065632912-102eb5720477?w=600&q=80',
    badge: 'Hot Deal',
    description: 'Compact 4K HDR drone with omnidirectional obstacle sensing and 30-min flight time. Capture cinematic footage with ease.',
    specs: { 'Camera': '4K HDR @60fps', 'Flight Time': '30 min', 'Range': '12 km', 'Weight': '249g' }
  },
  {
    id: 4, name: 'UltraBook Pro 16', category: 'Laptops',
    price: 2499, originalPrice: null, rating: 4.9, reviews: 3201,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    badge: 'Top Rated',
    description: 'Ultra-thin powerhouse with M3 Ultra chip, 48GB unified memory, and stunning 16.2" Liquid Retina XDR display.',
    specs: { 'Chip': 'M3 Ultra', 'RAM': '48GB', 'Storage': '1TB SSD', 'Display': '16.2" 3456×2234' }
  },
  {
    id: 5, name: 'Apex Mirrorless S7', category: 'Cameras',
    price: 1899, originalPrice: 2199, rating: 4.8, reviews: 1456,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
    badge: 'Sale',
    description: 'Full-frame 61MP mirrorless camera with 8K video, AI autofocus, and 5-axis in-body stabilization for unmatched creative freedom.',
    specs: { 'Sensor': '61MP Full-Frame', 'Video': '8K @30fps', 'ISO': '100–102400', 'Stabilization': '5-axis IBIS' }
  },
  {
    id: 6, name: 'NovaTab Pro 13', category: 'Tablets',
    price: 1099, originalPrice: null, rating: 4.6, reviews: 2104,
    image: 'https://images.unsplash.com/photo-1585789575907-1cce3586e3a6?w=600&q=80',
    badge: null,
    description: 'Pro-grade tablet with M4 chip, Ultra Retina XDR display, and Apple Pencil Pro support. Perfect for creative professionals.',
    specs: { 'Chip': 'M4', 'Display': '13" 2752×2064', 'Storage': '256GB', 'Battery': '12h' }
  },
  {
    id: 7, name: 'Pulse Elite ANC', category: 'Audio',
    price: 349, originalPrice: 399, rating: 4.7, reviews: 1823,
    image: 'https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?w=600&q=80',
    badge: null,
    description: 'Premium wireless over-ear headphones with adaptive noise cancellation, 40-hour battery, and lossless audio via USB-C.',
    specs: { 'Driver': '40mm custom', 'Battery': '40h', 'Codec': 'LDAC, AAC', 'Weight': '250g' }
  },
  {
    id: 8, name: 'NovaPixel 32" 8K', category: 'Monitors',
    price: 799, originalPrice: 999, rating: 4.5, reviews: 654,
    image: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=600&q=80',
    badge: 'Sale',
    description: '32-inch 8K UHD monitor with Mini-LED backlight, 1600 nits peak brightness, and Thunderbolt 4 connectivity.',
    specs: { 'Resolution': '8K (7680×4320)', 'Panel': 'Mini-LED', 'Refresh': '144Hz', 'Ports': '2× Thunderbolt 4' }
  },
  {
    id: 9, name: 'Edge Gaming X16', category: 'Laptops',
    price: 2199, originalPrice: null, rating: 4.8, reviews: 987,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&q=80',
    badge: 'New',
    description: 'Slim 16" gaming laptop with RTX 5090, 240Hz OLED display, and vapor chamber cooling for elite-level gaming performance.',
    specs: { 'GPU': 'RTX 5090 16GB', 'CPU': 'Intel Core Ultra 9', 'Display': '16" 240Hz OLED', 'RAM': '32GB DDR5' }
  },
  {
    id: 10, name: 'AquaBoom X3', category: 'Audio',
    price: 129, originalPrice: null, rating: 4.4, reviews: 3210,
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&q=80',
    badge: 'Budget Pick',
    description: 'Rugged waterproof Bluetooth speaker with 24-hour battery, deep bass, and 360° sound. Float it in the pool or take it on the trail.',
    specs: { 'Power': '30W', 'Battery': '24h', 'Waterproof': 'IP67', 'Weight': '0.8 kg' }
  }
];

const categories = ['All', 'Audio', 'Wearables', 'Drones', 'Laptops', 'Cameras', 'Tablets', 'Monitors'];

/* ============================================================
   CART
   ============================================================ */
let cart = JSON.parse(localStorage.getItem('novaCart')) || [];

function saveCart() {
  localStorage.setItem('novaCart', JSON.stringify(cart));
  updateBadge();
}

function updateBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const count = cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function findCart(id) { return cart.find(i => i.id === id); }

function addToCart(id, qty = 1) {
  const item = findCart(id);
  if (item) {
    item.qty += qty;
  } else {
    const product = products.find(p => p.id === id);
    if (!product) return;
    cart.push({ id, qty, name: product.name, price: product.price, image: product.image });
  }
  saveCart();
  const badge = document.getElementById('cartBadge');
  if (badge) { badge.classList.remove('bump'); void badge.offsetWidth; badge.classList.add('bump'); }
  setTimeout(() => badge?.classList.remove('bump'), 400);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
}

function updateQty(id, delta) {
  const item = findCart(id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
}

function getSubtotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function getShipping() {
  const sub = getSubtotal();
  if (sub === 0) return 0;
  return sub >= 100 ? 0 : 12.99;
}

function getTotal() {
  return getSubtotal() + getShipping();
}

/* ============================================================
   UTILITY
   ============================================================ */
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  const empty = 5 - Math.ceil(rating);
  for (let i = 0; i < empty; i++) s += '☆';
  return s;
}

function formatPrice(n) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function truncate(s, n) {
  return s.length > n ? s.slice(0, n) + '…' : s;
}

function navigate(hash) {
  window.location.hash = hash;
}

/* ============================================================
   RENDERERS
   ============================================================ */

// ----- LANDING -----
function renderLanding() {
  const app = document.getElementById('app');
  const heroProduct = products[0];
  const bestSellers = products.filter(p => p.badge === 'Best Seller' || p.rating >= 4.8).slice(0, 4);
  const cats = categories.slice(1);

  app.innerHTML = `
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-text">
          <span class="hero-tag"><i class="fas fa-bolt"></i> New Arrivals Drop Weekly</span>
          <h1>Your Future<br><span class="gradient-text">Starts Here</span></h1>
          <p>Explore the latest in cutting-edge technology. From powerful laptops to pro-grade audio — everything you need to stay ahead.</p>
          <div class="hero-buttons">
            <a href="#/shop" class="btn btn-primary">Shop Now <i class="fas fa-arrow-right"></i></a>
            <a href="#/product/${heroProduct.id}" class="btn btn-secondary"><i class="fas fa-play"></i> Featured: ${heroProduct.name}</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-visual-inner">
            <div class="hero-glow-ring"></div>
            <img class="hero-product-img" src="${heroProduct.image}" alt="${heroProduct.name}">
            <div class="hero-badge-float badge-1">
              <div class="icon"><i class="fas fa-star"></i></div>
              <div><div class="label">Rating</div><div class="value">${heroProduct.rating} / 5.0</div></div>
            </div>
            <div class="hero-badge-float badge-2">
              <div class="icon"><i class="fas fa-bolt"></i></div>
              <div><div class="label">Best Price</div><div class="value">${formatPrice(heroProduct.price)}</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="page">
      <h2 class="section-title">Shop by Category</h2>
      <p class="section-sub">Find exactly what you need</p>
      <div class="categories-grid">
        ${cats.map(c => {
          const icons = { Audio: 'fa-headphones', Wearables: 'fa-clock', Drones: 'fa-drone', Laptops: 'fa-laptop', Cameras: 'fa-camera', Tablets: 'fa-tablet', Monitors: 'fa-display' };
          const count = products.filter(p => p.category === c).length;
          return `<div class="category-card" data-category="${c}">
            <div class="icon-wrap"><i class="fas ${icons[c] || 'fa-microchip'}"></i></div>
            <div class="cat-name">${c}</div>
            <div class="cat-count">${count} products</div>
          </div>`;
        }).join('')}
      </div>

      <h2 class="section-title">Best Sellers</h2>
      <p class="section-sub">Most popular gadgets this month</p>
      <div class="best-sellers-scroll">
        ${bestSellers.map(p => renderProductCard(p)).join('')}
      </div>

      <div class="trust-row">
        <div class="trust-card">
          <div class="icon"><i class="fas fa-truck"></i></div>
          <h4>Free Shipping</h4>
          <p>On orders over $100</p>
        </div>
        <div class="trust-card">
          <div class="icon"><i class="fas fa-shield-halved"></i></div>
          <h4>2-Year Warranty</h4>
          <p>Full coverage included</p>
        </div>
        <div class="trust-card">
          <div class="icon"><i class="fas fa-rotate-left"></i></div>
          <h4>30-Day Returns</h4>
          <p>No questions asked</p>
        </div>
        <div class="trust-card">
          <div class="icon"><i class="fas fa-headset"></i></div>
          <h4>24/7 Support</h4>
          <p>Real humans, real fast</p>
        </div>
      </div>
    </div>
  `;
}

// ----- PRODUCT CARD (reusable) -----
function renderProductCard(p) {
  const inCart = findCart(p.id);
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="img-wrap">
        <a href="#/product/${p.id}"><img src="${p.image}" alt="${p.name}" loading="lazy"></a>
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      </div>
      <div class="body">
        <div class="cat-tag">${p.category}</div>
        <h3><a href="#/product/${p.id}">${p.name}</a></h3>
        <div class="rating-row">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="reviews">(${p.reviews})</span>
        </div>
        <div class="price-row">
          <span class="price">${formatPrice(p.price)}</span>
          ${p.originalPrice ? `<span class="price-original">${formatPrice(p.originalPrice)}</span>` : ''}
        </div>
        <button class="add-btn ${inCart ? 'in-cart' : ''}" data-action="add-to-cart" data-id="${p.id}">
          ${inCart ? '<i class="fas fa-check"></i> In Cart' : '<i class="fas fa-plus"></i> Add to Cart'}
        </button>
      </div>
    </div>
  `;
}

// ----- SHOP -----
function renderShop(filter = 'All', search = '', sort = 'default') {
  const app = document.getElementById('app');

  let filtered = [...products];
  if (filter !== 'All') filtered = filtered.filter(p => p.category === filter);
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }
  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  app.innerHTML = `
    <div class="page">
      <div class="shop-header">
        <div>
          <h1 class="section-title" style="margin-bottom:0">All Products</h1>
          <p class="section-sub" style="margin-bottom:0;margin-top:4px">${filtered.length} product${filtered.length !== 1 ? 's' : ''} found</p>
        </div>
        <div class="shop-controls">
          <div class="search-wrap">
            <i class="fas fa-search"></i>
            <input type="text" id="searchInput" placeholder="Search gadgets..." value="${search}">
          </div>
          <select class="filter-select" id="sortSelect">
            <option value="default" ${sort === 'default' ? 'selected' : ''}>Sort by: Default</option>
            <option value="price-asc" ${sort === 'price-asc' ? 'selected' : ''}>Price: Low → High</option>
            <option value="price-desc" ${sort === 'price-desc' ? 'selected' : ''}>Price: High → Low</option>
            <option value="rating" ${sort === 'rating' ? 'selected' : ''}>Highest Rated</option>
          </select>
        </div>
      </div>
      <div class="category-chips">
        ${categories.map(c => `<span class="chip ${c === filter ? 'active' : ''}" data-cat="${c}">${c}</span>`).join('')}
      </div>
      ${filtered.length === 0 ? `
        <div style="text-align:center;padding:60px 0;color:var(--text-secondary)">
          <i class="fas fa-search" style="font-size:40px;margin-bottom:16px;opacity:0.4"></i>
          <h3 style="margin-bottom:4px">No products found</h3>
          <p>Try adjusting your search or filter.</p>
        </div>
      ` : `
        <div class="products-grid">
          ${filtered.map(p => renderProductCard(p)).join('')}
        </div>
      `}
    </div>
  `;

  document.getElementById('searchInput')?.addEventListener('input', function () {
    renderShop(filter, this.value, document.getElementById('sortSelect').value);
  });
  document.getElementById('sortSelect')?.addEventListener('change', function () {
    renderShop(filter, document.getElementById('searchInput').value, this.value);
  });
}

// ----- PRODUCT DETAIL -----
function renderProductDetail(id) {
  const p = products.find(p => p.id === id);
  if (!p) { navigate('/shop'); return; }
  const app = document.getElementById('app');
  const inCart = findCart(p.id);
  const qty = inCart ? inCart.qty : 1;

  app.innerHTML = `
    <div class="page">
      <a href="#/shop" class="back-link" style="display:inline-flex;align-items:center;gap:8px;color:var(--text-secondary);margin-bottom:24px;font-size:14px">
        <i class="fas fa-arrow-left"></i> Back to Shop
      </a>
      <div class="product-detail">
        <div class="detail-image">
          <img src="${p.image}" alt="${p.name}">
        </div>
        <div class="detail-info">
          <div class="cat-tag" style="font-size:12px;margin-bottom:8px">${p.category}</div>
          <h1>${p.name}</h1>
          <div class="detail-rating">
            <span class="stars" style="color:#fbbf24">${renderStars(p.rating)}</span>
            <span>${p.rating}</span>
            <span style="color:var(--text-tertiary)">(${p.reviews.toLocaleString()} reviews)</span>
          </div>
          <div class="detail-price">
            ${formatPrice(p.price)}
            ${p.originalPrice ? `<small>${formatPrice(p.originalPrice)}</small>` : ''}
          </div>
          <p class="desc">${p.description}</p>
          <div class="specs-grid">
            ${Object.entries(p.specs).map(([key, val]) => `
              <div class="spec-item">
                <div class="spec-label">${key}</div>
                <div class="spec-value">${val}</div>
              </div>
            `).join('')}
          </div>
          <div class="qty-row">
            <span style="font-weight:600;font-size:14px">Quantity:</span>
            <button class="qty-btn" data-action="qty-detail" data-delta="-1" data-id="${p.id}">−</button>
            <span class="qty-value" id="detailQty">${qty}</span>
            <button class="qty-btn" data-action="qty-detail" data-delta="1" data-id="${p.id}">+</button>
          </div>
          <button class="detail-add-btn" data-action="add-to-cart" data-id="${p.id}" data-qty-el="detailQty">
            <i class="fas fa-shopping-bag"></i> Add to Cart — ${formatPrice(p.price * qty)}
          </button>
        </div>
      </div>
    </div>
  `;
}

// ----- CART -----
function renderCart() {
  const app = document.getElementById('app');
  const sub = getSubtotal();
  const shipping = getShipping();

  if (cart.length === 0) {
    app.innerHTML = `
      <div class="page">
        <div class="cart-empty">
          <div class="icon"><i class="fas fa-shopping-bag"></i></div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet.</p>
          <a href="#/shop" class="btn btn-primary">Browse Products <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    `;
    return;
  }

  app.innerHTML = `
    <div class="page">
      <h1 class="section-title">Your Cart</h1>
      <p class="section-sub">${cart.reduce((s, i) => s + i.qty, 0)} item${cart.reduce((s, i) => s + i.qty, 0) !== 1 ? 's' : ''} in your cart</p>
      <div class="cart-layout">
        <div class="cart-items">
          ${cart.map(item => {
            const p = products.find(pr => pr.id === item.id);
            if (!p) return '';
            return `
              <div class="cart-item" data-id="${item.id}">
                <img src="${p.image}" alt="${item.name}">
                <div class="item-info">
                  <div class="item-name">${item.name}</div>
                  <div class="item-price">${formatPrice(item.price)} each</div>
                  <div class="item-controls">
                    <div class="qty-wrap">
                      <button data-action="cart-qty" data-id="${item.id}" data-delta="-1">−</button>
                      <span>${item.qty}</span>
                      <button data-action="cart-qty" data-id="${item.id}" data-delta="1">+</button>
                    </div>
                    <button class="remove-btn" data-action="cart-remove" data-id="${item.id}">
                      <i class="fas fa-trash-can"></i> Remove
                    </button>
                  </div>
                </div>
                <div class="item-total">${formatPrice(item.price * item.qty)}</div>
              </div>
            `;
          }).join('')}
        </div>
        <div class="cart-summary">
          <h3>Order Summary</h3>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>${formatPrice(sub)}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <span>${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
          </div>
          ${sub >= 100 ? '<div style="font-size:12px;color:#34d399;margin-bottom:8px"><i class="fas fa-check-circle"></i> Free shipping applied</div>' : ''}
          <div class="summary-row total">
            <span>Total</span>
            <span>${formatPrice(getTotal())}</span>
          </div>
          <button class="checkout-btn" data-action="go-checkout">
            Proceed to Checkout <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ----- CHECKOUT -----
function renderCheckout() {
  if (cart.length === 0) { navigate('/cart'); return; }
  const app = document.getElementById('app');
  const sub = getSubtotal();
  const shipping = getShipping();

  app.innerHTML = `
    <div class="page">
      <div class="checkout-layout">
        <div class="checkout-form">
          <h2>Checkout</h2>
          <form id="checkoutForm" novalidate>
            <div class="form-section">
              <h3>Shipping Information</h3>
              <div class="form-group">
                <label for="cfName">Full Name</label>
                <input type="text" id="cfName" required placeholder="Alex Rivera">
              </div>
              <div class="form-group">
                <label for="cfEmail">Email Address</label>
                <input type="email" id="cfEmail" required placeholder="alex@example.com">
              </div>
              <div class="form-group">
                <label for="cfAddress">Street Address</label>
                <input type="text" id="cfAddress" required placeholder="123 Innovation Drive">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="cfCity">City</label>
                  <input type="text" id="cfCity" required placeholder="San Francisco">
                </div>
                <div class="form-group">
                  <label for="cfZip">ZIP Code</label>
                  <input type="text" id="cfZip" required placeholder="94107">
                </div>
              </div>
            </div>
            <div class="form-section">
              <h3>Payment</h3>
              <div class="form-group">
                <label for="cfCard">Card Number</label>
                <input type="text" id="cfCard" required placeholder="•••• •••• •••• ••••">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="cfExpiry">Expiry</label>
                  <input type="text" id="cfExpiry" required placeholder="MM/YY">
                </div>
                <div class="form-group">
                  <label for="cfCvv">CVV</label>
                  <input type="text" id="cfCvv" required placeholder="•••">
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:16px">
              Place Order — ${formatPrice(getTotal())}
            </button>
          </form>
        </div>
        <div class="order-summary-box">
          <h3>Order Summary</h3>
          ${cart.map(item => {
            const p = products.find(pr => pr.id === item.id);
            if (!p) return '';
            return `
              <div class="os-item">
                <img src="${p.image}" alt="${item.name}">
                <div>
                  <div class="os-name">${item.name}</div>
                  <div class="os-qty">Qty: ${item.qty}</div>
                </div>
                <div class="os-price">${formatPrice(item.price * item.qty)}</div>
              </div>
            `;
          }).join('')}
          <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border)">
            <div class="summary-row"><span>Subtotal</span><span>${formatPrice(sub)}</span></div>
            <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
            <div class="summary-row total"><span>Total</span><span>${formatPrice(getTotal())}</span></div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('checkoutForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const orderId = 'NOVA-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    cart = [];
    saveCart();
    navigate('/confirmation/' + orderId);
  });
}

// ----- CONFIRMATION -----
function renderConfirmation(orderId) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="page">
      <div class="confirmation">
        <div class="check-icon"><i class="fas fa-check"></i></div>
        <h1>Order Confirmed!</h1>
        <p>Thank you for your purchase. Your order is being prepared.</p>
        <p class="order-id">Order ID: <span>${orderId}</span></p>
        <p style="margin-bottom:32px">A confirmation email will be sent shortly.</p>
        <a href="#/shop" class="btn btn-primary">Continue Shopping <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  `;
}

/* ============================================================
   ROUTER
   ============================================================ */
function route() {
  const hash = window.location.hash.slice(1) || '/';

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const navMap = { '/': 'Home', '/shop': 'Shop', '/cart': 'Cart' };
  Object.entries(navMap).forEach(([key, label]) => {
    if (hash.startsWith(key)) {
      document.querySelectorAll('.nav-link').forEach(l => {
        if (l.textContent.trim() === label || (key === '/cart' && l.classList.contains('cart-link'))) {
          l.classList.add('active');
        }
      });
    }
  });

  if (hash === '/') renderLanding();
  else if (hash === '/shop') renderShop();
  else if (hash.startsWith('/product/')) {
    const id = parseInt(hash.split('/')[2]);
    renderProductDetail(id);
  }
  else if (hash === '/cart') renderCart();
  else if (hash === '/checkout') renderCheckout();
  else if (hash.startsWith('/confirmation/')) {
    const orderId = hash.split('/')[2];
    renderConfirmation(orderId);
  }
  else renderLanding();

  // Close hamburger
  document.getElementById('hamburger')?.classList.remove('open');
  document.querySelector('.nav-links')?.classList.remove('open');
}

/* ============================================================
   EVENT DELEGATION
   ============================================================ */
document.addEventListener('click', function (e) {
  const target = e.target.closest('[data-action]');
  if (!target) return;
  const action = target.dataset.action;

  if (action === 'add-to-cart') {
    const id = parseInt(target.dataset.id);
    const qtyEl = target.dataset.qtyEl ? document.getElementById(target.dataset.qtyEl) : null;
    const qty = qtyEl ? parseInt(qtyEl.textContent) : 1;
    addToCart(id, qty);
    const card = target.closest('.product-card');
    if (card) {
      const btn = card.querySelector('.add-btn');
      if (btn) {
        btn.innerHTML = '<i class="fas fa-check"></i> In Cart';
        btn.classList.add('in-cart');
      }
    }
    return;
  }

  if (action === 'cart-qty') {
    const id = parseInt(target.dataset.id);
    const delta = parseInt(target.dataset.delta);
    updateQty(id, delta);
    renderCart();
    return;
  }

  if (action === 'cart-remove') {
    const id = parseInt(target.dataset.id);
    removeFromCart(id);
    renderCart();
    return;
  }

  if (action === 'qty-detail') {
    const id = parseInt(target.dataset.id);
    const delta = parseInt(target.dataset.delta);
    const el = document.getElementById('detailQty');
    if (!el) return;
    let val = parseInt(el.textContent) + delta;
    val = Math.max(1, val);
    el.textContent = val;
    const price = products.find(p => p.id === id)?.price || 0;
    const btn = document.querySelector('.detail-add-btn[data-id="' + id + '"]');
    if (btn) {
      btn.innerHTML = `<i class="fas fa-shopping-bag"></i> Add to Cart — ${formatPrice(price * val)}`;
    }
    return;
  }

  if (action === 'go-checkout') {
    navigate('/checkout');
    return;
  }
});

// Category chips (landing + shop)
document.addEventListener('click', function (e) {
  const chip = e.target.closest('.chip');
  if (chip && chip.dataset.cat) {
    const cat = chip.dataset.cat;
    const search = document.getElementById('searchInput')?.value || '';
    const sort = document.getElementById('sortSelect')?.value || 'default';
    renderShop(cat, search, sort);
    return;
  }
  const catCard = e.target.closest('.category-card');
  if (catCard && catCard.dataset.category) {
    navigate('/shop');
    // Small delay to let shop render, then set filter
    setTimeout(() => {
      const chip = document.querySelector(`.chip[data-cat="${catCard.dataset.category}"]`);
      if (chip) chip.click();
    }, 50);
    return;
  }
}, true);

// Hamburger
document.addEventListener('click', function (e) {
  if (e.target.closest('#hamburger')) {
    document.querySelector('.nav-links')?.classList.toggle('open');
  }
});

// Hash change
window.addEventListener('hashchange', route);

/* ============================================================
   INIT
   ============================================================ */
updateBadge();
route();
