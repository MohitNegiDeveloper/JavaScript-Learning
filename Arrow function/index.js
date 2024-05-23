// function printSum(a,b){
//     console.log(`sum of ${a+b}`)
// }
// printSum(10,40);

// // Arrow function

// function printSumTwo(){

// }

let printSum = (a,b) => console.log(a+b);

printSum(10,20)

// Arrow function of use to readability and shortly in from and write
// calculate the sum of three number

let sumOfThreeNum = (a,b,c) => console.log(`the sum of three number is ${a+b+c}`);

sumOfThreeNum(40,80,20)

// difference between Regular function and  Arrow function
// 1 syntax difference
// 2 argument
// regular function
// function add(){
//     console.log(arguments)
// }
// add(10,30,50,6,0,80,90,100)

// Arrow Function

// let add1 = () => console.log(arguments);

// add1(10,30,80,56,10)

// This Keyword
// binding of this

const person = {
    name : "mohit",
    greet:function (){
        console.log(`hello , my name is ${this.name}`)
    },
    greetTwo: () => {
        console.log(`hello, my name is ${this.name}`)
    }
}

person.greet();
person.greetTwo();

// use for new keyword

