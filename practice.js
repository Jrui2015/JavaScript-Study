function Person(name) {
    this.name = name;
}

Person.prototype.speak = function() {
    console.log("My name is " + this.name);
}

function Programmer(name, type) {
    this.name = name;
    this.type = type;
}

Programmer.prototype = new Person();
var me = new Programmer("Jrui", "web developer");
me.speak();
