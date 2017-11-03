
// Create an array with the different options for the game (NBA Teams)
var wordsToGuess = ["Bulls", "Knicks", "Warriors", "Clippers", "Lakers", "Spurs", "Hornets", "Cavaliers", "Grizzlies", "Hawks", "Heat", "Pacers"];

// math.floor randomly will pull one of the names from the array
var randomSelector = Math.floor(Math.random() * wordsToGuess.length);

// inserting random index into the wordsToGuess array
var randomWord = wordsToGuess[randomSelector];

// exports.randomWord = randomWord;
console.log(randomWord);

