class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi I'm ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name,age,major) {
        super(name,age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description+= `  His major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age,location) {
        super(name, age);
        this.location = location;
    }
    hasLocation() {
        return !!this.location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasLocation()) {
            greeting+= ` I'm from ${this.location}`;
        }
        return greeting;
    }
}

const me = new Student('Bob', 26, 'computer science');
const other = new Person();
const travelOther = new Traveler();
const travelMe = new Traveler('Bob', 26, 'New York');
console.log(travelMe.getGreeting());
console.log(travelOther.getGreeting());
// console.log(me);
// console.log(me.hasMajor());
// console.log(me.getDescription());
// console.log(other.getDescription());