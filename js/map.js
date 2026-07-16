const myWindow = document.getElementById("information-container");
const scrollBar = document.getElementById("custom-scrollbar");
const scrollThumb = document.getElementById("scroll-thumb");

let current = null;
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

function updateWindowPosition(X = 1600, Y = -120, triggerTransition = true) {
    if (!myWindow) return { targetX: X, targetY: Y };

    if (triggerTransition) {
        myWindow.style.transition = "transform 0.5s ease-out";
        if (scrollBar) scrollBar.style.transition = "transform 0.5s ease-out";

        setTimeout(() => {
            if (!isDragging) {
                myWindow.style.transition = "none";
                if (scrollBar) scrollBar.style.transition = "none";
            }
        }, 500);
    } else {
        myWindow.style.transition = "none";
        if (scrollBar) scrollBar.style.transition = "none";
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

function handleMarkerClick(loc) {
    document.getElementById('close').removeAttribute('class');
    document.getElementById('ext-window').removeAttribute('class');
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

    document.getElementById('close').classList.add(loc.id, loc.name.replaceAll(' ', '-'));
    document.getElementById('ext-window').classList.add(loc.id);
}

function selected(id, name) {
    let infoCnt = document.getElementById("information-container");

    let img = document.getElementById('img');
    let p1 = infoCnt.querySelector('#p1');
    let mapElement = infoCnt.querySelector('map[name="image-map"]');
    let info = infoCnt.querySelector('#selected-info');
    let infoP = infoCnt.querySelector('#info-p');

    img.src = "../assets/images/Map-imgs/" + id + ".jpg";
    p1.innerText = name;

    const item = monumentsData[id];
    if (item) {
        mapElement.innerHTML = item.areaTag;
        info.innerHTML = item.stats.map(stat => `
            <section>
                <label>${stat.label}</label>
                <p>${stat.value}</p>
            </section>
        `).join('');
        infoP.innerText = item.desc;
    }

    setTimeout(() => {
        if (sounds[id]) sounds[id].play();
    }, 200);

    $(document).ready(function () {
        $('img[usemap]').rwdImageMaps();
    });
}


function triggerLocationClick(loc, pinElement, markerContainerElement) {
    if (markerContainerElement) markerContainerElement.classList.remove('hover');
    const isSameElement = (loc.id === current);

    if (!isSameElement) {
        document.querySelectorAll('.custom-marker.active').forEach(el => el.classList.remove('active'));
        document.querySelectorAll("#icons-container img").forEach(e => e.classList.remove("active"));

        if (pinElement) pinElement.classList.add('active');
        const currentIcon = document.getElementById(loc.id);
        if (currentIcon) currentIcon.classList.add('active');

        current = loc.id;

        updateWindowPosition(1600, -120, true);

        setTimeout(() => {
            selected(loc.id, loc.name);
            updateWindowPosition(1100, -120, true);
        }, 500);

        handleMarkerClick(loc);
    } else {

        document.querySelectorAll('.custom-marker.active').forEach(el => el.classList.remove('active'));
        document.querySelectorAll("#icons-container img").forEach(e => e.classList.remove("active"));

        current = null;
        updateWindowPosition();

        if (previousCenter && previousZoom) {
            map.flyTo({
                center: previousCenter,
                zoom: previousZoom,
                duration: 2000,
                essential: true
            });
            activeLocationName = null;
            previousCenter = null;
            previousZoom = null;
        }
    }
}

function closeClick(icon) {
    const clases = icon.classList;
    const id = clases[0];
    const name = clases[1];
    const markerContainer = document.querySelector(`.pin-name.${id}`);
    const pin = document.querySelector(`.custom-marker.${id}`);
    const loc = { id: id, name: name };
    document.getElementById('close').removeAttribute('class');
    triggerLocationClick(loc, pin, markerContainer);
}

function externalClick(icon) {
    const clases = icon.classList;
    const id = clases[0];
    const link = monumentsData[id].link;
    window.open(link, '_blank');
}

locations.forEach(loc => {
    let x = loc.id;
    const pin = document.createElement("div");
    pin.classList.add("custom-marker", loc.id);
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

    pin.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerLocationClick(loc, pin, markerContainer);
    });

    pin.addEventListener("mouseenter", () => {
        markerContainer.classList.add('hover');
    });

    pin.addEventListener("mouseleave", () => {
        markerContainer.classList.remove('hover');
    });

    console.log(loc);
});

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

        updateWindowPosition(currentX, currentY, false);
    }, { passive: false });
}

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const newX = e.clientX - startX;
    const newY = e.clientY - startY;

    updateWindowPosition(newX, newY, false);
});

document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    if (myWindow) myWindow.classList.remove("dragging");
});

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

window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const markerIdFromUrl = urlParams.get('markerId');

    if (markerIdFromUrl) {
        const targetLoc = locations.find(l => l.id === markerIdFromUrl);

        if (targetLoc) {
            const newUrl = window.location.pathname;
            window.history.replaceState({}, document.title, newUrl);

            setTimeout(() => {
                const targetPinElement = document.querySelector(`.custom-marker.${markerIdFromUrl}`);
                const targetContainerElement = document.querySelector(`.pin-name.${markerIdFromUrl}`);

                triggerLocationClick(targetLoc, targetPinElement, targetContainerElement);
            }, 200);
        }
    }
});

// map.on('click', (e) => { const features = map.queryRenderedFeatures(e.point); if (features.length > 0) { console.log("اسم الطبقة المسؤولية:", features[0].layer.id); console.log("الـ source-layer بتاعها:", features[0].layer['source-layer']); } });