document.querySelectorAll('#pics-sec div').forEach(div=>{
    div.addEventListener('click', ()=>{
        window.location.href = `pages/map.html?markerId=${div.id}`;
    })
});