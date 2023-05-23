//if statement
var x = 3;
var y = 5;
if (x < y) {
    console.log("Above expression is true");
}

//if-else statement
if (x == y) {
    console.log("Above expression is true");
} else {
    console.log("Above experession is Invalid");
}

//else-if statement
var i = 28;
if (i > 0 && i <= 10) {
    console.log("Considered as Kids");
} else if (i > 11 && i <= 18) {
    console.log("Considered as Teenage");
} else if (i > 18 && i <= 30) {
    console.log("Considered as Youth");
} else if (i > 30 && i <= 60) {
    console.log("considered as Middle aged");
} else {
    console.log("Considered as old aged");
}