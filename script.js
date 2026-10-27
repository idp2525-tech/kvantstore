const products = [
    {
        id: 1,
        title: "Apple iPhone 16 Pro Max 256GB",
        category: "smartphones",
        brand: "Apple",
        price: 58999,
        oldPrice: 63999,
        rating: 4.9,
        reviews: 124,
        image: "images/iphone16.jpg",
        badge: "Хіт продажу",
        ram: "8",
        storage: "256GB",
        screen: "6.9\" Super Retina XDR OLED",
        battery: "4685 mAh",
        camera: "48 + 48 + 12 MP",
        processor: "Apple A18 Pro",
        description: "Флагманський смартфон з титановим корпусом, кнопкою Camera Control та передовими можливостями Apple Intelligence."
    },
    {
        id: 2,
        title: "Samsung Galaxy S24 Ultra 512GB",
        category: "smartphones",
        brand: "Samsung",
        price: 54999,
        oldPrice: 59999,
        rating: 4.8,
        reviews: 98,
        image: "images/S24.jpg",
        badge: "Знижка",
        ram: "12",
        storage: "512GB",
        screen: "6.8\" Dynamic AMOLED 2X",
        battery: "5000 mAh",
        camera: "200 + 50 + 12 + 10 MP",
        processor: "Snapdragon 8 Gen 3 for Galaxy",
        description: "Найпотужніший смартфон Samsung із вбудованим пером S Pen та набором інтелектуальних функцій Galaxy AI."
    },
    {
        id: 3,
        title: "Google Pixel 9 Pro XL 256GB",
        category: "smartphones",
        brand: "Google",
        price: 49999,
        oldPrice: 53999,
        rating: 4.7,
        reviews: 64,
        image: "images/pixel9.jpg",
        badge: "Новинка",
        ram: "16",
        storage: "256GB",
        screen: "6.8\" Super Actua OLED",
        battery: "5060 mAh",
        camera: "50 + 48 + 48 MP",
        processor: "Google Tensor G4",
        description: "Неперевершена мобільна фотографія завдяки штучному інтелекту Google та чистий Android."
    },
    {
        id: 4,
        title: "Apple MacBook Pro 14\" M3 Pro 18/512GB",
        category: "laptops",
        brand: "Apple",
        price: 89999,
        oldPrice: 96999,
        rating: 5.0,
        reviews: 45,
        image: "images/macbookpro.jpg",
        badge: "Топ",
        ram: "18",
        storage: "512GB",
        screen: "14.2\" Liquid Retina XDR",
        battery: "До 22 годин",
        camera: "1080p FaceTime HD",
        processor: "Apple M3 Pro",
        description: "Професійний ноутбук для створення контенту, програмування та ресурсомістких завдань."
    },
    {
        id: 5,
        title: "Sony WH-1000XM5 Wireless Headphones",
        category: "audio",
        brand: "Sony",
        price: 15999,
        oldPrice: 18999,
        rating: 4.9,
        reviews: 210,
        image: "images/sony.jpg",
        badge: "Бестселер",
        ram: "N/A",
        storage: "N/A",
        screen: "N/A",
        battery: "До 30 годин",
        camera: "N/A",
        processor: "HD Noise Canceling Processor QN1",
        description: "Найкращі бездротові навушники з передовим активним шумозаглушенням та звуком високої роздільної здатності."
    },
    {
        id: 6,
        title: "Apple iPad Pro 11\" M4 256GB Wi-Fi",
        category: "tablets",
        brand: "Apple",
        price: 47999,
        oldPrice: 51999,
        rating: 4.8,
        reviews: 52,
        image: "images/ipadpro.jpg",
        badge: "Новинка",
        ram: "8",
        storage: "256GB",
        screen: "11\" Ultra Retina XDR OLED",
        battery: "До 10 годин",
        camera: "12 MP Wide",
        processor: "Apple M4",
        description: "Неймовірно тонкий та потужний планшет із революційним екраном Tandem OLED."
    },
    {
        id: 7,
        title: "Apple Watch Series 10 GPS 42mm",
        category: "watches",
        brand: "Apple",
        price: 19999,
        oldPrice: 21999,
        rating: 4.9,
        reviews: 83,
        image: "images/watch10.jpg",
        badge: "Хіт",
        ram: "N/A",
        storage: "64GB",
        screen: "OLED Wide-angle",
        battery: "До 18 годин",
        camera: "N/A",
        processor: "Apple S10 SiP",
        description: "Найтонший Apple Watch в історії з найбільшим дисплеєм та новими функціями здоров'я."
    },
    {
        id: 8,
        title: "Anker Prime 27650mAh Power Bank 250W",
        category: "accessories",
        brand: "Anker",
        price: 6999,
        oldPrice: 7999,
        rating: 4.9,
        reviews: 145,
        image: "images/anker.jpg",
        badge: "Топ",
        ram: "N/A",
        storage: "N/A",
        screen: "Smart Digital Display",
        battery: "27650 mAh",
        camera: "N/A",
        processor: "N/A",
        description: "Потужний повербанк з можливістю одночасної швидкої зарядки ноутбука та смартфона."
    }
];
let cart = JSON.parse(localStorage.getItem('kvant_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('kvant_wishlist')) || [];
let compareList = JSON.parse(localStorage.getItem('kvant_compare')) || [];
let appliedDiscount = 0;
document.addEventListener('DOMContentLoaded', () => {
    initRouting();
    initFlashTimer();
    renderProducts();
    updateBadges();
    setupEventListeners();
});
function initRouting() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    function handleRoute(hash) {
        const targetPageId = hash === '#catalog' ? 'page-catalog' : 
                             hash === '#about' ? 'page-about' : 'page-home';
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active-page'));
        document.getElementById(targetPageId).classList.add('active-page');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) mobileMenu.classList.remove('active');
    }
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                window.location.hash = href;
                handleRoute(href);
                const cat = link.getAttribute('data-cat');
                if (cat && href === '#catalog') {
                    const catCheckbox = document.querySelector(`#categoryFilters input[value="${cat}"]`);
                    if (catCheckbox) {
                        document.querySelectorAll('#categoryFilters input').forEach(inp => inp.checked = false);
                        catCheckbox.checked = true;
                        filterAndRenderCatalog();
                    }
                }
            }
        });
    });
    window.addEventListener('hashchange', () => {
        handleRoute(window.location.hash || '#home');
    });
    if (window.location.hash) {
        handleRoute(window.location.hash);
    }
}
function initFlashTimer() {
    let hours = 8, minutes = 34, seconds = 52;
    setInterval(() => {
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 24; }
        const hElem = document.getElementById('hours');
        const mElem = document.getElementById('minutes');
        const sElem = document.getElementById('seconds');
        if (hElem) hElem.textContent = String(hours).padStart(2, '0');
        if (mElem) mElem.textContent = String(minutes).padStart(2, '0');
        if (sElem) sElem.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}
function renderProducts() {
    const flashGrid = document.getElementById('flashProductsGrid');
    if (flashGrid) {
        flashGrid.innerHTML = products.slice(0, 4).map(p => createProductCardHTML(p)).join('');
    }
    filterAndRenderCatalog();
    attachProductCardEvents();
}
function createProductCardHTML(p) {
    const isWishlisted = wishlist.some(item => item.id === p.id);
    const isCompared = compareList.some(item => item.id === p.id);
    return `
        <div class="product-card" data-id="${p.id}">
            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            <div class="product-actions-top">
                <button class="product-action-btn wishlist-toggle ${isWishlisted ? 'active' : ''}" data-id="${p.id}" title="В обране">
                    <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <button class="product-action-btn compare-toggle ${isCompared ? 'active' : ''}" data-id="${p.id}" title="Порівняти">
                    <i class="fa-solid fa-scale-balanced"></i>
                </button>
            </div>
            <div class="product-img quick-view-trigger" data-id="${p.id}">
                <img src="${p.image}" alt="${p.title}">
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(p.category)}</span>
                <h3 class="product-title quick-view-trigger" data-id="${p.id}">${p.title}</h3>
                <div class="product-rating">
                    <i class="fa-solid fa-star"></i> ${p.rating} <span>(${p.reviews})</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="current-price">${p.price.toLocaleString()} ₴</span>
                        ${p.oldPrice ? `<span class="old-price">${p.oldPrice.toLocaleString()} ₴</span>` : ''}
                    </div>
                    <button class="add-to-cart-btn" data-id="${p.id}" title="Додати в кошик">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}
function getCategoryName(cat) {
    const names = {
        smartphones: 'Смартфони',
        laptops: 'Ноутбуки',
        tablets: 'Планшети',
        watches: 'Смарт-годинники',
        audio: 'Аудіо',
        accessories: 'Аксесуари'
    };
    return names[cat] || cat;
}
function filterAndRenderCatalog() {
    const catalogGrid = document.getElementById('catalogProductsGrid');
    if (!catalogGrid) return;
    const selectedCategories = Array.from(document.querySelectorAll('#categoryFilters input:checked')).map(cb => cb.value);
    const selectedBrands = Array.from(document.querySelectorAll('#brandFilters input:checked')).map(cb => cb.value);
    const selectedRams = Array.from(document.querySelectorAll('#ramFilters input:checked')).map(cb => cb.value);
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const minPrice = minPriceInput ? parseFloat(minPriceInput.value) || 0 : 0;
    const maxPrice = maxPriceInput ? parseFloat(maxPriceInput.value) || Infinity : Infinity;
    const sortSelect = document.getElementById('sortSelect');
    const sortVal = sortSelect ? sortSelect.value : 'popular';
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let filtered = products.filter(p => {
        if (searchQuery && !p.title.toLowerCase().includes(searchQuery) && !p.description.toLowerCase().includes(searchQuery)) {
            return false;
        }
        if (!selectedCategories.includes('all') && selectedCategories.length > 0 && !selectedCategories.includes(p.category)) {
            return false;
        }
        if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
            return false;
        }
        if (selectedRams.length > 0 && !selectedRams.includes(p.ram)) {
            return false;
        }
        if (p.price < minPrice || p.price > maxPrice) {
            return false;
        }
        return true;
    });

    if (sortVal === 'cheap') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'expensive') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }
    const resultsCountSpan = document.querySelector('#resultsCount span');
    if (resultsCountSpan) resultsCountSpan.textContent = filtered.length;

    if (filtered.length === 0) {
        catalogGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: var(--text-muted);">
            <i class="fa-solid fa-box-open" style="font-size: 48px; margin-bottom: 15px; color: var(--accent-cyan);"></i>
            <h3>Товарів не знайдено</h3>
            <p>Спробуйте змінити параметри фільтрації або пошуковий запит.</p>
        </div>`;
    } else {
        catalogGrid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
    }
    attachProductCardEvents();
}
function attachProductCardEvents() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            addToCart(id);
        };
    });
    document.querySelectorAll('.wishlist-toggle').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            toggleWishlist(id);
        };
    });
    document.querySelectorAll('.compare-toggle').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            toggleCompare(id);
        };
    });
    document.querySelectorAll('.quick-view-trigger').forEach(el => {
        el.onclick = (e) => {
            e.stopPropagation();
            const id = parseInt(el.getAttribute('data-id'));
            openQuickView(id);
        };
    });
}
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateBadges();
    renderCartDrawer();
    showToast(`Товар "${product.title}" додано до кошика!`);
}
function saveCart() {
    localStorage.setItem('kvant_cart', JSON.stringify(cart));
}
function updateBadges() {
    const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadge = document.getElementById('cartBadge');
    const cartCountHeader = document.getElementById('cartCountHeader');
    const wishlistBadge = document.getElementById('wishlistBadge');
    const wishlistCountHeader = document.getElementById('wishlistCountHeader');
    const compareBadge = document.getElementById('compareBadge');

    if (cartBadge) cartBadge.textContent = totalCartCount;
    if (cartCountHeader) cartCountHeader.textContent = totalCartCount;
    if (wishlistBadge) wishlistBadge.textContent = wishlist.length;
    if (wishlistCountHeader) wishlistCountHeader.textContent = wishlist.length;
    if (compareBadge) compareBadge.textContent = compareList.length;
}
function renderCartDrawer() {
    const container = document.getElementById('cartItemsContainer');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 0; color: var(--text-muted);">
                <i class="fa-solid fa-bag-shopping" style="font-size: 40px; margin-bottom: 10px; color: var(--border-color);"></i>
                <p>Ваш кошик порожній</p>
            </div>
        `;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-img"><img src="${item.image}" alt="${item.title}"></div>
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <div class="cart-item-price">${item.price.toLocaleString()} ₴</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="Видалити"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `).join('');
    }
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
    const total = subtotal - discountAmount;
    const subtotalElem = document.getElementById('cartSubtotal');
    if (subtotalElem) subtotalElem.textContent = `${subtotal.toLocaleString()} ₴`;
    const discountRow = document.getElementById('discountRow');
    if (discountRow) {
        if (appliedDiscount > 0) {
            discountRow.style.display = 'flex';
            const cartDiscount = document.getElementById('cartDiscount');
            if (cartDiscount) cartDiscount.textContent = `-${discountAmount.toLocaleString()} ₴ (${appliedDiscount}%)`;
        } else {
            discountRow.style.display = 'none';
        }
    }
    const cartTotal = document.getElementById('cartTotal');
    if (cartTotal) cartTotal.textContent = `${total.toLocaleString()} ₴`;
    const threshold = 2000;
    const progressFill = document.getElementById('shippingProgressBar');
    const progressText = document.getElementById('shippingProgressText');
    const percent = Math.min(100, Math.round((subtotal / threshold) * 100));
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressText) {
        if (subtotal >= threshold) {
            progressText.innerHTML = `<span style="color: var(--success); font-weight: 700;"><i class="fa-solid fa-check-circle"></i> Ви отримали безкоштовну доставку!</span>`;
        } else {
            const diff = threshold - subtotal;
            progressText.textContent = `Додайте товар ще на ${diff.toLocaleString()} ₴ для безкоштовної доставки`;
        }
    }
}
window.changeQty = function(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    saveCart();
    updateBadges();
    renderCartDrawer();
}
window.removeFromCart = function(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateBadges();
    renderCartDrawer();
    showToast("Товар видалено з кошика");
}
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const index = wishlist.findIndex(item => item.id === productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast("Товар видалено з обраного");
    } else {
        wishlist.push(product);
        showToast(`Товар "${product.title}" додано до обраного!`);
    }
    localStorage.setItem('kvant_wishlist', JSON.stringify(wishlist));
    updateBadges();
    renderWishlistDrawer();
    filterAndRenderCatalog();
    renderProducts();
}
function renderWishlistDrawer() {
    const container = document.getElementById('wishlistItemsContainer');
    if (!container) return;
    if (wishlist.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 0; color: var(--text-muted);">
                <i class="fa-regular fa-heart" style="font-size: 40px; margin-bottom: 10px; color: var(--border-color);"></i>
                <p>Список обраного порожній</p>
            </div>
        `;
    } else {
        container.innerHTML = wishlist.map(item => `
            <div class="cart-item">
                <div class="cart-item-img"><img src="${item.image}" alt="${item.title}"></div>
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <div class="cart-item-price">${item.price.toLocaleString()} ₴</div>
                    <button class="btn btn-primary" style="padding: 6px 12px; font-size: 12px; margin-top: 5px;" onclick="addToCartFromWishlist(${item.id})">У кошик</button>
                </div>
                <button class="remove-item-btn" onclick="toggleWishlist(${item.id})" title="Видалити"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `).join('');
    }
}
window.addToCartFromWishlist = function(id) {
    addToCart(id);
    toggleWishlist(id);
}
function toggleCompare(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const index = compareList.findIndex(item => item.id === productId);
    if (index > -1) {
        compareList.splice(index, 1);
        showToast("Товар видалено з порівняння");
    } else {
        if (compareList.length >= 3) {
            showToast("Можна порівнювати не більше 3 товарів одночасно!");
            return;
        }
        compareList.push(product);
        showToast(`Товар додано до порівняння!`);
    }
    localStorage.setItem('kvant_compare', JSON.stringify(compareList));
    updateBadges();
    filterAndRenderCatalog();
    renderProducts();
}
function renderCompareModal() {
    const container = document.getElementById('compareModalBody');
    const countSpan = document.getElementById('compareModalCount');
    if (!container) return;
    if (countSpan) countSpan.textContent = compareList.length;
    if (compareList.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 0; color: var(--text-muted);">
                <i class="fa-solid fa-scale-balanced" style="font-size: 40px; margin-bottom: 10px; color: var(--border-color);"></i>
                <p>Немає товарів для порівняння</p>
            </div>
        `;
        return;
    }
    container.innerHTML = `
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
                <thead>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <th style="padding: 12px; color: var(--text-muted);">Характеристика</th>
                        ${compareList.map(item => `
                            <th style="padding: 12px; text-align: center;">
                                <img src="${item.image}" alt="${item.title}" style="height: 80px; object-fit: contain; display: block; margin: 0 auto 10px auto;">
                                <div style="font-weight: 700; margin-bottom: 5px;">${item.title}</div>
                                <button onclick="toggleCompare(${item.id}); renderCompareModal();" style="color: var(--danger); font-size: 12px;"><i class="fa-solid fa-trash-can"></i> Видалити</button>
                            </th>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 12px; color: var(--text-muted);">Ціна</td>
                        ${compareList.map(item => `<td style="padding: 12px; font-weight: 800; color: var(--accent-cyan); text-align: center;">${item.price.toLocaleString()} ₴</td>`).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 12px; color: var(--text-muted);">Виробник</td>
                        ${compareList.map(item => `<td style="padding: 12px; text-align: center;">${item.brand}</td>`).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 12px; color: var(--text-muted);">Екран</td>
                        ${compareList.map(item => `<td style="padding: 12px; text-align: center;">${item.screen}</td>`).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 12px; color: var(--text-muted);">Процесор</td>
                        ${compareList.map(item => `<td style="padding: 12px; text-align: center;">${item.processor}</td>`).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 12px; color: var(--text-muted);">Пам'ять (RAM / Storage)</td>
                        ${compareList.map(item => `<td style="padding: 12px; text-align: center;">${item.ram} GB / ${item.storage}</td>`).join('')}
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 12px; color: var(--text-muted);">Акумулятор</td>
                        ${compareList.map(item => `<td style="padding: 12px; text-align: center;">${item.battery}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const body = document.getElementById('quickViewBody');
    if (!body) return;
    body.innerHTML = `
        <div class="quick-view-grid">
            <div class="quick-view-img">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="quick-view-details">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h2>${product.title}</h2>
                <div class="product-rating">
                    <i class="fa-solid fa-star"></i> ${product.rating} <span>(${product.reviews} відгуків)</span>
                </div>
                <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 15px;">${product.description}</p>
                <ul class="quick-view-specs">
                    <li><span>Екран:</span> <strong>${product.screen}</strong></li>
                    <li><span>Процесор:</span> <strong>${product.processor}</strong></li>
                    <li><span>Пам'ять:</span> <strong>${product.ram} GB / ${product.storage}</strong></li>
                    <li><span>Акумулятор:</span> <strong>${product.battery}</strong></li>
                </ul>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 25px;">
                    <div class="product-price">
                        <span class="current-price" style="font-size: 24px;">${product.price.toLocaleString()} ₴</span>
                        ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString()} ₴</span>` : ''}
                    </div>
                    <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal('quickViewOverlay');">Додати в кошик</button>
                </div>
            </div>
        </div>
    `;
    openModal('quickViewOverlay');
}
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            if (window.location.hash !== '#catalog') {
                window.location.hash = '#catalog';
            }
            filterAndRenderCatalog();
        });
    }
    document.querySelectorAll('#categoryFilters input, #brandFilters input, #ramFilters input, #minPrice, #maxPrice, #sortSelect').forEach(el => {
        el.addEventListener('change', filterAndRenderCatalog);
        el.addEventListener('input', filterAndRenderCatalog);
    });
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    if (clearFiltersBtn) {
        clearFiltersBtn.onclick = () => {
            document.querySelectorAll('#categoryFilters input').forEach(cb => cb.checked = false);
            const allCat = document.querySelector('#categoryFilters input[value="all"]');
            if (allCat) allCat.checked = true;
            document.querySelectorAll('#brandFilters input, #ramFilters input').forEach(cb => cb.checked = false);
            const minP = document.getElementById('minPrice');
            const maxP = document.getElementById('maxPrice');
            if (minP) minP.value = '0';
            if (maxP) maxP.value = '100000';
            filterAndRenderCatalog();
        };
    }
    const filterToggleBtn = document.getElementById('filterToggleBtn');
    const filtersSidebar = document.getElementById('filtersSidebar');
    if (filterToggleBtn && filtersSidebar) {
        filterToggleBtn.onclick = () => {
            filtersSidebar.classList.toggle('active');
        };
    }
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.onclick = () => mobileMenu.classList.add('active');
        if (mobileMenuClose) mobileMenuClose.onclick = () => mobileMenu.classList.remove('active');
    }
    const cartBtn = document.getElementById('cartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCartBtn = document.getElementById('closeCartBtn');
    if (cartBtn) {
        cartBtn.onclick = () => {
            renderCartDrawer();
            if (cartDrawer) cartDrawer.classList.add('active');
            if (cartOverlay) cartOverlay.classList.add('active');
        };
    }
    [closeCartBtn, cartOverlay].forEach(el => {
        if (el) el.onclick = () => {
            if (cartDrawer) cartDrawer.classList.remove('active');
            if (cartOverlay) cartOverlay.classList.remove('active');
        };
    });
    const wishlistBtn = document.getElementById('wishlistBtn');
    const wishlistDrawer = document.getElementById('wishlistDrawer');
    const wishlistOverlay = document.getElementById('wishlistOverlay');
    const closeWishlistBtn = document.getElementById('closeWishlistBtn');
    if (wishlistBtn) {
        wishlistBtn.onclick = () => {
            renderWishlistDrawer();
            if (wishlistDrawer) wishlistDrawer.classList.add('active');
            if (wishlistOverlay) wishlistOverlay.classList.add('active');
        };
    }
    [closeWishlistBtn, wishlistOverlay].forEach(el => {
        if (el) el.onclick = () => {
            if (wishlistDrawer) wishlistDrawer.classList.remove('active');
            if (wishlistOverlay) wishlistOverlay.classList.remove('active');
        };
    });
    const compareBtn = document.getElementById('compareBtn');
    const closeCompareModal = document.getElementById('closeCompareModal');
    const compareModalOverlay = document.getElementById('compareModalOverlay');
    if (compareBtn) {
        compareBtn.onclick = () => {
            renderCompareModal();
            openModal('compareModalOverlay');
        };
    }
    if (closeCompareModal && compareModalOverlay) {
        closeCompareModal.onclick = () => closeModal('compareModalOverlay');
        compareModalOverlay.onclick = (e) => { if (e.target === compareModalOverlay) closeModal('compareModalOverlay'); };
    }
    const closeQuickView = document.getElementById('closeQuickView');
    const quickViewOverlay = document.getElementById('quickViewOverlay');
    if (closeQuickView && quickViewOverlay) {
        closeQuickView.onclick = () => closeModal('quickViewOverlay');
        quickViewOverlay.onclick = (e) => { if (e.target === quickViewOverlay) closeModal('quickViewOverlay'); };
    }
    const applyPromoBtn = document.getElementById('applyPromoBtn');
    if (applyPromoBtn) {
        applyPromoBtn.onclick = () => {
            const promoInput = document.getElementById('promoInput');
            const code = promoInput ? promoInput.value.trim().toUpperCase() : '';
            if (code === 'KVANT10') {
                appliedDiscount = 10;
                showToast("Промокод активовано! Знижка 10%");
                renderCartDrawer();
            } else {
                showToast("Невірний або прострочений промокод");
            }
        };
    }
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutOverlay = document.getElementById('checkoutOverlay');
    const closeCheckoutModal = document.getElementById('closeCheckoutModal');
    if (checkoutBtn) {
        checkoutBtn.onclick = () => {
            if (cart.length === 0) {
                showToast("Ваш кошик порожній!");
                return;
            }
            if (cartDrawer) cartDrawer.classList.remove('active');
            if (cartOverlay) cartOverlay.classList.remove('active');

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
            const total = subtotal - discountAmount;
            const checkoutFinalTotal = document.getElementById('checkoutFinalTotal');
            if (checkoutFinalTotal) checkoutFinalTotal.textContent = `${total.toLocaleString()} ₴`;

            openModal('checkoutOverlay');
        };
    }
    if (closeCheckoutModal && checkoutOverlay) {
        closeCheckoutModal.onclick = () => closeModal('checkoutOverlay');
        checkoutOverlay.onclick = (e) => { if (e.target === checkoutOverlay) closeModal('checkoutOverlay'); };
    }
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.onsubmit = (e) => {
            e.preventDefault();
            closeModal('checkoutOverlay');
            cart = [];
            saveCart();
            updateBadges();
            showToast("Замовлення успішно оформлено! Очікуйте дзвінка менеджера.");
        };
    }
    document.querySelectorAll('.faq-question').forEach(q => {
        q.onclick = () => {
            const item = q.parentElement;
            if (item) item.classList.toggle('active');
        };
    });
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.onsubmit = (e) => {
            e.preventDefault();
            contactForm.reset();
            showToast("Повідомлення успішно надіслано!");
        };
    }
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.onsubmit = (e) => {
            e.preventDefault();
            newsletterForm.reset();
            showToast("Дякуємо за підписку!");
        };
    }
}
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}