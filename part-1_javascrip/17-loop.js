// for

for (let i = 0; i <=10; i++) {
    const element = i;
    if(element===5){
        // console.log(`the best number ${element}`);     
    }
    // console.log(element);   
}



// *******************    Break and continue statement  ***********

//  if you want to not print any control folo then used break statement and if you want to skip the any control the used continue controlfolo


for (let i = 0; i <=10; i++) {
    if(i === 5){
        // console.log('five is unusebal number so please continue it');
        continue; 
    }
    if(i===8){
        // console.log("Eight is the harmfull number if eight is detect then break the program");
        break;  
    }
    // console.log(`value of ${i}`);
}


// ************      while loop    ***********************

let index = 0;
while (index<=10) {
    // console.log(index);
    index = index+2   
}

const arry = [12, 11, 18, 10];
let arr = 0
while (arr<arry.length) {
    const element = arry[arr]
    // console.log(element);
    arr=arr+1
}

//*************    do while loop       *********/


let God = ["ram", "krishna", "vishanu"];
let indexs = 0

do{
    let bhagban = God[indexs];
    console.log(`index number = ${indexs}`);
    console.log(bhagban);
    indexs++
} while(indexs<God.length)

