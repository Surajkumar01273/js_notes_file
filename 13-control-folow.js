// const score = 200;
// let power = "fly";
// if (score < 100){
//     console.log(`user power is ${power}`);
// }
// else{
//     console.log(`power is not ${power}`);
// }


const balance = 1000;

if(balance < 500){
    console.log("less then 500");
}

else if(balance < 750){
    console.log("less then 750");
}

else if(balance < 1000){
    console.log("less then 1000");
}

// else{
//     console.log("yes less then 1200");
// }

const userLogin = true
const debtCard = true
const userloginFromgooge = false
const userloginFromEmail = true

if(userLogin && debtCard && userloginFromgooge || userloginFromEmail){
    console.log("User buy course");
}

if(userloginFromgooge || userloginFromEmail){
    console.log("user log in");
}