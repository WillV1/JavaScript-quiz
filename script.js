const carousel = document.querySelector(".carouselbox");
const startQuiz = document.getElementById("start");
const questionOne = document.getElementById("next-question");
const countdown = document.querySelector(".time");
const timeUp = document.getElementById("time-up");

let counter = 0;

let questions = ['Commonly used data types DO NOT include:, 1. strings, 2. arrays, 3. booleans, 4. numbers']

let amount = questions.length;
  let current = questions[0];
  carousel.classList.add('active');
  function navigate(direction) {
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !questions[counter]) { 
      counter = 0;
    }
  }
  startQuiz.addEventListener('click', function(ev) {
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
