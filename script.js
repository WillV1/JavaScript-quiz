const startQuiz = document.getElementById('start');
const nextQuestionOne = document.getElementById('next-question');
const nextQuestionTwo = document.getElementById('next-question2');
const countdown = document.querySelector(".time");
const timeUp = document.getElementById("time-up");
 
const quiz = ['nextQuestionOne', 'nextQuestionTwo'];
const quizIndex = 0;

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
        sendMessage();
      }
  
    }, 1000);
  }
  
  //function endGame() {
  //  countdown.textContent = " ";
  
  //  const endCounter = timeUp.textContent = 'GAME OVER!';
  
  //  timeUp.appendChild(endCounter);
  
  //}
  
  countdownToGame();

  startQuiz.onclick = function(){
  quiz.style.display = 'block';
  
  startQuiz.addEventListener("click", function() {
    event.stopPropagation();
  })};