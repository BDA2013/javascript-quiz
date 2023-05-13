var time = document.getElementById('time');
var startButton = document.getElementById('start');
var questionHead = document.getElementById('screen-header');
var choiceA = document.getElementById('choiceA');
var choiceB = document.getElementById('choiceB');
var choiceC = document.getElementById('choiceC');
var choiceD = document.getElementById('choiceD');

var score = 0;
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
function generateQuiz() {

	function showQuestions(){
		// code will go here
        for(var i = 0; i < questions.length; i++) {
            questionHead.textContent = questions[i].question;
        }
	}

	function showResults(){
		// code will go here
	}

	// show the questions
	showQuestions();

	// when user clicks submit, next question
	submitButton.onclick = function(){
		showResults();
	}
}
*/

var userChoices = document.getElementsByTagName('answer-area');
      

/*
function currentScores() {
    localStorage.setItem("wins", JSON.stringify(wins));
    localStorage.setItem("loses", JSON.stringify(loses));

    gameWins.textContent = localStorage.getItem("wins");
    gameLoses.textContent = localStorage.getItem("loses");

}
*/

function quiz(i) {
    var question = questions[i].question;
    console.log(question);
    var choices = questions[i].choices;
    questionHead.textContent = question;
    choiceA.textContent = choices[0];
    choiceB.textContent = choices[1];
    choiceC.textContent = choices[2];
    choiceD.textContent = choices[3];
}    


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

startButton.addEventListener("click", function() {
    quiz(0);
    quizCounter();
});