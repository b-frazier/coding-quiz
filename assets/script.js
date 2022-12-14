let startBtn = document.getElementById('startBtn');
let nextBtn = document.getElementById('nextBtn');
let header = document.getElementById('header');
let quizCont = document.getElementById('quiz-container');
let questionEl = document.getElementById('questions');
let answerBtns = document.getElementById('ans-btn');

let shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener('click', function(){
    start();
});

function start(){
    header.classList.add('hide');
    // shuffledQuestions = questionBank.sort(() => Math.random() - .5);
    // currentQuestionIndex = 0;
    quizCont.classList.remove('hide');
    showQuestion();
}

function askQuestion(){
    
}

let questionBank = [
    {
        question: 'What does HTML stand for?',
        answers: [
            {text: 'HyperText Markup Language', correct: true},
            {text: 'HeroText Markup Language', correct: false},
            {text: 'HyperText Mapping Language', correct: false},
            {text: 'HeroText Mapping Language', correct: false}
        ]
    }
]

function showQuestion(questionBank){
    for (let i = 0; i < questionBank.length; i++){
        questionEl.innerText = questionBank[i].question;
    }
}

console.log(questionBank)
console.log(questionBank[0])
console.log(questionBank[0].question)
console.log(showQuestion(questionBank))