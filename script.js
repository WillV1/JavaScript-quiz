const startQuiz = document.getElementById("start");
let questionOne = document.getElementById("next-question");

const questionTwo = document.getElementById('next-question2');
const countdown = document.querySelector(".time");
const timeUp = document.getElementById("time-up");

startQuiz.addEventListener("click", function() {
questionOne.style.display = 'block'
  });

let startQuestionOne = {
    'Commonly used data types DO NOT include:': {
        1: 'Strings',
        2: 'Booleans',
        3: 'Alerts',
        4: 'Numbers'
    } 
}

console.log(questionOne);
//let questionTwo = {
//    'Arrays in JavaScript can be used to store:': {
//        1: 'Numbers and strings',
//        2: 'Other arrays',
//        3: 'Booleans',
//        4: 'All of the above'
//    } 
//}

const quiz = ['startQuestionOne', 'nextQuestionTwo'];
const i = 0;

var secondsLeft = 60;

const answerOne = document.getElementById('answer-one');
const answerTwo = document.getElementById('answer-two');
const answerThree = document.getElementById('answer-three');
const answerFour = document.getElementById('answer-four');

function countdownToGame() {
    const timerInterval = setInterval(function() {
      secondsLeft--;
      countdown.textContent = 'Time: ' + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
//        sendMessage();
      }
    }, 1000);
}

countdownToGame();
  
  //function endGame() {
  //  countdown.textContent = " ";
  
  //  const endCounter = timeUp.textContent = 'GAME OVER!';
  
  //  timeUp.appendChild(endCounter);
  
  //}
  
  //countdownToGame();
