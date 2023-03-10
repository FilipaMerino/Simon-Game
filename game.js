var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4) + 1;
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);



};

function play() {

  switch (randomChosenColour) {
    case blue:
      


      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }

}
