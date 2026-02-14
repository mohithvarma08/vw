// Timeline animation
const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});

items.forEach(item=>observer.observe(item));


// Continue button
const continueBtn = document.getElementById("continueBtn");
const timelineSection = document.getElementById("timeline");
const quizSection = document.getElementById("quiz");

continueBtn.addEventListener("click",()=>{
timelineSection.style.opacity="0";
setTimeout(()=>{
timelineSection.style.display="none";
quizSection.classList.remove("hidden");
quizSection.style.opacity="1";
},600);
});


// Quiz Logic
const quizData = [
{
question:"Who fell first?",
options:["Chinnu","Subbu"],
reaction:"Yes… it was me. And I’d fall again. 🫶"
},
{
question:"Who gets jealous faster?",
options:["Chinnu","Subbu"],
reactionChoice:{
Chinnu:"Hmm… we both know the truth. 👀",
Subbu:"Correct. But it’s kind of cute. 😌"
}
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

const questionEl=document.getElementById("question");
const optionsEl=document.getElementById("options");
const reactionEl=document.getElementById("reaction");

function loadQuestion(){
reactionEl.textContent="";
optionsEl.innerHTML="";
const q=quizData[current];
questionEl.textContent=q.question;

q.options.forEach(opt=>{
const btn=document.createElement("button");
btn.textContent=opt;
btn.onclick=()=>{
if(q.reactionChoice){
reactionEl.textContent=q.reactionChoice[opt];
}else{
reactionEl.textContent=q.reaction;
}

setTimeout(()=>{
current++;
if(current<quizData.length){
loadQuestion();
}
},1800);
};
optionsEl.appendChild(btn);
});
}

loadQuestion();
