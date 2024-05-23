/*  The map() method creates a new array by performing a function on each array element.
    The map() method does not execute the function for array elements without values.
    The map() method does not change the original array.
    the function takes 3 arguments:
    The item value
    The item index
    The array itself
    When a callback function uses only the value parameter, the index and array parameters can be omitted.*/

    let number1 = [45,25,35,65,85]
    // let number2 = number1.map(myFunction);

    let number = number1.map((value) => value+2)

    console.log(number);

    // function myFunction(value,index,array){
    //     return value+5;
    // }

    // console.log(number2);

// The map() method creates a new array with the results of calling a function for every array element.

// function to return the square of a number.

let Num= [2, 6, 8, 3, 4]

let sqnum = Num.map(myFunction);

function myFunction (items){
    return items = items*items;
}

console.log(sqnum);

let squareOfNum = Num.map((items) => items*items);

console.log(squareOfNum)

// Mapping array elements using custom function

const prices = [1800, 2000, 3000, 5000, 500, 8000];

let newPrice =  prices.map(Math.sqrt)

console.log(newPrice)

let nameString ="Frontend Developer Mohit Negi"

let splitString = nameString.split('');

console.log(splitString)

let charAtString = splitString.map((items) => items.charCodeAt(0))

console.log(charAtString);


// map() for object elements in array

const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },          //(salary + bonus -tax)=Net amount
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate the net amount to be given to the employees

let calcAmt = (obj) =>

// let netamount = employees.map((employees)=>employees.bonus+ employees.salary - employees.tax)



console.log(netamount);
