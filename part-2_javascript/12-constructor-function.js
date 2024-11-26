function user(Username, login, loginId){
    this.Username = Username;
    this.login = login;
    this.loginId = loginId;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);  
    }
    return this
    
}

const userone = new user("suraj", true, '123@com')
const uesertwo = new user('raj', false, 'raj@com')
console.log(userone);
console.log(uesertwo);
