/* Animate curve */
const path = document.getElementById("curvePath");
const length = path.getTotalLength();
path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

window.onload = () => {

setTimeout(()=>{
path.style.transition="stroke-dashoffset 3s ease";
path.style.strokeDashoffset=0;
},300);

/* Reveal events */
const events=document.querySelectorAll(".event");
events.forEach((el,i)=>{
setTimeout(()=>{
el.classList.add("show");
},1000 + i*200);
});
};

/* Continue */
function showQuiz(){
document.getElementById("timelineSection").style.display="none";
document.getElementById("quizSection").style.display="block";
loadQuestion();
}

/* Quiz Data */
const quiz=[
{
q:"Who fell first?",
a:"Chinnu",
b:"Subbu",
r:"Yes… it was me. And I’d fall again. 🫶"
},
{
q:"Who gets jealous faster?",
a:"Chinnu",
b:"Subbu",
r:"Hmm… we both know the truth. 👀"
},
{
q:"Who misses the other more?",
a:"Chinnu",
b:"Subbu",
r:"Honestly… it’s a competition. 🥹"
},
{
q:"Who overthinks more?",
a:"Chinnu",
b:"Subbu",
r:"It’s okay. You rule my thoughts!"
},
{
q:"Who would get more clingy after marriage?",
a:"Chinnu",
b:"Subbu",
r:"We both won’t complain. 😏"
},
{
q:"Who imagines our future more?",
a:"Chinnu",
b:"Subbu",
r:"I already see it. 💍"
},
{
q:"Who chooses the other every single day?",
a:"Both",
b:"",
r:"I choose you. Every single day. Without doubt. 🤍"
}
];

let current=0;

function loadQuestion(){
document.getElementById("question").innerText=quiz[current].q;
document.getElementById("optA").innerText=quiz[current].a;
document.getElementById("optB").innerText=quiz[current].b;
document.getElementById("reaction").innerText="";
}

function selectAnswer(){
document.getElementById("reaction").innerText=quiz[current].r;

setTimeout(()=>{
current++;
if(current<quiz.length){
loadQuestion();
}
},2250);
}
