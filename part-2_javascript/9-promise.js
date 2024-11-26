//Promise one

const promiseOne = new Promise(function(resolve, reject){
    // do an async task 
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    }, 3000)
})

promiseOne.then(function(){
    console.log('promise is consumed');
    
})

//  promise two

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2 complete');
        resolve()
        
    }, 3000)
}).then(function(){
    console.log('async 2 resolved');
    
})

//  promise three

const promiseThree  = new Promise( function(resolve, reject){
    setTimeout(function(){
        resolve({username1: 'suraj', email1: 'surajshk1995@gmail.com', age1: 22},
            {username2: 'Riya', emai2l: 'riya3334@gmail.com', age2: 20},
            {username3: 'abhishekh', email3: 'abhishekh22223@gmail.com', age3: 23}
        )
    },3000)
})

promiseThree.then(function(user){
    console.log(user);
})

// ***********   fourth  promise     ***************

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({name: 'suraj', password: '1235'
            })
        }
        else{
            reject('ERROR: something went wrong')
        }
    }, 3000)
})
// 1st ways to handle resolve and reject


// promiseFour.then(function(user){
//     console.log(user);
// }).catch(function(error){
//     console.log(error); 
// })


//  2nd ways to handle resolve and reject.

promiseFour.then((user) => {
    console.log((user));
    return user.password
})
.then((password1) => {
    console.log(password1); 
})
.catch( (error) => {
    console.log(error); 
}).finally( () => console.log('The Promise is either resolve or reject'))

//********* */    promise 5th    ****************

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({id: '123@com'})
        }else{
            reject('some issue')
        }
    }, 3000)   
})

async function consumepromisefive(){
    try{
        const response = await promiseFive;
        console.log(response)
    }
    catch(error){
        console.log(error); 
    }
}
consumepromisefive()

// const promisesixth = new Promise( function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({userName: "suraj yadav", password: 12345})
//         }
//         else{
//             reject('server is not connected')
//         }
//     }, 1000)
// })

// async () => {
//     return
//    try{
//     const response = await promisesixth;  //  ****  arrow function to used not handle asing await response
//     console.log(response); 
//    }
//    catch(error){
//     console.log(error);
    
//    }

// }

// async function consumedpromisesix() {
//     try{
//      const response = await promisesixth;
//      console.log(response); 
//     }
//     catch(error){
//      console.log(error);
     
//     }
//  }
//  consumedpromisesix()

async function getAlluser() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')     
    const data = await response.json()
    console.log(data);
    
    }
    catch(error){
        console.log("E ", error);
    }
}
getAlluser()

fetch('https://api.github.com/users/surajkumar01273')
.then( (response) => {
    return response.json()
})
.then( (data)=>{
    console.log(data);
    
})
.catch( (error)=> console.log(error))
.finally( ()=> console.log('operation is completed'))
