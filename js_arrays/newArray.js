const marvel_heros = ['thor', 'ironman', 'spiderman'];
const dc_heros = ['superman', 'flash', 'batman'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);// it takes whole array as input

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

// we can concat the array using spread operater

const all_new_heros = [...marvel_heros, ...dc_heros];

console.log(all_new_heros);

const another_array = [1, 2, 3, 4, [5, 6, 7], 8, [7,2,3, [3, 4, 2]]];
const real_another_array = another_array.flat(2);// flat(depth_of_subarray) - infinity
console.log(real_another_array);

console.log(Array.isArray('suraj'));
console.log(Array.from('suraj'));
console.log(Array.from({name:'suraj'})); //this is important for interview

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));//this create the new array with given set of elements

let arr1 = Array.of(3);
console.log(arr1); // output => element with single element [ 3 ]
let arr2 = new Array(4);
console.log(arr2);//output => [ <4 empty items> ]