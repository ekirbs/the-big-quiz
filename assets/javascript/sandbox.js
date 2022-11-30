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



// function countdown() {

//     var timeInterval = setInterval(function () {
//       timeCount--;
//         timer.textContent = timeCount + " seconds remaining";
//         scoreDisplay.innerHTML = "Your score: " + scoreCount;

//         if (timeCount <= 0) {

//             clearInterval(timeInterval);

//             displayMessage1();
//             loggedScore = localStorage.setItem("scoreCount", scoreCount);
//             console.log(loggedScore);

//             // timer.textContent = "";
//             // scoreDisplay.textContent = "";
//             return countdown();

//         };
//     }, 1000);
// };



// we want to use "delegation" when dealing with eventlisteners and dynamic elemnts on the dom.
//how delegation works is we attach the event listener directly to the dom and then filter thru it to make sure its acutally clicking on the desired target.

// startButton.addEventListener('click', function () {
//     console.log("Quiz started");
//     scoreDisplay.innerHTML = "Your score: " + scoreCount;
//     renderCurrentQuestion();
//     countdown();
// });

// document.addEventListener("click", checkForAnswer);

// CHECK IF ANSWER IS CORRECT OR FALSE FUNCTION
// function checkForAnswer(event) {
//     if (event.target.matches("li")) {
//         console.log(event.target);
//         if (event.target.textContent === qaBank[currentQuestion].correct) {
//             console.log("Right answer");
//             resultText.innerHTML = "Thats right!"
//             scoreCount = timeCount;
//             scoreDisplay.innerHTML = "Your score: " + scoreCount;
//             console.log(scoreCount);
//         } else {
//             console.log("Wrong answer");
//             resultText.innerHTML = "That's not correct!"
//             timeCount -= 15;
//             scoreCount = timeCount;
//             scoreDisplay.innerHTML = "Your score: " + scoreCount;
//             console.log(scoreCount);
//         };

//         currentQuestion++;
//         console.log(currentQuestion);
//         renderCurrentQuestion();
//     };

//     // if (currentQuestion >= 5) {
//     //   isWin = true;
//     // };
// };

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


// function getLocalStorage ( {
  // return JSON.parse(localStorage.getItem("High Score")) || [];
// }

// function setLocalStorage(elementToAdd) {
//   var currentStorage = getLocalStorage();     be a populated array or an empty array
//   currentStorage.push(elementToAdd);   currentStorage variable now has all the new data added to it
// console.log(currentStorage)
// currentStorage.sort(function(a, b)) {
//   return b.score - a.score;
// }
// if (currentStorage.length > 10) {
      // before we delete the old scores lets first sort and then we remove lowest element
  // currentStorage.pop();
// }
//   localStorage,getItem("High Score")JSON.stringigy(currentStorage));
// }

// put this sorting stuff into a for loop

// sorting algorithm

//   a.score - b.score

// js sort

// make the compare and pop happen during getLocalStorage


// window.location.href = "./high score"




// function getWins() {
//   var storedWins = localStorage.getItem("winCount");
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     winCounter = storedWins;
//   };
//   win.textContent = winCounter;
// };

// function getLosses() {
//   var storedLosses = localStorage.getItem("loseCount");
//   if (storedLosses === null) {
//     loseCounter = 0;
//   } else {
//     loseCounter = storedLosses;
//   };
//   lose.textContent = loseCounter;
// };

// function init() {
//   getWins();
//   getLosses();
// };


// var titleEl = document.createElement("");