window.addEventListener("load", init);

// global variables
let time = 10;
let score = 0;
let isPlaying;

// get DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// list of words
const words = [
    "Algorithm",
    "Program",
    "Argument",
    "Boolean",
    "Compilation",
    "Conditionals",
    "Constants",
    "Data Types",
    "Declaration",
    "Exception",
    "Expression",
    "Framework",
    "Hardcode",
    "Endless Loop",
    "Iteration",
    "Keywords",
    "Operator",
    "Operand",
    "Variable",
    "Package",
    "Source data"
]

// start the game
function init(){
    // load the words
    showWord(words);
    // match the word input
    wordInput.addEventListener('input', startMatch);
    // call the function every second
    setInterval(countDown, 1000);
    // check the game status
    setInterval(checkStatus, 50);
}

// match the input word
function startMatch(){
    if(matchWords()){
        // start the next words and user get the point.
        isPlaying = true;
        time = 11;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    //update the UI
    scoreDisplay.innerHTML = score;
}

// match the current word to the input word
function matchWords(){
    // wordInput is the input element
    // currentWord is the h2 element
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = "You got it!";
        return true;
    }
    else{
        message.innerHTML = '';
        return false;
    }

}

// display a random word from the array
function showWord(words){
    // generate a random number
    const index = Math.floor(Math.random() * words.length);

    // output a random number
    currentWord.innerHTML = words[index];
}

// count down timer
function countDown(){
    if(time > 0){
        // decrease the time
        time--;
    }
    else if(time === 0){
        // game is over
        isPlaying = false;
    }
    // show the time in the UI
    timeDisplay.innerHTML = time;
}

// check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = "Typing is Over"
    }
}