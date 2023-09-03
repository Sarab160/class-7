"use strict";
var userNames = ["sarab", "wasif", "ali", "akram"];
var names = userNames.forEach((data) => {
    console.log(data);
});
var read = userNames.forEach((read, i, fullArray) => {
    console.log("usernames", read);
    console.log("i=", i);
    console.log("fullarray=", userNames);
});
let car = {
    model: "v 8",
    brand: "toyato",
    modelyear: 2023,
    colou: "car",
    inuse: false
};
console.log(car);
