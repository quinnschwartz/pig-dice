//backend
Player = function(name) {
  this.name = name;
  this.score = 0;
};

Game = function(player1, player2, player3, player4) {
  this.players = [player1, player2, player3, player4];
}



var rollDie = function() {
  return Math.ceil(Math.random() * 6);
}

//frontend
$(document).ready(function() {
    var subTotal = 0;
    var player1Total = 0;
    var player2Total = 0;
    var player3Total = 0;
    var player4Total = 0;
  $("form#startGame").submit(function(event) {
    event.preventDefault();

    var player1Name = $("input#player1NameInput").val();
    var player2Name = $("input#player2NameInput").val();
    var player3Name = $("input#player3NameInput").val();
    var player4Name = $("input#player4NameInput").val();
    var newGame = new Game(player1Name, player2Name, player3Name, player4Name);
    console.log(newGame);
  });

  $("button#rollButton").click(function(event) {
    var result = rollDie();
    if (result === 1) {
    $("ol#currentTurn").append("<li>" + result + "</li>  <h3>Too Greedy, score 0 this turn!</h3>");
    subTotal = 0;
    $("span#currentTurnScore").text(subTotal);
    } else {
    $("ol#currentTurn").append("<li>" + result + "</li>");
    subTotal += result;
    $("span#currentTurnScore").text(subTotal);
    }
  });

  $("button#holdButton").click(function(event) {
    var score = player1Total + subTotal;
    console.log(player1Total);
    console.log(subTotal);
    console.log(score);
    $("span#player1Score").text(score);

  });
});
