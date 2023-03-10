var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4) + 1;
  var randomChosenColour = buttonColours[randomNumber - 1];
  gamePattern.push(randomChosenColour);
  console.log(randomChosenColour);



  $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

};


