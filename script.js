/* Curve animation */
const path = document.getElementById("path");
const length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

window.onload = () => {

path.style.transition = "stroke-dashoffset 2.5s ease";
path.style.strokeDashoffset = 0;

/* Reveal events */
const events = document.querySelectorAll(".event");

events.forEach((el,i)=>{
setTimeout(()=>{
el.classList.add("show");
},800 + i*250);
});
};

/* Quiz */
function showQuiz(){
document.getElementById("timelineSection").style.display="none";
document.getElementById("quizSection").style.display="block";
loadQ();
}

const quiz=[
{q:"Who fell first?",a:"Chinnu",b:"Subbu",r:"It was me. And I’d fall again."},
{q:"Who gets jealous faster?",a:"Chinnu",b:"Subbu",r:"We both know the truth."},
{q:"Who chooses the other every single day?",a:"Both",b:"",r:"I choose you. Every single day. 🤍"}
];

let index=0;

function loadQ(){
document.getElementById("question").innerText=quiz[index].q;
document.getElementById("optA").innerText=quiz[index].a;
document.getElementById("optB").innerText=quiz[index].b;
document.getElementById("reaction").innerText="";
}

function answer(){
document.getElementById("reaction").innerText=quiz[index].r;

setTimeout(()=>{
index++;
if(index<quiz.length){
loadQ();
}
},2250);
}
