// GLOBAL VARIABLES
var userScore = 0;
var currentQuestion = 0;
var timeLeft = 100;

var startButton = document.querySelector("#start-button");
var questionArea = document.querySelector("#question-title");
var questionBody = document.querySelector("#question-body");
var resultText = document.querySelector("#result");
var scoreDisplay = document.querySelector("#score");
var timer = document.querySelector("#countdown");

var loggedScore = localStorage.getItem("userScore");

// QUESTIONS AND ANSWERS DEPO
var qaDepo = [
  {
    question: "Who famously said: “If I have seen further, it is by standing on the shoulders of giants.” ",
    answers: ["Sir Isaac Newton", "Albert Einstein", "Rene Descartes", "Abraham Lincoln", "Martin Luthor King Jr."],
    correct: "Sir Isaac Newton"
  },
  {
    question: "Which of the following video game characters can be found in Mario Kart 64?",
    answers: ["Toad", "Daisy", "Bowser", "Birdo", "All of the above"],
    correct: "All of the above"
  },
  {
    question: "Which of these is not a type of fencing sword.",
    answers: ["Foil", "Longsword", "Sabre", "Epee", "All of the above"],
    correct: "Longsword"
  },
  {
    question: "Who is the current World Chess Champion?",
    answers: ["Fabiano Caruana", "Gary Kasparov", "Magnus Carlsen", "Viswanathan Anand", "Bobby Fisher"],
    correct: "Magnus Carlsen"
  },
  {
    question: "Which of these players was NOT on the 1994 USA World Cup roster?",
    answers: ["Alexei Lalas", "Tab Ramos", "Marcelo Balboa", "Landon Donovan", "Cobi Jones"],
    correct: "Landon Donovan"
  },
  {
    question: "What is the average airspeed velocity of an unladen swallow?",
    answers: ["Blue", "12 miles per hour", "They are flightless birds", "22 meters per second", "What do you mean? African or European swallow?"],
    correct: "What do you mean? African or European swallow?"
  },
];

// SCORE AND TIMER DISPLAY
scoreDisplay.innerHTML = "Your Score: " + userScore;
timer.textContent = timeLeft + " seconds remaining";

// RENDERS A NEW QUESTION
function renderCurrentQuestion() {
  console.log("game button clicked");
    questionArea.textContent = qaDepo[currentQuestion].question;
    questionBody.innerHTML = `<li>${qaDepo[currentQuestion].answers[0]}</li><li>${qaDepo[currentQuestion].answers[1]}</li><li>${qaDepo[currentQuestion].answers[2]}</li><li>${qaDepo[currentQuestion].answers[3]}</li><li>${qaDepo[currentQuestion].answers[4]}</li>`;
};

// TIMER FUNCTION
function countdown() {

    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft + " seconds remaining";
        scoreDisplay.innerHTML = "Your score: " + userScore;

        if (timeLeft === 0) {

            clearInterval(timeInterval);

            displayMessage1();
            loggedScore = localStorage.setItem("userScore", userScore);
            console.log(loggedScore);

            // timer.textContent = "";
            // scoreDisplay.textContent = "";
            return countdown();

        };
    }, 1000);
};

// LOST ON TIME FUNCTION
function displayMessage1() {
    questionArea.innerHTML = "Time's up!";
    questionBody.innerHTML = "";
    scoreDisplay.innerHTML = "Your score: 0";
    resultText.innerHTML = "Your score: 0";
};

// FINISHED THE GAME FUNCTION
function displayMessage2() {
  questionArea.innerHTML = "You've finished!";
  questionBody.innerHTML = "";
  scoreDisplay.innerHTML = "Your score: " + userScore;
  resultText.innerHTML = "Your score: " + userScore;

};

// we want to use "delegation" when dealing with eventlisteners and dynamic elemnts on the dom.
//how delegation works is we attach the event listener directly to the dom and then filter thru it to make sure its acutally clicking on the desired target.

startButton.addEventListener('click', function () {
    console.log("Quiz started");
    scoreDisplay.innerHTML = "Your score: " + userScore;
    renderCurrentQuestion();
    countdown();
});

document.addEventListener("click", checkForAnswer);

// CHECK IF ANSWER IS CORRECT OR FALSE FUNCTION
function checkForAnswer(event) {
    if (event.target.matches("li")) {
        console.log(event.target);
        if (event.target.textContent === qaDepo[currentQuestion].correct) {
            console.log("Right answer");
            resultText.innerHTML = "Thats right!"
            userScore = timeLeft;
            scoreDisplay.innerHTML = "Your score: " + userScore;
            console.log(userScore);
        } else {
            console.log("Wrong answer");
            resultText.innerHTML = "That's not correct!"
            timeLeft -= 15;
            userScore = timeLeft;
            scoreDisplay.innerHTML = "Your score: " + userScore;
            console.log(userScore);
        };

        currentQuestion++;
        renderCurrentQuestion();
        // return null;
    };

    if (currentQuestion >= 5) {
      displayMessage2();
      return countdown();
      // currentQuestion = 0;
    };
};

// function log_results(num_rolls, rolls, table) {
//   let head = table.getElementsByTagName("thead")[0];
//   let body = table.getElementsByTagName("tbody")[0];

//   let caption = document.createElement("caption");
//   caption.innerText = `We rolled the dice ${num_rolls} times...`;
//   caption.style = "caption-side: top;";

//   table.insertBefore(caption, head);

//   for(let i = 0; i < rolls.length; i++) {
//       let num = i+2;
//       let count = rolls[i];
//       let pct = Math.round(count / num_rolls * 100);

//       let row = document.createElement("tr");
//       row.innerHTML = `<td>${num}</td><td>${count}</td><td>${pct}%</td>`;
//       body.appendChild(row);
//   }
// }


// var counter = document.querySelector("#counter");
// var guessedRight = document.querySelector("#guessedRight");
// var guessedWrong = document.querySelector("#guessedWrong");

// var count = localStorage.getItem("count");

// counter.textContent = count;

// addButton.addEventListener("click", function() {
//   if (guessedRight) {
//     count++;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });