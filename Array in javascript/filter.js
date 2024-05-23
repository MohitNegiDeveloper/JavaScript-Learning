//******************** MAP FILTER REDUCE*******************************/


    /********************JavaScript Array filter()******************************/
    
    /* The filter() method creates a new array with array elements that pass a test.*/

    const number3 =[45,25,65,45,15]
    const over30 =number3.filter((value) => value >30 )
    console.log(over30)

    // function myFunction(value,index){
    //     return value > 30;
    // }

    // console.log(over30)

//  odd numbers are "filtered" out, leaving only even numbers.

const numberOe=[1,2,3,4,5,6,7,8,9,10]
const odd =numberOe.filter(myFunction)

function myFunction(value){
    return value%2;
}

console.log(odd);

// Arrow function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter((value) => value% 2===0);
console.log(evens);

// filter() is used to get all the students whose grades are greater than or equal to C.

const Students =[
    {Name:"Mohit" , Grades:"A"},
    {Name:"Anjali" , Grades:"B"},
    {Name:"Rahul" , Grades:"F"},
    {Name:"Garima" , Grades:"C"},
    ]

const stuGrade = Students.filter((Students)=>Students.Grades <= "C")

console.log(stuGrade);

// filter() is used to get all the students whose grades are greater than or equal to 90.

const tutionStudents=[
    {Name:"Preeti" , Marks:75, Age:25, Course:"MCA" },
    {Name:"Kajal" , Marks:80, Age:22, Course:"BCA"  },
    {Name:"Mohit" , Marks:25, Age:24, Course:"MCA"  },
    {Name:"Rahul" , Marks:95, Age:23, Course:"BCA"  },
    {Name:"Mohit" , Marks:45, Age:21, Course:"MCA"  },
    {Name:"Saurav" , Marks:34, Age:22, Course:"BCA" },
];

const Age= tutionStudents.filter((tutionStudents) => tutionStudents.Age <=22)
const Course= tutionStudents.filter((tutionStudents) => tutionStudents.Course == "MCA")
const Name = tutionStudents.filter((tutionStudents) => tutionStudents.Name ==="Mohit")

console.log(Age);
console.log(Course);
console.log(Name);

// The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

// Filtering out values from Array

const price = [4000,2000,3000,8000,5000,6000,6500,4500,"only10%off", `Null`,8500, 9050];

const newPriceArr = price.filter((value) => (value > 2000  && !Number.isNaN(price)))

console.log(newPriceArr);

const filterPrice =price.filter(myFunction);

function myFunction(value){
    return value > 2000 && !Number.isNaN(value)
}

console.log(filterPrice);


// Searching in Array


const languages = ["JavaScript", "Python", "Ruby", "C", "C++", "Swift", "PHP", "Java"];

function searchArr (){
    function condition(values){
        return values==="JavaScript" || values==="Ruby"
    }
    return languages.filter(condition)
}

let newLanguages = searchArr(languages);

console.log(newLanguages);






















// function searchFor(arr, query) {
//     function condition(element) {
//         return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//     }
//     return arr.filter(condition);
// }

// let newArr = searchFor(languages, "ja");
// console.log(newArr); // [ 'JavaScript', 'Java' ]

// // using arrow function
// const searchArr = (arr, query) => arr.filter(element => element.toLowerCase().indexOf(query.toLowerCase()) !== -1);

// let newLanguages = searchArr(languages, "p");
// console.log(newLanguages); // [ 'JavaScript', 'Python', 'PHP' ]