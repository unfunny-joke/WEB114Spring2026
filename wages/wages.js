// Callie Shrum, March 11, 2026
"use strict";

let hourlyWage = prompt("What is your hourly wage?", 7.25);
Number(hourlyWage.trim());

confirm(`You entered $${hourlyWage} per hour. Is that correct?`);

let hoursWorked = prompt("How many hours did you work this week?", 0);
Number(hoursWorked.trim());

confirm(`You worked ${hoursWorked} hours this week. Is that correct?`);

let grossPay = hourlyWage * hoursWorked;
let taxes = grossPay * 0.1;
let netPay = grossPay - taxes;

console.log("******************************\n",
            "        Weekly Earnings",
            "******************************\n",
            `Hourly Wage: $${hourlyWage}`,
            `Hours Worked: ${hoursWorked}\n`,
            `Gross Pay: $${grossPay.toFixed(2)}`,
            `Taxes (10%): $${taxes.toFixed(2)}`,
            `Net Pay: $${netPay.toFixed(2)}\n`,
            "******************************",
);

if (hoursWorked > 40) {
    console.log("You worked overtime this week!");
} else if (hoursWorked == 40){
    console.log("You worked exactly 40 hours.")
} else {
    console.log("No overtime this week.");
}

if (netPay > 800) {
    console.log("Great paycheck this week!");
} else {
    console.log("Keep working toward a bigger paycheck!");
}