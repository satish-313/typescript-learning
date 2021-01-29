"use strict";
var userInput;
var useName;
userInput = 5;
userInput = "satish";
// useName = userInput error in case of unknown but valid in case of any
if (typeof userInput === "string") {
    useName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// const err = generateError("An error occured",500)
// console.log(err) //this console.log will not show undefined instead crash the code or script
// console.log("hello") // this is not show in console
