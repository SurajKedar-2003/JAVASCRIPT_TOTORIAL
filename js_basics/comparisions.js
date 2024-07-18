console.log("2"<1);
console.log(1<"2");

console.log(null>0)
console.log(null>=0);
console.log(null==0);
/**IMPORTANT
 * the reason is that the equility check == and comparision > < >= <= work diffrently
 * comparision convert null to number, treating it as 0. that's why null >= true and null>0 false
 */