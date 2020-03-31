start = document.getElementById("start");
cardOne = document.querySelector('.card1');

function quizQuestionOne () {
let questionOne = {
    'Question':'Commonly used data types DO NOT include:',
    'Answer:':['Strings', 'Booleans',' Alerts', 'Numbers']   
}
start.style.display = 'block'
    console.log(questionOne);
}

start.onclick = quizQuestionOne;





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
