//we can declare object using singleton 
//using literals

const mySym = Symbol('key1');
const JsUser = {
    name: 'suraj',
    'full name': 'surajkedar',
    //suppose we can define the symbol in object then we can do 
    [mySym] : 'mykey',
    age: '22',
    location: 'Amravati',
    email: 'suraj@gmail.com'
}

console.log(JsUser.email);
console.log(JsUser["full name"]);

console.log(JsUser[mySym]);

JsUser.email = "john@gmail.com"

// Object.freeze(JsUser);// after freezing the object we can not change any value into the object
JsUser.email = "kedar@gmail.com"
console.log(JsUser);


//function in object
JsUser.greeting = function(){
    //console.log(`hello, ${this["full name"]}`);
    console.log(`hello, ${this.name}`);// we can access the data of object using this keyword
}
console.log(JsUser.greeting);//this gives the reference of function
console.log(JsUser.greeting());