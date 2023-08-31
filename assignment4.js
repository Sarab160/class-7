//1 remove all negative numbers by using filter
var allNumbers = [6, -8, 7, 9, -5, -6, -4, 9, 5, -6, 5, -3];
var poistiveNumbers = allNumbers.filter(function (data) {
    if (data > 0) {
        return true;
    }
});
console.log(poistiveNumbers);
//2 multiply by 2 to array through map
var array = [1, 2, 3, 4, 5];
var newArray = array.map(function (value) {
    return value * 2;
});
console.log(newArray);
//3 print only those fruit whose characters more than 5
var fruits = ["Apple", "banana", "cherry", "date", "grape"];
var someFruits = fruits.filter(function (data2) {
    return data2.length > 5;
});
console.log(someFruits);
//4use filter and map together for this
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evensquare = num
    .filter(function (number) { return number % 2 == 0; })
    .map(function (evenNumber) { return evenNumber * evenNumber; });
console.log(evensquare);
//5 convert temperature into farnheit by map method
var temperature = [0, 10, 20, 40];
var farnheit = temperature.map(function (index) {
    return index * 9 / 5 + 5;
});
console.log(farnheit);
//6 separate odd numbers and dobled it
var numbers = [3, 6, 9, 12, 15, 18];
var oddDoublednumbers = numbers
    .filter(function (value) { return value % 2 != 0; })
    .map(function (doubledVlue) { return doubledVlue * 2; });
console.log(oddDoublednumbers);
//7
var names = ["alice", "bob", "charlie", "david", "emily",];
var sign = names.forEach(function (data) {
    console.log("".concat(data, "!"));
});
