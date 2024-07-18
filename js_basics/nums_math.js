// const score = 400
// console.log(score);

// const newScore = new Number(100)
// console.log(newScore);

// console.log(newScore.toString());// covert the number into string
// console.log(newScore.toFixed(2));// it use to fixed the precision after decimal point upto 2 digit

// const otherNumber = 134.23
// console.log(otherNumber.toPrecision(4));

// const hundreds = 10000000;

// console.log(hundreds.toLocaleString());//by default it is in us $ format
// console.log(hundreds.toLocaleString('en-IN'));// FOR INDIAN FORMAT

// //**************************************************MATH********************************

// console.log(Math);
// // it for round up the value
// console.log(Math.round(4.768));
// console.log(Math.floor(4.54));
// console.log(Math.ceil(4.21))

console.log(Math.random()); //generate values between 0 and 1
console.log(Math.random()*10); //multiply by 10 shift the value and generate the value between 1 and 10;
console.log((Math.random()*10) + 1 )
console.log(Math.floor(Math.random()*10) +1)

//values between range
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min +1))+min) 
