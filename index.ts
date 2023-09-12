let numbers:number[] = [2,3,3,4,6,5,45];
var wave= numbers.map((data)=>{
    if(data<18){
        return 2003;
    }
    else{
        return 2023;
    }
})
let num:number[] = [2,5,4,3,7,6,9,7];
// console.log(wave);
let wave2= numbers.map((data2,number)=>{
    if(data2%2==0){
        return "even";
    }
    else{
        return number;
    }
})
// console.log(wave2);
var num3:number[] = [4,5,6,7,89,9];
var wave3 = num3.map((index)=>{
    if(index == 89){
        return 150;
    }
    else{
        return index;
    }
})
// console.log(wave3);
let beyon:number[] = [45,67,89,34,56,778,46];
let varArray = beyon.filter((value)=>{
return value%2 ==0;
})
 //console.log(varArray);
let num6:string[] = ["sarab","wasif","cheema"];
var sndingmail = num6.forEach((names)=>{
   // console.log('hello jnb');
    
})

let num9:number[] = [65,78,34,56,12,34,67];
var newNum:any[] = num9.filter((sum)=>{
    return sum * 2==130;
})
console.log(newNum);

var array:number[]= [34,56,78,23,32,12];
var updatedArray = array.map((add)=>{
    if(add>45){
        return true;
    }
    else if(add >30){
       return false;
    }
    else{
        return 12;
    }
})
var onlineArray = array.filter((sub)=>{
    if(sub<45){
        return true
    }
})
console.log(updatedArray);
console.log(onlineArray);

//object start from here
var userNames:string[] = ["sarab","wasif","ali","akram"];
var names = userNames.forEach((data)=>{
console.log(data);

})
var read = userNames.forEach((read:string,i:number,fullArray:string[])=>{
console.log("usernames",read);
console.log("i=",i);
 console.log("fullarray=",userNames);
})
let car ={
    model:"v 8",
    brand:"toyato",
    modelyear:2023,
    colour:"car",
    inuse:false

}
console.log(car);

var haveNames:string[] = ["ali","haider","waqas"];
var newId:string[] = [];
for(let i=0;i<haveNames.length-1;i++ ){
newId.push(haveNames[i])
}
console.log(newId);

type Typer = {class:string,section:string,rollno:number,marks:number,pass:boolean};
var student: Typer = {
    class: "fsc",
    rollno: 32,
    section: "hero",
    pass: true,
    marks: 121
}
var student2:Typer = {
    class: "fsc",
    rollno: 34,
    section: "hero",
    pass: true,
    marks: 123
}
console.log(student.rollno,student2.rollno);
 //Async is ma time include hota ha
 //sync ya vo wala code jo zada time consuming nhi krta 
async function _name() {
    
}
console.log("sarab");

setTimeout(()=>{
  //  console.log("in settimeout");
    
},5000)
console.log('cheema');

//settimeout ma time lagata ha ka ya fun kitni daar bad chala ga
//sarab ka code print hona ka 5 sec bad set wala function chala ga
//time apni marzi la skta ha 1000 ka mtlb 1 sec
function hello(){
    console.log("end");
}
//setInterval(hello,1000);//ya code 1 sec ka bad chalta raha ga bar bar infinite time tak
//setinterval or settimeout almost same ha 
//settimeout ik dafa code chalata ha or setinterval code ko chalta raha ga
//os time ka bad chalta raha jitna osko time diya gya hoga 
//like agr 1000 ha to setinterval am code 1 sec ka bad chalta raha ga
// var count =0;
// let interval = setInterval(()=>{
//     hello();
//     count++;
//     if(count==2){
// //clearInterval(interval)
//     }
// },2000);//ya setinterval ko use kar ka code print ho ga sirf 2 time
let car2 = {
    model:"civic",
    brand:"honda"
};
class Car2 {
    model:string ="";
    brand:string = "";
}
let newcar= new Car2();//new ka keyword zarori ha
newcar.brand = "bmw"
newcar.model = "M4 competititon"
// console.log(newcar);
// console.log(car2);
//constructor not 
// promise
