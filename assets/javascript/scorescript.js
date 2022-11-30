//  GLOBAL VARIABLES
var highScores = [];
var highScoreList = document.querySelector("#high-score-list");
var highScoreCountSpan = document.querySelector("#high-score-count");

// INITIAL FUNCTION ON PAGE LOAD
function init() {
  var highScoreLog = JSON.parse(localStorage.getItem("highScores"));

  if (highScoreLog !== null) {
    highScores = highScoreLog;
  }

  renderHighScores();
};

function renderHighScores() {
  highScoreList.innerHTML = "";
  highScoreCountSpan.textContent = highScores.length;

  for (var i = 0; i < highScores.length; i++) {
    var highScore = highScores[I];

    var li = document.createElement("li");
    li.textContent = highScore;
    li.setAttribute("data-index", i);

    highScoreList.appendChild(li);
  };
};








function init() {
  getHighScores();
};

function getLocalStorage () {
  return JSON.parse(localStorage.getItem("High Score")) || [];
};

function log_results(num_rolls, rolls, table) {
  let head = table.getElementsByTagName("thead")[0];
// function logHighScores(scores, names, table) {
//   let highName = table.getElementsByTagName()
// var highScore = localStorage.getItem("score");
// }
  let body = table.getElementsByTagName("tbody")[0];

  let caption = document.createElement("caption");
  caption.innerText = `We rolled the dice ${num_rolls} times...`;
  caption.style = "caption-side: top;";

  table.insertBefore(caption, head);

  for(let i = 0; i < rolls.length; i++) {
      let num = i+2;
      let count = rolls[i];
      let pct = Math.round(count / num_rolls * 100);

      let row = document.createElement("tr");
      row.innerHTML = `<td>${num}</td><td>${count}</td><td>${pct}%</td>`;
      body.appendChild(row);
  }
};

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
