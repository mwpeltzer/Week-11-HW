// dependency for inquirer npm package
// var inquirer = require("inquirer");

var prompt = require("prompt");

var teams = require("./names.js"); 
var wordCons = require("./word.js");
var game = require("./game.js");
var letterCons = require("./letter.js");

var randoWord = game.randoWord;


// total number of guesses per turn
var guesses = 10;
var myWord = new wordCons.wordCons(game.randoWord);


function takeAGuess(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses){
		console.log("You Lose");
	return;
}

	inquirer.prompt([{
		name: "letter",
		type: "text",
		message: "select a letter",
		validate: function(str){
			if (str.lenght != 1) return false;
			var regEx = new RegExp("^[a-zA-Z-Z\s]{1,1)$");
			return regEx.test(str);
				}
		
	}]).then(function(letterInput){
		var letter = letterInput.letter;
		myWord.findLetter(letter);
		if(myWord.isComplete()) {
			console.log("Yes! The anser is " + myword.toString() + "!");
		}
	})
}

takeAGuess(); //Start Game
