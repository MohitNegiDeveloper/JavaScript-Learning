/* what is Array  ?
To store same type of value and data in an Array.  easy to use,readability , contigous memory locations, store multiply datatypes 
ordered List of elements.

Creating Array Syntax.

    Declaration of Array
1)  Using square brackets. for using data inside like users , post , etc . used this square brackets .

    let numberArray = [];

    console.log("numberArray")

2)  Using Array Constructor. for using when empty array needed and mostly avoided .


    // let fruits = new Array("orange", "mango", "apple");

    let Fruits = new Array(5);

    console.log(Fruits)

3)  Using Array literal like mixed of arrays 

    let Arrays = ["orange", "mango", 45, 850,2.30 ,{name : "mohit", age: 24}]
    
    console.log(Arrays[1])

    console.log(Arrays)

# index always start from zero and the length of the array


let nums = [45,43,65,89.5,54]

    delete nums [2]
    console.log(nums)

delete an index number on a Array of list they are delete a element on array not a memory space so the length of array is remaining same . so it used so rare chance .
their is lots of inbuilt method on array to add and remove elements on arrays.

iteration of Arrays*/
let nums = [45,43,65,89.5,54]

for(i=0; i<nums.length; i++)

    console.log( `value of index  ${i} is  value of ${nums[i]}`)

// Array Method
// shift () for remove element in start of Array
// Unshift() for add element in Start of Array
// pop() for remove element on last in Array
// Push() for add element on last in Array

let array= ['Bananas', 'orange', 25 , 45, true , false , {name:'mohit'}]

console.log(array);

// Array.length

let Arr =array.length;

console.log(`The length of Array is ${Arr}`)

// push to add element in last of array

array.push(40)
array.push(60)
console.log(array)

// pop to remove element in last of array

array.pop()
array.pop()
array.pop()

console.log(array)

// shift remove elements in start of array

array.shift()
array.shift()

console.log(array)

// unshift add on element in start of array

array.unshift(85)
array.unshift('mohit')
array.unshift({name:'mohitnegi'})

console.log(array)


// slice() and splice method

var name = ["mohit","rahul","radha","himani","pooja"];
var b =name.slice(0,3)


console.log(b);


const fruit =["mango","orange","strawberry","apple","lemon","cocunut","banana"]
let vegies = fruit.slice(0,4)

console.log(vegies)

// splice in array method

let fruits =["mango","orange","strawberry","apple","lemon","cocunut","banana"]

fruits.splice(3,0,"mohit",850,55.22)

console.log(fruits)



const  socialMediaUser=["rahul","Mohit Negi", "Kaja ji" , "vishal Baser" , "gaurav pant"]

// concat() join()

let a = socialMediaUser.join("//")

console.log(a)

let concat = socialMediaUser.concat("akshay",fruit);

console.log(concat);

// indexOf() and lastIndexOf()

var indexOf = socialMediaUser.indexOf("vishal Baser",2)

console.log(indexOf);

var indexOf1 = fruits.indexOf("banana",0)

console.log(indexOf1);


var lastIndexOf =socialMediaUser.lastIndexOf("vishal Baser", )

console.log(lastIndexOf);


// some()  & every()

var age =[45,18,9,19,24];

var b =age.some(checkAdult)
console.log(b)

function checkAdult(age){
    return age >=18;
}

// every method in array

var age =[45,18,17,15,10];

var b =age.every(checkAdult)
console.log(b)

function checkAdult(age){
    return age >=18;
}

// sort method in array : sort method is used for sequencly "alphabatly" used in array. it also change original array .

let num = [229,14,89,56,44,22,4,34,72,62]
// num.sort();
// console.log(num);

// Sort takes() an optional compare function .if this function is provided as first agrument the sort()

// let compare = (a,b) =>{
//     return a-b  	//this is more power way to use sort an array according to accesending order or desending order.
// }

// let num1 = [229,14,89,56,44,22,4,34,72,62]
// num1.sort(compare);
// console.log(num1);

// reverse method an array

num.reverse()
console.log(num)

