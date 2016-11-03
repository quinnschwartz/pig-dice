//backend

//variables

  var subTotal = 0;
  var player1Total = 0;
  var player2Total = 0;
  var currentPlayer = 1;

//functions

Player = function(name) {
  this.name = name;
  this.score = 0;
};

Game = function(player1, player2) {
  this.players = [player1, player2];
}

var rollDie = function() {
  return Math.ceil(Math.random() * 6);
}

//frontend
$(document).ready(function() {
    $("form#startGame").submit(function(event) {
    event.preventDefault();

    var player1Name = $("input#player1NameInput").val();
    var player2Name = $("input#player2NameInput").val();
    var newGame = new Game(player1Name, player2Name);
    console.log(newGame);
  });

  $("button#rollButton").click(function(event) {
    if (subTotal === 0) {
      $("ol#currentTurn").empty();
    }
    var result = rollDie();
    console.log(currentPlayer)
    if (result === 1) {
      $("span#currentPlayerDisplay").text(currentPlayer);
      $("ol#currentTurn").append("<li>" + result + "</li>  <h3>Too Greedy, score 0 this turn! Next player, you're up!</h3>");
      subTotal = 0;
      currentPlayer += 1;
      $("span#currentTurnScore").text(subTotal);
      if (currentPlayer > 2) {
        currentPlayer = 1;
      }
    } else {
        $("ol#currentTurn").append("<li>" + result + "</li>");
        subTotal += result;
        $("span#currentTurnScore").text(subTotal);
        $("span#currentPlayerDisplay").text(currentPlayer);
    }
  });

  $("button#holdButton").click(function(event) {
    $("ol#currentTurn").append("Congrats, you scored " + subTotal + " points this turn! Next player, click roll when ready.");
    if (currentPlayer === 1) {
      player1Total += subTotal;
      $("span#player1ScoreDisplay").text(player1Total);

    } else if (currentPlayer === 2) {
      player2Total += subTotal;
      $("span#player2ScoreDisplay").text(player2Total);
    }

  if (player1Total > 100 || player2Total > 100) {
    alert("Player" + " " + currentPlayer + " " + "wins!  Final score:" + " " + player1Total + " " + "(Player 1)," + " " + player2Total + " " + "(Player 2)");
    player1Total = 0;
    player2Total = 0;
    $("ol#currentTurn").empty();
    // $(subtotal).empty();
    currentPlayer = 1;
    $("span#player1ScoreDisplay").text(player1Total);
    $("span#player2ScoreDisplay").text(player2Total);
    currentPlayer = 1;
  } else {
    currentPlayer += 1;
    subTotal = 0;
    if (currentPlayer > 2) {
      currentPlayer = 1;
    }
  }
  });
});
