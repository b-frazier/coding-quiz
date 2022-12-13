let startBtn = document.getElementById('startBtn');
let nextBtn = document.getElementById('nextBtn');
let header = document.getElementById('header');
let quizCont = document.getElementById('quiz-container');

startBtn.addEventListener('click', function(){
    start();
});

function start(){
    header.classList.add('hide');
    quizCont.classList.remove('hide');
}

function askQuestion(){

}