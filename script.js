// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Typewriter effect
const text = `From the moment you walked into my life, everything changed.
You became my favorite thought, my safest place, and my happiest feeling.
No matter where life takes us, I know one thing for sure —
I want every tomorrow with you. ❤️`;

let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;

// Valentine buttons
function yesAnswer() {
  document.getElementById("answer").innerHTML =
    "You just made me the happiest person alive 💖💍";
}

const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
