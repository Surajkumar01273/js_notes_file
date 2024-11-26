
const User = {
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false,
    name: 'surabhi'
}

const TASuport = {
    makeAssistance: ' js assignment',
    fullTime: true,

    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// console.log(TASuport.__proto__);
// console.log(Teacher.__proto__);
// console.log(User);

// *************    Modern syntax for inheritance    **********

 
// console.log(Object.setPrototypeOf(TeachingSupport, Teacher));

let anotherName = 'chai aur code       '

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherName.truelength()
'suraj'.truelength()
'Riya'.truelength()




