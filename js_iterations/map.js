const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//MAP - THIS FUNCTION DIRECTLY RETURN THE VALUES
//FOR-EACH - THIS FUNCTION NOT RETURN THE VALUES
const newNums = myNumbers.map((item)=>{
    return item+10;
})
// console.log(newNums);

//WE CAN PERFORM CHAINING OF FUNCTIONS ALSO 
//IF WE PERFORM CHAINING THEN VALUE RETURN BY FIRST FUNCTION IS GOES AS INTPUT TO SECOND METHOD

const newChainNum= myNumbers
.map((item)=> item*10)
.map((item)=>item+2)
.filter((item)=> item>=40)

console.log(newChainNum);