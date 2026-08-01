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

function getHiddenX() {
    return window.innerWidth + 100;
}

function getVisibleX() {
    const cardWidth = myWindow ? myWindow.offsetWidth : 390;
    return Math.max(20, window.innerWidth - cardWidth - 50);
}

let currentX = getHiddenX();
let currentY = -120;

let scrollY = 0;
const frameHeight = 500;

function updateWindowPosition(X = getHiddenX(), Y = -120, triggerTransition = true) {
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

        if (isRotatedMode()) {
            scrollBar.style.display = "none";
        } else {
            scrollBar.style.display = cardHeight > frameHeight ? "block" : "none";
        }

        if (cardHeight > frameHeight && !isRotatedMode()) {
            const scrollRatio = scrollY / maxScroll;
            const availableSpace = 120 - 40;
            const thumbTop = scrollRatio * availableSpace;
            scrollThumb.style.transform = `translateY(${thumbTop}px)`;
        }
    }

    return { targetX, targetY };
}

if (typeof maplibregl !== 'undefined') {
    maplibregl.setRTLTextPlugin(
        'https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.js',
        lazyLoadError => { if (lazyLoadError) console.error(lazyLoadError); },
        true
    );

    const egyptBounds = [
        [24.7, 21.96],
        [37.0, 32.5]
    ];

    const isMobile = window.innerWidth <= 768;

    const map = new maplibregl.Map({
        container: 'map',
        style: '../js/mystyle.json',
        center: isMobile ? [31.2357, 35.5] : [31.2357, 30.1],
        zoom: isMobile ? 5.2 : 6,
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

    function isRotatedMode() {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    document.getElementById('map').addEventListener('wheel', (e) => {
        e.preventDefault();

        if (e.ctrlKey) {
            const mapPoint = getMapPoint(e);
            const zoomFactor = -e.deltaY * 0.008;
            let targetZoom = Math.max(6, Math.min(map.getZoom() + zoomFactor, 15));

            map.zoomTo(targetZoom, {
                around: map.unproject(mapPoint),
                duration: 0
            });
            return;
        }

        const sensitivity = 0.009 / (2 ** (map.getZoom() - 6));
        const currentCenter = map.getCenter();

        let dx = e.deltaX;
        let dy = e.deltaY;

        map.jumpTo({
            center: [
                currentCenter.lng + dx * sensitivity,
                currentCenter.lat - dy * sensitivity
            ]
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
            if (typeof sounds !== 'undefined' && sounds[id]) sounds[id].play();
        }, 200);

        if ($.fn.rwdImageMaps) {
            $('img[usemap]').rwdImageMaps();
        }
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

            updateWindowPosition(getHiddenX(), -120, true);

            setTimeout(() => {
                selected(loc.id, loc.name);
                updateWindowPosition(getVisibleX(), -120, true);
            }, 500);

            handleMarkerClick(loc);
        } else {
            document.querySelectorAll('.custom-marker.active').forEach(el => el.classList.remove('active'));
            document.querySelectorAll("#icons-container img").forEach(e => e.classList.remove("active"));

            current = null;

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
        const classes = icon.classList;
        const id = classes[0];
        const name = classes[1];
        const markerContainer = document.querySelector(`.pin-name.${id}`);
        const pin = document.querySelector(`.custom-marker.${id}`);
        const loc = { id: id, name: name };

        document.getElementById('close').removeAttribute('class');
        triggerLocationClick(loc, pin, markerContainer);
    }

    function externalClick(icon) {
        const classes = icon.classList;
        const id = classes[0];
        if (monumentsData[id] && monumentsData[id].link) {
            window.open(monumentsData[id].link, '_blank');
        }
    }

    if (typeof locations !== 'undefined') {
        locations.forEach(loc => {
            const pin = document.createElement("div");
            pin.classList.add("custom-marker", loc.id);
            pin.style.cursor = "pointer";
            pin.innerHTML = `
            <svg viewBox="0 -960 960 960" style="width: 100%; height: 100%; display: block;">
                <path fill="#F2CA50" d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/>
            </svg>`;

            const markerContainer = document.createElement('div');
            markerContainer.classList.add('pin-name', loc.id);

            const nameElement = document.createElement('p');
            nameElement.innerText = loc.name;

            markerContainer.appendChild(nameElement);
            markerContainer.insertAdjacentHTML("beforeend", `<div class="pin-arrow"></div>`);

            pin.appendChild(markerContainer);

            new maplibregl.Marker({
                element: pin,
                anchor: 'bottom'
            })
                .setLngLat(loc.coords)
                .addTo(map);

            pin.addEventListener('click', (e) => {
                e.stopPropagation();
                triggerLocationClick(loc, pin, markerContainer);
            });

            pin.addEventListener("mouseenter", () => markerContainer.classList.add('hover'));
            pin.addEventListener("mouseleave", () => markerContainer.classList.remove('hover'));
        });
    }

    function getRotatedCoords(e) {
        const touch = e.touches && e.touches.length > 0 ? e.touches[0] : null;
        const rawX = touch ? touch.clientX : e.clientX;
        const rawY = touch ? touch.clientY : e.clientY;

        return {
            clientX: rawX,
            clientY: rawY
        };
    }

    function startDrag(e) {
        if (e.target.closest('button, input, select, textarea, svg, a')) return;

        if (e.type === 'mousedown') {
            if (e.button !== 0) return;
            e.preventDefault();
        }

        isDragging = true;
        myWindow.classList.add("dragging");
        myWindow.style.transition = "none";
        if (scrollBar) scrollBar.style.transition = "none";

        const coords = getRotatedCoords(e);
        startX = coords.clientX - currentX;
        startY = coords.clientY - currentY;
    }

    function moveDrag(e) {
        if (!isDragging) return;

        if (e.type === 'mousemove') {
            e.preventDefault();
        }

        const coords = getRotatedCoords(e);
        const newX = coords.clientX - startX;
        const newY = coords.clientY - startY;

        let finalX = newX;
        let finalY = newY;

        updateWindowPosition(finalX, finalY, false);
    }

    function stopDrag() {
        if (!isDragging) return;
        isDragging = false;
        if (myWindow) myWindow.classList.remove("dragging");
    }

    if (myWindow) {
        myWindow.addEventListener("mousedown", startDrag);
        myWindow.addEventListener("touchstart", startDrag, { passive: true });

        myWindow.addEventListener("wheel", (e) => {
            if (isDragging) return;
            if (isDragging || isRotatedMode()) return;

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

    window.addEventListener("mousemove", moveDrag, { passive: false });
    window.addEventListener("touchmove", moveDrag, { passive: true });

    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);

    function zoom(delta) {
        const targetZoom = Math.max(6, Math.min(map.getZoom() + delta, 14));
        map.easeTo({ zoom: targetZoom, duration: 300 });
    }

    function zoomIn() { zoom(0.5); }
    function zoomOut() { zoom(-0.5); }

    window.addEventListener("DOMContentLoaded", () => {
        const urlParams = new URLSearchParams(window.location.search);
        const markerIdFromUrl = urlParams.get('markerId');

        if (markerIdFromUrl && typeof locations !== 'undefined') {
            const targetLoc = locations.find(l => l.id === markerIdFromUrl);

            if (targetLoc) {
                window.history.replaceState({}, document.title, window.location.pathname);

                setTimeout(() => {
                    const targetPinElement = document.querySelector(`.custom-marker.${markerIdFromUrl}`);
                    const targetContainerElement = document.querySelector(`.pin-name.${markerIdFromUrl}`);
                    triggerLocationClick(targetLoc, targetPinElement, targetContainerElement);
                }, 300);
            }
        }
    });

    function handleOrientationFix() {
        if (typeof map !== 'undefined') {
            setTimeout(() => map.resize(), 350);
        }
    }

    window.addEventListener('resize', () => {
        handleOrientationFix();
        if (!current) {
            currentX = getHiddenX();
            updateWindowPosition(currentX, currentY, false);
        }
    });
    window.addEventListener('orientationchange', handleOrientationFix);

    function toggleNavBar() {
        document.getElementById('nav-bar').classList.toggle('expanded');
    }
}
