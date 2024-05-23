/* looping over an array : print all elements of an array
loops iterable(string:  , Object: for keys values, Array: similar types of data and values)
array for loops -> used arr.length
looping In Array
1)for-In      2)for-of

generally for-of used in array .
*/

// let heroes =["Mohit" , "akshay" , "vishal" , "gaurav" , "Bunny" , "vivek"]

// for(let hero of heroes){
//     console.log(hero)
// }

// let name =["Mohit" , "akshay" , "vishal" , "gaurav" , "Bunny" , "vivek"]

// for(let student of name){
//     console.log(student.toUpperCase())
// }

// for a given array with marks of student [85,97,44,37,76,60] find the average marks of entires class

// let Marks = [85, 97, 44 , 33 , 76 ,60]
// let sum=0;

// for (let val of Marks){
//     sum += val;
    
// }

// let average= sum/Marks.length;
// console.log(`Average of total marks of class, ${average}`);

// slice () method in array : return a piece of the array
// slice(startidx,endidx)

// let heroes =["Mohit" , "akshay" , "vishal" , "gaurav" , "Bunny" , "vivek"]



// console.log(heroes.slice(0,4))

// splice() change original array (add,remove,replace)
// splice (staridx, delcount,newEl1..........)
// splice is change in original array

// heroes.splice(2,2,401,401)

// console.log(heroes)

// add elements
// heroes.splice(0,2,"450")
// console.log(heroes)

// Delete elements
// heroes.splice(0,2)
// console.log(heroes)

// replace elements
// heroes.splice(3,1,"45")
// console.log(heroes)*/

let company = ["bloomberg", "Microsoft", "Uber", "Google" , "IBM" , "Netflix"]

// remove the first company from the array

// company.shift(0);

// console.log(company);

// Remove Uber & add Ola in its place

// company.splice(2,1,"Ola")
// console.log(company)

// Add Amazon at the end

// company.push("Amazon")
// console.log(company)