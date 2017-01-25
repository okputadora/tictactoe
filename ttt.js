var numPlayer = 1;
var letters = ["X", "O"];
var userLetter = 0;
// 0 = human 1 = robot
var activePlayer = 0;
var round = 0;
var ply1Score = 0;
var ply2Score = 0;
var player1Id = 0;
function displayWinner(){
  // display winner
  if (activePlayer === 1){
    $("#winner").html("Player 2 wins!")
    ply2Score += 1;
    $("#player2Score").html(ply2Score);
  }
  else{
    $("#winner").html("Player 1 wins!")
    ply1Score += 1;
    $("#player1Score").html(ply1Score);
  }
  setTimeout(function(){
  // clear the board
  userLetter = 0;
  for (var i = 0; i < 9; i++){
    $("#s" + i).html("");
    $("#winner").html("");
  }
  if (player1Id === 1 && numPlayer === 1){
    activePlayer = 1;
    againstComputer();
  }
  else{
    acitvePlayer = 0;
    initiateGame();}
  }, 2500)
}
function initiateGame(){
  // .off unbinds the event handler so it doesn't set it off
  // multiple times
  console.log("Human responding...");
  $(".sq").off();
  $(".sq").on("click", function(){
  // makes the button unclickable when this function isn't running
  $(".sq").off();
    var id = this.id;
    $("#" + id).html(letters[userLetter]);
    // check if someone has won
    if (checkForWinner()){
      displayWinner();
    }
    // increment round;
    else {
      if (userLetter === 0){userLetter = 1;}
      else{userLetter = 0;}
      if (activePlayer === 0){activePlayer = 1;}
      else{activePlayer = 0;}
      console.log("Active Player after human: " + activePlayer);
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
  var winner = false;
  // 8 possible lines to win on 3 across 3 down 2 diagonal
  arr = [0, 1, 2];
  var i = 1;
  while (i < 9){
    //check if they are all the same
    var check = $("#s" + arr[0]).html();
    if ($("#s" + arr[1]).html() === check && $("#s" + arr[2]).html() === check && check != ""){
      winner = true;
      break;
    }
    // increment line of squares to search through
    if (i < 3){
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
      arr = [2, 4, 6];
    }
    i++;
  }
  return winner;
}
function againstComputer(){
  console.log("Computer responding...");
  // randomly fill in squares
  var sqrFilled = false;
  while (sqrFilled === false){
    sqr = Math.floor(Math.random() * 8);
    if ($("#s" + sqr).html() === ""){
      sqrFilled = true;

    }
  }
  $("#s" + sqr).html(letters[userLetter]);
  if (checkForWinner()){
    displayWinner();
    return;
  }
  round += 1;

  if (userLetter === 0){userLetter = 1;}
  else{userLetter = 0;}
  console.log(activePlayer);
  if (activePlayer === 0){activePlayer = 1;}
  else{
    console.log("in here");
    activePlayer = 0;
    console.log("Active player after robot: " + activePlayer);
}

  initiateGame();
}
$(document).ready(function(){
  $(".ply-but").on("click", function(){
    $("#player-select").css("display", "none");
    $("#letter-select").css("display", "flex");
  });
  $(".let-but").on("click", function(){
    $("#letter-select").css("display", "none");
    $("#board").css("display", "flex");
    $("#stats").css("height", "100px");
    $("#stats").css("display", "flex");
  });
  // number of players
  $("#2player").on("click", function(){
    numPlayer = 2;
    $("#player2Name").html("Human 2");
  });
  $("#1player").on("click", function(){
    $("#player2Name").html("Computer");
  });
  // player letters
  $("#o").on("click", function(){
    player1Id = 1;
    activePlayer = 1;
    console.log(activePlayer);
    if(numPlayer === 1){againstComputer();}
    else{initiateGame();}
  });
  $("#x").on("click", function(){
    player1Id = 0;
    activePlayer = 0;
    initiateGame();
  });

  $("#reset").on("click", function(){
    for (var i = 0; i < 9; i++){
      $("#s" + i).html("");
      $("#winner").html("");
      ply1Score = 0;
      ply2Score = 0;
      userLetter = 0;
      $("#player2Score").html(ply2Score);
      $("#player1Score").html(ply1Score);
      $("#player-select").css("display", "flex");
      $("#board").css("display", "none");
    }
  })
})
