let start = document.getElementById("start");
let questions = document.querySelector('.questions');
//let questionOne = document.getElementById("question-one");
let answerFirstOne = document.getElementById("answer1-one");
let answerFirstTwo = document.getElementById("answer1-two");
let answerFirstThree = document.getElementById("answer1-three");
let answerFirstFour = document.getElementById("answer1-four");

let questionsSectionTwo = document.querySelector('.questions-section-two');
//let questionTwo = document.getElementById("question-two");
let answerSecondOne = document.getElementById("answer2-one");
let answerSecondTwo = document.getElementById("answer2-two");
let answerSecondThree = document.getElementById("answer2-three");
let answerSecondFour = document.getElementById("answer2-four");


let questionThree = document.getElementById("question-three");
let answerThreeOne = document.getElementById("answer3-one");
let answerThreeTwo = document.getElementById("answer3-two");
let answerThreeThree = document.getElementById("answer3-three");
let answerThreeFour = document.getElementById("answer3-four");

function quizOne () {
let quizFirst = document.createElement('p');
quizFirst.id = 'question-one';     
quizFirst.innerHTML = 'Commonly used data types DO NOT include:';    
document.querySelector('.questions').insertBefore(quizFirst, answerFirstOne);   

const questionOne = {
    'A:': 'Strings',
    'B:': 'Booleans',
    'C:': 'Alerts',
    'D:': 'Numbers'
}    
const quizQuestionOne = Object.entries(questionOne);
console.log(quizQuestionOne);
questions.style.display = "block";

for (i = 0; i < quizQuestionOne.length; i++){
    answerFirstOne.textContent = quizQuestionOne[0];
    answerFirstTwo.textContent = quizQuestionOne[1];
    answerFirstThree.textContent = quizQuestionOne[2];
    answerFirstFour.textContent = quizQuestionOne[3];
}
alert(quizQuestionOne); 
}
start.addEventListener('click', quizOne);

function quizTwo () {
    let quizSecond = document.createElement('p');
    quizSecond.id = 'question-two';     
    quizSecond.innerHTML = 'Arrays in JavaScript can be used to store:';    
    document.querySelector('questions-section-two').insertBefore(quizSecond, answerSecondOne);   
    
    const questionTwo = {
        'A:': 'Other Arrays',
        'B:': 'Numbers and Strings',
        'C:': 'Booleans',
        'D:': 'All of the Above'
    }    
    const quizQuestionTwo = Object.entries(questionTwo);
    questionsSectionTwo.style.display = "block";
    
    for (i = 0; i < quizQuestionTwo.length; i++){
        answerSecondOne.textContent = quizQuestionTwo[0];
        answerSecondTwo.textContent = quizQuestionTwo[1];
        answerSecondThree.textContent = quizQuestionTwo[2];
        answerSecondFour.textContent = quizQuestionTwo[3];
    }
    answerFirstOne.addEventListener('click', quizTwo);
    answerFirstTwo.addEventListener('click', quizTwo);
    answerFirstThree.addEventListener('click', quizTwo);
    answerFirstFour.addEventListener('click', quizTwo);
}
//function quizThree () {
    
//    questionOne.textContent =  'A very useful tool during development and debugging for printing content to the debugger is:'
//    answerFirstOne.textContent = 'A: JavaScript'
//    answerFirstTwo.textContent = 'B: Terminal/Bash'
//    answerFirstThree.textContent = 'C: For Loops' 
//    answerFirstFour.textContent = 'D: Console.log' 
//    }
//    answerSecondOne.addEventListener('click', quizThree);
//    answerSecondTwo.addEventListener('click', quizThree);
//    answerSecondThree.addEventListener('click', quizThree);
//    answerSecondFour.addEventListener('click', quizThree);   

const countdown = document.querySelector(".time");
const timeUp = document.getElementById("time-up");



var secondsLeft = 60;


function countdownToGame() {
    const timerInterval = setInterval(function() {
      secondsLeft--;
      countdown.textContent = 'Time: ' + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endGame();
      }
    }, 1500);
}

countdownToGame();
  
  function endGame() {
  countdown.textContent = " ";
  const endCounter = timeUp.textContent = 'GAME OVER!';
  document.getElementsById('time-up').appendChild(endCounter);
  }
  countdownToGame();
