// call Apply and bind method

// function printName(name){
//     console.log(`Hii ${name}!`)
// }

// printName.city="Dehradun";
// printName("Mohit")

// console.log(printName.city);

/*global execution context

call apply and bind method concept using memory and code how function are executed code when function and bind are used
memory space also knowns as Variable Environments

where function are created in code block of code the memory are space all literaly all function including their block of code in memory . and also created a block of OBJECT .

FUNCTION + copy of function OBJECT it is also call combo*/

/*-------------------------CALL APPLY AND BIND METHOD--------------------*/

// METHOD OF FUNCTION'S OBJECT VERSION

// THEY ARE USED TO CONTROL THE CONTEXT OF THIS

// <-------------------call method---------------------------------->

// CALL METHOD TO USE FUNCTION BORROWING WHEN WE HAVE MULTIPLY OR THOSANDS OF USER'S THEN WE ARE USE  CALL METHOD  AND

/*
function greeting(city,age){
    console.log(`Hello ${this.Name}! form ${city} of age ${age}`)
}
// greeting.call()

const user1 ={
    Name:"rahul",
}

// user1.greetings()

const user3 = {
    Name:"Garima",
}

const user4 = {
    Name:"Mohit",
}

const user5 = {
    Name:"Garima",
}
// user1.greetings.call(user4)
// user1.greetings.call(user5)

greeting.call(user1,"Dehradun",24)
greeting.call(user3,"Haldwani",23)
greeting.call(user4,"Delhi",22)

// <------------------Apply Method----------------------------->

function Marks(age,city){
    console.log(`Your Name is ${this.name} ur age ${age} and from ${city}`)
}
// Marks(24,"dehradun")

const userA={
    name:"rohit"

}

Marks.call(userA,24,"Dehradun")

Marks.apply(userA,[24,"Dehradun"])

// <--------------------Bind Method---------------------->

 bind method used when numbers of line and code are write in a project or else , and want to print a old of data print in then used bind method. new function return . <-which is created  and this key is used is fixed to their value->*/


let person={
    name:"Vishal Baser",
    sayHi:function(age,city){
        console.log(`my name is ${this.name} and i'm ${age}yr's old, from ${city}  `)
    }
    

}

let anotherPerson={
    name:"Gaurav Pant",

}

let boundfunction=
    person.sayHi.bind(anotherPerson,24,"dehradun")
    
boundfunction()




