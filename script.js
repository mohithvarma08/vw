// TIMELINE SVG DRAW
const path = document.getElementById("curvePath");
const length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

window.addEventListener("load", () => {
path.style.transition = "stroke-dashoffset 3s ease";
path.style.strokeDashoffset = 0;

// Show events one by one
const events = document.querySelectorAll(".event");
events.forEach((event, index) => {
setTimeout(() => {
event.classList.add("show");
}, 1200 + index * 400);
});
});

function showQuiz(){
document.getElementById("timelineSlide").classList.add("hidden");
document.getElementById("quizSlide").classList.remove("hidden");
}

// QUIZ LOGIC
const questions = [
{
q:"Who fell first?",
reaction:"Yes… it was me. And I’d fall again. 🫶"
},
{
q:"Who gets jealous faster?",
reaction:"Hmm… we both know the truth. 👀"
},
{
q:"Who chooses the other every single day?",
reaction:"I choose you. Every single day. Without doubt. 🤍"
}
];

let current = 0;

const questionEl = document.getElementById("question");
const reactionEl = document.getElementById("reaction");

function loadQuestion(){
questionEl.innerText = questions[current].q;
reactionEl.innerText = "";
}

function answer(){
reactionEl.innerText = questions[current].reaction;

setTimeout(()=>{
current++;
if(current < questions.length){
loadQuestion();
}
},2250);
}

loadQuestion();
