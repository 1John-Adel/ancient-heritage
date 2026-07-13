function removeFromLocal(key, id) {
    let savedItems = JSON.parse(localStorage.getItem(key)) || [];
    let updatedItems = savedItems.filter(el => el.artifactName !== id);
    localStorage.setItem(key, JSON.stringify(updatedItems));
}

function isItemInStorage(key, id) {
    let savedItems = JSON.parse(localStorage.getItem(key)) || [];
    return savedItems.some(item => item.artifactName === id);
}

function addToLocal(key, value) {
    let savedItems = JSON.parse(localStorage.getItem(key)) || [];
    let isExist = false;

    for (let i = 0; i < savedItems.length; i++) {
        if (savedItems[i].artifactName === value.name) {
            isExist = true;
            break;
        }
    }
    if (isExist)
        return;

    savedItems.push(value);
    localStorage.setItem(key, JSON.stringify(savedItems));
}


for (let i of products.data) {

    let card = document.createElement("div");
    let x = i.museum.replaceAll(" ", "-");
    let y = i.type.toLowerCase();
    let id = i.id;
    card.classList.add("card", x, y, id);

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let textContainer = document.createElement("div")
    textContainer.classList.add("text-container")

    let material = document.createElement("h5");
    material.classList.add("artifact-material");
    material.innerText = i.material.toUpperCase();
    imgContainer.appendChild(material);

    let text = document.createElement('div');
    textContainer.appendChild(text);

    let name = document.createElement("h2");
    name.classList.add("artifact-name");
    name.innerText = i.artifactName.toUpperCase();
    text.appendChild(name);

    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    let subtitle = document.createElement('div');
    subtitle.classList.add("artifacte-subtitle");
    let museum = document.createElement("p");
    museum.innerHTML = `
        <svg viewBox="0 -960 960 960">
            <path 
                d="M80-80v-80h80v-360H80v-80l400-280 400 280v80h-80v360h80v80H80Zm240-160h80v-160l80 120 80-120v160h80v-280h-80l-80 120-80-120h-80v280Z"/>
        </svg>
        ${i.museum.toUpperCase()}
    `;

    i.museum.toUpperCase();
    let period = document.createElement('p');
    period.classList.add('period')
    period.innerHTML = `
        <svg viewBox="0 -960 960 960">
            <path
                d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/>
        </svg>
        ${i.Period.toUpperCase()}
    `;
    subtitle.appendChild(museum);
    subtitle.appendChild(period);
    text.appendChild(subtitle);


    let svg = document.createElement('div');
    svg.innerHTML = `
        <svg viewBox="0 -960 960 960" class="archive">
            <path
                d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
        </svg>
        <svg viewBox="0 -960 960 960" class="heart">
            <path
                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
        </svg>
    `;

    let heartIcon = svg.querySelector('.heart');
    let archiveIcon = svg.querySelector('.archive');

    if (isItemInStorage("archive", i.artifactName)) {
        archiveIcon.classList.add("active");
    }
    if (isItemInStorage("favorite", i.artifactName)) {
        heartIcon.classList.add("active");
    }

    // 3. إضافة الـ Listener للأيقونة القلب
    heartIcon.onclick = (e) => {
        let log = localStorage.getItem("log");

        if (log === "loged") {
            if (heartIcon.classList.contains("active")) {
                removeFromLocal("favorite", i.artifactName);
                heartIcon.classList.remove("active");
            } else {
                addToLocal("favorite", i);
                heartIcon.classList.add("active");
            }
        } else {
            window.location.href = "sign-up.html";
        }
    }

    // 4. إضافة الـ Listener لأيقونة الأرشيف
    archiveIcon.onclick = (e) => {
        let log = localStorage.getItem("log");

        if (log === "loged") {
            if (archiveIcon.classList.contains("active")) {
                removeFromLocal("archive", i.artifactName);
                archiveIcon.classList.remove("active");
            } else {
                addToLocal("archive", i);
                archiveIcon.classList.add("active");
            }
        } else {
            window.location.href = "sign-up.html";
        }
    }

    let details = document.createElement('a');
    details.href = i.link;
    details.innerText = 'Details';
    details.target = '_blank'

    cardFooter.appendChild(svg);
    cardFooter.appendChild(details);
    textContainer.appendChild(cardFooter);
    card.appendChild(textContainer);

    document.getElementById("artifacts-container").appendChild(card);
}

