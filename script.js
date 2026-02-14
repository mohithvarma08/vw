const events = document.querySelectorAll(".event");

function reveal() {
const trigger = window.innerHeight * 0.85;
events.forEach(event=>{
const top = event.getBoundingClientRect().top;
if(top < trigger){
event.classList.add("show");
}
});
}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);

function goToQuiz(){
document.getElementById("timelineSection").classList.remove("active");
document.getElementById("quizSection").classList.add("active");
window.scrollTo(0,0);
}

const questions = [
"Who fell first?",
"Who gets jealous faster?",
"Who misses the other more?",
"Who overthinks more?",
"Who would get more clingy after marriage?",
"Who imagines our future more?",
"Who chooses the other every single day?"
];

const reactions = [
"Yes… it was me. And I’d fall again. 🫶",
"Correct. But it’s kind of cute. 😌",
"Honestly… it’s a competition. 🥹",
"It’s okay. You rule my thoughts!",
"We both won’t complain. 😏",
"I already see it. 💍",
"I choose you. Every single day. Without doubt. 🤍"
];

let index = 0;

const q = document.getElementById("question");
const r = document.getElementById("reaction");

q.innerText = questions[index];

function answer(){
r.innerText = reactions[index];
setTimeout(()=>{
index++;
if(index < questions.length){
q.innerText = questions[index];
r.innerText="";
}else{
r.innerText="Forever us 💞";
}
},2250);
}
