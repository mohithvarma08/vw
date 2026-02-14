const music = document.getElementById("bgMusic");

document.body.addEventListener("pointerdown",()=>{
  music.play().catch(()=>{});
},{once:true});

function goToStage(id){
  document.querySelectorAll(".stage").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* INTRO */
function openIntro(){
  showIntroSlide("introMain");
}

function showIntroSlide(type){
  document.querySelectorAll("#stage-intro .intro-slide").forEach(s=>s.classList.remove("show"));
  if(type==="yes"){
    document.getElementById("introYes").classList.add("show");
  }else{
    document.getElementById("introMain").classList.add("show");
  }
}

/* MEMORIES FULLSCREEN */
document.querySelectorAll(".polaroid-inner").forEach(card=>{
  card.onclick=()=>{
    const fullscreen=document.querySelector(".memories-fullscreen");
    const content=fullscreen.querySelector(".fullscreen-content");
    content.innerHTML="";
    content.appendChild(card.cloneNode(true));
    fullscreen.classList.remove("hidden");
  };
});

/* LETTER FLOW */
function showLetterSlide(id){
  document.querySelectorAll("#stage-letter .letter-slide").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

document.getElementById("openEnvelope").onclick=()=>showLetterSlide("loveLetter");
document.getElementById("toProposal").onclick=()=>showLetterSlide("proposalSlide");

document.getElementById("yesBtn").onclick=celebrate;
document.getElementById("yesBtn2").onclick=celebrate;

function celebrate(){
  showLetterSlide("celebrationSlide");
  launchConfetti();
}

function launchConfetti(){
  for(let i=0;i<60;i++){
    const c=document.createElement("div");
    c.style.position="fixed";
    c.style.width="8px";
    c.style.height="8px";
    c.style.background=["#ff2f7d","#ff8fab","#ffffff"][Math.floor(Math.random()*3)];
    c.style.left=Math.random()*100+"vw";
    c.style.top="-10px";
    c.style.animation=`fall ${Math.random()*2+2}s linear`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }
}
