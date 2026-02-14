const events = document.querySelectorAll(".event");
const curveLine = document.querySelector(".curveLine");

window.addEventListener("load", function () {

  events.forEach((event, index) => {
    setTimeout(() => {
      event.classList.add("show");
    }, index * 200);
  });

  const lastEvent = events[events.length - 1];
  const lineHeight = lastEvent.offsetTop + lastEvent.offsetHeight / 2;
  curveLine.style.height = lineHeight + "px";
});


const questions = [
  { question:"Who fell first?", options:["Chinnu","Subbu"], reaction:"Yes… it was me. And I’d fall again. 🫶" },
  { question:"Who gets jealous faster?", options:["Chinnu","Subbu"], reaction:"Hmm… we both know the truth. 👀" },
  { question:"Who misses the other more?", options:["Chinnu","Subbu"], reaction:"Honestly… it’s a competition. 🥹" },
  { question:"Who overthinks more?", options:["Chinnu","Subbu"], reaction:"It’s okay. You rule my thoughts!" },
  { question:"Who would get more clingy after marriage?", options:["Chinnu","Subbu"], reaction:"We both won’t complain. 😏" },
  { question:"Who imagines our future more?", options:["Chinnu","Subbu"], reaction:"I already see it. 💍" },
  { question:"Who chooses the other every single day?", options:["Both"], reaction:"I choose you. Every single day. Without doubt. 🤍" }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const reactionEl = document.getElementById("reaction");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){
  const q = questions[currentQuestion];

  questionEl.textContent = q.question;
  btn1.textContent = q.options[0];

  if(q.options.length>1){
    btn2.style.display="inline-block";
    btn2.textContent=q.options[1];
  }else{
    btn2.style.display="none";
  }

  reactionEl.textContent="";
  nextBtn.style.display="none";
}

function answer(){
  reactionEl.textContent=questions[currentQuestion].reaction;
  setTimeout(()=>{ nextBtn.style.display="inline-block"; },2000);
}

btn1.onclick=answer;
btn2.onclick=answer;

nextBtn.onclick=function(){
  currentQuestion++;
  if(currentQuestion<questions.length){
    loadQuestion();
  }
};

function goToQuiz(){
  document.getElementById("timelineSection").classList.remove("active");
  document.getElementById("quizSection").classList.add("active");
  loadQuestion();
}
