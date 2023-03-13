var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


// Press key to start
// If key is pressed, you should call function next Sequence
// If key is pressed you should change title to "Level 0"
// If game already started, then pressing a key shouldn't do anything

$(document).keypress(function() {
  if(started === false){
    $("h1").text("Level " + level);
    nextSequence();
    started === true;

}
});

// When button is clicked zoom in, out and in again;
// When button is clicked play the correct sound;
// When button is clicked, do an animation;

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);

  console.log(userClickedPattern);

});



// Check answer
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("Success!");
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
      nextSequence();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over").delay(100).queue(function(next){
      $("body").removeClass("game-over");
      next();
    })
    $("h1").text("Game Over, Press Any Key to Restart");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    console.log("FAIL");
};
}







// When function is called, increase level by one;
// When function is called select a random color from button colours array;
  // We need to use index - randomnize a number from 1 to 4;
  // Look for the color with the index with randomnize number;
  // push color ro array;
// When function is called zoom in, out and in again;
// When function is called play the correct sound;
// When function is called, do an animation;

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  // console.log(randomChosenColour);


  $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);

};


// Create a function to play a especific sound for each color;
// Interpolate name of the sound with color from nextSequence() and .click()
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};


// Create an animation function that changes the background color of button to grey for 100 milliseconds.
function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed").delay(100).queue(function(next){
    $("#" + currentColour).removeClass("pressed");
    next();
  });

};
