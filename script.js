window.onload = function(){

    const images = document.querySelectorAll(".dream");

    images.forEach((img, index) => {
        setTimeout(()=>{
            img.classList.add("show");
        }, index * 180);
    });

};
