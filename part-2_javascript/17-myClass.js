class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`; 
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
    checkEmail(){
        return `${this.email}`
    }
}

// const chai = new User("shree krishna", "chai1995@gmail.com", "123") 
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


//  how to work class behind the scene  

function Userf(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

Userf.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const user1 = new User("Riya", "riya2002@gmail.com", "riya123")
const user2 = new User("Avishekh", "avishekh2002@gmail.com", "avishekh123")
console.log(user1.encryptPassword());
console.log(user2.encryptPassword());
console.log(user1.changeUsername());
console.log(user2.changeUsername());




