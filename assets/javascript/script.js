// GLOBAL VARIABLES
var startButton = document.querySelector("#start-button");
var questionArea = document.querySelector("#question-title");
var questionBody = document.querySelector("#question-body");
var resultText = document.querySelector("#result");
var scoreDisplay = document.querySelector("#score");
var timerDisplay = document.querySelector("#countdown");

var nameInput = document.querySelector("#name-text");
var formInput = document.querySelector("#name-form");
var inputCard = document.querySelector("#input-card");
var signNameButton = document.querySelector("#sign-name");

var scoreCount = 0;
var currentQuestion = 0;
var timeCount;
var timer;
var isWin = false;

// QUESTIONS AND ANSWERS DEPO
var qaBank = [
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

// EVENT LISTENERS
startButton.addEventListener('click', function () {
  console.log("Quiz started");
  startQuiz();
});

document.addEventListener("click", checkForAnswer);

// EVENT LISTENER TO STORE USER DATA
signNameButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  var userInfo = {
    name: nameInput.value.trim(),
    highScore: scoreCount
  };

  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  
});

// START QUIZ FUNCTION WHEN START BUTTON CLICKED, SCORE AND TIMER DISPLAY
function startQuiz() {
  isWin = false;
  timeCount = 100;
  startButton.disabled = true;
  scoreDisplay.innerHTML = "Your Score: " + scoreCount;
  timerDisplay.textContent = timeCount + " seconds remaining";
  renderCurrentQuestion();
  startTimer();
};

// RENDERS A NEW QUESTION
function renderCurrentQuestion() {
  console.log("game button clicked");
    questionArea.textContent = qaBank[currentQuestion].question;
    questionBody.innerHTML = `<li>${qaBank[currentQuestion].answers[0]}</li><li>${qaBank[currentQuestion].answers[1]}</li><li>${qaBank[currentQuestion].answers[2]}</li><li>${qaBank[currentQuestion].answers[3]}</li><li>${qaBank[currentQuestion].answers[4]}</li>`;
};

// TIMER FUNCTION
function startTimer() {
  timer = setInterval(function() {
    timeCount--;
    timerDisplay.textContent = timeCount + " second remaining";
    scoreDisplay.innerHTML = "Your score: " + scoreCount;

    if (isWin === true && timeCount > 0) {
      displayMessage1();
      clearInterval(timer);
    }
    if (timeCount <= 0) {
      displayMessage2();
      clearInterval(timer);
    }
  }, 1000)
};

// FINISHED THE GAME FUNCTION
function displayMessage1() {
  questionArea.innerHTML = "You've finished!";
  questionBody.innerHTML = "";
  scoreDisplay.innerHTML = "Your score: " + scoreCount;
  resultText.innerHTML = "Your score: " + scoreCount;
  // main.classList.add("hide");
  inputCard.classList.remove("hide");
};

// LOST ON TIME FUNCTION
function displayMessage2() {
  questionArea.innerHTML = "Time's up!";
  questionBody.innerHTML = "";
  scoreDisplay.innerHTML = "Your score: 0";
  resultText.innerHTML = "Your score: 0";
};

// CHECK IF ANSWER IS CORRECT OR FALSE FUNCTION
function checkForAnswer(event) {
  if (event.target.matches("li")) {
    console.log(event.target);
    if (event.target.textContent === qaBank[currentQuestion].correct) {
      console.log("Right answer");
      resultText.innerHTML = "Thats right!"
      scoreCount = timeCount;
      scoreDisplay.innerHTML = "Your score: " + scoreCount;
      console.log(scoreCount);
    } else {
        console.log("Wrong answer");
        resultText.innerHTML = "That's not correct!"
        timeCount -= 15;
        scoreCount = timeCount;
        scoreDisplay.innerHTML = "Your score: " + scoreCount;
        console.log(scoreCount);
      };
            
      if (currentQuestion === 5) {
        isWin = true;
        return scoreCount;
      } else {
        isWin = false;
        currentQuestion++;
      };
      
      console.log(currentQuestion);
      renderCurrentQuestion();
    };
  };