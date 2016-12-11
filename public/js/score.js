var SCORE = {
  getScore: function (){
    var scoreEl = document.getElementById('score-board');
    var scoreText = scoreEl.textContent;
    return parseInt(scoreText)
  },
  increaseScore: function(oldScore, increment) {
    return oldScore + increment;
  },
  updateScoreBoard: function(scoreToSet) {
    var scoreBoard = document.getElementById("score-board");
    scoreBoard.innerHTML = scoreToSet;
  }
};