function filterSelection(value = 'all', filterType) {
    let parentSelector = filterType === 'museum' ? '#museum' : '#type';
    let buttons = document.querySelectorAll(`${parentSelector} button`);

    buttons.forEach(button => {
        if (button.id === value) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let activeMuseumBtn = document.querySelector("#museum button.active");
    let activeTypeBtn = document.querySelector("#type button.active");

    let currentMuseum = activeMuseumBtn ? activeMuseumBtn.id : 'all';
    let currentType = activeTypeBtn ? activeTypeBtn.id : 'all';

    let elements = document.querySelectorAll(".card");

    elements.forEach(e => {
        let museumMatch = (currentMuseum === 'all' || e.classList.contains(currentMuseum));

        let typeMatch = (currentType === 'all' || e.classList.contains(currentType));

        if (museumMatch && typeMatch) {
            e.classList.remove("hide");
        } else {
            e.classList.add("hide");
        }
    });
    updatePagination();
    previous(1);
}

document.querySelectorAll('#museum button').forEach(button => {
    button.addEventListener('click', () => {
        filterSelection(button.id, 'museum');
    });
});

document.querySelectorAll('#type button').forEach(button => {
    button.addEventListener('click', () => {
        filterSelection(button.id);
    });
});


function showMethodActive(value = 'grid') {
    document.querySelectorAll("#cards-show span").forEach(method => {
        method.classList.remove("active");
    });
    document.getElementById(value).classList.add('active');

    previous(1);

    if (value == 'grid') document.getElementById('scroll-wrapper').classList.remove('list');
    else document.getElementById('scroll-wrapper').classList.add('list');
}


function searcher() {
    let searchValue = document.querySelector("#search input").value.toUpperCase();
    let cards = document.querySelectorAll(".card:not(.hide)");

    cards.forEach((card) => {
        let name = card.querySelector(".artifact-name").innerText.toUpperCase();
        let museum = card.querySelector(".artifacte-subtitle").innerText.toUpperCase();

        if (name.includes(searchValue) || museum.includes(searchValue)) {
            card.classList.remove("hide");
        }
        else {
            card.classList.add("hide");
        }

    });
    if (searchValue.trim() === "") {
        document.querySelectorAll(".card").forEach(card => {
            card.classList.remove('hide');
        });
        filterSelection('all', 'museum');
        filterSelection('all');
    }

    updatePagination();
}

document.querySelector("#search input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searcher();
    }
});

let search = document.querySelector(".search-window input");
let cards = document.querySelectorAll(".card");



let currentPage = 1;

function getScrollAmount() {
    const container = document.getElementById('scroll-wrapper');
    return container.clientWidth + 30;
}

function getTotalPages() {
    const container = document.getElementById('scroll-wrapper');
    const scrollAmount = getScrollAmount();
    return Math.ceil(container.scrollWidth / scrollAmount);
}

function next() {
    const container = document.getElementById('scroll-wrapper');
    const totalPages = getTotalPages();
    const scrollAmount = getScrollAmount();

    if (currentPage < totalPages) {
        currentPage++;
        const targetLeft = (currentPage - 1) * scrollAmount;
        container.scrollTo({
            left: targetLeft,
            behavior: 'smooth'
        });
        updatePagination();
    }
}

function previous(fromStart = 0) {
    const container = document.getElementById('scroll-wrapper');
    const scrollAmount = getScrollAmount();
    if (fromStart) {
        currentPage = 1;
        container.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    }
    else if (currentPage > 1) {
        currentPage--;
        const targetLeft = (currentPage - 1) * scrollAmount;
        container.scrollTo({
            left: targetLeft,
            behavior: 'smooth'
        });
    }
    updatePagination();
}

function updatePagination() {
    let totalPages = getTotalPages();

    const activeEl = document.querySelector('#scrolling div.active');
    activeEl.classList.remove('active');

    let startPage = 1;
    if (currentPage > 2 && totalPages > 3) {
        startPage = Math.min(currentPage - 1, totalPages - 2);
    }

    const pg1 = document.getElementById('pg1');
    const pg2 = document.getElementById('pg2');
    const pg3 = document.getElementById('pg3');
    const p = document.querySelector('#scrolling p');

    pg1.innerText = startPage;
    pg2.innerText = startPage + 1;
    pg3.innerText = startPage + 2;

    let activeId = 'pg1';
    if (currentPage === startPage + 1) activeId = 'pg2';
    if (currentPage >= startPage + 2) activeId = 'pg3';

    const currentActiveEl = document.getElementById(activeId);
    currentActiveEl.classList.add('active');

    pg2.classList.remove('hide');
    pg3.classList.remove('hide');
    p.classList.remove('hide');

    if (totalPages < 2) {
        pg2.classList.add('hide');
        pg3.classList.add('hide');
        p.classList.add('hide');
    }
    else if (totalPages < 3) {
        pg3.classList.add('hide');
        p.classList.add('hide');
    }
    else if (totalPages === 3) {
        p.classList.add('hide');
    }
    else if (currentPage === totalPages || currentPage === totalPages - 1) {
        p.classList.add('hide');
    }

    let cnt = document.getElementById('scroll-wrapper');
    if (cnt.querySelectorAll('.card:not(.hide)').length > 0) cnt.classList.remove('empty');
    else cnt.classList.add('empty');
}

window.onload = () => {
    filterSelection('all', 'museum');
    filterSelection('all');
    showMethodActive();
    updatePagination();

    document.getElementById('pg1').addEventListener('click', () => {
        if (currentPage == 11) {
            for (let i = 0; i < 2; i++) {
                previous();
            }
        }
        else
            previous();
    });

    document.getElementById('pg2').addEventListener('click', () => {
        if (currentPage == 3 || currentPage == 11) previous();
        else if (currentPage == 1) next();
    });

    document.getElementById('pg3').addEventListener('click', () => {
        if (currentPage == 1) {
            for (let i = 0; i < 2; i++) {
                next();
            }
        }
        else
            next();
    });
}