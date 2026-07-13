let userData = JSON.parse(localStorage.getItem("user"));

if (userData.Name) {
    document.querySelector("#head h1").innerText = userData.Name;
    document.querySelector("#head h4").innerText = userData.Email;
}

function removeFromLocal(key, id) {
    let savedItems = JSON.parse(localStorage.getItem(key)) || [];
    let updatedItems = savedItems.filter(el => el.artifactName !== id);
    localStorage.setItem(key, JSON.stringify(updatedItems));
}



let favoriteData = JSON.parse(localStorage.getItem("favorite"));
let archiveData = JSON.parse(localStorage.getItem("archive"));

function update() {   
    let favoriteData = JSON.parse(localStorage.getItem("favorite"));
    let archiveData = JSON.parse(localStorage.getItem("archive"));
    document.querySelector('#arc span').innerText = archiveData?.length || 0;
    document.querySelector('#fav span').innerText = favoriteData?.length || 0;
}

if (localStorage.getItem("favorite") === "[]" || localStorage.getItem("favorite") === null) {
    document.getElementById("cards-sec").innerText = "add something you like!";
}
else {
    for (let j of favoriteData) {
        let card = document.createElement("div");
        let picDiv = document.createElement("div");
        let pic = document.createElement("img");
        let material = document.createElement("h5");
        let textContainer = document.createElement("div");
        let text = document.createElement('div');
        let period = document.createElement('p');
        let museum = document.createElement("h6");
        let name = document.createElement("h2");
        let svg = document.createElement('div');

        picDiv.classList.add("picture");
        pic.setAttribute("src", j.image);
        material.innerText = j.material;
        picDiv.appendChild(material);
        picDiv.appendChild(pic);

        textContainer.classList.add("text-cnt");
        period.innerText = j.Period;
        name.innerText = j.artifactName;
        museum.innerText = j.museum;
        text.appendChild(period);
        text.appendChild(name);
        text.appendChild(museum);

        svg.innerHTML = `
            <svg viewBox="0 -960 960 960">
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/>
            </svg>
        `;
        svg.classList.add('svg');

        textContainer.appendChild(text);
        textContainer.appendChild(svg);

        card.classList.add("card");
        card.appendChild(picDiv);
        card.appendChild(textContainer);

        document.getElementById("cards-sec").appendChild(card);

        svg.querySelector('svg').addEventListener('click', () => {
            removeFromLocal('favorite', j.artifactName);
            update();

            card.remove();

            let remainingCards = document.querySelectorAll("#cards-sec .card");
            if (remainingCards.length === 0) {
                document.getElementById("cards-sec").innerText = "add something you like!";
            }
        });
    }
}

window.onload = update;

function pop() {
    document.getElementById('pop').classList.add('out');

    document.getElementById('out').onclick = () => {
        localStorage.removeItem("favorite");
        localStorage.removeItem("archive");
        localStorage.removeItem("log");
        window.location.href = "../index.html";
    };

    document.getElementById('stay').onclick = () =>{
        document.getElementById('pop').classList.remove('out');
    }
}