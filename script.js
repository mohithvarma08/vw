window.addEventListener("load",()=>{
const events=document.querySelectorAll(".event");
events.forEach((el,i)=>{
setTimeout(()=>{el.classList.add("show")},400+i*200);
});
});

function goToQuiz(){
document.getElementById("timelineSection").classList.remove("active");
document.getElementById("quizSection").classList.add("active");
window.scrollTo(0,0);
}

let questions=[
"Who fell first?",
"Who gets jealous faster?",
"Who chooses the other every single day?"
];

let reactions=[
"It was me. And I’d fall again.",
"We both know the truth.",
"I choose you. Every single day. 🤍"
];

let current=0;

function answer(){
document.getElementById("reaction").innerText=reactions[current];

setTimeout(()=>{
current++;
if(current<questions.length){
document.getElementById("question").innerText=questions[current];
document.getElementById("reaction").innerText="";
}
},2250);
}

document.getElementById("question").innerText=questions[0];
