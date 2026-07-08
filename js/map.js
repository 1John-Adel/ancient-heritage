// 1. تعريف عناصر الواجهة الأصلية والصحيحة
const myWindow = document.getElementById("information-container");
const scrollBar = document.getElementById("custom-scrollbar");
const scrollThumb = document.getElementById("scroll-thumb");

// 2. المتغيرات الخاصة بحالة الخريطة والنافذة
let activeLocationName = null;
let previousCenter = null;
let previousZoom = null;

let isDragging = false;
let startX = 0;
let startY = 0;

let currentX = 1600;
let currentY = -120;

let totalX = currentX;
let totalY = currentY;

let scrollY = 0;
const frameHeight = 500;

// 3. دالة تحديث موضع النافذة والـ Scrollbar (تم تنظيفها لتعتمد على الموضع الافتراضي للـ CSS)
function updateWindowPosition(X = 1600, Y = -120) {
    if (!myWindow) return { targetX: X, targetY: Y };

    // إذا رجعت للموضع الافتراضي عبر استدعاء الدالة، ضيف الترانزيشن الناعم
    if (X === 1600 && Y === -120) {
        myWindow.style.transition = "transform 0.5s ease-out";
        if (scrollBar) scrollBar.style.transition = "transform 0.5s ease-out";
        
        setTimeout(() => {
            if (!isDragging) {
                myWindow.style.transition = "none";
                if (scrollBar) scrollBar.style.transition = "none";
            }
        }, 500);
    }

    const targetX = X;
    const targetY = 120 + Y + scrollY;

    currentX = X;
    currentY = Y;

    myWindow.style.transform = `translate(${targetX}px, ${targetY}px)`;

    if (scrollBar && scrollThumb) {
        const scrollBarX = targetX + myWindow.offsetWidth - 15;
        const scrollBarY = 220 + Y;

        scrollBar.style.transform = `translate(${scrollBarX}px, ${scrollBarY}px)`;
        const cardHeight = myWindow.offsetHeight;
        const maxScroll = -(cardHeight - frameHeight);

        scrollBar.style.display = "block";
        const scrollRatio = scrollY / maxScroll;
        const availableSpace = 120 - 40;

        const thumbTop = scrollRatio * availableSpace;
        scrollThumb.style.transform = `translateY(${thumbTop}px)`;
    }

    return { targetX, targetY };
}

// 4. استدعاء إضافة اللغة العربية قبل إنشاء الخريطة
maplibregl.setRTLTextPlugin(
    'https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.js',
    lazyLoadError => { if (lazyLoadError) console.error(lazyLoadError); },
    true 
);

const egyptBounds = [
    [24.7, 21.96], 
    [37.0, 32.5]  
];

const map = new maplibregl.Map({
    container: 'map',
    style: '../js/mystyle.json',
    center: [31.2357, 30.1],
    zoom: 6,
    maxZoom: 15,
    maxBounds: egyptBounds,
    scrollZoom: false, 
    touchZoomRotate: true,
    dragPan: true,
    attributionControl: false
});

function getMapPoint(e) {
    const rect = map.getContainer().getBoundingClientRect();
    return new maplibregl.Point(
        e.clientX - rect.left,
        e.clientY - rect.top
    );
}

document.getElementById('map').addEventListener('wheel', (e) => {
    e.preventDefault();

    if (e.ctrlKey) {
        const mapPoint = getMapPoint(e);
        const zoomFactor = -e.deltaY * 0.008;
        let targetZoom = map.getZoom() + zoomFactor;

        targetZoom = Math.max(6, Math.min(targetZoom, 15));

        map.zoomTo(targetZoom, {
            around: map.unproject(mapPoint),
            duration: 0
        });

        return;
    }

    const sensitivity = 0.009 / Math.pow(2, map.getZoom() - 6);
    const currentCenter = map.getCenter();

    const newLng = currentCenter.lng + (e.deltaX * sensitivity);
    const newLat = currentCenter.lat - (e.deltaY * sensitivity);

    map.jumpTo({
        center: [newLng, newLat]
    });

}, { passive: false });

// 5. مصفوفة الأماكن وإحداثياتها
const locations = [
    { id: "pyramid", name: "The Great Pyramid", coords: [31.13414197593711, 29.98025663072421] },
    { id: "gem", name: "Grand Egyptian Museum", coords: [31.124382973158742, 29.993557602550066] },
    { id: "coptic", name: "Coptic Museum", coords: [31.23036500923982, 30.0062] },
    { id: "egyptian", name: "The Egyptian Museum", coords: [31.252769526434466, 30.00592242019631] },
    { id: "islamic", name: "The Islamic Arts Museum", coords: [31.2519, 30.044741372972027] },
    { id: "nmec", name: "NMEC", coords: [31.24820710923998, 30.008676490664424] },
    { id: "siwa", name: "Siwa Oasis", coords: [25.51911200952857, 29.204308794881353] },
    { id: "dakhla", name: "Dakhla Oasis", coords: [29.1257595075955, 25.51894913850731] },
    { id: "kharga", name: "Kharga Oasis", coords: [30.558125463654797, 25.4392918457923] },
    { id: "karnak", name: "El Karnak", coords: [32.65767799133573, 25.718940903083553] },
    { id: "simbel", name: "Abu Simbel", coords: [31.625959927998306, 22.337410507506604] },
    { id: "baharya", name: "Baharya Oasis", coords: [28.90835030357991, 28.384786560697552] },
    { id: "farafra", name: "Farafra Oasis", coords: [27.97074807480394, 27.056803926113123] }
];

