var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown(function(){
  if(started === false){
  $("h1").text("Level " + level);
  nextSequence()};
  started === true;

});


$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");

  $("#" + userChosenColour).fadeIn(50).fadeOut(50).fadeIn(50);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

});


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


function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};


function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed").delay(100).queue(function(next){
    $("#" + currentColour).removeClass("pressed");
    next();
  });

};
