function addNum (x: number,y: number) : number {
  return x + y
}

let multiNum = (x: number,y:number) : number => {
  return x * y
}

// void
function log(message: string | number): void {
  console.log(message)
}

// Interfaces
interface UserI {
  readonly id : number,
  name: string,
  age ? : number
}

const user1: UserI = {
  id: 34,
  name : "karma"
}
 
interface mathFunc {
  (x: number, y: number): number
}

let add: mathFunc = (x,y) => x+y
let addRes : number
addRes =  add(5,6)

// classes
interface personInterface {
  readonly id: number,
  name : string,
  age : number,
  printName?(): void
}

class Person {
  private id : number
  name : string
  age : number

  constructor(id: number, name: string,age:number) {
    this.id = id
    this.name = name
    this.age = age
  }

  printName() {
    console.log(this.name)
  }
}

const satish = new Person(1,"satish",23)
satish.age = 23.2
satish.printName()

class newPerson implements personInterface{
  id
  name
  age

  constructor(id:number,name:string,age:number){
    this.id = id
    this.name = name
    this.age = age
  }

  // printName() {
  //   console.log(this.name)
  // }
}

class Employee extends Person {
  position: string

  constructor (id:number,name:string,age:number,position: string){
    super(id,name,age)
    this.position = position
  }
}

const emp = new Employee(3,'rabi',24,'devOps')
console.log(emp)

// generics for reusable component
function getArray<T>(items: T[]): T[]{
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['s','a','t'])

