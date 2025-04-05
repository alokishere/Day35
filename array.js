
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






// let size = Number(prompt("Enter the size of Array"))
// function calculateSumAndMean(size, value) {

// let sum = 0
// let arr = new Array(size)
// let value = Number(prompt("Enter the element"))
//     arr[i] = value;
//     sum = sum+value;
// }
// console.log("Sum: " + sum)
// }

// // module.exports = { calculateSumAndMean };
// calculateSumAndMean()







// const prompt = require('prompt-sync')();


// let n = Number(prompt("Enter the size of Array"))

// let sum = 0;
// let arr = new Array(n)

// for (let i = 0; i < n; i++) {
//     let val = Number(prompt("Enter the element"))

//     // sum += arr[i];
//     arr[i] = val
//     sum = sum + arr[i]
// }

// let mean = (sum / n).toFixed(1);

// // return { sum, mean };

// console.log("Sum:"+sum );
// console.log("Mean:" + mean );




//5 := Second max element from array
/*

let arr = [1,3,5,3,7,3,8,4,90,90,90,76,45,3,4,23,32,4,56,33]
let max =  Math.max(arr[0],arr[1])
let sMax =  Math.min(arr[0],arr[1])



for(let i = 2; i < arr.length;i++){
    if(max < arr[i]){
        // sMax = max
        max = arr[i]
    } else if(sMax < arr[i] && max != arr[i]){
        sMax = arr[i]
    }
}
console.log("second max is : " +  sMax);


*/


//6 := Second min element from array

/*

let arr = [10,20,30,50,60,70,30,80,4,90,90,90,76,45,35,4,23,32,4,56,33,60]
let min =  Math.min(arr[0],arr[1])
let smin =  Math.max(arr[0],arr[1])


for(let i = 2; i <arr.length; i++) {
    if(min>arr[i]) {
        min = smin 
        smin = arr[i]
    } else if(smin < min && min != arr[i]){
        smin = arr[i]
    }
}

console.log("Second min is " + smin);


*/



//. Reverse the array

/*
let arr = [1,2,3,4,5,6,6,7]
 let ar = new Array(arr.length)
 let j = 0
 for(let i = arr.length-1; i >= 0 ; i--){
    ar[j] = arr[i]
    j++
 }
 console.log(ar)

 //method 2
  
let i = 0 , j = arr.length - 1
while(i<j){
    let temp = arr[i]
    arr[i]= arr[j]
    arr[j] = temp
    i++
    j--
}
console.log(arr);


*/


//All zeroes to left and all ones to right 
/*
let arr = [1,0,0,1,0,1,1,0]
 let i= 0, j = 0
  while(i < arr.length){
    if(arr[i] == 0){ // 0 0 0 0 1 1 1 1 ,  for  1 1 1 1 1 1 0 0 0 0 0  :> arr[i] == 1 
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    i++
  }
  console.log(arr);
 
*/


//Array  right Rotation by 1

// let arr = [1,2,3,4,5,6,6,7]
//  let temp1 = arr[arr.length-1 ]
//  for(let i = arr.length-1;  i > 0; i--){
//     arr[i] = arr[i-1]
//  }
//  arr[0] = temp1
//  console.log(arr);

//Array  left Rotation by 1  

/*
let arr = [1,2,3,4.9,12,7]
 let temp = arr[0 ]
 for(let i = 0;  i < arr.length-1; i++){
    arr[i] = arr[i+1]
 }
 arr[arr.length-1] = temp
 console.log(arr);

 */







//Array  left Rotation by k  

/*
let prompt = require("prompt-sync")()
 let k = Number(prompt("Enter the value of k"))

let arr = [1,2,3,4,39,12,7]
 k = k % arr.length
for(let j = 1; j <= k ;j++){
    let temp = arr[0 ]
    for(let i = 0;  i < arr.length-1; i++){
       arr[i] = arr[i+1]
    }
    arr[arr.length-1] = temp
}

 console.log(arr);

//methode 2

 let arr = [1, 2, 3, 4, 5]
 let temp = new Array(arr.length)
 let k = 13;

k = k % arr.length

 for (let i = 0; i < arr.length; i++) {

temp[i] = arr[(i+k)%arr.length]
}


console.log(temp);



//method 3
let prompt = require("prompt-sync")()
 let k = Number(prompt("Enter the value of k"))
let arr = [1, 2, 3, 4, 5]
let temp = new Array(arr.length)
k = k % arr.length

function Reverse(arr, i , j ){
    while(i<j){
        let temp = arr[i]
        arr[i]= arr[j]
        arr[j] = temp
        i++
        j--
    }
}

//for left rotaation
Reverse(arr, 0, k-1)
Reverse(arr, k, arr.length-1)
Reverse(arr, 0, arr.length-1)

//for right rotaion
Reverse(arr, 0, arr.length-1)
Reverse(arr, 0, k-1)
Reverse(arr, k, arr.length-1)


 console.log(arr);


 
*/



//  Linear Search an array - If element found print the index else -1

/*
let prompt = require("prompt-sync")()
 
  let arr = [3,5,3,22,55,67,65,44,89,69,90,50,677,67,10]
    let target= Number(prompt("Enter the  target value "));
   let index = -1
   for(let i= 0; i<arr.length;i++){
       if(arr[i]==target){
        index = i
        break;
       }
   }
   if(index == -1) console.log("target not found");
   else console.log("traget found at " + index + " index");
   
   */



//binary search

/*

let prompt = require("prompt-sync")()

let arr = [3, 5, 3, 22, 55, 67, 65, 44, 89, 69, 90, 50, 677, 67, 10]
arr.sort((a, b) => a - b)
arr = [...new Set(arr)]

let get = Number(prompt("Enter the  target value "));

if(binarySearch(arr, get) === -1) console.log("target not found ");
else console.log("target found ");

function binarySearch(arr,target){
    let s= 0, e = arr.length-1;
    while(s <= e){
        let mid = Math.floor((s+e)/2)
        if(arr[mid]== target) return mid
        else if(arr[mid]> target) e = mid -1 
        else s = mid + 1
    }
    return -1
}

*/
