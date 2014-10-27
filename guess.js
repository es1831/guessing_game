//jQuery to start game

$(document).ready(
	$('#submit').on('click', newGame)
);

//Jquery "enter" event motion

$(document).ready(
	$('#input_box').keydown(
		function(x){
			if (x.keyCode === 13) {
				newGame();
			};
		})
);

//Hint

$(document).ready(
	$('#hint').on('click', function() {
		$('#archive').append("<br>Giving up so quickly, tsk tsk tsk. <br> The number is " + randomNum + ".<br> Try again, if you dare! <br><br>");
	})
);

//Replay

$(document).ready(
	$('#replay').on('click', function() {
		document.location.reload(true);
		/*randomNum = Math.floor((Math.random() * 100) + 1);
		userGuesses = [];
		guessCount = 0;
		$('#archive').empty();
		$('#success').fadeOut();
		$('#submit-box').fadeIn();*/
	})
);

$(document).ready(function(){
	$(".close").click(function(){
		$("#myAlert").alert();
	});
}); 

//Global Variables
var maxGuesses = 10;
var randomNum = Math.floor(100 * Math.random() + 1);
var userGuesses = []; 
var guessCount = 0;
$('#user-text').hide();

//Game
function newGame(){
		var userAnswer = $('#input_box').val();
		guessCount++;
		$('#submit').on('click',function(){
			$('#submit').trigger("reset");	
			$('#input_box').val('');
			});
		$('#user-text').show();
		if (!isNaN(userAnswer) && userAnswer > 0 && userAnswer <= 100) {
			if (userGuesses.indexOf(userAnswer) === -1) {
				userGuesses.push(userAnswer);
				if (guessCount < maxGuesses && randomNum > userAnswer) {
					if (Math.abs(userAnswer - randomNum) > 10) {
						$('#archive').append(userAnswer + "<br>You're super cold, go higher... only " + (maxGuesses - guessCount) + " guess(es) left!" + "<br><br>")
					}
					else {
						$('#archive').append(userAnswer + "<br><br>You're very warm, go higher... only " + (maxGuesses - guessCount) + " guess(es) left!" + "<br><br>")
					}
				}
				else if (guessCount < maxGuesses && randomNum < userAnswer) {
					if (Math.abs(userAnswer - randomNum) > 10) {
					$('#archive').append(userAnswer + "<br><br>You're very cold, go lower... only " + (maxGuesses - guessCount) + " guess(es) left!" +  "<br><br>")
					}
					else {
					$('#archive').append(userAnswer + "<br><br>You're super warm, go lower... only " + (maxGuesses - guessCount) + " guess(es) left!" +  "<br><br>")
					}
				}
				else if (guessCount <= maxGuesses && randomNum == userAnswer) {
					$('#archive').append("<h3>You got it! The answer is " + randomNum + "!</h3> <br>");
					$('#success').fadeIn();
				}
				else {
					$('#archive').append("<h3>Sorry. <br>You didn't get it within 10 guesses.</h3> <br>The answer was " + randomNum + ".");
					$('#submit-box').fadeOut();
				}
			}
			else {alert("You guessed that already!"); guessCount--;}
		}
		else {alert("Not a valid number, Come on you're better than that!"); guessCount--;}}

