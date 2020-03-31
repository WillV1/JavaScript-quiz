const next = document.getElementById('nextquestion');
const start = document.getElementById('start');
const countdown = document.querySelector(".time");
const timeUp = document.getElementById("time-up");

function startQuiz(){
let index = 0;
const questions = ['Common data types DO NOT include:']
let currentQuestion;
function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = questions.length - 1; 
  } else if (index > questions.length - 1) { 
    index = 0;
  }
  currentQuestions = questions[index];
}
next.addEventListener("click", function(event) {
    event.stopPropagation();
  
    navigate(1);
});
console.log(questions);
navigate(0);
}

start.onclick = startQuiz;
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
