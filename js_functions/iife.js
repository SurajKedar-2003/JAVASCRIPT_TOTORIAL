//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//***** interview imp - to prevent the code from global scope pollution for this reason we are using the IIFE


( function dbConnect(){
    console.log('db connected');
})(); //IIFE invoked the function but not where to stop it for that we have to add the semi column

( ()=>{
    console.log('db connected two');
} )();

( (name)=>{
    console.log(`name is ${name}`);
})('suraj');

console.log(
    ((num1, num2)=>{
        return num1+num2;
    })(3, 4)
);

(()=>{
    console.log('this is check');
})()

