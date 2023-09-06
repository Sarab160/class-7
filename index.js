"use strict";
let numbers = [2, 3, 3, 4, 6, 5, 45];
var wave = numbers.map((data) => {
    if (data < 18) {
        return 2003;
    }
    else {
        return 2023;
    }
});
let num = [2, 5, 4, 3, 7, 6, 9, 7];
// console.log(wave);
let wave2 = numbers.map((data2, number) => {
    if (data2 % 2 == 0) {
        return "even";
    }
    else {
        return number;
    }
});
// console.log(wave2);
var num3 = [4, 5, 6, 7, 89, 9];
var wave3 = num3.map((index) => {
    if (index == 89) {
        return 150;
    }
    else {
        return index;
    }
});
// console.log(wave3);
let beyon = [45, 67, 89, 34, 56, 778, 46];
let varArray = beyon.filter((value) => {
    return value % 2 == 0;
});
//console.log(varArray);
let num6 = ["sarab", "wasif", "cheema"];
var sndingmail = num6.forEach((names) => {
    // console.log('hello jnb');
});
let num9 = [65, 78, 34, 56, 12, 34, 67];
var newNum = num9.filter((sum) => {
    return sum * 2 == 130;
});
console.log(newNum);
var array = [34, 56, 78, 23, 32, 12];
var updatedArray = array.map((add) => {
    if (add > 45) {
        return true;
    }
    else if (add > 30) {
        return false;
    }
    else {
        return 12;
    }
});
var onlineArray = array.filter((sub) => {
    if (sub < 45) {
        return true;
    }
});
console.log(updatedArray);
console.log(onlineArray);
//object start from here
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
    colour: "car",
    inuse: false
};
console.log(car);
var haveNames = ["ali", "haider", "waqas"];
var newId = [];
for (let i = 0; i < haveNames.length - 1; i++) {
    newId.push(haveNames[i]);
}
console.log(newId);
var student = {
    class: "fsc",
    rollno: 32,
    section: "hero",
    pass: true,
    marks: 121
};
var student2 = {
    class: "fsc",
    rollno: 34,
    section: "hero",
    pass: true,
    marks: 123
};
console.log(student.rollno, student2.rollno);
