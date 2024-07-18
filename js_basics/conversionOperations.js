let score = "23";
let name = "suraj"

//console.log(typeof score)

// let scoreInnumber = Number(score)
// console.log(typeof scoreInnumber);
// console.log(scoreInnumber)
let scoreInnumber = Number(name)
//console.log(scoreInnumber);
/**NOTES:
 * "33" -> 33
 * "33abc" -> NaN
 * true -> 1, false-> 0
 * 
 */

let isLoggedIn = null;
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

/**For boolean
 * 1 -> true, 0 -> false
 * "" -> false, "suraj" -> true
 * null => false
 * 
 */
let num = 25
let stringNum = String(num);
console.log( typeof stringNum);

//***********************************Operations********************************************* */

let value = 3
let negValue = -value
//console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2)
console.log(2**3);//double start is for power 2 raise to 3
console.log(2/3);
console.log(2%3);

//##### IMPORTANT*/
console.log("1"+ 2);// 12
console.log(1 + "2");// 12
console.log("1" + 2 + 2);//imp output : 122
console.log(2 + 2 + "1");//imp output : 41