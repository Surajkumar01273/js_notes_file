const user = {
    userName: 'suraj kumar',
    email: 'surajshk1995@gmail.com',
    logIn: true,

    getUserDetals: function(){
        console.log('got users detals from database');
        console.log(`user name - ${this.userName}`); 
        console.log(this);
        
    }
    
}

// console.log(user);

// console.log(user.userName);
console.log(user.getUserDetals());
console.log(this);


