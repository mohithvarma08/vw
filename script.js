const events = document.querySelectorAll(".event");
const curveLine = document.querySelector(".curveLine");

window.addEventListener("load", function(){

events.forEach((event, index) => {
setTimeout(() => {
event.classList.add("show");
}, index * 200);
});

const lastEvent = document.querySelector(".event:last-of-type");
const lastEmojiPosition = lastEvent.offsetTop + 120;
curveLine.style.height = lastEmojiPosition + "px";

});


function goToQuiz(){
document.getElementById("timelineSection").classList.remove("active");
document.getElementById("quizSection").classList.add("active");
startQuiz();
}

/* QUIZ */

const questions = [
{
q:"1️⃣ Who fell first?",
reaction:"Yes… it was me. And I’d fall again. 🫶"
},
{
q:"2️⃣ Who gets jealous faster?",
reaction:"Correct. But it’s kind of cute. 😌"
},
{
q:"3️⃣ Who misses the other more?",
reaction:"Honestly… it’s a competition. 🥹"
},
{
q:"4️⃣ Who overthinks more?",
reaction:"It’s okay. You rule my thoughts!"
},
{
q:"5️⃣ Who would get more clingy after marriage?",
reaction:"We both won’t complain. 😏"
},
{
q:"6️⃣ Who imagines our future more?",
reaction:"I already see it. 💍"
},
{
q:"7️⃣ Who chooses the other every single day?",
reaction:"I choose you. Every single day. Without doubt. 🤍"
}
];

let currentQuestion = 0;

function startQuiz(){
document.getElementById("question").innerText = questions[0].q;
}

function answer(choice){
const reactionDiv = document.getElementById("reaction");
reactionDiv.innerText = questions[currentQuestion].reaction;

setTimeout(()=>{
currentQuestion++;
if(currentQuestion < questions.length){
reactionDiv.innerText="";
document.getElementById("question").innerText = questions[currentQuestion].q;
} else {
document.querySelector(".options").style.display="none";
document.getElementById("nextAfterQuiz").style.display="block";
}
},2250);
}
