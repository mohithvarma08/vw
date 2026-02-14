const polaroids = document.querySelectorAll(".polaroid-inner");
const fullscreen = document.querySelector(".fullscreen-view");
const fullscreenContent = document.querySelector(".fullscreen-content");

polaroids.forEach(card=>{
    card.addEventListener("click", ()=>{
        const clone = card.cloneNode(true);
        fullscreenContent.innerHTML = "";
        fullscreenContent.appendChild(clone);
        fullscreen.classList.remove("hidden");
        document.body.style.overflow="hidden";
    });
});

fullscreen.addEventListener("click", ()=>{
    fullscreen.classList.add("hidden");
    document.body.style.overflow="auto";
});

document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        fullscreen.classList.add("hidden");
        document.body.style.overflow="auto";
    }
});
