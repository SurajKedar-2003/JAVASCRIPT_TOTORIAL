const name = "suraj"
const courseName = "CSE"
console.log(name);

console.log(`hello, my name is ${name}. currently i am doing ${courseName}`)

const gameName = new String("candy crush")
console.log(gameName);
console.log(gameName.__proto__)// gives you the all prototypes(which are used on the string)
console.log(gameName.charAt(2));
console.log(gameName.length);
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(-10, 4) // it start from ending
console.log(anotherString);

const newStringOne = "  suraj  "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim the string remove extra spaces

const url = "https://gds.google.com/web/chip?cardIndex=0&hl=en&authuser=0&gdsid=958625327&continue=https%3A%2F%2Faccounts.google.com%2FServiceLogin%3Fcontinue%3Dhttps%253A%252F%252Fwww.google.com%252F%26hl%3Den%26authuser%3D0%26passive%3Dtrue%26sarp%3D1%26aodrpl%3D1%26checkedDomains%3Dyoutube%26checkConnection%3Dyoutube%253A1850%26pstMsg%3D1&rapt=AEjHL4O2kXqKJdQu8ABTNVP9tgn4TzqUNCS6ne_PaDi3szSWiaHynuevofX0VQeBXa001Xw0mvXbKUc1s2qWrSqcMrCYmuS8Eg&ep=p&landing=true"

console.log(url.replace("%", "hello"));// it replace only first occurances
console.log(url.replaceAll("%", "hello"));

console.log(url.includes('hello'));
console.log(gameName.split(" "));