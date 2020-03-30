
const startQuiz = document.getElementById("start");
const questionOne = document.getElementById("next-question");
const countdown = document.querySelector(".time");
const timeUp = document.getElementById("time-up");


let questions = ['Commonly used data types DO NOT include:, 1. strings, 2. arrays, 3. booleans, 4. numbers']

var carousel = document.querySelector(".carouselbox");

var index = 0;

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = questions.length - 1; 
  } else if (index > questions.length - 1) { 
    index = 0;
  }
  carousel.style.display = 'block';
}

carousel.addEventListener("click", function(event) {
  event.stopPropagation();

  navigate(1);
});

navigate(0);

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
