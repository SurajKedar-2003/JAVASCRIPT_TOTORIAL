const isPalindrome = (str)=>{
    
    let reversedStr = str.toLowerCase().replace(/\W/g, '').split('').reverse().join('');
    if(reversedStr === str){
        return "given string is palindrome";
    }else{
        return "not palindrome"
    }
}


console.log(isPalindrome("suraj"));
console.log(isPalindrome("madam"));

console.log(isPalindrome("a man, a Plan, a canal, panama"));
