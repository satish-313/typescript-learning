function add(n1:number,n2:number){
  return n1 + n2
}

const number1 = 5;
const number2 = 5;

const result = add(number1,number2)
console.log(result)

let s1 = "satish kumar " 
let s2 = "pradhan" 

const stringcont = (s1:string,s2:string) =>{
  console.log(s1 + s2)
}

stringcont(s1,s2)

// object in ts
const person//:{
//   name: string;
//   age: number // better to leave instead of explicit typing
//   role: [number,string] // tuple type first one must be number and second one is string and max length is 2
//} 
= {
  name: "satish",
  age: 22,
  hobbies: ["sports","cooking"],
  role: [ 2,'author']
}

console.log(person)

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase())
}

let names : string[];
//names.push("sai kumar") throw error
names = ["radha ram"]
names = [...names,"krishna kanth"]

for (let name of names){
  console.log(name)
}


// enum type
enum Role {ADMIN,AUTHOR,Hater} // object with numeric indexes

const enumtest = {
  name: 'satish',
  age: 22,
  role: Role.ADMIN
}

if(enumtest.role === 0){
  console.log(enumtest)
}