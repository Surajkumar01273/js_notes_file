let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let myCreatedDate = new Date(2024, 0, 22, 5, 3)
// let myCreatedDate = new Date("2024-01-22")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/100000));

newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getYear());
// console.log(newDate.getTime());
console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));




