const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "HighText Machine Language", correct: false },
      { text: "Hyper Tabular Markup Language", correct: false },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Common Style Sheet", correct: false },
      { text: "Colorful Style Sheet", correct: false },
      { text: "Computer Style Sheet", correct: false },
      { text: "Cascading Style Sheet", correct: true },
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<js>", correct: false },
      { text: "<scripting>", correct: false },
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
    ],
  }
];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.classList.add("hide");
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(button, correct) {
  const allButtons = answerButtons.children;
  for (let btn of allButtons) {
    const isCorrect = btn.innerText === questions[currentQuestionIndex].answers.find(ans => ans.text === btn.innerText).correct;
    btn.classList.add(isCorrect ? "correct" : "wrong");
  }

  if (correct) score++;
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionContainer.classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreElement.innerText = `${score} / ${questions.length}`;
}
