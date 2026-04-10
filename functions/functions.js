//Callie Shrum, April 10 2026
'use strict';

let count = 0;
let totalGas = 0;
let average;

let userName = prompt("Enter you name: ");

if (userName == null) {
    alert("You cancelled the name prompt");
} else if (userName == undefined || userName == "") {
    alert("You must enter a name");
} else {
    average = calcGasAverage();
}

if (average != 0) {
    alert(`${userName}'s average weekly gas bill is $${average.toFixed(2)}`);
}

if (count == 1) {
    alert(`You entered ${count} gas total`)
} else if (count > 1) {
    alert(`You entered ${count} gas totals`)
} else {
    alert("no entries")
}

function calcGasAverage() {
    let weeklyGas = prompt("Enter your first weeks gas total (enter -1 when you're done):");

    while (weeklyGas != -1) {
        if (!weeklyGas) {
            alert("You cancelled entering gas totals.");
            return;
        }
    
        if (!Number(weeklyGas)) {
            alert("Please enter a valid number");
            weeklyGas = prompt("Enter your next weeks gas total (enter -1 when you're done):");
            continue;
        }

        totalGas += Number(weeklyGas);
        count++;

        weeklyGas = prompt("Enter your next weeks gas total (enter -1 when you're done):");
    }

    if (count > 0) {
        return totalGas / count;
    } else {
        return 0;
    }
}

