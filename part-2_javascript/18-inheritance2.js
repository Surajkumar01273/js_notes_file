class User{
    constructor(username, ){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`); 
    }
}

const teacher = new Teacher('hitesh', "hitesh@gmail.com", "hitespasswor123")
teacher.addcourse();
const mashlachai = new User('mashlaChai')
mashlachai.logMe()
teacher.logMe()

console.log(teacher === mashlachai);
console.log(teacher === Teacher);
console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);
console.log(mashlachai instanceof User);
console.log(mashlachai instanceof Teacher);
