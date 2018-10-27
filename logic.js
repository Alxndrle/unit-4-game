
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }
};


var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;



var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


var startGame = function() {

  
  currentScore = 0;

  
  targetScore = getRandom(19, 120);

  
  crystal.blue.value = getRandom(1, 12);
  crystal.red.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.yellow.value = getRandom(1, 12);

 
  $("#your-score").text(currentScore);
  $("#target-score").text(targetScore);


 
  console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
  console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
    " | Yellow: " + crystal.yellow.value);
  console.log("-----------------------------------");
};


var checkWin = function() {

  
  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost");

   
    lossCount++;

    
    $("#loss-count").text(lossCount);

    
    startGame();
  }

  else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");

    
    winCount++;

   
    $("#win-count").text(winCount);

    
    startGame();
  }

};

// Respond to clicks on the crystals
var addValues = function(clickedCrystal) {

  // Change currentScore
  currentScore += clickedCrystal.value;

  // Change the HTML to reflect changes in currentScore
  $("#your-score").text(currentScore);

  // Call the checkWin Function
  checkWin();

  // Testing Console
  console.log("Your Score: " + currentScore);
};

// MAIN PROCESS
// =================================================================

// Starts the Game the First Time.
startGame();

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#red").click(function() {
  addValues(crystal.red);
});

$("#green").click(function() {
  addValues(crystal.green);
});

$("#yellow").click(function() {
  addValues(crystal.yellow);
});
