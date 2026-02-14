const quizData = [
{
  question:"Who fell first?",
  options:["Chinnu","Subbu"],
  reaction:"Yes… it was me. And I’d fall again. 🫶"
},
{
  question:"Who gets jealous faster?",
  options:["Chinnu","Subbu"],
  reaction:"Correct. But it’s kind of cute. 😌"
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

let current = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const reactionEl = document.getElementById("reaction");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){
  const q = quizData[current];
  questionEl.innerHTML = `<h2>${q.question}</h2>`;
  optionsEl.innerHTML = "";
  reactionEl.innerHTML = "";
  nextBtn.style.display = "none";

  q.options.forEach(opt=>{
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = ()=>{
      reactionEl.innerHTML = `<p>${q.reaction}</p>`;
      nextBtn.style.display="inline-block";
    };
    optionsEl.appendChild(btn);
  });
}

nextBtn.onclick = ()=>{
  current++;
  if(current < quizData.length){
    loadQuestion();
  }
};

loadQuestion();
