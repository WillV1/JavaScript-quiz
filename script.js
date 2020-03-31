

const question = document.getElementById("next-question");
const countdown = document.querySelector(".time");
const timeUp = document.getElementById("time-up");


function carousel(){
    const questions = ['Common data types DO NOT include:']
    console.log(questions);
    let box = document.querySelector('.carouselbox');
    let start = document.getElementById("start");
    let counter = 0;
    let amount = questions.length;
    let current = questions[0];
    box.classList.add('active');
    function navigate(direction) {
        nextquestion.classList.remove('nextquestion');
        counter = counter + direction;
        if (direction === -1 && 
            counter < 0) {
                counter = amount - 1;
            }
        if (direction === 1 &&
            !questions[counter]) {
            counter = 0
            }
        nextquestion2 = questions[counter];
        nextquestion.classList.add('nextquestion');        
    }
    start.addEventListener('click', function(ev) {
        navigate(1);
    });
    navigate(0);
    }
 
    carousel();
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
