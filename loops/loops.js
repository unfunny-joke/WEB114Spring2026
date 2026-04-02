// Callie shurm, April 1 2026
"use strict";
let numCrates = prompt("how many crates are there?", 20);

for (let crate = 1; crate <= numCrates; crate++) {
    if (crate % 5 == 0) {
        console.log(`Crate #${crate}: Handle with care`);
    } else if (crate % 2 == 0) {
        console.log(`Crate #${crate}: Load crate`);
    } else {
        console.log(`Crate #${crate}: Inspect crate`);
    }
}

console.log(`Total Crates Scanner: ${numCrates}`)