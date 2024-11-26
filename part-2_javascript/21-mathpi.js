// console.log(Math.PI)

// Math.PI = 5

// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

// const myObject = Object.create(null)  //   factory function to create object

const chai = {
    name: "ginger chai",
    price: 250,
    isAvilable: true,

    orderChai: function(){
        console.log("chai nahi bani");
        
    }
}


Object.defineProperty(chai, "name", {
    writable: true,
    enumerable: true,
    configurable: true
})




console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
    
}
for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
    
}

