const user = {
    username:'suraj',
    price:999,

    welcomeMessage : function welcomeMessage(){
        console.log(`${this.username}, welcome to website`);//this is used for refering the current context
        console.log(this);// this will print the current context which is user object and functions referenced address
    }
}

// user.welcomeMessage();
// user.username = "kedar"
// user.welcomeMessage();

console.log(this);// current context is global it print the empty object {} 
//we are in node environment the current context is empty ****

//**** In browser the current context is window object  */


// function chai(){
//     let username = 'suraj'
//     console.log(this.username); //this gives output undefined
// }

const chai = () =>{
    let username = 'suraj'
    console.log(this.username);
}
chai();
//explicit declaration
// const addTwo = (num1, num2) =>{
//     return num1+num2
// }

//*****implicit declaration of arrow function************

const addTwo = (num1, num2) => num1+num2 // this is called implicit declaration in which we can not write curly braces and return statement ***********
//also we can add parentesis for better understanding
console.log(addTwo(3, 5));
const objectReturn = () => ({username : 'suraj'})

console.log(objectReturn());