// Subtle random tilt for dreamy aesthetic

document.querySelectorAll(".img").forEach((img) => {
    let randomTilt = (Math.random() * 6 - 3);
    img.style.transform = `rotate(${randomTilt}deg)`;
});
