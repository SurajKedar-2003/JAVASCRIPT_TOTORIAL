// Array - is a collection of same as well diffrent data types

//intialization of an array
var a = [10, 20, 30, 40, 50];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

let names = ['scoot', 'tiger', 'blake', 'martin', 56, 75.2]
console.log(names[2]);
console.log(names[5]);

//array methods 
//1 length - it counts the length of array elements

console.log(names.length);
//2 push()  - it insert elements at last index
names.push('suraj');
console.log(names);

//3 pop() - it remove elements at last index
let removedElement = names.pop();
console.log(removedElement);

//4 shift() - remove elements at first index
names.shift();
//5unshift() - insert elements at first index
names.unshift("kedar");
console.log(names);

//6reverse - it display array elements in reverse order
console.log(names.reverse());

 //7 indexof() - display the index of first occurance
 console.log(names.indexOf('blake'));

 //8 lastIndexOf() - display the index of last occurance
 names.push("blake")
 console.log(names.lastIndexOf('blake'));

 //9 include()
 let check = names.includes('suraj');
 console.log(check);

 //10 slice() - method return shallow copy of a portion of an array into a new array object
 //slice(startindex, lastindex) ** last index is not included

 let newArray = names.slice(2, 4);
 console.log(newArray);

 let new1 = names.slice(-2, -1);
 /**
  * positive index:  0   1   2   3   4   5   6
  * negative index: -7  -6  -5  -4  -3  -2  -1
  */

 //11 splice() - insert and delete elements of an array
 //splice(start, deleteElementCount, addElement);

 let c1 = names.splice(2, 0, 'ram', 'sham');
 console.log(names);

//12 - concat()-it joins 2 array
 let arr1 = [22, 33, 99];
 let arr2 = [100, 101, 102];

 let arr3 = arr1.concat(arr2);
 console.log(arr3);


 //