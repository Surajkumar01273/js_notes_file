function saymyName(){
    console.log("suraj kumar");   
}
// saymyName()

// function addNumber(num1, num2){
//     console.log(num1 + num2);   
// }
// addNumber(8, 2)
// addNumber(8, "2")
// addNumber(8, null)
// const result = addNumber(5, 3)
// console.log(result);

// function addtwoNumber(num1, num2){
//     let result1 = num1 + num2;
//     console.log(result1);
    
//     console.log("suraj");
//     return result1
// }
// function addtwoNumber(num1, num2){
//     return num1 + num2;
// }
// const result = addtwoNumber(3,3)
// console.log(result);

// function loginUsermessage(username = "sam"){
//     if(username === undefined){
//         console.log("please enter valid user name");  
//         return
//     }
//     if(username === ""){
//         console.log("user name is empty please enter");
//         return
        
//     }
//     return `${username} is loged in webiste`
// }

// console.log(loginUsermessage("suraj"))
// console.log(loginUsermessage(""))
// console.log(loginUsermessage("Riya"))/

// function calculateCardprice(val1, val2, ...num1){
//     console.log(val1+val2);
    
//     return num1
// }
// console.log(calculateCardprice(200, 400, 600, 300, 500));
// calculateCardprice(30, 40)

const course = {
    courseName: "javaScript",
    price:1999
}

function handleobject(anyobjct){
    console.log(`course name ${anyobjct.courseName} and price :${anyobjct.price}`);
    
}
// handleobject(course)
handleobject({
    courseName: "python",
    price: 999
})

const myarry = [200, 500, 300]

function handleArray(getarry){
    return getarry[3]
}
// console.log(handleArray(myarry));
console.log(handleArray([2000, 4000, 7, 8000]));

