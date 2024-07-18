let marks = [];
let sum =0, avg =0;

let count = parseInt(prompt('enter a number you want :'));

for(let i=0; i<count; i++){
    marks[i] = parseInt(prompt('enter how many element u want'));
    sum = sum + marks[i];
}

console.log(` sum : ${sum}`);
avg = sum/count;
console.log(` avg : ${avg}`);