//1 remove all negative numbers by using filter
var allNumbers:number[] = [6,-8,7,9,-5,-6,-4,9,5,-6,5,-3];
var poistiveNumbers= allNumbers.filter((data)=>{
    if(data>0){
        return true;
    }
})
console.log(poistiveNumbers);

//2 multiply by 2 to array through map
let array:number[] = [1,2,3,4,5];
let newArray = array.map((value)=>{
    return value*2;
}
) 
console.log(newArray);

//3 print only those fruit whose characters more than 5
var fruits:string[] = ["Apple","banana","cherry","date","grape"];
var someFruits = fruits.filter((data2)=>{
  return data2.length >5;
})
console.log(someFruits);
//4use filter and map together for this
var num:number[] = [1,2,3,4,5,6,7,8,9,10];
var evensquare = num
.filter(number => number %2==0)
.map(evenNumber =>evenNumber * evenNumber)
console.log(evensquare);

//5 convert temperature into farnheit by map method
var temperature:number[] = [0,10,20,40];
var farnheit = temperature.map((index)=>{
    return index*9/5 + 5;
})
console.log(farnheit);

//6 separate odd numbers and dobled it
var numbers:number[] = [3,6,9,12,15,18];
var oddDoublednumbers = numbers
.filter(value=> value % 2!=0)
.map(doubledVlue =>doubledVlue * 2 )
console.log(oddDoublednumbers);
//7 add excalamtion sign at the end of word
var names:string[] = ["alice","bob","charlie","david","emily",];
var sign = names.forEach(data=> {
    console.log(`${data}!`);
    
});

    














