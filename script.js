// Scroll reveal
const events = document.querySelectorAll('.event');

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
},{threshold:0.3});

events.forEach(event=>observer.observe(event));


// Transition to quiz
document.getElementById("toQuiz").onclick = ()=>{
document.getElementById("timelineSlide").classList.remove("active");
document.getElementById("quizSlide").classList.add("active");
window.scrollTo(0,0);
};


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
reaction:{
Chinnu:"Hmm… we both know the truth. 👀",
Subbu:"Correct. But it’s kind of cute. 😌"
}
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

let current = 0;

function loadQuestion(){
const q = questions[current];
document.getElementById("question").innerHTML = `<h3>${q.q}</h3>`;
const optionsDiv = document.getElementById("options");
optionsDiv.innerHTML = "";
document.getElementById("reaction").innerHTML = "";

q.options.forEach(opt=>{
let btn = document.createElement("button");
btn.innerText = opt;
btn.onclick = ()=>{
if(typeof q.reaction === "object"){
document.getElementById("reaction").innerText = q.reaction[opt];
}else{
document.getElementById("reaction").innerText = q.reaction;
}
setTimeout(()=>{
current++;
if(current < questions.length){
loadQuestion();
}
},1600);
};
optionsDiv.appendChild(btn);
});
}

loadQuestion();
