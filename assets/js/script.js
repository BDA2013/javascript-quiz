var time = document.getElementById('time');
var startButton = document.getElementById('start');
var screenHead = document.getElementById('screenHeader');
var info = document.getElementById('instruction'); 
var choiceArea = document.getElementById('choiceArea');
var choiceButton = document.getElementsByClassName('choiceButton');
var choiceA = document.getElementById('choiceA');
var choiceB = document.getElementById('choiceB');
var choiceC = document.getElementById('choiceC');
var choiceD = document.getElementById('choiceD');


var i = 0;
var score = 0;
var timeLeft = 60;

time.textContent = timeLeft;

var questions = 
      [
        {
            question: "Commonly used data types DO Not include:",
            choices: {
                0: "strings",
                1: "booleans",
                2: "alerts",
                3: "numbers"
            },
            answer: 1
        },
        
        {
            question: "The condition in an if / else statement is enclosed with ______",
            choices: {
                0: "quotes",
                1: "curly brackets",
                2: "parenthesis",
                3: "square brackets"
            },
            answer: 3
        },

        {
            question: "Arrays in JavaScript can be used to store ______",
            choices: {
                0: "numbers & strings",
                1: "other arrays",
                2: "booleans",
                3: "all of the above"
            },
            answer: 3
        },

        {
            question: "String values must be enclosed within ______ when being assigned to variables. ",
            choices: {
                0: "comma",
                1: "curly brackets",
                2: "quotes",
                3: "parenthesis"
            },
            answer: 1
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            choices: {
                0: "JavaScript",
                1: "terminal/bash",
                2: "for loops",
                3: "console.log"
            },
            answer: 2
        }
      ];
      

/*
function currentScores() {
    localStorage.setItem("wins", JSON.stringify(wins));
    localStorage.setItem("loses", JSON.stringify(loses));

    gameWins.textContent = localStorage.getItem("wins");
    gameLoses.textContent = localStorage.getItem("loses");

}
*/

function quiz() {    
    choiceArea.setAttribute('style', 'visibility: visible');
    startButton.setAttribute('style', 'visibility: hidden');
    info.setAttribute('style', 'visibility: hidden');
    var question = questions[i].question;
    var choices = questions[i].choices;

    screenHead.textContent = question;
    userChoice(choices[0], choices[1], choices[2], choices[3])
}

function userChoice(answerA, answerB, answerC, answerD) {
    choiceA.textContent = answerA;
    choiceB.textContent = answerB;
    choiceC.textContent = answerC;
    choiceD.textContent = answerD;

    var choices = questions[i].choices;
    var storedAnswer = questions[i].answer;
    var queryAnswer = choices[storedAnswer];
    console.log(queryAnswer);
    console.log(answerA === queryAnswer);
    console.log(answerB === queryAnswer);
    console.log(answerC === queryAnswer);
    console.log(answerD === queryAnswer);

    choiceA.addEventListener("click", function() {
        if (this === queryAnswer) {
            score++;
            quizCounter();
        } else {
            timeLeft -= 10;
            quizCounter();
        }
    });

    choiceB.addEventListener("click", function() {
        if(this === queryAnswer){
            score++;
            i++;
            quizCounter();
        } else {
            timeLeft -= 10;
            i++;
            quizCounter();
        }
    });

    choiceC.addEventListener("click", function() {
        if(this === queryAnswer){
            score++;
            i++;
            quizCounter();
        } else {
            timeLeft -= 10;
            i++;
            quizCounter();
        }
    });

    choiceD.addEventListener("click", function() {
        if(this === queryAnswer){
            score++;
            i++;
            quizCounter();
        } else {
            timeLeft -= 10;
            i++;
            quizCounter();
        }
    });
}

function quizCounter() {
    if (i < questions.length) {
        quiz();
    } else {
       results(); 
    }   
}

function results() {
    i = 0;
    timeLeft = 60;
    choiceArea.setAttribute('style', 'visibility: hidden');
    startButton.setAttribute('style', 'visibility: visible');
    info.setAttribute('style', 'visibility: visible');
    startButton.textContent = "Try Again"
    screenHead.textContent = "Congratuations!";
    info.textContent = "Your score is: " + score;

}

function quizTimer() {
    if (timeLeft === 60) {
        var timeInterval = setInterval(function () {
            timeLeft--;
            time.textContent = timeLeft 
    
            if (timeLeft < 0) {
                timeLeft = 0;
            }
            if (timeLeft === 0) {
                clearInterval(timeInterval);
            }
          }, 1000);
    }  
}

startButton.addEventListener("click", function() {
    quiz();
    quizTimer();
});