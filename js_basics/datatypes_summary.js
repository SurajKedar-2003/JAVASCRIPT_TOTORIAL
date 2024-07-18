/*Notes :
on the memory allocation and how to access it their is 2 types of datatypes 
primitive and non-primitive

primitive=>
number, string, null, undefined, boolean, symbol, bigInt

Non-primitive:

Array, object, function

 */

//Array

let fruits = ["Apple", "manogo", "kiwi", "orange"]
console.log(typeof fruits);

//objects

let myObj = {
    name : "suraj",
    course : "javascript",
    
}
console.log(typeof myObj);

//functions

const myFunction = function() {
    console.log("hello github");
  
}
console.log( typeof myFunction);