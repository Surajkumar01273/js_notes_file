//data type are two type and it's return type
//1 premitive dattype  2  non premitive datatye

//1 premitive datatype
// number => 2 power 53 range
// bigint
// string
// boolean
// null
// undefind => not define value
// symbool
/* multiple line comment in jss */

/*non- premitive datatype
array, object, function*/

let name = "hitesh"  // string
let age = 22         // number
let isLogin = true;  // boolean
let accountCity      // undefined
const temprater = null; // object
const bigNumber = 5454246877n;  // bigint
const id = Symbol(2222);  // Symbol
const anotherId = Symbol(2222);  // symbol


// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isLogin)
// console.log(typeof accountCity);
// console.log(temprater);
// console.log(typeof temprater);
// console.log(bigNumber);
// console.log(typeof bigNumber);
// console.log(typeof id);
console.log(anotherId==id); // false value because symbol always give the uique value

//  Array  ****************

const myArray = [1, 3, 56, 34];  // object
// console.log(myArray); 
// console.log(typeof myArray);


//    Object  *************

const myobject = {
accounName: "Suraj kumar",    // object
accountId: "121221",
accountPassword: "11111"
     
}
// console.log(myobject);
// console.log(typeof myobject);

 // function   ***************

 const myfunction = function appf(){
    const num1 = 4;
    const num2 = 2;
    const sum = num1+num2;   //   object function
    console.log(sum);
    return sum
 }

//  console.log(myfunction);

// console.log(typeof myfunction);


// ********************    memorymanagement in javascript     *******************

// stack (primitive)   Heap (non-primitive)

let myyoutubName = "lifeSpend"
let anotherName = myyoutubName;
anotherName = "chaiaurcode";

// console.log(myyoutubName);

// console.log(anotherName);

let user = {
   email: "surajshk8470@gmail.com",
   password: "222333"
}

let usertwo = user;
usertwo.email = "surajbca@2902mail.com"
usertwo.password = "111111"

// console.log(usertwo.email);
// console.log(user);
// console.log(usertwo);

