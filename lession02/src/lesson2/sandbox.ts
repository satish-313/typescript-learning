// const inputs = document.querySelectorAll('input');
// console.log(inputs)

// inputs.forEach((i) => {
//     console.log(i)
// })

let character = "satish";
let age = 30;
let isBool: boolean;

isBool = true;

const circ = (diameter: number): number => {
  return diameter * Math.PI;
  // return character error
};

// predifine type in function
const area: (lenght: number) => number = (length) => {
  return length * length;
};

console.log("circumfarence ", circ(10));
console.log("area", area(10));

let arr: (string | number)[];
// need initalization
arr = ["satish"];
arr.push("kumar");
arr.push(45);
console.log(arr);

let arr1: (number | string)[] = new Array(); // with initialization
arr1.push(4);
arr1.push("satish");
console.log(arr1);


// object
let person = {
  name: "subham",
  occupation: "clerk",
  experience: 2
}

person.name = "yeah ha"
// person.name = 45 can't be
console.log('person ',person)

// predifine type in objects
type student = {
  name: string,
  position: string ,
  age: number 
}

let student: student = {
  //name: 34 can't be
  name: "satish",
  position: "trainee",
  age: 23,
};

console.log("student ", student);
