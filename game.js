var letter = require("letter.js");

myLetter = new letter.letter("a");
console.log(myLetter);
console.log(myLetter.value);

var word = require("./word.js");

var myWord = new word.wordCons("Knicks");
console.log(myWord);
console.log(myWord.value);

for(var i = 0; i < myWord.value; i ++){
	console.log(myWord.letter[i].value);
}

var game = require("./names.js");