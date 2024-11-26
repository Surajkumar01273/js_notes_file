
//   how to work call one functon in other function

function SetUsername(userName){
    // call DB calls
    this.userName = userName
    this.userName = userName
    this.userName = userName
    // console.log(this);
    
}
function createUser(username, email, password){
    SetUsername.call(this, username)
    console.log(this);
    
    this.email = email
    this.password = password
    
}
const chai = new createUser("chai", "chai@gmail.com", '123')
const coffee = new createUser("coffee", "coffee@google.com", '12345')
const milk = new createUser("milk", "milk@twiter.com", '12345678')
console.log(chai);
console.log(coffee);
console.log(milk);
