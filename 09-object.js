// javascript object are created two types 1 singleton and 2 literal object
// singletion object always to create through the constracturs method
// Object.create this is a singletion object syntax

// object literal insilize used the curily bricket

//const jsUser = {}   //this is a empty object

// how to used symbol in object

const mysym = Symbol("key1")

const jsUser = {               // object
    name : "Riya",
    [mysym]: "key1",    //    symbol used in object
    "myfullName": "suraj kumar",
    age: 21,
    Email: "riya1995@gmail.com",
    isLogin: false,
    lastLogin: ["Saturday", "sunday", "monday"]
}
// console.log(jsUser);

// console.log(jsUser.lastLogin);
// console.log(jsUser["lastLogin"]);
// console.log(typeof jsUser["myfullName"]);
// console.log(jsUser[mysym]);
// console.log(typeof jsUser[mysym]);

// Object.freeze(jsUser)

// console.log(jsUser.Email="surajshk1995@gmail.com");
// jsUser.age = 23
// console.log(jsUser);

// jsUser.greeting = function (){
//     console.log("hello js user");
    
// };
// jsUser.greetingtwo = function(){
//     console.log(`hello js user, ${this.name}`);
    
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());

//*********    some advance object method and singlation object     ******* */

// const tinderUser = new Object()  *********this ia singlition object
// console.log(tinderUser);

const tinderUser = {}       //******** literal object
tinderUser.id = "123suraj"
tinderUser.name = "Surabhi"
tinderUser.isLogin = true

// console.log(tinderUser);

const regularUser = {
    email: "surajshk1995@gmail.com",
    fullName:{
        Userfullname:{
            firstname: "Riya",
            Lastname: "kumari"
        }
    }
}
console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.Userfullname);
// console.log(regularUser.fullName.Userfullname.firstname);
// console.log(regularUser.fullName.Userfullname.Lastname);

const obj1 = {1: "a", 2: "b"}
const obj4 = {3: "a", 4: "b"}
const obj2 = {5: "a", 6: {c:0}}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)   // {target},  source - obj1, obj2
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const user = [
    {
        id: "open123",
        email: "surajshk1995@google.com",
        name: "deniyal"
    },
    {
        id: "open123",
        email: "surajshk1995@google.com",
        name: "deniyal"
    },
    {
        id: "open123",
        email: "surajshk1995@google.com",
        name: "deniyal"
    }
]

// console.log(user[1].email);
// console.log(user[2].name);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLogin"));


const course = {
    coursename: "js in hindi",
    price: 1999,
    courseInstructor: "hitesh"
}
console.log(course.courseInstructor);
console.log(course["courseInstructor"]);
// const {courseInstructor:instructor} = course
const {coursename:n, price:p, courseInstructor:i} = course
// console.log(courseInstructor);
// console.log(price);
// console.log(coursename);/
console.log(n);

