let favMonth = prompt("What's you favorite month?", "january").toLowerCase();

switch(favMonth) {
    case "march":
    case "april":
    case "may":
        alert("Spring is nice with everything blooming.");
        break;

    case "june":
    case "july":
    case "august":
        alert("You enjoy the summer months!");
        break;

    case "september":
    case "october":
    case "november":
        alert("Fall is fun with all of the pretty colors.");
        break;

    case "december":
    case "january":
    case "february":
        alert("You love the winter months!");
        break;
}

switch (favMonth) {
    case "march":
        alert("Winter is over, good ridance!");
        break;

    case "april":
        alert("April showers bring May flowers :D");
        break;

    case "may":
        alert("The weather's warming up!");
        break;

    case "june":
        alert("Summer vacation!");
        break;

    case "july":
        alert("It's getting hot out!");
        break;

    case "august":
        alert("School is starting up soon!");
        break;
    
    case "september":
        alert("The weather's finally cooling off!");
        break;

    case "october":
        alert("Halloween is coming, spooky!");
        break;

    case "november":
        alert("Thanksgiving, good food, and family!");
        break;

    case "december":
        alert("It's finally Christmas time!");
        break;

    case "january":
        alert("Happy New Year!");
        break;

    case "february":
        alert("A short and sweet month!");
        break;

    default:
        alert("Other months are intersting too!");
        break;
}