//backend
var rollDie = function() {
  return Math.ceil(Math.random() * 6);
}

//frontend
$(document).ready(function() {
  $("form#startGame").submit(function(event) {
    event.preventDefault();

    // var numberOfPlayers = $("input#playersNumber").val();
  });
  $("button#rollButton").click(function(event) {
  var result = rollDie();
  if (result === 1) {
  $("ol#currentTurn").append("<li>" + result + "</li>  <h3>Too Greedy, score 0 this turn!</h3>");
  } else {
  $("ol#currentTurn").append("<li>" + result + "</li>");
  }

  });
});
