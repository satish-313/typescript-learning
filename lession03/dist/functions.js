"use strict";
function addNum(x, y) {
    return x + y;
}
let multiNum = (x, y) => {
    return x * y;
};
// void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 34,
    name: "karma"
};
let add = (x, y) => x + y;
let addRes;
addRes = add(5, 6);
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    printName() {
        console.log(this.name);
    }
}
const satish = new Person(1, "satish", 23);
satish.age = 23.2;
satish.printName();
class newPerson {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
const emp = new Employee(3, 'rabi', 24, 'devOps');
console.log(emp);
// generics for reusable component
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['s', 'a', 't']);
