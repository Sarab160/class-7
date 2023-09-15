"use strict";
function makeSandwich(...items) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please select some ingredients.");
    }
    else {
        console.log("Here's your sandwich with the following items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
}
// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich();
let place = ["paris", "bagla", "india", "america"];
place.sort();
var number = 6;
var num1 = 6;
var num2 = true && true;
console.log(num2);
