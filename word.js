
var letterCons = require ("./letter.js");

function word(value){
	this.value = value;
	this.letter = [];
	this.guessesMade = "";
	for(var i = 0; i < this.value.length; i++) {
		this.letter.push(new letterCons.letter(this.value[i]));
	}
};

word.prototype.isComplete = function(){
	for(var i = 0; i < this.letter.length; i ++) {
		if(!this.letter[i].show) return false;
	}
	return true;
};

word.prototype.findLetter = function(letter){
	var lowerLetter = letter.toLowerCase();
	if(this.guessesMade.indexOf(lowerLetter) != -1) {
		return "Already Guessed";
	}

	this.guessesMade += lowerLetter;
	for(var i = 0; i < this.letter.length; i ++){
		if(this.letter[i].value.toLowerCase() == toLowerCase){
			this.letter[i].show = true;
		}
	}
};

word.prototype.toString = function(){
	var output = "";
	for(var i = 0; i < this.letter.length; i ++){
		output += this.letter[i].printInfo();
	}
	return output;
}

exports.wordCons = word;