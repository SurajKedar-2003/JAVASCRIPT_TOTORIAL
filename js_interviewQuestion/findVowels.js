let str = 'surajkedar';

const findVowel = (str)=>{
    let result = str.toLowerCase().split('');
    let count = 0;
    let vowel = [];
    result.map((e)=>{
        if(e === 'a' || e === 'e' || e === 'i' || e === 'o' || e==='u'){
            count++;
            vowel.push(e);
        }
    })
    return vowel.join('');
}

console.log(findVowel(str));
