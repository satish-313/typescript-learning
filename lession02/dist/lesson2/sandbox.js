"use strict";
// const inputs = document.querySelectorAll('input');
// console.log(inputs)
// inputs.forEach((i) => {
//     console.log(i)
// })
var character = "satish";
var age = 30;
var isBool;
isBool = true;
var circ = function (diameter) {
    return diameter * Math.PI;
    // return character error
};
// predifine type in function
var area = function (length) {
    return length * length;
};
console.log("circumfarence ", circ(10));
console.log("area", area(10));
var arr;
// need initalization
arr = ["satish"];
arr.push("kumar");
arr.push(45);
console.log(arr);
var arr1 = new Array(); // with initialization
arr1.push(4);
arr1.push("satish");
console.log(arr1);
// object
var person = {
    name: "subham",
    occupation: "clerk",
    experience: 2
};
person.name = "yeah ha";
// person.name = 45 can't be
console.log('person ', person);
var student = {
    //name: 34 can't be
    name: "satish",
    position: "trainee",
    age: 23,
};
console.log("student ", student);
