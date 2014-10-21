//New Game
/*$(document).ready(function (){

	var webApp = function () {}; 				//===constructor function 
	var newGame = new webApp (); 					//===initializes the game object 

	//== DOM EVENT LISTENERS 

	$("#submit").on("click", function () { 				
		newGame.sorts(); 
	})	
												
	$("#input_box").on("keypress", function(input){  			
		if (input.keyCode === 13) {newGame.sorts()}
	}) 

	$("#hint").on("click", function() {							
		$("#directions").text("The number is " + newGame.hint() + "!");
	})

	$("#replay").on("click", function (){					
		document.location.reload(true);
	})}*/

//Global Variables
var maxGuesses = 10;
var randomNum = Math.floor(100 * Math.random() + 1);
var userGuesses = []; 
var guessCount = 0;

//Game
function newGame(){
		var userAnswer = $("#input_box").val();
		guessCount++;
		if (!isNaN(userAnswer) && userAnswer > 0 && userAnswer <= 100) {
			if (userGuesses.indexOf(userAnswer) === -1) {
				userGuesses.push(userAnswer);
				if (guessCount < maxGuesses && randomNum > userAnswer) {
					if (Math.abs(userAnswer - randomNum) > maxGuesses) {
						$("#archive").append(userAnswer + "<br>You're super cold, go higher... only " + (maxGuesses - guessCount) + " guess(es) left!" + "<br><br>")
					}
					else {
						$("#archive").append(userAnswer + "<br><br>You're very warm, go higher... only " + (maxGuesses - guessCount) + " guess(es) left!" + "<br><br>")
					}
				}
				else if (guessCount < maxGuesses && randomNum < userAnswer) {
					if (Math.abs(userAnswer - randomNum) > maxGuesses) {
					$("#archive").append(userAnswer + "<br><br>You're very cold, go lower... only " + (maxGuesses - guessCount) + " guess(es) left!" +  "<br><br>")
					}
					else {
					$("#archive").append(userAnswer + "<br><br>You're super warm, go lower... only " + (maxGuesses - guessCount) + " guess(es) left!" +  "<br><br>")
					}
				}
				else if (guessCount < maxGuesses && randomNum === userAnswer) {
					$("#archive").append("<h3>You got it! The answer is " + randomNum + "!</h3> <br>");
					$('#success').fadeIn();
				}
				else {
					$('#archive').append("<h3>Sorry. <br>You didn't get it within 5 guesses. <br>Better luck next time!</h3> <br>The answer was " + randomNum + ".");
					$('#entry-box').fadeOut();
				}
			}
			else {alert("You guessed that already!")}
		}
		else {alert("Not a valid number, boss!")}}













//Reset Game
