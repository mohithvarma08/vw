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
{q:"Who fell first?",a:["Chinnu","Subbu"],r:"Yes… it was me. And I’d fall again. 🫶"},
{q:"Who gets jealous faster?",a:["Chinnu","Subbu"],r:"Hmm… we both know the truth. 👀"},
{q:"Who misses the other more?",a:["Chinnu","Subbu"],r:"Honestly… it’s a competition. 🥹"},
{q:"Who overthinks more?",a:["Chinnu","Subbu"],r:"It’s okay. You rule my thoughts!"},
{q:"Who would get more clingy after marriage?",a:["Chinnu","Subbu"],r:"We both won’t complain. 😏"},
{q:"Who imagines our future more?",a:["Chinnu","Subbu"],r:"I already see it. 💍"},
{q:"Who chooses the other every single day?",a:["Both"],r:"I choose you. Every single day. Without doubt. 🤍"}
];

let current=0;
const qEl=document.getElementById("question");
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const reaction=document.getElementById("reaction");
const nextBtn=document.getElementById("nextBtn");

function loadQuestion(){
  const item=questions[current];
  qEl.textContent=item.q;
  btn1.textContent=item.a[0];

  if(item.a.length>1){
    btn2.style.display="inline-block";
    btn2.textContent=item.a[1];
  }else{
    btn2.style.display="none";
  }

  reaction.textContent="";
  nextBtn.style.display="none";
}

function answer(){
  reaction.textContent=questions[current].r;

  if(current===questions.length-1){
    setTimeout(()=>{nextBtn.style.display="inline-block";},2250);
  }else{
    setTimeout(()=>{
      current++;
      loadQuestion();
    },2250);
  }
}

btn1.onclick=answer;
btn2.onclick=answer;

nextBtn.onclick=function(){
  window.location.href="stage3.html";
};
