$(document).ready(function(){
  $(".ply-but").click(function(){
    $("#player-select").css("display", "none");
    $("#letter-select").css("display", "flex");
  });
  $(".let-but").click(function(){
    $("#letter-select").css("display", "none");
    $("#board").css("display", "flex");
  })
})
