//***************   for of loop      ********** */


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);  
}

// console.log("Some HinduScript Book For Sanatan");
const hinduscripting = ["Rayamana", "Mahabharat", "Yoga", "Gitta", "ShivPuran"]
for (const hinduscript of hinduscripting) {    
    // console.log(hinduscript);
    
}


//  *************   Map function from array  ****************

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United State America')
map.set('FR', 'Franch')
map.set('UK', 'United State Kingdom')

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     'game1': 'NFS',
//     "game2": 'spiderman'
// }

// for (const [obj, value] of myObject) {   //   for of loop not iterate object mens not work on object
//     console.log(obj, ':-', value);
// }

// for (const key in map) {    // for in loop not iterate map mens not used for in loop on map function
//     console.log(key);
   
// }