const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

function nextSequence() {

const randomNumber = Math.floor(Math.random() * 4);

const randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);

}

nextSequence();
