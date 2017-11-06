
// Create an array with the different options for the game (NBA Teams)
var teamsToGuess = ["Bulls", "Knicks", "Warriors", "Clippers", "Lakers", "Spurs", "Hornets", "Cavaliers", "Grizzlies", "Hawks", "Heat", "Pacers"];

// math.floor randomly will pull one of the names from the array
var randomSelector = Math.floor(Math.random() * teamsToGuess.length);

// inserting random index into the wordsToGuess array
var randomWord = teamsToGuess[randomSelector];

exports.randomWord = randomWord;
console.log(randomWord);

