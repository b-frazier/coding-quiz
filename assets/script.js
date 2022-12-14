let startBtn = document.getElementById('startBtn');
let nextBtn = document.getElementById('next-btn');
let header = document.getElementById('header');
let quizCont = document.getElementById('quiz-container');
let questionEl = document.getElementById('questions');
let answerBtns = document.getElementById('ans-btn');
let answerCont = document.getElementById('answer-cont');
let nextMsg = document.getElementById('next-msg');
let score = document.getElementById('score');
let time = document.getElementById('time');
let timeLeft = 120;

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
];


startBtn.addEventListener('click', start);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setQuestion();
});

let timeCount = setInterval(function(){
    if (timeLeft <= 0){
        clearInterval(timeCount)
    }
    time.innerHTML = 'Time Remaining:' + ' ' + timeLeft;
    --timeLeft;
    
}, 1000);
    

function start(){
    header.classList.add('hide');
    shuffledQuestions = questionBank.sort(() => Math.random() - .5);
    console.log(shuffledQuestions)
    currentQuestionIndex = 0;
    quizCont.classList.remove('hide');
    setQuestion();
};

function setQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(questionBank){
    resetState()
    questionEl.innerText = questionBank.question;
    questionBank.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('ans-btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerCont.append(button)
    });
};

function right(){
    resetMsg()
    nextBtn.classList.remove('hide')
    let divCont = document.createElement('div')
    let message = `<p class="message">Correct!</p>`
    divCont.innerHTML = message
    nextMsg.append(divCont)
};

function wrong(){
    resetMsg()
    let divCont = document.createElement('div')
    let message = `<p class="message">Wrong! Try again.</p>`
    divCont.innerHTML = message
    nextMsg.append(divCont)
};

function resetState(){
    nextBtn.classList.add('hide');
    while (answerCont.firstChild){
        answerCont.removeChild(answerCont.firstChild)
    }
    resetMsg()
};

function resetMsg(){
    while (nextMsg.firstChild){
        nextMsg.removeChild(nextMsg.firstChild)
    }
};

function selectAnswer(e){
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;
    if (correct){
        right()
    } else {
        wrong()
    };
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = "Restart"
        header.classList.remove('hide')
        quizCont.classList.add('hide')
    }
};