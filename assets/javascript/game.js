//set variables 
var randomChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

//onkeyup function
document.onkeyup = function(event) {

	var userGuess = event.key;
	//random letter
	var computerGuess = randomChoices[Math.floor(Math.random() * randomChoices.length)];

	if (randomChoices.indexOf(userGuess) > -1) {

		if (userGuess === computerGuess) {
			wins++;
			numGuesses = 9;
			guessChoices = [];
		}

		if (userGuess != computerGuess) {
			numGuesses--;
			guessChoices.push(userGuess);
		}

		if (numGuesses === 0) {
			losses++;
			numGuesses = 9;
			guessChoices = [];
		}
		
	}

	var html = 
	"<h1> The Psychic Game ---Start!!!</h1>" +
	"<p>Guess what letter I'm thinking of</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + numGuesses + "</p>" +
	"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

	document.querySelector("#game").innerHTML = html;

	
}
	