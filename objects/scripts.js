
//a constructor function constructs objects 
//on a constructor function ,there is a prototype property which if you set it, any objects created by the constructor function will inherit things on the prototype 

function Person (name){
    this.name = name;
}

Person.prototype.sayName = function (){
    console.log(`Hello, I am ${this.name}`)
}


function Player (name, marker){
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function (){
    console.log(`My marker is ${this.marker}`)
}



//the prototype of Player.prototype is set to Person.prototype its two levels higher 

