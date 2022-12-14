let startBtn = document.getElementById('startBtn');
let nextBtn = document.getElementById('nextBtn');
let header = document.getElementById('header');
let quizCont = document.getElementById('quiz-container');
let questionEl = document.getElementById('questions');
let answerBtns = document.getElementById('ans-btn');

let shuffledQuestions, currentQuestionIndex;

let questionBank = [
    {
        question: 'What does HTML stand for?',
        answers: [
            {text: 'HyperText Markup Language', correct: true},
            {text: 'HeroText Markup Language', correct: false},
            {text: 'HyperText Mapping Language', correct: false},
            {text: 'HeroText Mapping Language', correct: false}
        ]
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            {text: 'Creative Style Sheet', correct: false},
            {text: 'Cascading Style Sheet', correct: true},
            {text: 'Correct Style Sheet', correct: false},
            {text: 'Clean Style Sheet', correct: false},
        ]
    },
    {
        question: 'Which of these do you use to create the structure of a webpage?',
        answers: [
            {text: 'CSS', correct: false},
            {text: 'HTML', correct: true},
            {text: 'JavaScript', correct: false},
            {text: 'None of the above', correct: false},
        ]
    },
    {
        question: 'Which of these do you use to create the layout and design of a webpage?',
        answers: [
            {text: 'CSS', correct: true},
            {text: 'HTML', correct: false},
            {text: 'JavaScript', correct: false},
            {text: 'None of the above', correct: false},
        ]
    },
    {
        question: 'Which of these do you use to make a webpage interactive?',
        answers: [
            {text: 'CSS', correct: false},
            {text: 'HTML', correct: false},
            {text: 'JavaScript', correct: true},
            {text: 'None of the above', correct: false},
        ]
    },
    {
        question: 'Which of these do you use to create a hyperlink?',
        answers: [
            {text: '<img>', correct: false},
            {text: '<link>', correct: false},
            {text: '<div>', correct: false},
            {text: '<a>', correct: true},
        ]
    },
    {
        question: 'How do you comment out one line of code in JavaScript?',
        answers: [
            {text: '// //', correct: false},
            {text: '<!-- -->', correct: false},
            {text: '//', correct: true},
            {text: '/**/', correct: false},
        ]
    },
    {
        question: 'The ONLY way to style a page is with CSS. True or False?',
        answers: [
            {text: 'True', correct: false},
            {text: 'False', correct: true},
        ]
    },
    {
        question: 'When was the internet invented?',
        answers: [
            {text: '1983', correct: true},
            {text: '1989', correct: false},
            {text: '1990', correct: false},
            {text: '1998', correct: false},
        ]
    },
    {
        question: 'Which of these do you use to create a table in HTML?',
        answers: [
            {text: '<table>', correct: false},
            {text: '<tr>', correct: false},
            {text: '<td>', correct: false},
            {text: 'All of the above', correct: true},
        ]
    }
]

startBtn.addEventListener('click', start);

function start(){
    header.classList.add('hide');
    shuffledQuestions = questionBank.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    quizCont.classList.remove('hide');
    setQuestion();
}

function setQuestion(){
    
}



function showQuestion(question){
    questionEl.innerText = questionBank.question

    /* for (let i = 0; i < questionBank.length; i++){
        questionEl.innerText = questionBank[i].question;
    }*/
}

console.log(questionBank)
console.log(questionBank[1].question)
console.log(showQuestion(questionBank))