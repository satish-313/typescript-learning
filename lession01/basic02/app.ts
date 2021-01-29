let userInput: unknown;
let useName: string

userInput = 5;
userInput = "satish"
// useName = userInput error in case of unknown but valid in case of any

if (typeof userInput === "string"){
  useName = userInput
}

function generateError(message:string, code: number): never{
  throw {message: message, errorCode: code}
}

// const err = generateError("An error occured",500)
// console.log(err) //this console.log will not show undefined instead crash the code or script

// console.log("hello") // this is not show in console

