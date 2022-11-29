var qaBank = [
  {question: "What is the capital of New Jersey?",
  answers: ["Paul", "Sam", "Eric", "Trenton"],
  correct: "Trenton"},
  {question: "What is the capital of New Jersey?",
  answers: ["Paul", "Sam", "Eric", "Springfield"],
  correct: "Springfield"},
  {question: "What is the capital of New Jersey?",
  answers: ["Paul", "Sam", "Eric", "Little Rock"],
  correct: "Little Rock"},
]

var currentQuestion = 0;

var startButton = document.querySelector("#start-button");
var questionArea = document.querySelector("#question-title");
var questionBody = document.querySelector("#question-body");


function renderCurrentQuestion () {
  // console.log('game button clicked')
  questionArea.textContent = qaBank[currentQuestion].question;
  questionBody.innerHTML = `<li>${qaBank[currentQuestion].answer[0]}</li><li>${qaBank[currentQuestion].answer[1]}</li><li>${qaBank[currentQuestion].answer[2]}</li><li>${qaBank[currentQuestion].answer[3]}</li>`
  // I have ${animals.length} 
}

startButton.addEventListener('click', renderCurrentQuestion);

//we want to use delegation when dealing with eventlisteners and dynamic elements on the dom
//how delegations works is we attach the event listener directly to the dom then filter thru it to make sure its actually clicking on the desired target.

document.addEventListener("click", checkForAnswer);

function checkForAnswer(event) {

  if (event.target.matches("li")) {
    console.log(event.target);
    if (event.target.textContent === qaBank[currentQuestion].correct) {
      console.log("thats the right answer");
      //maybe do something to the score instead of just console log
    } else {
      console.log ("wrong answer")
    }

    currentQuestion++;
    renderCurrentQuestion();
  }
}

//view Highscores anchor tag at top of html
//view highscores is a separate webpage with a back button
//use table for highscores (table page saved in bookmarks) dynamically stored



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


// Script of diceSimulator
// let num = get_number("Enter the number of rolls.");

// let results = roll_dice(num);

// let table = document.getElementById("results");
// log_results(num, results, table);

// table.classList.remove("hide");



// Functions for diceSimulator
// function get_number(prompt) {
//   let valid_input = false;
//   let num_rolls, input;

//   while(!valid_input) {
//       input = window.prompt(prompt);

//       num_rolls = Number(input);

//       if (!isNaN(num_rolls) && num_rolls > 0) {
//           valid_input = true;
//       }
//   }

//   return num_rolls;
// }

//   function init_rolls() {
//       let rolls = []
//       for(let i=0; i < 11; i++) {
//           rolls.push(0);
//       }

//       return rolls;
//   }

//   function roll_dice(num_rolls) {
//       let rolls = init_rolls();
  
//       let die1, die2, roll;
  
//       for(let i = 0; i < num_rolls; i++) {
//           die1 = Math.floor(Math.random() * 6) + 1;
//           die2 = Math.floor(Math.random() * 6) + 1;
  
//           roll = die1 + die2;
//           rolls[roll-2]++;
//       }

//   return rolls;
// }

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