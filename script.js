let start = document.getElementById("start");
let startQuiz = document.querySelector(".start-page");
let challenge = document.querySelector(".challenge");

let endGame = document.querySelector(".end-game");
let score = 0;

let responseYes = document.createElement('p');
responseYes.id = 'response-yes';
responseYes.style.display = "none";
responseYes.innerHTML = 'Correct!';
document.getElementById("response").appendChild(responseYes);

let responseNo = document.createElement('p');
responseNo.id = 'response-no';
responseNo.style.display = "none";
responseNo.innerHTML = 'Incorrect!';
document.getElementById("response").appendChild(responseNo);

let questionIndex = 0;

let questionBank = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
        correctAnswer: 'Alerts'
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: ['Numbers and Strings', 'Booleans', 'Other Arrays', 'All of the Above'],
        correctAnswer: 'All of the Above'
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        answers: ['JavaScript', 'For Loops', 'Console.log', 'Terminal/Bash'],
        correctAnswer: 'Console.log'
    },
    {
        question: "An unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs is known as a(n):",
        answers: ['Object', 'Array', 'For Loop', 'Function'],
        correctAnswer: 'Object'
    }
];
function questions() {
    //    for (var questionIndex = 0; questionIndex < questionBank.length; questionIndex++) {
    document.getElementById('question').innerHTML = '';
    var currentQuestion = document.createElement('div');
    var thisQuestion = questionBank[questionIndex];
    currentQuestion.id = 'current-question';
    currentQuestion.textContent = thisQuestion.question;
    document.getElementById('question').appendChild(currentQuestion);
    for (var j = 0; j < thisQuestion.answers.length; j++) {
        var answers = document.createElement('button');
        answers.setAttribute('class', 'answer');
        answers.setAttribute('data-answer', thisQuestion.answers[j])
        answers.textContent = thisQuestion.answers[j];
        currentQuestion.appendChild(answers);
        answers.onclick = checkAnswer;
    }
    //  }
}
start.addEventListener('click', questions);


function checkAnswer() {
    var check = this.getAttribute('data-answer');
    console.log(check)
    if (check === questionBank[questionIndex].correctAnswer) {
        responseYes.style.display = "block";
        score = score + 5;
        setTimeout(function () {
            responseYes.style.display = "none";
        }, 2000)
    } else {
        responseNo.style.display = "block";
        secondsLeft = secondsLeft - 10;
        setTimeout(function () {
            responseNo.style.display = "none";
        }, 2000)
    }
    questionIndex++



    if (questionIndex === questionBank.length) {
        theEnd()
    } else {
        questions()
    }
}
// function questionOne() {
//     var currentQuestionOne = questionBank[0];
//     var firstQuestion = document.getElementById("question")
//     firstQuestion.textContent = currentQuestionOne.question;
//     var answerKeyOne = currentQuestionOne.answers;
//     for (var j = 0; j < answerKeyOne.length; j++) {
//         var answersOne = document.createElement("button");
//         answersOne.id = "answers-one";
//         answersOne.setAttribute("style", "background-color: purple;");
//         answersOne.textContent = answerKeyOne[j];
//         answersOne.addEventListener('click', questionTwo);
//         answersOne.addEventListener('click', checkAnswer);
//         var correctAnswerOne = currentQuestionOne.correctAnswer;
//         correctAnswerOne.id = "correct-answer";
//         document.getElementById('question').append(answersOne);
//     }
//     function checkAnswer(){
//     if (correctAnswerOne.onclick === true) {
//         responseYes.style.display = "block"
//     } else {
//         responseNo.style.display = "block"
//     }
// }
// }
// start.addEventListener('click', questionOne);

// function questionTwo() {
//     var currentQuestionTwo = questionBank[1];
//     var secondQuestion = document.getElementById("question-two")
//     secondQuestion.textContent = currentQuestionTwo.question;
//     var answerKeyTwo = currentQuestionTwo.answers;
//     for (var k = 0; k < answerKeyTwo.length; k++) {
//         var answersTwo = document.createElement("button");
//         answersTwo.id = "answers-two";
//         answersTwo.setAttribute("style", "background-color: purple;");
//         answersTwo.textContent = answerKeyTwo[k];
//         answersTwo.addEventListener('click', questionThree);
//         document.getElementById('question-two').append(answersTwo);
//         var correctAnswerTwo = currentQuestionTwo.correctAnswer;

//     }


//     //  if (answerKey[2].onclick){
//     //       responseYes.style.display = "block"
//     //   } else {
//     //       responseNo.style.display = "block"
//     //   }
//     //}  
// }

// function questionThree() {
//     var currentQuestionThree = questionBank[2];
//     var thirdQuestion = document.getElementById("question-three")
//     thirdQuestion.textContent = currentQuestionThree.question;
//     var answerKeyThree = currentQuestionThree.answers;
//     for (var l = 0; l < answerKeyThree.length; l++) {
//         var answersThree = document.createElement("button");
//         answersThree.id = "answers-three";
//         answersThree.setAttribute("style", "background-color: purple;");
//         answersThree.textContent = answerKeyThree[l];
//         answersThree.addEventListener('click', questionFour);
//         document.getElementById('question-three').append(answersThree);
//         var correctAnswerThree = currentQuestionThree.correctAnswer;

//     }


//     //  if (answerKey[2].onclick){
//     //       responseYes.style.display = "block"
//     //   } else {
//     //       responseNo.style.display = "block"
//     //   }
//     //}  
// }

// function questionFour() {
//     var currentQuestionFour = questionBank[3];
//     var fourthQuestion = document.getElementById("question-four")
//     fourthQuestion.textContent = currentQuestionFour.question;
//     var answerKeyFour = currentQuestionFour.answers;
//     for (var m = 0; m < answerKeyFour.length; m++) {
//         var answersFour = document.createElement("button");
//         answersFour.id = "answers-four";
//         answersFour.setAttribute("style", "background-color: purple;");
//         answersFour.textContent = answerKeyFour[m];
//         answersFour.addEventListener('click', theEnd);
//         document.getElementById('question-four').append(answersFour);
//         var correctAnswerFour = currentQuestionFour.correctAnswer;

//     }


//     //  if (answerKey[2].onclick){
//     //       responseYes.style.display = "block"
//     //   } else {
//     //       responseNo.style.display = "block"
//     //   }
//     //}  
// }

// //answerFirstThree.onclick = function (){
// //    if (answerFirstThree) {
// //        responseYes.style.display = "block";
// //        setTimeout(quizTwo, 2000);
// //    } else {
// //        responseNo.style.display = "block";
// //        setTimeout(quizTwo, 2000);
// //    }}
// //}


function theEnd() {
    endGame.style.display = "block";
    //        questionsSectionFour.style.display = "none";
    score.textContent = 'Your score is: ' + score + '.';
}


const countdown = document.querySelector(".time");

var secondsLeft = 60;

function countdownToGame() {
    const timerInterval = setInterval(function () {
        secondsLeft--;
        countdown.textContent = 'Time: ' + secondsLeft;

        if (secondsLeft === 0) {
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

function finalPage() {

}
  //theEnd.addEventListener('click', finalPage);
