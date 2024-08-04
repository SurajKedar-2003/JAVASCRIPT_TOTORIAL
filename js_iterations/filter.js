const myNums = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];

//fiter directly return the values
const newNums = myNums.filter((item)=>item>5);
console.log(newNums);

// we can do above operations using for each also
const newNums1 = [];
myNums.forEach((item)=>{
    if(item>5){
        newNums1.push(item)
    }
})