function handleMarkerClick(loc) {
    if (!activeLocationName) {
        previousCenter = map.getCenter();
        previousZoom = map.getZoom();
    }

    activeLocationName = loc.name;

    map.dragPan.disable();
    map.boxZoom.disable();

    map.flyTo({
        center: loc.coords,
        zoom: 15,
        duration: 3000,
        essential: true
    });

    setTimeout(() => {
        map.dragPan.enable();
        map.boxZoom.enable();
    }, 2000);
}

// 7. إنشاء الماركرز
locations.forEach(loc => {
    let x = loc.id;

    const pin = document.createElement("div");
    pin.className = "custom-marker";
    pin.style.cursor = "pointer";
    pin.innerHTML = `
        <svg viewBox="0 -960 960 960" style="width: 100%; height: 100%; display: block;">
            <path fill="#F2CA50" d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/>
        </svg>`;

    const markerContainer = document.createElement('div');
    markerContainer.classList.add('pin-name', x);

    const nameElement = document.createElement('p');
    nameElement.innerText = loc.name;

    markerContainer.appendChild(nameElement);
    markerContainer.insertAdjacentHTML("beforeend", `<div class="pin-arrow"></div>`);

    pin.appendChild(markerContainer);

    const marker = new maplibregl.Marker({
        element: pin,
        anchor: 'bottom'
    })
        .setLngLat(loc.coords)
        .addTo(map);

    pin.addEventListener('click', () => {
        handleMarkerClick(loc);

        if (myWindow) myWindow.style.transition = "transform 0.5s ease-out";
        if (scrollBar) scrollBar.style.transition = "transform 0.5s ease-out";

        if (typeof selected === "function") {
            selected(loc.id, loc.name);
        }

        if (typeof updateWindowPosition === "function") {
            updateWindowPosition(1100, -120);
        }

        setTimeout(() => {
            if (myWindow) myWindow.style.transition = "none";
            if (scrollBar) scrollBar.style.transition = "none";
        }, 500);
    });

    pin.addEventListener("mouseenter", () => {
        markerContainer.classList.add('hover');
    });

    pin.addEventListener("mouseleave", () => {
        markerContainer.classList.remove('hover');
    });
});

// 8. أحداث السحب والـ Scroll للنافذة
if (myWindow) {
    myWindow.addEventListener("mousedown", (e) => {
        if (e.target.closest('button, input, select, textarea')) return;

        e.preventDefault();
        isDragging = true;
        myWindow.classList.add("dragging");

        myWindow.style.transition = "none";
        if (scrollBar) scrollBar.style.transition = "none";

        startX = e.clientX - currentX;
        startY = e.clientY - currentY;
    });

    myWindow.addEventListener("wheel", (e) => {
        if (isDragging) return;

        e.preventDefault();
        scrollY -= e.deltaY;

        const cardHeight = myWindow.offsetHeight;
        const maxScroll = -(cardHeight - frameHeight);

        if (cardHeight > frameHeight) {
            scrollY = Math.max(maxScroll, Math.min(0, scrollY));
        } else {
            scrollY = 0;
        }

        myWindow.style.transition = "none";
        if (scrollBar) scrollBar.style.transition = "none";

        updateWindowPosition(currentX, currentY);
    }, { passive: false });
}

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const newX = e.clientX - startX;
    const newY = e.clientY - startY;

    updateWindowPosition(newX, newY);
});

document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    if (myWindow) myWindow.classList.remove("dragging");
});

// [تم حذف استدعاء الدالة من هنا لأن الموضع مضبوط مسبقاً من الـ CSS]

// 9. دوال التحكم في أزرار الزوم الخارجي
function zoomIn() {
    let currentZoom = map.getZoom();
    let targetZoom = Math.min(currentZoom + 0.5, 14);

    if (typeof customZoom !== 'undefined') customZoom = targetZoom;

    map.easeTo({
        zoom: targetZoom,
        duration: 300
    });
}

function zoomOut() {
    let currentZoom = map.getZoom();
    let targetZoom = Math.max(currentZoom - 0.5, 6);

    if (typeof customZoom !== 'undefined') customZoom = targetZoom;

    map.easeTo({
        zoom: targetZoom,
        duration: 300
    });
}