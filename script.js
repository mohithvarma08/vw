window.addEventListener("load", ()=>{

const events=document.querySelectorAll(".event");
const container=document.getElementById("eventsContainer");
const svg=document.getElementById("curveSvg");
const path=document.getElementById("path");

const height=container.offsetHeight;
svg.setAttribute("height",height);
svg.setAttribute("viewBox",`0 0 200 ${height}`);

let d=`M100 0 `;
let step=height/10;
let dir=1;

for(let i=0;i<10;i++){
let y1=step*i;
let y2=step*(i+1);
let cx=dir?160:40;
d+=`C ${cx} ${y1+step/2}, ${cx} ${y2-step/2}, 100 ${y2} `;
dir=!dir;
}

path.setAttribute("d",d);

const len=path.getTotalLength();
path.style.strokeDasharray=len;
path.style.strokeDashoffset=len;

setTimeout(()=>{
path.style.transition="stroke-dashoffset 2.5s ease";
path.style.strokeDashoffset="0";
},200);

events.forEach((el,i)=>{
setTimeout(()=>{el.classList.add("show")},800+i*200);
});

});

/* QUIZ */

const quiz=[
{q:"Who fell first?",a:"Chinnu",b:"Subbu",r:"It was me. And I’d fall again."},
{q:"Who gets jealous faster?",a:"Chinnu",b:"Subbu",r:"We both know the truth."},
{q:"Who chooses the other every single day?",a:"Both",b:"",r:"I choose you. Every single day. 🤍"}
];

let index=0;

function showQuiz(){
document.getElementById("timelineSection").style.display="none";
document.getElementById("quizSection").style.display="block";
loadQ();
}

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
if(index<quiz.length) loadQ();
},2250);
}
