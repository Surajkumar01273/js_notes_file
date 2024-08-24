// const userEmail = "surajshk1995@gmail.com"
const userEmail = ""
const arr = []

if(arr){
    // console.log("got user email");
    
}
else{
    // console.log("false value not user find !");  
}

// some false value in js which always give false value

//   false, 0 -0, BigInt, 0n, "", undefiend, null, NaN

//  some truthy value in which always to give true vale.

//   'flase' " ", "0", [], {}, function(){}

// how to check array empt or not empty

const Array = [12, 13, 14]

if(Array.length === 0){
    console.log("array is empty");
}
else{
    console.log("array is not empty");
}

const checkObj = {  
    // userEmail: "raj@",
    // name: "suraj"
}

if(Object.keys(checkObj).length === 0){
    console.log("object is empty");
}
else{
    console.log("object is not empty");
}


//   ullish coalescing operater and (??) null undefined

let val1;
val1 = 5?? 10
console.log(val1);
let val2;
val2 = null ?? 15;
console.log(val2);
let val3;
val3 = null ?? undefined;

console.log(val3);

// terniary operator

const icePrice = 200;

icePrice <= 140 ? console.log("less then 140") : console.log("more than 140");
;


