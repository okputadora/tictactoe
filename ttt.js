var numPlayer = 1;
var letters = ["X", "O"];
var userLetter = 0;
var activePlayer = 0;
var round = 0;

function initiateGame(){
  // .off unbinds the event handler so it doesn't set it off
  // multiple times
  $(".sq").off();
  $(".sq").on("click", function(){
    var id = this.id;
    console.log("Letter: " + userLetter);
    $("#" + id).html(letters[userLetter]);
    // check if someone has won
    if (checkForWinner()){
      setTimeout(function(){
        console.log("game won");
        $("#game-container").html(letters[userLetter] + " has won");
      }, 2000)
    }
    // increment round;
    else {
      if (userLetter === 0){userLetter = 1;}
      else{userLetter = 0;}
      round += 1;
      // if all the squares have been filled
      if (round === 8){
        $("game-container").html("It was a draw")

      }
      if ($("#player2Name").html() == "Computer"){
        againstComputer();
      }
      else {initiateGame();}
    }
  });
 }

function checkForWinner(){
  console.log("checking for winner");
  var winner = false;
  // 8 possible lines to win on 3 across 3 down 2 diagonal
  arr = [0, 1, 2];
  var i = 0;
  while (i < 9){
    //check if they are all the same
    var check = $("#s" + arr[0]).html();
    if (arr[0] === 2 && arr[1] === 4 && arr[2] === 6){
      console.log("in here");
    }
    if ($("#s" + arr[1]).html() === check && $("#s" + arr[2]).html() === check && check != ""){
      winner = true;
      console.log("There is a winner");
      break;
    }
    // increment line of squares to search through
    if (i < 2){
      for (var j in arr){
        arr[j] += 3;
      }
    }
    else if (i === 3){
      arr = [0, 3, 6]
    }
    else if (i < 6){
      for (j in arr){
        arr[j] = arr[j] + 1;
      }
    }
    else if (i === 6){
      arr = [0, 4, 8];
    }
    else if (i === 7){
      console.log("INNNHERE");
      arr = [2, 4, 6];
    }
    i++;
  }
  return winner;
}

function againstComputer(){
  // randomly fill in squares
  var sqrFilled = false;
  while (sqrFilled === false){
    sqr = Math.floor(Math.random() * 8);
    if ($("#s" + sqr).html() === ""){
      sqrFilled = true;
    }
  }
  if (checkForWinner()){
    $("#game-container").html(letters[userLetter] + " has won");
  };
  activePLayer = 0;
  round += 1;
  $("#s" + sqr).html(letters[userLetter]);
  if (userLetter === 0){userLetter = 1;}
  else{userLetter = 0;}
  initiateGame();
}

$(document).ready(function(){
  $(".ply-but").click(function(){
    $("#player-select").css("display", "none");
    $("#letter-select").css("display", "flex");
  });



  $(".let-but").click(function(){
    $("#letter-select").css("display", "none");
    $("#board").css("display", "flex");
    $("#stats").css("height", "100px");
    $("#stats").css("display", "flex");
  });

  // number of players
  $("#2player").click(function(){
    numPlayer = 2;
    $("#player2Name").html("Player 2");
  });
  $("#1player").click(function(){
    $("#player2Name").html("Computer");
  });

  // player letters
  $("#o").click(function(){
    againstComputer();
  });

  $("#x").click(function(){
    initiateGame();
  });
})
