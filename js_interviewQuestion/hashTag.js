let str = 'javascript best course'

const hashTag = (str)=>{
    if(str.trim().length===0 || str.length>=280){
        return false;
    }

    return `#${
        str.split(' ')
        .map((e)=> e.replace(e[0], e[0].toUpperCase()))
        .join('')
    }`
    
    
    // str = str.map((e)=>{
    //     return e.replace(e[0], e[0].toUpperCase())
    // });
    
    // return `#${str.join("")}`
}

console.log(hashTag(str));
