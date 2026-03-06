// Callie Shrum, March 6, 2025
"use strict";
alert("Welcome to the Adventure Realm! Let's create your hero!");

const characterName = prompt("What is your character's name?");

const pet = prompt(`What pet does ${characterName} have? (dragon, wolf, robot, unicorn, phoenix, etc.)`, "dragon");

const superpower = prompt(`What is ${characterName}'s special superpower?`);

const likesFighting = confirm(`Does ${characterName} like fighting monsters?
    Click OK for Yes.
    Click Cancel for No`);

alert(`Gathering magic for ${characterName}... Almost ready!`);

alert(
    `=============================================
    Name: ${characterName}
    Pet: ${pet}
    Superpower: ${superpower}
    Monster Fighter? ${likesFighting ? "Yes" : "No"}

    In a faraway land, ${characterName} rides a mighty ${pet}, wielding the incredible power of ${superpower}!

    The realm awaits your legend...
    =============================================`
);
