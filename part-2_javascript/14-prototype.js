
let myName = 'suraj     ';
let mychennal = 'lifespend'

console.log(myName.trueLength);



let myhero = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getspiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log('suraj is present in all object'); 
}

Array.prototype.sayhitesh = function(){
    console.log('hitesh say hello');
    
}

// heroPower.hitesh()

myhero.hitesh()

myhero.sayhitesh()
heroPower.sayhitesh()  //  when you add some method in prototye for array then it only work on array it not work other like object, string and function

// if you want self created method applied avery data type then define in object prototype



