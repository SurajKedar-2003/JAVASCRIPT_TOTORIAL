let str = 'surajkedar';

const reverseString = (str)=>{
    // return str.split('').reverse().join('');

    let strarr = str.split('');
    let i = 0;
    let j = strarr.length-1;
    
    while(i<j){
        let temp = strarr[i];
        strarr[i] = strarr[j];
        strarr[j] = temp;
        i++;
        j--;
    }
    let reversedStr = strarr.join('');
    return reversedStr;
    
}

console.log(reverseString(str));
