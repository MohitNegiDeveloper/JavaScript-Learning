/* String in javascript
String in javascript string is a sequence of characters used to represent text.
create String 
let Name = "Mohit Negi"

Method of Strings

str.length

str.indices
str[0] ,str[1] ,str[2]

This are built-in functions to manipulate a string

str.toUpperCase()

str.toLowerCase()

str.trim() //removes whitespaces

str.slice(start,end) //returns parts of string

str.concat(str2) //joins str2 with str1

str.replace(searchVal,newVal)

ste.charAt(idx) // check the position of charAt  through index value

const gameName=new String("Mohitnegi")

console.log(gameName.charAt(3))
console.log(gameName.indexOf("n"))

console.log(gameName.__proto__)
console.log(gmaeName[0])



*/

const name = "Mohit"
const repoCount =25

// console.log( name + repoCount + "value" );

// console.log(`my name is ${name} and My repo is ${repoCount}`)

//str.trim() //removes whitespaces
// console.log(name.trim())
// console.log(name)

// slice (start,end?)

// console.log(name.slice(0,3))

// str.indices
// console.log(name[0]);

//


// str.length
// console.log(name.length)
// console.log(name.toUpperCase())
console.log(name.indexOf("i"))




// let fullName = "MohitNegi";
// let userName = "@";
// console.log(fullName);
// console.log(userName.concat(fullName));

// // let fullName = prompt("Enter Your Full Name Without Spacing ");

// let username = "@" + fullName + fullName.length;

// console.log(username)
const gameName="rahul-Negi" //substring is used to divide a string where first value is starting index default by always zero(0)and second value is where to end that is not included.

const newString = gameName.substring(0,6)
console.log(newString)

// same as slice() in string one  difference is the index value of starting is negative or positive end end value as same which is not included.
const gameName1 = "vishal-basera"
const newString1 = gameName1.slice(-8,8)
console.log(newString1)

// replace() in string a use of replace to some character or something else in a object and string. to use replace method

const url = "https://Mohitnegi.com%20negiji"
// console.log(url"%20","-")

console.log(url.replace("%20","-"))

console.log(url.includes("sund"))
const newUrl = url.split('')
console.log(newUrl[8])

// string prototype valueOf()

console.log(url.valueOf())
const new1 = new String('foo')
console.log(new1)