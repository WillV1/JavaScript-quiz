let start = document.getElementById("start");
let questions = document.querySelector('.questions');
let questionOne = document.getElementById("question-one");
let answerFirstOne = document.getElementById("answer1-one");
let answerFirstTwo = document.getElementById("answer1-two");
let answerFirstThree = document.getElementById("answer1-three");
let answerFirstFour = document.getElementById("answer1-four");

let questions2 = document.querySelector('.questions');
let questionTwo = document.getElementById("question-two");
let answerSecondOne = document.getElementById("answer2-one");
let answerSecondTwo = document.getElementById("answer2-two");
let answerSecondThree = document.getElementById("answer2-three");
let answerSecondFour = document.getElementById("answer2-four");

let questions3 = document.querySelector('.questions');
let questionThree = document.getElementById("question-three");
let answerThreeOne = document.getElementById("answer3-one");
let answerThreeTwo = document.getElementById("answer3-two");
let answerThreeThree = document.getElementById("answer3-three");
let answerThreeFour = document.getElementById("answer3-four");




function quizOne () {
questions.style.display = "block";
questionOne.textContent =  'Commonly used data types DO NOT include:'
answerFirstOne.textContent = 'A: Strings'
answerFirstTwo.textContent = 'B: Booleans'
answerFirstThree.textContent = 'C: Alerts' 
answerFirstFour.textContent = 'D: Numbers'

alert(questionOne);
console.log(questionOne);  
}
start.addEventListener('click', quizOne);

function quizTwo () {
    questions2.style.display = "block";
    questionOne.textContent =  'Arrays in JavaScript can be used to store:'
    answerFirstOne.textContent = 'A: Other Arrays'
    answerFirstTwo.textContent = 'B: Numbers and Strings'
    answerFirstThree.textContent = 'C: Booleans' 
    answerFirstFour.textContent = 'D: All of the Above' 
}
    answerFirstOne.addEventListener('click', quizTwo);
    answerFirstTwo.addEventListener('click', quizTwo);
    answerFirstThree.addEventListener('click', quizTwo);
    answerFirstFour.addEventListener('click', quizTwo);

function quizThree () {
    questions3.style.display = "block";
    questionOne.textContent =  'A very useful tool during development and debugging for printing content to the debugger is:'
    answerFirstOne.textContent = 'A: JavaScript'
    answerFirstTwo.textContent = 'B: Terminal/Bash'
    answerFirstThree.textContent = 'C: For Loops' 
    answerFirstFour.textContent = 'D: Console.log' 
    }
    answerSecondOne.addEventListener('click', quizThree);
    answerSecondTwo.addEventListener('click', quizThree);
    answerSecondThree.addEventListener('click', quizThree);
    answerSecondFour.addEventListener('click', quizThree);   

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
  document.getElementsByName('time-up').appendChild(endCounter);
  }
  countdownToGame();
