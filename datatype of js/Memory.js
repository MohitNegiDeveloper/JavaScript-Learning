// Stack ,Heap  memory

/*  Stack Memory (primitive)
Heap Memory  (Non-Primitive) */

// Stack Memory store copy of a memory they didn't change the original value in memory , but updated as new a value also

// Heap Memory store as a reference of original memory and updated accordingly the old one  also change and  updated the stack memory  store a variable as new  and reference by old object

// ************Stack Memory***********

let myYoutubename ="mohitnegi"

let anothername = myYoutubename

anothername= "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)


let userOne = {
    email : "mohit@google.com",
    upi: "mohit@sbi"
}

let userTwo= userOne

userTwo.email = "vishal@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)


/*  */


