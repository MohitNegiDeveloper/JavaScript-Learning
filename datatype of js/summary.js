// primitive datatypes

// 7 types : String , Number , Boolean ,Symbol , Null , BigInt , undefined...

const scores =100
const scoreValue = 250.9

console.log(typeof scoreValue)

const isLoggedIn = false;

console.log(typeof isLoggedIn)

// const outSideTemp = Null

// console.log(typeof outSideTemp)


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);




// Reference (Non - primitive)

// Array , Object , Functions

const arr = ['mohit', 'rahul', 12.3 , 'false']

let myObje = {
    name : "mohitnegi",
    age : 24 ,
}

const myFunction = function(){
    console.log("hello Mohit");
}

console.log(typeof myObje)
console.log(typeof arr)

console.log( typeof myFunction)
