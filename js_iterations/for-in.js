// for in loop

//we can iterate the object using for in loop which is not in for-of loop
const myObject = {
    js: "javascript",
    tp: "typescript",
    cpp: "c++",
    rb: "ruby"
}

for (const key in myObject) {
    //console.log(key); => it print the keys of objects
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// on Array

const programming = ["js", "rb", "py", "java", "cpp"]
/**
 * DIFFRENCE =>
 *  FOR-OF ---> IT PRINT THE VALUES OF ARRAY
 *  FOR-IN ---> IT PRINT THE KEYS OF ARRAY
 */
for (const key in programming) {
    //console.log(key);//it print the key which is index starts from zero
    console.log(programming[key]);
}

/**
 * IMP--> WE CAN NOT ITERATE MAP USING FOR-IN OUTPUT--> IT GIVES NOTING
 */
// const map = new Map();
// map.set("IN", 'india');
// map.set("USA", 'united state of america');
// map.set("UK", "united kingdom");

// for (const key in map) {
//   console.log(key);
// }

