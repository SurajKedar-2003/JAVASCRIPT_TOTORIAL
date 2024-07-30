// let a =10;
// const b = 20;
var c = 30;

if (true) {//this is block scope
    let a = 20;
    const b = 30;
    var c = 40;
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "suraj"

    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website); // not accessible from outsite the function
    two();
}

one();

//functional scope
var beverage = 'cola'
function food(){
    let fruit = "apple"
    const vegetable = "potato"
    var beverage = "pepsi"
    console.log(beverage);
}

// console.log(fruit);
// console.log(vegetable);
console.log(beverage); // not access from outside function called functional scope
food()