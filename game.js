var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;
var level = 0;


// Press key to start
// If key is pressed, you should call function next Sequence
// If key is pressed you should change title to "Level 0"
// If game already started, then pressing a key shouldn't do anything

$(document).keydown(function(){
  if(started === false){
  $("h1").text("Level " + level);
  nextSequence()};
  started === true;

});

// When button is clicked zoom in, out and in again;
// When button is clicked play the correct sound;
// When button is clicked, do an animation;

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");

  $("#" + userChosenColour).fadeIn(50).fadeOut(50).fadeIn(50);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

});


// When function is called, increase level by one;
// When function is called select a random color from button colours array;
  // We need to use index - randomnize a number from 1 to 4;
  // Look for the color with the index with randomnize number;
  // push color ro array;
// When function is called zoom in, out and in again;
// When function is called play the correct sound;
// When function is called, do an animation;

function nextSequence() {

  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4) + 1;
  var randomChosenColour = buttonColours[randomNumber - 1];
  gamePattern.push(randomChosenColour);
  // console.log(randomChosenColour);


  $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);

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
