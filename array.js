
// 1 :- =  Accept value from user and assign in the array

/*
const prompt = require('prompt-sync')();
let size = Number(prompt("Enter the size of Array"))
let arr = new Array(size)
for(let i = 0; i < size; i++){
    let value = Number(prompt("Enter the element"))
    arr[i] = value;
}
console.log(arr)

*/


//2 :- =  Sum of array’s element

/*
const prompt = require('prompt-sync')();
let size = Number(prompt("Enter the size of Array"))

let sum = 0
let arr = new Array(size)
for(let i = 0; i < size; i++){
    let value = Number(prompt("Enter the element"))
    arr[i] = value;
    sum = sum+value;
}
console.log("Sum: " + sum)

*/

//3:= Max element from array


/*
let arr = [1, 3, 100,5, 7, 3, 73, 86, 32, 70, 40]

let max = arr[0]

for (let i = 1; i < arr.length; i++) {
    if (arr[i]>max){
        max = arr[i]
    }
}
console.log("max number is " + max)

*/



//4:= Min element from array

/*

let arr = [10, 3, 100,5, 7, 3, 73, 86, 32, 70, 40]

let min = arr[0]

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min){
        min = arr[i]
    }
}
console.log("min number is " + min)

*/