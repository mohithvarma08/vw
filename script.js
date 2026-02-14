// SCROLL REVEAL
function reveal(){
const trigger = window.innerHeight * 0.85;
document.querySelectorAll(".event").forEach(event=>{
if(event.getBoundingClientRect().top < trigger){
event.classList.add("show");
}
});
}
window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);

// QUIZ
const questions = [
{
q:"Who fell first?",
options:["Chinnu","Subbu"],
reaction:"Yes… it was me. And I’d fall again. 🫶"
},
{
q:"Who gets jealous faster?",
options:["Chinnu","Subbu"],
reaction:"Hmm… we both know the truth. 👀"
},
{
q:"Who misses the other more?",
options:["Chinnu","Subbu"],
reaction:"Honestly… it’s a competition. 🥹"
},
{
q:"Who overthinks more?",
options:["Chinnu","Subbu"],
reaction:"It’s okay. You rule my thoughts!"
},
{
q:"Who would get more clingy after marriage?",
options:["Chinnu","Subbu"],
reaction:"We both won’t complain. 😏"
},
{
q:"Who imagines our future more?",
options:["Chinnu","Subbu"],
reaction:"I already see it. 💍"
},
{
q:"Who chooses the other every single day?",
options:["Both"],
reaction:"I choose you. Every single day. Without doubt. 🤍"
}
];

let current=0;

function loadQuestion(){
document.getElementById("reaction").innerHTML="";
const q=questions[current];
document.getElementById("question").innerText=q.q;
const optionsDiv=document.getElementById("options");
optionsDiv.innerHTML="";
q.options.forEach(opt=>{
const btn=document.createElement("button");
btn.innerText=opt;
btn.onclick=()=>answer();
optionsDiv.appendChild(btn);
});
}

function answer(){
document.getElementById("reaction").innerText=questions[current].reaction;
setTimeout(()=>{
current++;
if(current<questions.length){
loadQuestion();
}else{
document.getElementById("quizSection").innerHTML=
"<h1 class='mainTitle'>And this is just the beginning… 🌈</h1>";
}
},2250);
}

function goToQuiz(){
document.getElementById("timelineSection").classList.remove("active");
document.getElementById("quizSection").classList.add("active");
loadQuestion();
window.scrollTo(0,0);
}
