window.addEventListener("load", () => {

const images = document.querySelectorAll(".dream");

images.forEach((img, index) => {
img.style.opacity = "0";
img.style.transform += " scale(0.9)";

setTimeout(() => {
img.style.transition = "0.8s ease";
img.style.opacity = "1";
img.style.transform = img.style.transform.replace(" scale(0.9)", "");
}, index * 120);
});

});
