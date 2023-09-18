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
let myArray = [1, 2, 3, 4, 5];
// Use a for loop to remove elements from the end until the array is empty
for (let i = myArray.length - 1; i >= 0; i--) {
    myArray.pop();
    console.log(myArray);
}
// This will print an empty array: []
// Store the numbers 1 through 9 in an array
// Use an if-else chain to determine the proper ordinal ending
const numbers2 = [1, 2, 3, 4, 5];
// Attempt to access an index that is out of bounds
const index = 10;
//     console.log(`Accessing element at index ${index}: ${numbers2[index]}`);
//     const validIndex = 2; // Use a valid index within the bounds
// console.log(`Accessing element at index ${validIndex}: ${numbers2[validIndex]}`);
// Function to create an album object
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    // if (tracks !== undefined) {
    //     album.tracks = tracks;
    // }
    return album;
}
// Create three album objects using the make_album function
const album1 = make_album("Artist1", "Album Title 1");
const album2 = make_album("Artist2", "Album Title 2", 12); // With a specified number of tracks
const album3 = make_album("Artist3", "Album Title 3");
// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
var hero = ["sarab", "cheema", "wasif"];
for (let i = 0; i < hero.length; i++) {
    console.log(`hello ${hero[i]}`);
}
// var help:string[] = ["hello","hy"];
// var help1:string= "hn";
// help.splice(help1,0,help)
// console.log(help);
let myArray1 = [1, 2, 3, 4, 5];
const indexToInsertAt = 2; // Index at which you want to add the value
const valueToAdd = 99; // The value you want to insert
// Using splice to add the value at the specified index
myArray1.splice(indexToInsertAt, 0, valueToAdd);
console.log(myArray1); // [1, 2, 99, 3, 4, 5]
let myArray2 = ["Alice", "Bob", "Charlie", "David"];
let newName = "Eve";
// Insert the new name in the middle of the array
const middleIndex = Math.floor(myArray2.length / 2);
myArray2.splice(middleIndex, 0, newName);
console.log(myArray2); // ["Alice", "Bob", "Eve", "Charlie", "David"]
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model,
    };
    // Process the optional keyword arguments and add them to the car object
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }
    return car;
}
// Example usage
const myCar = createCar("Toyota", "Camry", "color", "blue", "year", 2023);
console.log(myCar);
