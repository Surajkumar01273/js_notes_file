class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `12345`
    }
}

const userName = new User("suraj")
// console.log(userName.createId());
userName.logMe()

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@Teacher.com")

iphone.logMe()
console.log(iphone.email);
// console.log(iphone.createId());
iphone.createId();











//***********************             THE END JAVASCRIPT         ********************************