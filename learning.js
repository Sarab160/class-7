"use strict";
// var num:number[] = [1,2,3,4,5,6,7,8];
// var evennumber = num.filter((data)=>{
//     return data%2 ==0;
// })
// console.log(evennumber); 
// let names:string[] = ["sarab","cheema"];
// var varNames =
//object
// push splice wagra bi use kar skta ha
let students = {
    name: "sarab",
    rollno: 676,
};
let students1 = {
    rollno: 9896,
    name: "asif",
};
console.log(students1.name);
//ya object ma array ma lagna ka method:arrat ka ara method laga skta ha ia ma:is ki type bi kar skta ha ka model ya brand ka liya ilag ilag data types ka co boolean hoga ya number ya string
//asa data type ko ilag sign ka skta ha
// type Cartype = {
//     model:string;
//     brand?:number;
// let car =[{
//     model:"city",
//     brand:"honda",
// },{
//     model:"v 8",
//     brand:'toyato',
// }]
// console.log(car[1]);
//inquirer.js
var userNames = ["ali", "haider", "waqas"];
for (let i = 0; i < userNames.length; i++) {
    console.log(userNames[i]);
}
var cars = [{
        company: "honda",
        modelyear: 2023,
        colour: "black",
        inuse: false
    }, {
        company: "toyata",
        modelyear: 2022,
        colour: "white",
        inuse: false
    }, {
        company: "ferrari",
        modelyear: 2021,
        colour: "red",
        inuse: true
    }];
for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    console.log(car.company);
    console.log(car.inuse);
    console.log(car.colour);
    console.log(car.modelyear);
}
