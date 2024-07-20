//Dates()

let myDate = new Date();

console.log(myDate);
console.log(myDate.toLocaleDateString()); // it print the todays date
console.log(myDate.toLocaleTimeString()); // it print the time of that specific(current) instance
console.log(myDate.toLocaleString()); // this is a mixup of above two methods
console.log(myDate.toISOString()); //return the string in utc format followed by z

console.log(myDate.toJSON());

let myCreatedDate = new Date(2021, 11, 23);
console.log(myCreatedDate.toLocaleString()); // if we want to set date manually then months is always start from zero.
//0 - jan  11- Dec
//second syntax
let myNewDate = new Date("2023-01-14");// in this format months start from 1 -jan, 12 - Dec
console.log(myNewDate.toLocaleString());

//we can calculate the time stamp using now() function
let myTimeStamp = Date.now();
console.log(myTimeStamp); //print the value in millisecond
console.log(myCreatedDate.getTime()); // it also gives the time in millisecond

//converting into seconds
console.log(Date.now()/1000); // it gives the decimal value
console.log(Math.floor(Date.now()/1000)); // this is a second values

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth());//return the number from 0 to 11
console.log(newDate.getDay());//return the number from 1 to 7, 1-monday 7-sunday

//we can customized the methods according to need as follows:

let customizedDate = newDate.toLocaleString('default', {
    weekday: 'long'
})
console.log(customizedDate);

let second = newDate.toLocaleDateString('default', {
    second:'numeric'
})
console.log(second);
