function openLetter(){
let card = document.getElementById("letterCard");
card.classList.add("show");
}

function goToProposal(){
document.getElementById("letterSection").classList.remove("active");
document.getElementById("proposalSection").classList.add("active");
}

function celebrate(){
document.getElementById("proposalSection").classList.remove("active");
document.getElementById("celebrationSection").classList.add("active");
startConfetti();
}

function startConfetti(){
let container = document.getElementById("confettiContainer");

for(let i=0;i<100;i++){
let conf = document.createElement("div");
conf.classList.add("confetti");
conf.style.left = Math.random()*100 + "vw";
conf.style.animationDelay = Math.random()*3 + "s";
conf.style.backgroundColor = ["#ff2f7d","#ff7ab6","#ffffff","#ffd1e8"][Math.floor(Math.random()*4)];
container.appendChild(conf);
}
}
