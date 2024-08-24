//  immediately Invocked function Expression (IIFE)
// iife function to used immeditaley execute our function and  save to the global policationcour function.



(function chai(name){  // uesd parameter in iife function.
    console.log(`my name is ${name}`);  // if define the iife through the function nmae then call named iife
}
)("Suraj");

( () => {
    console.log("DB is connected");  // when not used function name in iife then call simpe iife 
    
})();

( () => (console.log("DB successfully connected")))()