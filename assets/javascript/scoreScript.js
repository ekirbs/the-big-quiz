//  GLOBAL VARIABLES
var highScoreList = document.querySelector("#high-score-list");
var userInfo = [];
var sortedScores = JSON.parse(localStorage.getItem("userInfo"));

highScoreList.innerHTML = "";
// console.log(sortedScores);

// RENDERS HIGH SCORES ON PAGE
function renderHighScores() {
  for (var i = 0; i < sortedScores.length; i++) {
    var name = sortedScores[i].name;
    var highScore = sortedScores[i].highScore;
    // console.log(highScore);

    var li = document.createElement("li");
    li.textContent = `${name}: ${highScore}`;
    li.setAttribute("data-index", i);

    highScoreList.appendChild(li);
  }
};

// INITIAL FUNCTION ON PAGE LOAD
function init() {
  var storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  // console.log(storedUserInfo);

  if (userInfo !== null) {
    userInfo = storedUserInfo;
  }
  // console.log(userInfo);

  renderHighScores();
};

init();
