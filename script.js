function openLetter(){
    document.querySelector(".envelope").classList.add("open");
    document.getElementById("openBtn").style.display="none";

    setTimeout(()=>{
        document.getElementById("letterCard").style.display="block";
    },600);
}

function goToQuestion(){
    document.getElementById("letterSlide").classList.remove("active");
    document.getElementById("questionSlide").classList.add("active");
}

function celebrate(){
    document.getElementById("questionSlide").classList.remove("active");
    document.getElementById("celebrationSlide").classList.add("active");
    startConfetti();
}

/* ===== CONFETTI ===== */

const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti(){
    for(let i=0;i<150;i++){
        confetti.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,
            r:Math.random()*6+4,
            d:Math.random()*150
        });
    }
    drawConfetti();
}

function drawConfetti(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="#ff2f7d";
    confetti.forEach((c,i)=>{
        ctx.beginPath();
        ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
        ctx.fill();
        c.y+=2;
        if(c.y>canvas.height) c.y=0;
    });
    requestAnimationFrame(drawConfetti);
}
