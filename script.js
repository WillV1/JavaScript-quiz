//Starting variables

let start = document.getElementById("start");
let send = document.getElementById("send");
let startQuiz = document.querySelector(".start-page");
let challenge = document.querySelector(".challenge");
let Highscores = document.querySelector(".highscore");

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

// Sets up question bank and question/check answer functions

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
    challenge.style.display = "none";
    start.style.display = "none";
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

// Sets up final score page

function theEnd() {
    endGame.style.display = "block";
    document.getElementById('question').style.display = "none";
    let finalScore = document.createElement('p');
    finalScore.id = 'final-score';
    finalScore.textContent = 'Your final score is: ' + score + '.';
    document.querySelector('.totalscore').appendChild(finalScore);
    countdown.textContent = " ";
    clearInterval(timerInterval);
    localStorage.setItem("player-score", score);
}

//Sets up game timer

const countdown = document.querySelector(".time");

var secondsLeft = 60;
var timerInterval;

function countdownToGame() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        countdown.textContent = 'Time: ' + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}
start.addEventListener('click', countdownToGame);

//Sets up game over indicator for when player runs out of time

function gameOver() {
    countdown.textContent = " ";
    let timeUp = document.createElement('p');
    timeUp.textContent = 'GAME OVER!';
    document.getElementById('time-up').appendChild(timeUp);
    location.reload();
}

//Sets up page to display score/high scores

let final = document.querySelector('.final-page');

function storeName() {
    var input = document.getElementById("player-name");
    localStorage.setItem("player-name", input.value);
}
let namePlayer = localStorage.getItem('player-name');
let scorePlayer = localStorage.getItem('player-score');

let highScore = [];
highScore.push(namePlayer, scorePlayer);

function finalPage(event) {
    event.preventDefault();
    final.style.display = "block";
    document.querySelector('.end-game').style.display = "none";
    let scoreDisplay = document.createElement('p');
    scoreDisplay.id = "score-display";
    scoreDisplay.innerHTML = highScore;
    document.getElementById("high-score").append(scoreDisplay);
    let startOver = document.createElement('button')
    startOver.setAttribute('class', 'restart');
    startOver.setAttribute('style', 'background-color: purple; border-radius: 5px; color: white; text-align: center; display: flex;');
    startOver.textContent = "Go Back";
    startOver.addEventListener('click', returnToStart);
    document.querySelector(".final-page").append(startOver);
    let clear = document.createElement('button')
    clear.setAttribute('class', 'clear-stats');
    clear.setAttribute('style', 'background-color: purple; border-radius: 5px; color: white; text-align: center; display: flex;');
    clear.textContent = "Clear Highscores";
    clear.addEventListener("click", removeHighscores);
    document.querySelector(".final-page").append(clear);
}
send.addEventListener('click', finalPage)

function removeHighscores() {
    localStorage.clear();
}

function returnToStart() {
    location.reload();
    return false;
}

//Modal source code provided via. https://www.w3schools.com/howto/howto_css_modals.asp

let scoreModal = document.getElementById("scores-modal");
let openModal = document.querySelector(".highscore");
let span = document.getElementsByClassName("close")[0];
openModal.onclick = function () {
    scoreModal.style.display = "block";
}
span.onclick = function () {
    scoreModal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == scoreModal) {
        scoreModal.style.display = "none";
    }
}