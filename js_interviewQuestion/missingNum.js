const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 4, 6, 7, 9, 10]
const missingNoFunc = (arr)=>{
    const sumOfNo = 10*11/2;

    const sumofArr = arr.reduce((acc, curr)=> acc += curr, 0);

    return sumOfNo - sumofArr;
}

console.log(missingNoFunc(arr));

//also we can find multiple element in the range of 1 to 10 

const missingMultiNoFunc = (arr) =>{
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);
    let missingNo = [];
    for(let i=minValue; i<maxValue; i++){
        if(arr.indexOf(i)<0){
            missingNo.push(i);
        }
    }
    return missingNo;
}

console.log(missingMultiNoFunc(arr2));





