let numbers = [7, 3,9, 2, 1, 10, 6];

const findMax = (numbers)=>{
    let largest  = numbers[0];
    numbers.forEach((e)=>{
        if(largest < e){
            largest = e;
        }
    })

    return largest;
}


console.log(findMax(numbers));
