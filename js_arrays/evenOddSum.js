let number = [];
let evenSum=0, oddSum = 0;

let count = parseInt(prompt('enter the size of array :'));
for(let i=0; i<count; i++){
    number[i] = parseInt(prompt('enter the elements in an Array:'));
}

for(let i=0; i<count; i++){
    if(number[i]%2==0){
        evenSum = evenSum + number[i];
    }else{
        oddSum = oddSum + number[i];
    }
}

console.log(`even sum = ${evenSum}`);
console.log(`odd sum = ${oddSum}`);