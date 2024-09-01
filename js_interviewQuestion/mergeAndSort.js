const arr1 = [2, 3, 5, 2, 7, 9];
const arr2 = [78, 33, 5, 22, 1];

const mergeAndSort = (arr1, arr2)=>{
    const mergeArr = [...arr1, ...arr2];

    let sortedarr = mergeArr.sort((a, b) => a-b);
    return sortedarr;
}

console.log(mergeAndSort(arr1, arr2));
