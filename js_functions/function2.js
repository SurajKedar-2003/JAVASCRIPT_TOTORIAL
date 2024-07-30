function calculateCartPrice(...num1){ // suppose we have more than one value then we use rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 600));

function calculateCartPrice1(val1, val2, ...num){
    return num;
}

console.log(calculateCartPrice1(200, 400, 5333, 7555));

//object passing as argument
const user = {
    username: "suraj",
    price: 350
}

function getObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
getObject(user);

//we can directly pass the object also 
getObject({username : 'suraj', price: 450});


// passing array as argument

const myArray = [200, 400, 600, 700];
function getSecondValue(arr){
    return arr[2]
}

console.log(getSecondValue(myArray))