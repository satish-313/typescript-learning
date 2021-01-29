type sumResult = "odd" | "even"

function add(n1:number,n2:number):sumResult{
  let result = n1 + n2

  if(result%2 === 0){
    return "even"
  }
  else{
    return "odd"
  }
}

function printfn(s:sumResult):void{
  console.log("sum is",s)
}

printfn(add(5,17))

// function
let combineValues:(a:number,b:number) => sumResult; // var is type any,2nd Function,3rd function with arrow in bracket type and after arrow return type

combineValues = add;
// combineValues = 5; it didn't give error in compliling but thorw an error in runtime in js
// to avoid above problem we used Function that define in typescript

// combineValues = printfn; // it's didn't give any error during compliling // 3rd case catches error

console.log(combineValues(5,9))

function addHandle(n1:number,n2:number,cb:(num:number) => void){
  const result = n1+n2
  cb(result)
}

addHandle(3,4,(r)=>{console.log(r)})

