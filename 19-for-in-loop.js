// ************    for in loop    ********************

const mysubject = {
    js: "javascript",
    py: "python",
    cpp: "c++",
    ruby: "rubby"
}

// console.log(mysubject);


for (const key in mysubject) {
    // console.log(`key = ${key}, value = ${mysubject[key]}`);   //   this is print key and value both
    // console.log(key);  //  this is only print key like js py cpp
    
    // const element = mysubject[key];    //  this is only print value
    // console.log(element);      
}

// const programming = ["javascript", "java", "python", "c++", "rubby"]

// for (const key in programming) {
//     console.log(programming[key]); 
// }

