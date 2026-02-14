function openLetter(){
    document.querySelector(".envelope").style.display="none";
    document.getElementById("letterCard").style.display="block";
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

/* CONFETTI */

const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti(){
    for(let i=0;i<120;i++){
        confetti.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,
            r:Math.random()*6+4,
            d:Math.random()*3+2
        });
    }
    animate();
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="#ff2f7d";

    confetti.forEach(c=>{
        ctx.beginPath();
        ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
        ctx.fill();
        c.y+=c.d;
        if(c.y>canvas.height) c.y=0;
    });

    requestAnimationFrame(animate);
}
