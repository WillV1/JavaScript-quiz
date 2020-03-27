const startQuiz = document.getElementById('start');
const nextQuestion = document.getElementById('next-question');
const countdown = document.querySelector(".time");
const timeUp = document.getElementById("time-up");

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

  nextQuestion.addEventListener("click", function() {
  //  window.location.href = images[index];
  //});