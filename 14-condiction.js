// const isUserlogin = false;
// if(isUserlogin){
//     console.log("User is login"); 
// }
// else{
//     console.log("some things wrong so user is not login"); 
// }
// const temp = 40;

// if(temp === 41){
//     console.log("temp equal to 41");    
// }
// if(temp < 41){
//     console.log("temp less then 41");
// }

// if(temp > 50){
//     console.log(`temp grather then 41`);
// }

// const score = 200;
// if(score>100){
//     let power = "fly"
//     console.log(`User power ${power}`);  
// }

const userLogin = true;
const debitCard = true;
const loginfromGoogle = false;
const logInFromEmail = true;

if(userLogin && debitCard && logInFromEmail || loginfromGoogle){
    console.log("allow to buy course");  
}
else{
    console.log("Not valid user please check one time");
    
}