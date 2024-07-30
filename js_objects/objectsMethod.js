//we can add and access multiple object as values in object
const regularUser = {
    fullname:{
        userfullname:{
            firstname:'suraj',
            lastname:'kedar'
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

//merging of two object and its methods
const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}

const obj3 = {obj1, obj2};//this return the object inside object { {}, {} }
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2)// this merge the all object into the target object
console.log(obj4);

const obj5 = {...obj1, ...obj2};//using spread operator
console.log(obj5);

const users = [
    {
        id:1,
        email:'sk@gmail.com'
    },
    {
        id:2,
        email:'sk@gmail.com'
    },
    {
        id:3,
        email:'sk@gmail.com'
    },
    {
        id:4,
        email:'sk@gmail.com'
    }
]

const email = users[0].email;//we can access array of object
console.log(email);

const tinderUser = {
    name:'john deo',
    email:'jd@gmail.com',
    isLoggedIn:true
}

console.log(tinderUser);
console.log(Object.keys(tinderUser));// this gives all keys into the array
console.log(Object.values(tinderUser));//this gives all values into array format
console.log(Object.entries(tinderUser));//this gives key value pair into array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//this method check the property is exist or not

//object destructuring

course = {
    name: 'javascipt',
    price: 40000,
    courseInstructor: 'john deo'
}

// const {courseInstructor} = course;
// console.log(courseInstructor);

const{courseInstructor:instructor} = course;
console.log(instructor);