const coding = ["js", "ruby", "java", "python", "cpp"]

 // this loop is Higher order function which is also present in the prototypes of array methods

 coding.forEach((val)=>{
    console.log(val);
 })
//WE CAN PASS LIKE THIS ALSO
//  function printMe(item){
//     console.log(item);
//  }

//  coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})
/**THIS FOR EACH LOOP NOT RETURN ANY VALUE */
// const items = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(items);