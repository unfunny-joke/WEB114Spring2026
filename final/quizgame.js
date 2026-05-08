/* Callie Shrum, May 7 2026 */
'use strict';

let menu = document.getElementById('popup');
let easy = document.getElementById('easyBtn');
let hard = document.getElementById('hardBtn');
let start = document.getElementById('start');
let scoreBug = document.getElementById('scoreBug');
let score = document.getElementById('score');
let image = document.getElementById('quizImg');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');
let finalPopup = document.getElementById('finalPopup');
let finalScore = document.getElementById('finalScore');
let finalMessage = document.getElementById('message');

let difficulty = 'easy';
let round = 0;
let playerScore = 0;

const animals = {

    0:  { //Cat
              image: "images/cat.jpg",


              easy1: 'Cat',
              easy2: 'Elephant',
              easy3: 'Zebra',
              easy4: 'Moose',

              easyCorrect: 'Cat',


              hard1: 'Panthera tigris',
              hard2: 'Felis catus',
              hard3: 'Leopardus pardalis',
              hard4: 'Lynx canadensis',

              hardCorrect: 'Felis catus'
            },

    1:  { //Dog
              image: "images/dog.jpg",


              easy1: 'Wolf',
              easy2: 'Salamander',
              easy3: 'Dog',
              easy4: 'Parrot',

              easyCorrect: 'Dog',


              hard1: 'Lycaon pictus',
              hard2: 'Canis lupus',
              hard3: 'Lupulella adusta',
              hard4: 'Canis familiaris',

              hardCorrect: 'Canis familiaris'
            },

    2:  { //Cow
              image: "images/cow.jpg",


              easy1: 'Squirrel',
              easy2: 'Cow',
              easy3: 'Elk',
              easy4: 'Moose',

              easyCorrect: 'Cow',


              hard1: 'Bos primigenius',
              hard2: 'Bubalus bubalis',
              hard3: 'Ovibos moschatus',
              hard4: 'Bos taurus',

              hardCorrect: 'Bos taurus'
            },

    3:  { //Pig
              image: "images/pig.jpg",


              easy1: 'Guinea pig',
              easy2: 'Sheep',
              easy3: 'Lion',
              easy4: 'Pig',

              easyCorrect: 'Pig',


              hard1: 'Sus domesticus',
              hard2: 'Potamochoerus porcus',
              hard3: 'Sus scrofa',
              hard4: 'Phacochoerus africanus',

              hardCorrect: 'Sus domesticus'
            },
    
    4: { //Horse
              image: "images/horse.jpg",


              easy1: 'Goat',
              easy2: 'Panda',
              easy3: 'Horse',
              easy4: 'Catfish',

              easyCorrect: 'Horse',


              hard1: 'Equus kiang',
              hard2: 'Equus ferus caballus',
              hard3: 'Equus quagga',
              hard4: 'Equus asinus',

              hardCorrect: 'Equus ferus caballus'
            }
        }

easy.addEventListener("click", handleEasyClick);
hard.addEventListener("click", handleHardClick);
start.addEventListener("click", handleStartClick);
answer1.addEventListener("click", handleAnswer1Click);
answer2.addEventListener("click", handleAnswer2Click);
answer3.addEventListener("click", handleAnswer3Click);
answer4.addEventListener("click", handleAnswer4Click);

function handleEasyClick() {
    difficulty = 'easy';
    easy.style.boxShadow = "0 0 5px #ad593b inset";
    hard.style.boxShadow = "none";
}

function handleHardClick() {
    difficulty = 'hard';
    easy.style.boxShadow = "none";
    hard.style.boxShadow = "0 0 5px #ad593b inset";
}

function handleStartClick() {
    menu.style.display =  "none";
    prepareRound(difficulty, round);
}

function prepareRound(difficulty, round) {
    image.src = animals[round].image;

    if (difficulty === 'easy') {
        answer1.value = animals[round].easy1;
        answer2.value = animals[round].easy2;
        answer3.value = animals[round].easy3;
        answer4.value = animals[round].easy4;
    } else {
        answer1.value = animals[round].hard1;
        answer2.value = animals[round].hard2;
        answer3.value = animals[round].hard3;
        answer4.value = animals[round].hard4;
    }
}

function handleAnswer1Click() {
    checkAnswer(answer1.value);
}

function handleAnswer2Click() {
    checkAnswer(answer2.value);
}

function handleAnswer3Click() {
    checkAnswer(answer3.value);
}

function handleAnswer4Click() {
    checkAnswer(answer4.value);
}

function checkAnswer(answer) {
    if (difficulty === 'easy') {
        if (answer === animals[round].easyCorrect) {
            playerScore++;

            score.textContent = playerScore;
        }
    } else {
        if (answer === animals[round].hardCorrect) {
            playerScore++;

            score.textContent = playerScore;
        }
    }

    round++;

    if (round < 5) {
        prepareRound(difficulty, round)
    } else {
        endScreen();
    }
}

function endScreen() {
    let message;
    
    scoreBug.style.display = 'none';
    finalPopup.style.visibility = 'visible';
    finalScore.textContent = playerScore;

    if (playerScore < 3) {
        message = "Better luck next time!";
    } else if (playerScore < 5) {
        message = "Good Job!";
    } else {
        message = "Incredible! You got them all!";
    }

    finalMessage.textContent = message;
}