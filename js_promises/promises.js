//promise have 3 states :
//pending, fulfilled, rejected
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('async task is completed');
        resolve(); //this method is connect promise to .then function
        
    }, 1000);
}) //promise creation

//promise consumption
promiseOne.then(()=>{
    console.log('promised consumed');
    
})

//we can write in following type also

new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('async task 2');
        
    }, 1000);
}).then(()=>{
    console.log('second promised consumed');
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username:"johndeo", email:"john@example.com"});//we can pass data for then method
    }, 1000)
})

promiseThree.then((user)=>{
    console.log(user); 
})

const promiseFour = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"surajkedar", password:"1234"});
        }else{
            reject('ERROR', error);
        }
        
    }, 1000);
})

//promise chaining
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error); 
})
.finally(()=>{
    console.log("promised resolved or rejected finally block is always executed");
    
})

//we can handle promises using the async-await

const Promisefive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: 'promisefive', password:"123"})
        }else{
            reject("ERROR : promise five went wrong", error);
        }
    }, 1000);
})

async function consumePromisefive(){
    try {
        const response = await Promisefive;
        console.log(response);     
    } catch (error) {
        console.log(error);
    }   
    
}

consumePromisefive()