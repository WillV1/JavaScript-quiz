let start = document.getElementById("start");
let startQuiz = document.querySelector(".start-page");
let challenge = document.querySelector(".challenge");
let questions = document.getElementById('question');
let answerFirstOne = document.getElementById("answer1-one");
let answerFirstTwo = document.getElementById("answer1-two");
let answerFirstThree = document.getElementById("answer1-three");
let answerFirstFour = document.getElementById("answer1-four");

let questionsSectionTwo = document.getElementById('question-two');
let answerSecondOne = document.getElementById("answer2-one");
let answerSecondTwo = document.getElementById("answer2-two");
let answerSecondThree = document.getElementById("answer2-three");
let answerSecondFour = document.getElementById("answer2-four");

let questionsSectionThree = document.getElementById('question-three');
let answerThirdOne = document.getElementById("answer3-one");
let answerThirdTwo = document.getElementById("answer3-two");
let answerThirdThree = document.getElementById("answer3-three");
let answerThirdFour = document.getElementById("answer3-four");

let questionsSectionFour = document.getElementById('question-four');
let answerFourthOne = document.getElementById("answer4-one");
let answerFourthTwo = document.getElementById("answer4-two");
let answerFourthThree = document.getElementById("answer4-three");
let answerFourthFour = document.getElementById("answer4-four");

let endGame = document.querySelector(".end-game");
let score = 0;

let responseYes = document.createElement('p');
responseYes.id = 'response-yes'; 
responseYes.style.display = "none";
responseYes.innerHTML = 'Correct!';
document.querySelector(".questions").appendChild(responseYes);

let responseNo = document.createElement('p');
responseNo.id = 'response-no'; 
responseNo.style.display = "none";
responseNo.innerHTML = 'Incorrect!';
document.querySelector(".questions").appendChild(responseNo);


function quizOne () {
let quizFirst = document.createElement('p');
quizFirst.id = 'one';
quizFirst.style.textAlign = "center";     
quizFirst.innerHTML = 'Commonly used data types DO NOT include:';    
document.getElementById('question').insertBefore(quizFirst, answerFirstOne);   

const questionOne = {
    'A:': 'Strings',
    'B:': 'Booleans',
    'C:': 'Alerts',
    'D:': 'Numbers'
}    
const quizQuestionOne = Object.entries(questionOne);

questions.style.display = "block";
challenge.style.display = "none";
startQuiz.style.display = "none";

for (i = 0; i < quizQuestionOne.length; i++){
    answerFirstOne.textContent = quizQuestionOne[0];
    answerFirstTwo.textContent = quizQuestionOne[1];
    answerFirstThree.textContent = quizQuestionOne[2];
    answerFirstFour.textContent = quizQuestionOne[3];
}
answerFirstThree.onclick = function (){
    if (answerFirstThree) {
        responseYes.style.display = "block";
    } else {
        responseNo.style.display = "block";
    }}
}

//if (answerFirstThree.onclick){
//    responseYes.style.display = "block";
//} else {
//    responseNo.style.display = "block";
//}
//if (answerFirstThree.onclick){
//   score+=5;
//} else {secondsLeft -=10
//}
//}
start.addEventListener('click', quizOne);


function quizTwo () {
    questionsSectionTwo.style.display = "block";
    questions.style.display = "none";
    let quizSecond = document.createElement('p');
    quizSecond.id = 'two';     
    quizSecond.innerHTML = 'Arrays in JavaScript can be used to store:';    
    document.getElementById('question-two').insertBefore(quizSecond, answerSecondOne);   
    
    const questionTwo = {
        'A:': 'Other Arrays',
        'B:': 'Numbers and Strings',
        'C:': 'Booleans',
        'D:': 'All of the Above'
    }    
    const quizQuestionTwo = Object.entries(questionTwo);
   
    for (i = 0; i < quizQuestionTwo.length; i++){
        answerSecondOne.textContent = quizQuestionTwo[0];
        answerSecondTwo.textContent = quizQuestionTwo[1];
        answerSecondThree.textContent = quizQuestionTwo[2];
        answerSecondFour.textContent = quizQuestionTwo[3];
    }
}
    answerFirstOne.onclick = quizTwo;
    answerFirstTwo.onclick = quizTwo;
    answerFirstThree.onclick = quizTwo;
    answerFirstFour.onclick = quizTwo;

function quizThree () {
    questionsSectionThree.style.display = "block";
    questionsSectionTwo.style.display = "none";
    let quizThird = document.createElement('p');
    quizThird.id = 'three';     
    quizThird.innerHTML = 'A very useful tool during development and debugging for printing content to the debugger is:';    
    document.getElementById('question-three').insertBefore(quizThird, answerThirdOne);   
    
    const questionThree = {
        'A:': 'JavaScript',
        'B:': 'Terminal/Bash',
        'C:': 'Console.log',
        'D:': 'For Loops'
    }    
    const quizQuestionThree = Object.entries(questionThree);
   
    for (i = 0; i < quizQuestionThree.length; i++){
        answerThirdOne.textContent = quizQuestionThree[0];
        answerThirdTwo.textContent = quizQuestionThree[1];
        answerThirdThree.textContent = quizQuestionThree[2];
        answerThirdFour.textContent = quizQuestionThree[3];
    }
}
    answerSecondOne.onclick = quizThree;
    answerSecondTwo.onclick = quizThree;
    answerSecondThree.onclick = quizThree;
    answerSecondFour.onclick = quizThree;   

    function quizFour () {
        questionsSectionFour.style.display = "block";
        questionsSectionThree.style.display = "none";
        let quizFourth = document.createElement('p');
        quizFourth.id = 'four';     
        quizFourth.innerHTML = 'An unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs is known as a(n):';    
        document.getElementById('question-four').insertBefore(quizFourth, answerFourthOne);   
        
        const questionFour = {
            'A:': 'Object',
            'B:': 'Array',
            'C:': 'Function',
            'D:': 'Loop'
        }    
        const quizQuestionFour = Object.entries(questionFour);
       
        for (i = 0; i < quizQuestionFour.length; i++){
            answerFourthOne.textContent = quizQuestionFour[0];
            answerFourthTwo.textContent = quizQuestionFour[1];
            answerFourthThree.textContent = quizQuestionFour[2];
            answerFourthFour.textContent = quizQuestionFour[3];
        }
    }
        answerThirdOne.onclick = quizFour;
        answerThirdTwo.onclick = quizFour;
        answerThirdThree.onclick = quizFour;
        answerThirdFour.onclick = quizFour;
         
    function theEnd (){   
        endGame.style.display = "block";
        questionsSectionFour.style.display = "none";
        score.textContent = 'Your score is: ' + score + '.';
    }
    answerFourthOne.addEventListener('click', theEnd);
    answerFourthTwo.addEventListener('click', theEnd);
    answerFourthThree.addEventListener('click', theEnd);
    answerFourthFour.addEventListener('click', theEnd);

const countdown = document.querySelector(".time");

var secondsLeft = 60;

function countdownToGame() {
    const timerInterval = setInterval(function() {
      secondsLeft--;
      countdown.textContent = 'Time: ' + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        gameOver();
      }
    }, 1000);
}
start.addEventListener('click', countdownToGame);
  
  function gameOver() {
  countdown.textContent = " ";
  let timeUp = document.createElement('p');
  timeUp.textContent = 'GAME OVER!';
  document.getElementById('time-up').appendChild(timeUp);
  }

  const highScore = document.querySelector(".highscore");

  function finalPage () {
      
  }
  theEnd.addEventListener('click', finalPage);