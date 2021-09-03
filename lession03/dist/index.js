"use strict";
// basic types
let id = 3;
let username = "satish";
let isBoolean = false;
let y = "hello";
y = 26;
let age;
age = 23;
// array
let ids = [1, 3, 4, 7];
ids.push(34);
// tuple
let person = [1, "satish", true];
// tuple array
let employee;
employee = [
    [23, "satish"],
    [21, "kanha"]
];
// union
let sid;
sid = 5;
sid = "sid";
// enum
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
console.log(direction.up);
// Object
const candi = {
    id: 1,
    name: 'satish'
};
let mcandi;
mcandi = { id: 3, name: "ram" };
mcandi.id = 10;
// type assertion
let cid = 1;
// let cusid = <number>cid
let cusid = cid;
cusid = 70;
