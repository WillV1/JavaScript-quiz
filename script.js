

const question = document.getElementById("next-question");
const countdown = document.querySelector(".time");
const timeUp = document.getElementById("time-up");

let questions = ['Common data types DO NOT include:']

function carousel(){
    let box = document.querySelector('.carouselbox');
    let start = document.getElementById("start");
    let counter = 0;
    let amount = questions.length;
    let current = questions[0];
    box.classList.add('active');
    function navigate(direction) {
        current.classList.remove('current');
        counter = counter + direction;
        if (direction === -1 && 
            counter < 0) {
                counter = amount - 1;
            }
        if (direction === 1 &&
            !questions[counter]) {
            counter = 0
            }
        current = questions[counter];
        current.classList.add('current');        
    }
    next.addEventListener('click', function(ev) {
        navigate(1);
    });
    navigate(0);
    }


function myFunction(){
    question.style.display = ['Common data types DO NOT include:']
    console.log(question);
} 

question.onclick = myFunction;

question.addEventListener('click', myFunction);
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
