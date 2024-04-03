const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

function nextSequence() {

const randomNumber = Math.floor(Math.random() * 4);

const randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

nextSequence();
