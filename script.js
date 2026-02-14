function showSlide(id){
  document.querySelectorAll(".slide").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* Envelope click */
document.getElementById("openEnvelope").onclick = function(){
  showSlide("loveLetter");
};

/* To Proposal */
document.getElementById("toProposal").onclick = function(){
  showSlide("proposalSlide");
};

/* Yes buttons */
document.getElementById("yesBtn").onclick = celebrate;
document.getElementById("yesBtn2").onclick = celebrate;

function celebrate(){
  showSlide("celebrationSlide");
  launchConfetti();
}

/* Confetti */
function launchConfetti(){
  for(let i=0;i<80;i++){
    let confetti=document.createElement("div");
    confetti.className="confetti";
    confetti.style.left=Math.random()*100+"vw";
    confetti.style.background=["#ff2f7d","#ff8fab","#ffffff"][Math.floor(Math.random()*3)];
    confetti.style.animationDuration=(Math.random()*2+2)+"s";
    document.body.appendChild(confetti);

    setTimeout(()=>confetti.remove(),3000);
  }
}
