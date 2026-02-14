const events = document.querySelectorAll(".event");
const line = document.getElementById("mainLine");

window.addEventListener("load", function(){
  const finalCard = document.querySelector(".finalCard");
  const height = finalCard.offsetTop + finalCard.offsetHeight/2;
  line.style.height = height + "px";
});

function goToQuiz(){
  document.getElementById("timelineSection").classList.remove("active");
  document.getElementById("quizSection").classList.add("active");
  loadQuestion();
}

const questions = [
{question:"Who fell first?",options:["Chinnu","Subbu"],reaction:"Yes… it was me. And I’d fall again. 🫶"},
{question:"Who gets jealous faster?",options:["Chinnu","Subbu"],reaction:"Hmm… we both know the truth. 👀"},
{question:"Who misses the other more?",options:["Chinnu","Subbu"],reaction:"Honestly… it’s a competition. 🥹"},
{question:"Who overthinks more?",options:["Chinnu","Subbu"],reaction:"It’s okay. You rule my thoughts!"},
{question:"Who would get more clingy after marriage?",options:["Chinnu","Subbu"],reaction:"We both won’t complain. 😏"},
{question:"Who imagines our future more?",options:["Chinnu","Subbu"],reaction:"I already see it. 💍"},
{question:"Who chooses the other every single day?",options:["Both"],reaction:"I choose you. Every single day. Without doubt. 🤍"}
];

let current = 0;

const qEl = document.getElementById("question");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const reaction = document.getElementById("reaction");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){
  const q = questions[current];
  qEl.textContent = q.question;
  btn1.textContent = q.options[0];

  if(q.options.length>1){
    btn2.style.display="inline-block";
    btn2.textContent=q.options[1];
  }else{
    btn2.style.display="none";
  }

  reaction.textContent="";
  nextBtn.style.display="none";
}

function answer(){
  reaction.textContent = questions[current].reaction;

  if(current === questions.length-1){
    nextBtn.style.display="inline-block";
  }
}

btn1.onclick=answer;
btn2.onclick=answer;

nextBtn.onclick=function(){
  window.location.href="stage3.html"; 
};
