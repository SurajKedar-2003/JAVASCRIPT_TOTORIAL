const arr = [3, 5, 3, 9, 5, 8, 1, 9]

const duplicates = arr.filter((ele, index, arr)=> arr.indexOf(ele) !== index);

console.log(duplicates);

