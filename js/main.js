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