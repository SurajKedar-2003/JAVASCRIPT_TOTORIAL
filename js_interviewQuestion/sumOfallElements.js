const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findSum = (arr)=>{
    return arr.reduce((acc, curr)=> {
        return acc += curr;
    }, 0);
}

console.log(findSum(arr));

