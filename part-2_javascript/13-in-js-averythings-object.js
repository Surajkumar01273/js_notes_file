

//***********    about the object        ********** */

function multiple5(num){
    return num*5
}

multiple5.power = 2

console.log(multiple5(5));
console.log(multiple5.power);
console.log(multiple5.prototype);

// ****************    important of new keyword    **********************

function createUser(Username, score){
    this.Username = Username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    
}

const chai = new createUser('chai', 25)
const tea = new createUser('tea', 250)

chai.printMe()
tea.printMe()