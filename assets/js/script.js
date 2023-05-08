var time = document.getElementById('time');
var startButton = document.getElementById('start');
var questionHead = document.getElementById('screen-header');

var score = 0;

//Searched from Google
var userChoices = document.getElementsByTagName('answer-area');
      var questions = 
      [
        {
            question: "Commonly used data types DO Not include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: 1
        },
        
        {
            question: "The condition in an if / else statement is enclosed with ______",
            choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
            answer: 2
        },

        {
            question: "Arrays in JavaScript can be used to store ______",
            choices: ["numbers & strings", "other arrays", "booleans", "all of the above"],
            answer: 3
        },

        {
            question: "String values must be enclosed within ______ when being assigned to variables. ",
            choices: ["comma", "curly brackets", "quotes", "parenthesis"],
            answer: 1
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
            answer: 2
        }
      ];

function quizCounter() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft 

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
      }, 1000);
}

function currentScores() {
    localStorage.setItem("wins", JSON.stringify(wins));
    localStorage.setItem("loses", JSON.stringify(loses));

    gameWins.textContent = localStorage.getItem("wins");
    gameLoses.textContent = localStorage.getItem("loses");

}

function quiz() {
    for (var i = 0; i < questions.length; i++) {
        var question = questions[i].question;
        questionHead.textContent = question;
        var options = questions[i].choices;
        for (var opt in options) {
           for (var buttons in userChoices ) {
             userChoices[buttons].value = options[opt];
            }
        }    
    }

}

startButton.addEventListener("click", function() {
    quizCounter();
    quiz();
});