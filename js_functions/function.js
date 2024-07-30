
function Add(num1, num2){
    console.log(num1+num2);
}
Add(3, 5);
//also we can store this in variable

const add = Add(4, 5);//for storing the values we have to return the functions using return;

function Sub(num1, num2){
    return num1-num2;
}

const sub = Sub(4, 2)
console.log(sub);


function loginUserMessage(username){//if username is not provided then by default it is undefined
    if(!username){
        console.log('enter username');
        return;
    }
    return `${username} just logged In`
}
console.log(loginUserMessage('suraj'));
console.log(loginUserMessage());
