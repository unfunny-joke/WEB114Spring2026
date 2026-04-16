// Callie Shrum, April 16 2026
'use strict';

let moodDisplay = document.getElementById('moodDisplay');
let happy = document.getElementById('happyBtn');
let calm = document.getElementById('calmBtn');
let angry = document.getElementById('angryBtn');
let sleepy = document.getElementById('sleepyBtn');

const moods = {

    happy:  {

              name:"Happy",

              bg: '#FFD700',

              text: '#bd26b0',

              message: 'Warm smiles and the suns kisses!'

            },

    calm:  {

              name:"Calm",

              bg: '#8cffcd',

              text: '#0b5c39',

              message: 'Take a deep breath and clear your mind.'

            },

    angry:  {

              name:"Angry",

              bg: '#d40f0f',

              text: '#541212',

              message: 'Good, good, let the hate flow through you >:)'

            },

    sleepy:  {

              name:"Sleepy",

              bg: '#6986b8',

              text: '#283d61',

              message: 'Rest your head and stay awhile.'

            }
        }

function changeMood(moodName) {
    const mood = moods[moodName];

    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;
    document.getElementById('quote').textContent = mood.message;
    moodDisplay.textContent = mood.name;
}

function handleHappyClick() {

    changeMood("happy")
}

function handleCalmClick() {

    changeMood("calm")
}

function handleAngryClick() {

    changeMood("angry")
}

function handleSleepyClick() {

    changeMood("sleepy")
}

happy.addEventListener("click", handleHappyClick);
calm.addEventListener("click", handleCalmClick);
angry.addEventListener("click", handleAngryClick);
sleepy.addEventListener("click", handleSleepyClick);