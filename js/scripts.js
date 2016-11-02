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
    alert(rollDie());

  });
});
