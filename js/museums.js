document.querySelector("#grand video").playbackRate = 0.4;
document.querySelector("#egyptian video").playbackRate = 0.8;
let last = null;


function iconCheck() {
    path = document.querySelector('.play svg #path');
    let cardCheck = document.querySelector('.play');
    let videocheck = cardCheck.querySelector('video');
    if (!videocheck.paused) {
        path.classList.remove('paused');
    } else {
        path.classList.add('paused');
    }
}

function toggleIcon() {
    const cardToggle = document.querySelector('.play');
    const videoToggle = cardToggle.querySelector('video');
    if (!videoToggle.paused) {
        videoToggle.pause();
        observer.unobserve(cardToggle);
    } else {
        videoToggle.play();
        observer.observe(cardToggle);
    }
    iconCheck();
}

const options = {
    root: null,
    threshold: 0.5
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        if (entry.isIntersecting) {
            video.play();
            iconCheck();
        }
        else {
            video.pause();
            iconCheck();
        }
    });
}, options);
observer.observe(document.querySelector(".play"));

function play(id, e) {
    if (e.target.closest('svg')) return;
    if (last === id) return;
    let playCard = document.querySelector(".play")
    playCard.querySelector("video").pause();
    observer.unobserve(playCard);
    playCard.classList.remove("play");
    let card = document.getElementById(id);
    card.classList.add("play");
    observer.observe(card);
    last = id;
}

function state() {
    const hours = new Date().getHours();
    document.querySelectorAll(".state:not(.grand)").forEach(e => {
        if (hours >= 9 && hours < 17) {
            e.classList.add('open');
            e.innerText = 'open';
        }
        else {
            e.classList.remove('open');
            e.innerText = 'closed';
        }
        
    });
    if (hours >= 9 && hours < 18){
        document.querySelector('.grand').classList.add('open');
        document.querySelector('.grand').innerText = 'open';
    }
    else{
        document.querySelector('.grand').classList.remove('open');
        document.querySelector('.grand').innerText = 'closed';
    }

    setTimeout(state, 1800000);
}
state();