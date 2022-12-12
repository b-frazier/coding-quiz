let startBtn = document.getElementById('startBtn');
let nextBtn = document.getElementById('nextBtn');
let header = document.getElementById('header');
let section = document.getElementById('section');

startBtn.addEventListener('click', function(){
    header.classList.add('hide');
    section.classList.remove('hide');
});

console.log('hello')