var numPlayer = 1;
var letters = ["X", "O"];
var userLetter = 0;
var activePlayer = 0;
var round = 0;

function initiateGame(){
  $(".sq").click(function(){
    var id = this.id;
    $("#" + id).html(letters[userLetter]);
    if (userLetter === 0){userLetter = 1;}
    else{userLetter = 0;}
    // check if someone has won
    if (checkForWinner()){
      // game is won
    };
    // increment round;
    round += 1;
    // if all the squares have been filled
    if (round === 8){

    }
    if ($("#player2Name").html() == "Computer"){
      console.log("Robot's turn");
      againstComputer();
    }
    else {initiateGame();}
  });
}

function checkForWinner(){
  var winner = false;
  // 7 possible lines to win on
  arr = [0, 1, 2];
  var i = 0;
  while (i < 7){
    console.log(arr);
    //check if they are all the same
    var check = $("#s" + arr[0]).html();
    console.log(check);
    if (check == ""){console.log("continue " + i)}
    else if ($("#s" + arr[1]).html() === check && $("#s" + arr[2]).html() === check){
      winner = true;
      console.log("winner");
      break;
    }
    // increment line of squares to search through
    if (i < 1){
      for (var j in arr){
        arr[j] += 3;
      }
    }
    else if (i === 2){
      arr = [0, 3, 6]
    }
    else if (i < 5){
      for (j in arr){
        arr[j] = arr[j] + 1;
      }
    }
    else if (i === 5){
      arr = [0, 4, 8];
    }
    else if (i === 6){
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
    // game is won
  };
  activePLayer = 0;
  round += 1;
  $("#s" + sqr).html(letters[userLetter]);
  if (userLetter === 0){userLetter = 1;}
  else{userLetter = 0;}
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
