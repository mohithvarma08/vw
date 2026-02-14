/* ================= TIMELINE DATA ================= */

const eventsData = [
["20 Nov 2022","The Spy Snap","A random picture from afar. A small message. The first spark — before we even knew it was one."],
["18 Aug 2024","The Almost Meet","We didn’t meet. But we looked for each other in the crowd."],
["31 Aug 2024","From Chats to Calls","Numbers exchanged. The connection became real."],
["16 Sept 2024","The Shy First Meet","Festival lights. Quiet smiles."],
["20 Sept 2024","The Yes","I asked. You said yes."],
["21 Sept 2024","Everything Felt Different","The first real heart-to-heart."],
["22 Oct 2024","Our First Movie","You were my favorite scene."],
["15 Nov 2024","Our First Frame","Our first picture together."],
["28 Dec 2024","Our First Official Date","The beginning of us time."],
["13 May 2025","The Gentle First Kiss","A quiet moment."],
["17 May 2025","Prayers Together","Side by side."],
["8 Aug 2025","Home","You stepped into my world."],
["27 Aug 2025","The Hug We Needed","That first hug."],
["20 Sept 2025","One Year of Us","Still choosing."],
["27–29 Oct 2025","Growing Stronger","Proof that we choose to stay."]
];

const eventsContainer = document.querySelector(".events");
const timelineContainer = document.querySelector(".timelineContainer");
const path = document.getElementById("timelinePath");

/* Dynamic height based on number of events */
const spacing = 220;
const totalHeight = eventsData.length * spacing + 200;

timelineContainer.style.height = totalHeight + "px";
path.setAttribute("viewBox", `0 0 600 ${totalHeight}`);
path.setAttribute("d", `
M300 0
${eventsData.map((_,i)=>{
let y=i*spacing+100;
return `C ${i%2?180:420} ${y-100}, ${i%2?420:180} ${y}, 300 ${y}`;
}).join("\n")}
`);

eventsData.forEach((item,i)=>{
let div = document.createElement("div");
div.className="event "+(i%2===0?"left":"right");
div.style.top=(i*spacing+50)+"px";
div.innerHTML=`
<h3><span class="date">${item[0]}</span> — ${item[1]}</h3>
<p>${item[2]}</p>
`;
eventsContainer.appendChild(div);
});

/* Fade-in animation */
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("show");
}
});
},{threshold:.15});

document.querySelectorAll(".event").forEach(el=>observer.observe(el));

/* Draw path animation */
const length=path.getTotalLength();
path.style.strokeDasharray=length;
path.style.strokeDashoffset=length;

window.addEventListener("scroll",()=>{
const scrollTop=window.scrollY;
const docHeight=document.body.scrollHeight-window.innerHeight;
const progress=scrollTop/docHeight;
path.style.strokeDashoffset=length-(length*progress);
});

/* ================= QUIZ ================= */

const quizData=[
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
const q=quizData[current];
document.getElementById("question").textContent=q.q;
const optionsDiv=document.getElementById("options");
optionsDiv.innerHTML="";
q.options.forEach(opt=>{
let btn=document.createElement("button");
btn.textContent=opt;
btn.onclick=()=>{
document.getElementById("reaction").textContent=q.reaction;
setTimeout(()=>{
current++;
if(current<quizData.length){
loadQuestion();
}else{
document.getElementById("reaction").textContent="🤍";
}
},1800);
};
optionsDiv.appendChild(btn);
});
document.getElementById("reaction").textContent="";
}

loadQuestion();

/* Slide Switch */
document.getElementById("toQuiz").onclick=()=>{
document.getElementById("timelineSlide").classList.remove("active");
document.getElementById("quizSlide").classList.add("active");
window.scrollTo(0,0);
};
