//  ***********    for Each Loop       ******************


const newArry = ["ramayan", "mahabharat", "puran", "gita", "veda"]

newArry.forEach( function (items) {
    // console.log(items)
});

// newArry.forEach( (value) => (console.log(value)));

newArry.forEach( (item) => {
    // console.log(item);
    
})

newArry.forEach( function fname(arr_value){
    // console.log(arr_value);
    
})

function printMe(item){
    // console.log(item);  
}

newArry.forEach(printMe)

newArry.forEach( (item, index, arrays) => {
    // console.log(item, index, arrays);
})

const holdObject = [
    {
        languageName: "javascript",
        price: 2000,
        instructor: "Riya"
    },
    {
        languageName: "Python",
        price: 999,
        instructor: "chandan"
    },
    {
        languageName: "React",
        price: 1000,
        instructor: "suraj"
    }
]

holdObject.forEach( (value) => {
    // console.log(value.languageName);
    // console.log("price = ", value.price);
    // console.log("instructor :-", value.instructor); 
})


// const value = newArry.forEach( (items1) => {  //  for each loop not return any value
//     // console.log(items1); 
//     return items1
// })
// console.log(value);

const myNums  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

// let newNums = myNums.filter( (item) => item >=4)

// let newNums1 = myNums.filter( (item) => (console.log(item>=7)));

// let newNums1 = myNums.filter( (item) => {
//     return item>4
// });

// console.log(newNums);
// console.log(newNums1);

const newArry1 = [111, 222]

myNums.forEach( (num) => {
    if(num>4){
        newArry1.push(num)
    }
})

// console.log(newArry1);

const books = [
    {
        title: 'the life of pipline', genre: 'story', publication: 1981, ediction: 1976
    },
    {
        title: 'Rayaman', genre: 'history', publication: 1992, ediction: 1992
    },
    {
        title: 'mahabharat', genre: 'history', publication: 1999, ediction: 2007
    },
    {
        title: 'gita', genre: 'history', publication: 1989, ediction: 2010
    },
    {
        title: 'puran', genre: 'sciene', publication: 2009, ediction: 2014
    },
    {
        title: 'veda', genre: 'science', publication: 1987, ediction: 2010
    },
    {
        title: 'yadurveda', genre: 'mantra', publication: 1986, ediction: 1996
    },
    {
        title: 'samveda', genre: 'mantra', publication: 2011, ediction: 2016
    },
    {
        title: 'rigdveda', genre: 'mantra', publication: 1999, ediction: 2015
    },
    {
        title: 'yathurveda', genre: 'mantra', publication: 1988, ediction: 2011
    }

]



const filterbook = books.filter( (book) => book.ediction >= 2000)

const filterbook1 = books.filter( (book) => {
    return book.ediction <= 2000 && book.genre === "mantra" || book.publication >=2000
})

// console.log(filterbook);
// console.log(filterbook1);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumber = myNumbers.map( (num) => {
//     return num + 10
// })

// const newNumber1 = myNumbers.map( (num) => (num + 10))
// console.log(newNumber);
// console.log(newNumber1);


//  ***************   cheanning of method     ***********

const newNumber2 = myNumbers
                   .map( (num) => num*10)
                   .map( (num) => num + 1)
                   .filter( (num) => num>=40)

// console.log(newNumber2);


//   **********   REDUCE FUNCTION OF ARRAY  *********************

const Arry1 = [1, 2, 3]

// const add = Arry1.reduce( function (acc, curval) {
//     console.log(`acc value ${acc} and curval ${curval}`);
//     return acc + curval
// }, 0)

// const add = Arry1.reduce( (acc, curval) => (acc + curval), 0)

// console.log(add);

let total = 0;

for (let index = 0; index < Arry1.length; index++) {
    const element = Arry1[index]
    // console.log(element);
    // total += Arry1[index];    
    total += element   
}

console.log("total value hai", total);


const shoppingCard = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "mobile course",
        price: 3000
    },
    {
        itemName: "DSA",
        price: 1299
    },
    {
        itemName: "python",
        price: 1500
    },
]

const totalcardPrice = shoppingCard.reduce( (acc, item) => acc + item.price, 0)

// console.log("Total price = ", totalcardPrice);

//   add total card price to used for loop

let totalRs = 0;

for (let index = 0; index < shoppingCard.length; index++) {
    let = element = shoppingCard[index];
    totalRs += element.price
    // console.log(element.itemName);    
}
// console.log("total price = ", totalRs);



//******************       THE END FIRST PART            **********