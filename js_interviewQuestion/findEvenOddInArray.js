const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findEvenOdd = (arr) =>{
    let evenNo = [];
    let oddNo = [];

    arr.map((e)=>{
        if(e%2 == 0){
            evenNo.push(e);
        }else{
            oddNo.push(e);
        }
    })

    return {evenNo, oddNo};
}

console.log(findEvenOdd(arr));
