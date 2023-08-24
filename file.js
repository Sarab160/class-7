"use strict";
for (var i = 0; i < 14; i = i + 2) {
    //console.log("even numbers are",i);
}
// var array:number[] = [1,2,3,4,5,6,7,8,9];
// var evenArray:number[] = [];
// for (i=0;i<array.length-1;i++){
// if(array[i] % 2==0){
// }
// }
// ////////
// function checkFile(num:number,num2:number){
// var result:number = num + num2;
// console.log("result = ",result);
// return result;
// }
// checkFile(3,5);
// var returnvalue:number = 8
// // console.log(returnValue);
// checkFile(6,8);
var array = [1, 2, 3, 4, 5, 6, 7, 8., 9];
var evenArray = [];
for (i = 0; i <= array.length; i++) {
    if (array[i] % 2 == 0) {
        evenArray.push(array[i]);
    }
}
console.log(evenArray);
function sum(n) {
    var sum1 = 0;
    for (i = 1; i <= n; i++) {
        var num = 0;
        var evenNumber = 2 * i;
        num += evenNumber;
    }
}
console.log(sum(5));
var age = 18;
if (age < 12) {
    console.log("you are teenager");
}
else if (age <= 18) {
    console.log('you are adult');
}
else {
    console.log('you are man');
}
//program to calculate to even number from 1to 1000
var sum2 = 0;
var list = [];
for (var index = 1; index <= 1000; index++) {
    if (index % 2 == 0) {
        sum2 = sum2 + index;
        list.push(index);
    }
}
console.log(list);
