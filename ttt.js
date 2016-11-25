var numPlayer = 1;
var letters = ["X", "O"];
var userLetter = 0;
var activePlayer = 0;
var round = 0;

function initiateGame(){
  $(".sq").click(function(){
    var id = this.id;
    $("#" + id).html(letters[userLetter]);
    if (userLetter === 0){
      userLetter = 1;
    }
    else{
      userLetter = 0;
    }
    
    round += 1;
    // if all the squares have been filled
    if (round === 8){

    }
  });
}

function againstComputer(letter){

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
    userLetter = 1;
    initiateGame();
  });

  $("#x").click(function(){
    initiateGame();
  });
})
