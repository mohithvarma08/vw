const events = document.querySelectorAll(".event");
const curveLine = document.querySelector(".curveLine");

window.addEventListener("load", function(){

events.forEach((event, index) => {
setTimeout(() => {
event.classList.add("show");
}, index * 200);
});

const lastEvent = document.querySelector(".event:last-of-type");
const lineHeight = lastEvent.offsetTop + 100;
curveLine.style.height = lineHeight + "px";

});

/* QUIZ */

const questions = [
{
q:"1️⃣ Who fell first?",
a1:"Chinnu",
a2:"Subbu",
reaction:"Yes… it was me. And I’d fall again. 🫶"
},
{
q:"2️⃣ Who gets jealous faster?",
a1:"Chinnu",
a2:"Subbu",
reaction:"Hmm… we both know the truth. 👀"
},
{
q:"3️⃣ Who misses the other more?",
a1:"Chinnu",
a2:"Subbu",
reaction:"Honestly… it’s a competition. 🥹"
},
{
q:"4️⃣ Who overthinks more?",
a1:"Chinnu",
a2:"Subbu",
reaction:"It’s okay. You rule my thoughts!"
},
{
q:"5️⃣ Who would get more clingy after marriage?",
a1:"Chinnu",
a2:"Subbu",
reaction:"We both won’t complain. 😏"
},
{
q:"6️⃣ Who imagines our future more?",
a1:"Chinnu",
a2:"Subbu",
reaction:"I already see it. 💍"
},
{
q:"7️⃣ Who chooses the other every single day?",
a1:"Both",
a2:"",
reaction:"I choose you. Every single day. Without doubt. 🤍"
}
];

let current = 0;

const questionEl = document.getElementById("question");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const reactionEl = document.getElementById("reaction");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){
questionEl.innerText = questions[current].q;
btn1.innerText = questions[current].a1;
btn2.innerText = questions[current].a2;
reactionEl.innerText = "";
nextBtn.style.display="none";
btn2.style.display = questions[current].a2 ? "inline-block":"none";
}

function answer(){
reactionEl.innerText = questions[current].reaction;
setTimeout(()=>{
nextBtn.style.display="inline-block";
},2250);
}

btn1.onclick=answer;
btn2.onclick=answer;

nextBtn.onclick=function(){
current++;
if(current < questions.length){
loadQuestion();
}else{
nextBtn.style.display="none";
}
};

function goToQuiz(){
document.getElementById("timelineSection").classList.remove("active");
document.getElementById("quizSection").classList.add("active");
loadQuestion();
}
