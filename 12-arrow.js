const user = {
    coursename: "javascript",
    price: 1999,
    welcomeMessage: function(){
        // console.log(`${this.coursename} , welcome to my website`);
        // console.log(`${this.price} , you are affotable for this price`);/
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.coursename = "dear Riya"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "riya"
//     console.log(this);
    
// }
// chai()

// const chai = function(){
//     let username = "riya"
//     console.log(this.username);
    
// }
// chai()


// +++++++++++++++++++      Arrow function    +++++++++++++

// const chai = () =>{
//     console.log(this);
    
// }
// chai()

const addTwonum = (num1, num2) => {
    return result =  num1 + num2;
    
}
console.log(addTwonum(5, 5));

const chai = (num1, num2) => (num1 +num2)
 console.log(chai(3, 3));

 // rerurn object through the arrow function 

 const returnObj = () => ({name: " Miss Riya"})
 console.log(returnObj());

 const mtArray = [30, 40, 23]

 const returnarr = () => (mtArray[1])
 console.log(returnarr());
 

        console.log(`${this.coursename} , welcome to website`);
        
welcomeMessage()
