/* ================= TIMELINE ANIMATION ================= */

const events = document.querySelectorAll(".event");
const curveLine = document.querySelector(".curveLine");

window.addEventListener("load", function () {

  // Animate cards
  events.forEach((event, index) => {
    setTimeout(() => {
      event.classList.add("show");
    }, index * 200);
  });

  // Adjust center line height to stop at last event
  const lastEvent = events[events.length - 1];
  const timeline = document.querySelector(".timeline");

  const lineHeight = lastEvent.offsetTop + lastEvent.offsetHeight / 2;
  curveLine.style.height = lineHeight + "px";
});


/* ================= QUIZ ================= */

const questions = [
  {
    question: "Who fell first?",
    options: ["Chinnu", "Subbu"],
    reaction: "Yes… it was me. And I’d fall again. 🫶"
  },
  {
    question: "Who gets jealous faster?",
    options: ["Chinnu", "Subbu"],
    reaction: "Hmm… we both know the truth. 👀"
  },
  {
    question: "Who misses the other more?",
    options: ["Chinnu", "Subbu"],
    reaction: "Honestly… it’s a competition. 🥹"
  },
  {
    question: "Who overthinks more?",
    options: ["Chinnu", "Subbu"],
    reaction: "It’s okay. You rule my thoughts!"
  },
  {
    question: "Who would get more clingy after marriage?",
    options: ["Chinnu", "Subbu"],
    reaction: "We both won’t complain. 😏"
  },
  {
    question: "Who imagines our future more?",
    options: ["Chinnu", "Subbu"],
    reaction: "I already see it. 💍"
  },
  {
    question: "Who chooses the other every single day?",
    options: ["Both"],
    reaction: "I choose you. Every single day. Without doubt. 🤍"
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const reactionEl = document.getElementById("reaction");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {

  const q = questions[currentQuestion];

  questionEl.textContent = q.question;

  btn1.textContent = q.options[0];
  btn1.style.display = "inline-block";

  if (q.options.length > 1) {
    btn2.textContent = q.options[1];
    btn2.style.display = "inline-block";
  } else {
    btn2.style.display = "none";
  }

  reactionEl.textContent = "";
  nextBtn.style.display = "none";
}

function handleAnswer() {

  reactionEl.textContent = questions[currentQuestion].reaction;

  setTimeout(() => {
    nextBtn.style.display = "inline-block";
  }, 2250);
}

btn1.addEventListener("click", handleAnswer);
btn2.addEventListener("click", handleAnswer);

nextBtn.addEventListener("click", () => {

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    nextBtn.style.display = "none";
  }
});

function goToQuiz() {
  document.getElementById("timelineSection").classList.remove("active");
  document.getElementById("quizSection").classList.add("active");
  loadQuestion();
}
