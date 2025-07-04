const questions = [
  {
    question: "Which high-ranking Russian naval officer was reportedly killed by a Ukrainian strike in early July 2025?",
    answers: [
      { text: "Admiral Kuznetsov", correct: false },
      { text: "Major General Mikhail Gudkov", correct: true },
      { text: "General Valery Gerasimov", correct: false },
      { text: "Admiral Nikolay Yevmenov", correct: false }
    ]
  },
  {
    question: "Which U.S. bill passed the House on July 3, 2025, included deep safety-net cuts and extended tax breaks?",
    answers: [
      { text: "Infrastructure Reauthorization Bill", correct: false },
      { text: "Trump megabill (tax-and-spending)", correct: true },
      { text: "Green New Deal Act", correct: false },
      { text: "Defense Appropriations Bill", correct: false }
    ]
  },
  {
    question: "What significant weather phenomenon affected Europe in late June–early July 2025?",
    answers: [
      { text: "Major hurricanes", correct: false },
      { text: "Second heatwave", correct: true },
      { text: "Record snowfall", correct: false },
      { text: "Widespread flooding", correct: false }
    ]
  },
  {
    question: "Which foldable smartphone is expected at Samsung’s July 9, 2025 Unpacked event?",
    answers: [
      { text: "Galaxy Z Fold 7", correct: true },
      { text: "Galaxy S25 Ultra", correct: false },
      { text: "Galaxy Z Flip 4", correct: false },
      { text: "Galaxy Tab S9", correct: false }
    ]
  },
  {
    question: "Prime Minister Narendra Modi began a five-nation tour starting in early July 2025 to strengthen ties with which international group?",
    answers: [
      { text: "NATO", correct: false },
      { text: "ASEAN", correct: false },
      { text: "BRICS", correct: true },
      { text: "EU", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);

    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";

}

function selectAnswer(answer) {
    if(answer.correct){
        score++;

    }
    nextButton.style.display = "block";

}

nextButton.addEventListener("click",() => {
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerText = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "RestartQuiz";
    nextButton.style.display = "block";
    nextButton.addEventListener("click",startQuiz);
}
startQuiz();