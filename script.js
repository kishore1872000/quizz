const questions = [
    {
        question: "which is  html full form",
        answers: [
            { text: "hyper text markup language", correct: true },
            { text: "hyper type markup language", correct: false },
            { text: "hyper text mark language", correct: false },
            { text: "hyper text markup lang", correct: false },
        ]
    },
    {
        question: "which is  css full form",
        answers: [
            { text: "Cascading Speed Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Cascading Super Sheets", correct: false },
            { text: "Cascading Style Sheet", correct: false },
        ]
    },
    {
        question: " Choose the correct HTML element for the largest heading:",
        answers: [
            { text: "<head>", correct: false },
            { text: "<h6>", correct: true },
            { text: "<heading>", correct: false },
            { text: "<h1>", correct: true },
        ]
    },
    {
        question: "What is the correct HTML for adding a background color?",
        answers: [
            { text: "<body style=background-color:yellow;>", correct: true },
            { text: "<background>yellow</background>", correct: false },
            { text: "<body bg=yellow>", correct: false },
            { text: "<body bg=red>", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",seleAnswer);

    });

}
function  resetState() {
    nextButton.style1display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
} 

function seleAnswer(e){
    const selectedbtn=e.target;
    const iscorret=selectedbtn.dataset.correct  ==="true";
    if(iscorret){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect")
    } 
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disbled=true;
    });
    nextButton.style.display="block";

}

function showScore() {
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play again";
    nextButton.style.display="block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});


