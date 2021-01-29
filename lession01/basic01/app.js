"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 5;
var result = add(number1, number2);
console.log(result);
var s1 = "satish kumar ";
var s2 = "pradhan";
var stringcont = function (s1, s2) {
    console.log(s1 + s2);
};
stringcont(s1, s2);
// object in ts
var person //:{
 
//   name: string;
//   age: number // better to leave instead of explicit typing
//   role: [number,string] // tuple type first one must be number and second one is string and max length is 2
//} 
= {
    name: "satish",
    age: 22,
    hobbies: ["sports", "cooking"],
    role: [2, 'author']
};
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var names;
//names.push("sai kumar") throw error
names = ["radha ram"];
names = __spreadArrays(names, ["krishna kanth"]);
for (var _b = 0, names_1 = names; _b < names_1.length; _b++) {
    var name_1 = names_1[_b];
    console.log(name_1);
}
// enum type
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["Hater"] = 2] = "Hater";
})(Role || (Role = {})); // object with numeric indexes
var enumtest = {
    name: 'satish',
    age: 22,
    role: Role.ADMIN
};
if (enumtest.role === 0) {
    console.log(enumtest);
}
