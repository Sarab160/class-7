// develop a progrem that calculates and  print the sum of the first n even numbers using a for loops
function sum(n:number){
var sum1:number = 0;
for(let i=1;i<=n;i++){
    var evenNumber:number = 2 * i;
    sum1 += evenNumber;
}
return sum1
}
console.log(sum(5));
//implement a program that uses a for loop to iterate a array through an array of numbers and print only the even numbers
var array:number[] = [1,2,3,4,5,6,7,8,9];
var evenArray:number[]= [];
for(let i=0; i<=array.length; i++){
    if(array[i] % 2==0){
        evenArray.push(array[i]);
    }
}
console.log(evenArray);
// implement a progeam that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones 
var value:number[] = [1,2,3,4,5,6,7,8,9,10];
for(let i=value.length-1;i>=0;i--){
    if (value[i] %2 ==0){
        value.splice(i,1);
    } 
}
console.log(value);
//write a program that defines a function to calculate the area of circle.the function shouldtake the radius as input and return the calculated area.
function areaofcircle(rad:number){
let pi:number = 22/7;
let area:number = pi * rad **2;
return area;
}
console.log(areaofcircle(5));
//develop a program that reads a list of gradesand uses the splice method to remove failing grades below 50 from the array
var grades:number[] = [100,40,67,83,45,78,32,69,80];
for(let i=grades.length-1;i>=0;i--){
    if(grades[i] < 50){
        grades.splice(i,1);
    }
}
console.log(grades);
//write a program that uses a function to find the largest element in an array of numbers

function findLargestElement(array7:number[]){
    let largestElement:number = array7[0];
    for(let i = 0;i<array7.length;i++)
    {
        if(largestElement< array7[i]){

        }
    }
    return largestElement;
}
var array7:number[] = [1,2,3,4,5,6,7,8,9,]
var largestElement:number= findLargestElement(array7);
console.log(largestElement);
