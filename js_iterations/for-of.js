const arr = [1, 2, 3, 4, 5];
for (const i of arr) {
    console.log(i);
}

//we can add it on string also 
const greeting = 'hello world';

for (const greet of greeting) {
    console.log(greet);
}

//maps - it store the data in key value format

const map = new Map();

map.set('IN', "india");// this method used to store the data in map
map.set('USA', "united states of america");
map.set('fr', 'france');
map.set("IN", "india")//suppose we try to add duplicate value then the value is not inserted 

//map stores the unique and it remember the order of insertion **** object store data in key value pair but it not remember the order of execution

// console.log(map);


// for (const num of map) {
//     console.log(num); //this gives the value informat of array of key value
// }

for (const [key, value] of map) {
    console.log(key,' : ', value);
}

//*****we can not iterate this on Objects, objects is not iteratble using FOR-OF LOOP*****