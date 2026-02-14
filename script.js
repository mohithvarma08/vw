window.addEventListener("load", () => {

const path = document.getElementById("curvePath");
const length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

setTimeout(() => {
path.style.transition = "stroke-dashoffset 3s ease";
path.style.strokeDashoffset = 0;
}, 200);

const events = document.querySelectorAll(".event");

events.forEach((event, index) => {
setTimeout(() => {
event.classList.add("show");
}, 1000 + index * 300);
});

});

/* Continue button */

document.getElementById("continueBtn").addEventListener("click", () => {
document.getElementById("timelineSection").classList.add("hidden");
document.getElementById("quizSection").classList.remove("hidden");
});

/* QUIZ */

const questions = [
{
q: "Who fell first?",
r: "Yes… it was me. And I’d fall again. 🫶"
},
{
q: "Who gets jealous faster?",
r: "Hmm… we both know the truth. 👀"
},
{
q: "Who misses the other more?",
r: "Honestly… it’s a competition. 🥹"
},
{
q: "Who overthinks more?",
r: "It’s okay. You rule my thoughts!"
},
{
q: "Who would get more clingy after marriage?",
r: "We both won’t complain. 😏"
},
{
q: "Who imagines our future more?",
r: "I already see it. 💍"
},
{
q: "Who chooses the other every single day?",
r: "I choose you. Every single day. Without doubt. 🤍"
}
];

let current = 0;

const questionEl = document.getElementById("question");
const reactionEl = document.getElementById("reaction");
const optionBtns = document.querySelectorAll(".optionBtn");

function loadQuestion() {
questionEl.textContent = questions[current].q;
reactionEl.textContent = "";
}

loadQuestion();

optionBtns.forEach(btn => {
btn.addEventListener("click", () => {

reactionEl.textContent = questions[current].r;

setTimeout(() => {
current++;
if(current < questions.length){
loadQuestion();
}
}, 2250);

});
});
