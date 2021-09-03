// basic types
let id: number = 3
let username: string = "satish"
let isBoolean: boolean = false
let y: any = "hello"
y = 26

let age: number

age = 23

// array
let ids: number[] = [1,3,4,7]
ids.push(34)

// tuple
let person: [number,string,boolean] = [1,"satish",true]

// tuple array
let employee: [number,string][]

employee = [
  [23,"satish"],
  [21,"kanha"]
]

// union
let sid: (number | string)
sid = 5
sid = "sid"

// enum
enum direction { up,down,left,right}

console.log(direction.up)

// Object
const candi : {id : number, name:string} = {
  id : 1,
  name : 'satish'
}

type User = {
  id : number,
  name : string
}

let mcandi : User;

mcandi = {id : 3, name :"ram"}
mcandi.id = 10;

// type assertion
let cid: any = 1
// let cusid = <number>cid
let cusid = cid as number
cusid = 70 