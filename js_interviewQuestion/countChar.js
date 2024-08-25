let str = "kedar suraj kk kkk kkk"
let char = "k"
function countChar(word, char){
    word = word.toLowerCase();
    char = char.toLowerCase();
    let count = 0;
    let charArray = word.trim().split('')
    console.log(charArray);
    
    charArray.map((currChar)=>{
        if(currChar === char){
            count++;
        }
    })

    return count;
}

console.log(countChar(str, char));
