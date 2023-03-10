var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};



$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");

  $("#" + userChosenColour).fadeIn(50).fadeOut(50).fadeIn(50);
  playSound(userChosenColour);

  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

});


function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4) + 1;
  var randomChosenColour = buttonColours[randomNumber - 1];
  gamePattern.push(randomChosenColour);
  console.log(randomChosenColour);


  $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);

};
