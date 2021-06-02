const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

  clearHighScoreList = (e) => {
    e.preventDefault();
    
    localStorage.clear('highScores');
    
    setTimeout(function(){
      window.location.reload();
  }, 1000);
  }
