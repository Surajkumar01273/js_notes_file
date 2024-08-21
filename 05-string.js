const name = "suraj";
const repoCount = 50;
//console.log(`my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('suraj');

//  console.log(gameName[1]);
//  console.log(gameName.__proto__);
//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(3));
//  console.log(gameName.indexOf('a'));

const newString = gameName.substring(1, 5)
// console.log(newString);

//  const anotherString = gameName.slice(-8, 5) 
//  console.log(anotherString);

//  const gamespace = "   spiderman   "
//  console.log(gamespace);
//  console.log(gamespace.trim());
const dive = "doremon";
//const g = dive.substring(4, 7)
//console.log(g);
const p = dive.slice(-6, 6)
//console.log(p);

const s1 = "2 + 2"
const s2 = new String("2 + 2")
// console.log(eval(s1));   //  4
// console.log(eval(s2));   // [string: '2 + 2']
// console.log(eval(s2.valueOf()));   // [string: '2 + 2']

const str = "mind, power, solu"
const str1 = str.substr(6, 5)
// console.log(str1);
// console.log(dive.substr(4, 3));
// console.log(dive.replace("mon", "montu"));
// console.log(dive.replaceAll("mon", "free firemax"));
// console.log(dive.replaceAll("doremon", "hogya"));
// console.log(dive.toUpperCase());
// const addotherString = " is old gmae so please all user to downlod freefire";
// console.log(dive.concat(addotherString));
// console.log(dive.anchor("gameName"));
// console.log(dive.anchor("gameName"));


//  let c = new String('suraj')
//  console.log(c);
//  let r = c;
//  console.log(r);    //   object string not behave as anon-primitive datatype because it not change actul value.
//  r = "chai";
//  console.log(r);
//  console.log(c);

let str12 = "this is a string";
let newstr = str12.split("i");
let newstr1 = str12.split("");
console.log(newstr);
// console.log(newstr1);

const result = "a, b, c, d, e";
console.log(result.split(",", 3));
