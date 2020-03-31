var carousel = document.querySelector(".carouselbox");
const start = document.getElementById('start');
var index = 0;
var questions = [
    'Common data types DO NOT include:',
    'Arrays in JavaScript can be used to store:'
];
var currentQuestion;
function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = questions.length - 1; 
  } else if (index > questions.length - 1) { 
    index = 0;
  }
  currentQuestion = questions[index];
}

start.addEventListener("click", function(event) {
  event.stopPropagation();

  navigate(1);
});

navigate(0);

//const next = document.getElementById('nextquestion');

const countdown = document.querySelector(".time");
const timeUp = document.getElementById("time-up");

//let questionTwo = {
//    'Arrays in JavaScript can be used to store:': {
//        1: 'Numbers and strings',
//        2: 'Other arrays',
//        3: 'Booleans',
//        4: 'All of the above'
//    } 
//}



var secondsLeft = 60;


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
