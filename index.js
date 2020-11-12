let gamePattern=[];
let userClickedPattern=[];
let $start= false;

console.log(gamePattern);
console.log(userClickedPattern);
let level= 0;

$(document).on('keydown', function(e){
 $start= true; 
  
 if ($start=true) {
   nextSequence();

 } else{
   console.log('error start sequence')
 }

}) 

$('.btn').click(function() {
  let userChosenColour= $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour); //name parameter in playSound is changed to userChosen Colour
  animatePress(userChosenColour); // same
  checkAnswer(userClickedPattern.length-1);

  
})


function checkAnswer(currentLevel) {

 if (gamePattern[currentLevel]===userClickedPattern[currentLevel]) {
 if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}





let buttonColours=["red", "blue","green","yellow"]
function nextSequence() {
   userClickedPattern= [];
  level++;
  $('#level-title').html("Level"+ "\n" + level)
  let randomNumber= Math.floor(Math.random()*4);
  let randomChosenColour= buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  let selectedButton= '#' + randomChosenColour;
  $(selectedButton).fadeOut().fadeToggle();
  playSound(randomChosenColour);
} 




function animatePress(currentColour) {
    $('#'+ currentColour).addClass('pressed');
    setTimeout(function() {
      $('#'+ currentColour).removeClass('pressed');

    })
    
}

  function playSound(name) {
   var audio = new Audio("sounds/" + name + ".mp3"); 
   audio.play();
 }


 function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}




















// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }


// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }
