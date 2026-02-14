window.addEventListener("load",()=>{
const events=document.querySelectorAll(".event");
events.forEach((el,i)=>{
setTimeout(()=>el.classList.add("show"),300+i*200);
});
});

/* Navigation */

function goToQuiz(){
document.getElementById("timelineSection").classList.remove("active");
document.getElementById("quizSection").classList.add("active");
window.scrollTo(0,0);
}

/* Quiz */

const quizData=[
{
question:"Who fell first?",
options:["Chinnu","Subbu"],
reaction:"Yes… it was me. And I’d fall again. 🫶"
},
{
question:"Who gets jealous faster?",
options:["Chinnu","Subbu"],
reaction:"Hmm… we both know the truth. 👀"
},
{
question:"Who misses the other more?",
options:["Chinnu","Subbu"],
reaction:"Honestly… it’s a competition. 🥹"
},
{
question:"Who overthinks more?",
options:["Chinnu","Subbu"],
reaction:"It’s okay. You rule my thoughts!"
},
{
question:"Who would get more clingy after marriage?",
options:["Chinnu","Subbu"],
reaction:"We both won’t complain. 😏"
},
{
question:"Who imagines our future more?",
options:["Chinnu","Subbu"],
reaction:"I already see it. 💍"
},
{
question:"Who chooses the other every single day?",
options:["Both"],
reaction:"I choose you. Every single day. Without doubt. 🤍"
}
];

let current=0;

function loadQuestion(){
const q=quizData[current];
document.getElementById("question").innerText=q.question;
const optDiv=document.getElementById("options");
optDiv.innerHTML="";
q.options.forEach(o=>{
const btn=document.createElement("button");
btn.innerText=o;
btn.onclick=selectAnswer;
optDiv.appendChild(btn);
});
}

function selectAnswer(){
document.getElementById("reaction").innerText=quizData[current].reaction;

setTimeout(()=>{
current++;
if(current<quizData.length){
loadQuestion();
document.getElementById("reaction").innerText="";
}
},2250);
}

loadQuestion();
