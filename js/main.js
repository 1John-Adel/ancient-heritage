let log = localStorage.getItem("log");
let Button = document.getElementById("sign-btn");
let Icon = document.getElementById("icon");
if (log === "loged") {
    if (Icon) Icon.style.display = "block";
    if (Button) Button.style.display = "none";
} else {
    if (Icon) Icon.style.display = "none";
    if (Button) Button.style.display = "block";
}

document.querySelectorAll('img').forEach(img => {
    img.ondragstart = () => false;
});

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');

    if (preloader) {
        preloader.classList.add('hidden');

        preloader.style.display = 'none';
    }
    document.documentElement.classList.remove('no-scroll');
});
