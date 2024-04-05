
let level = 0;
const started = false;

const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];
const userClickedPattern = [];


$(document).keypress(function() {
  if (!started) {

    
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  const userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  console.log(userChosenColour);
  console.log(userClickedPattern);
  
  playSound(userChosenColour);
  animatePress(userChosenColour);
  
  level++
  $("#level-title").text("Level " + level);

});

function nextSequence() {

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  
  playSound(randomChosenColour);
  currentColour(randomChosenColour);
}


function playSound(name) {

  
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){

  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
      $("#" + currentColour).removeClass("pressed");
  }, 200);
  
}
