let str = "my name is suraj kedar i am from Amravati"

// function findLongestWord(str){
//     let result = str.split(' ');
//     let longest = result[0];
    
    
//     for(let i=1; i<result.length; i++){
//         if(result[i].length > longest.length){
//             longest = result[i];
//         }
//     }

//     return longest;
    
// }


//we can create also like this
// function findLongestWord(str){
//     let result = str.split(" ");
//     result.sort((a, b)=> b.length - a.length);
//     return result[0]    
// }


function findLongestWord(str){
    let result = str.split(" ");
    return result.reduce((accum, curr)=> accum.length > curr.length ? accum : curr)    
}
console.log(findLongestWord(str));



