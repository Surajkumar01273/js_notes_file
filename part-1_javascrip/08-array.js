// Array

const myArr = [0, 1, 2, 3, 4, 5, 6, "suraj"]
const myHeros = ["shaktiman", "Amaldube", "salman"]
const newArr = new Array(1,2,3,4,5)
// console.log(myArr);
// console.log(myHeros);
// console.log(newArr);
// console.log(myHeros[2]);
// console.log(myHeros[0][5]);




// ******************    Array Method  *********

// myArr.push('riya');
// myHeros.push('abhishekh','suraj')
// newArr.push(6)
// newArr.push(7,'riya')
// console.log(myArr);
// console.log(myHeros);
// console.log(newArr);
// myArr.pop()
// newArr.pop()
// console.log(myArr);
// console.log(newArr);

// myArr.unshift(8)
// myArr.shift()
// myArr.shift()
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(5));

// const otherArr = myArr.join();
// console.log(myArr);
// console.log(otherArr);

// console.log(typeof myArr);
// console.log(typeof otherArr);

// console.log("A", myArr);

// const myn1 = myArr.slice(1,3);
// console.log(myn1);
// console.log("B", myArr);
// const myn2 = myArr.splice(1,3);
// console.log(myn2);
// console.log("C", myArr);


// ******************   some important array method *********************

const hero = ["shaktiman", "spiderman", "ironman"];
const cBintern = ["suraj", "riya", "chandan", "abhishekh"];
// hero.push(cBintern)
// console.log(hero);
// console.log(hero[3][1]);

const all = hero.concat(cBintern);
console.log(all);

// **********   spred operator    **********

// const spared = [...hero, ...cBintern]
// console.log(spared);

// const anotherArr = [1, 2,3,4, [5,6,7], 8, [9,10, [11,12]]]
// const real_anotherArr = anotherArr.flat(2)
// const real_anotherArr = anotherArr.flat(Infinity)
// console.log(real_anotherArr);

console.log(Array.isArray("hero"));
console.log(Array.from("hero"));   // convert every letter in array format to used Array.form.
console.log(Array.isArray("hero"));  // check array or not array to used Array.isArray


console.log(Array.from({name: "suraj"}));   // create array of object to used from method

// const score = 2000;
// const score1 = 300;
// const score3 = 400;

// console.log(Array.of(score, score1, score3))