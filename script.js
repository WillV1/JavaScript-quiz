let start = document.getElementById("start");
let submit = document.getElementById("submit");
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
        }, 1000)
    } else {
        responseNo.style.display = "block";
        secondsLeft = secondsLeft - 10;
        setTimeout(function () {
            responseNo.style.display = "none";
        }, 1000)
    }
    questionIndex++

    if (questionIndex === questionBank.length) {
        theEnd()
    } else {
        questions()
    }
}

function theEnd() {
    endGame.style.display = "block";
    //questionsSectionFour.style.display = "none";
    let finalScore = document.createElement('p');
    finalScore.id = 'final-score'; 
    finalScore.textContent = 'Your final score is: ' + score + '.';
    document.querySelector('.totalscore').appendChild(finalScore);
    
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

let final = document.querySelector('final-page');



function finalPage() {
    
}
submit.addEventListener('click', finalPage);
