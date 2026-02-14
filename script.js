/* ================= TIMELINE ================= */

const events = [
["20 Nov 2022","The Spy Snap"],
["18 Aug 2024","The Almost Meet"],
["31 Aug 2024","From Chats to Calls"],
["16 Sept 2024","The Shy First Meet"],
["20 Sept 2024","The Yes"],
["21 Sept 2024","Everything Felt Different"],
["22 Oct 2024","Our First Movie"],
["15 Nov 2024","Our First Frame"],
["28 Dec 2024","Our First Official Date"]
];

const eventsContainer=document.querySelector(".events");

events.forEach((e,i)=>{
let div=document.createElement("div");
div.className="event "+(i%2===0?"left":"right");
div.style.top=(120+i*90)+"px";
div.innerHTML=`<h3><span class="date">${e[0]}</span> — ${e[1]}</h3>`;
eventsContainer.appendChild(div);
});

const path=document.getElementById("timelinePath");
const length=path.getTotalLength();
path.style.strokeDasharray=length;
path.style.strokeDashoffset=length;

setTimeout(()=>{
path.style.transition="stroke-dashoffset 2s ease";
path.style.strokeDashoffset=0;
},500);

setTimeout(()=>{
document.querySelectorAll(".event").forEach((el,i)=>{
setTimeout(()=>el.classList.add("show"), i*300);
});
document.querySelector(".primaryBtn").classList.add("show");
},2500);


/* ===== QUIZ ===== */

const quizData=[
{q:"Who fell first?",opts:["Chinnu","Subbu"],r:"Yes… it was me. And I’d fall again. 🫶"},
{q:"Who gets jealous faster?",opts:["Chinnu","Subbu"],r:"Hmm… we both know the truth. 👀"},
{q:"Who misses the other more?",opts:["Chinnu","Subbu"],r:"Honestly… it’s a competition. 🥹"},
{q:"Who overthinks more?",opts:["Chinnu","Subbu"],r:"It’s okay. You rule my thoughts!"},
{q:"Who would get more clingy after marriage?",opts:["Chinnu","Subbu"],r:"We both won’t complain. 😏"},
{q:"Who imagines our future more?",opts:["Chinnu","Subbu"],r:"I already see it. 💍"},
{q:"Who chooses the other every single day?",opts:["Both"],r:"I choose you. Every single day. Without doubt. 🤍"}
];

let current=0;

function loadQuestion(){
const q=quizData[current];
document.getElementById("question").textContent=q.q;
const optDiv=document.getElementById("options");
optDiv.innerHTML="";
document.getElementById("reaction").textContent="";

q.opts.forEach(opt=>{
let btn=document.createElement("button");
btn.textContent=opt;
btn.onclick=()=>{
document.getElementById("reaction").textContent=q.r;
setTimeout(()=>{
current++;
if(current<quizData.length){
loadQuestion();
}
},3000);
};
optDiv.appendChild(btn);
});
}

loadQuestion();

/* Slide switch */

document.getElementById("toQuiz").onclick=()=>{
document.getElementById("timelineSlide").classList.remove("active");
document.getElementById("quizSlide").classList.add("active");
};
