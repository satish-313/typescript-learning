"use strict";
function add(n1, n2) {
    var result = n1 + n2;
    if (result % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
function printfn(s) {
    console.log("sum is", s);
}
printfn(add(5, 17));
// function
var combineValues; // var is type any,2nd Function,3rd function with arrow in bracket type and after arrow return type
combineValues = add;
// combineValues = 5; it didn't give error in compliling but thorw an error in runtime in js
// to avoid above problem we used Function that define in typescript
// combineValues = printfn; // it's didn't give any error during compliling // 3rd case catches error
console.log(combineValues(5, 9));
function addHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addHandle(3, 4, function (r) { console.log(r); });
