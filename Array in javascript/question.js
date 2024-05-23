// Imagine you are working for a social media com-any1 You have a list of all the users1 Your job is to create a
// function that checks if a s-ecific username is in that list1 The function should take the username as in-ut and
// tell you whether it's present in the list of users or not1

const  socialMediaUser=["rahul","Mohit Negi", "Kaja ji" , "vishal Basera" , "gaurav pant"]

function userPresent(user){
    if (socialMediaUser.includes(user)){
        console.log(`yes ${user} are presented in list`)

    }else{
        console.log(` ${user} not found in list`)
    }
    return true;
}

userPresent("mohit")

/* Imagine you are given a list of student objects, each containing the student's name and their marks1 Your
task is to create a function that checks results by filtering out students whose score is more than 9y and
-rints a message saying, "Congratulations [Student Name]! You have cleared the exam1"*/



const classStudent = [
    {Name: "mohit", Mark: 45},
    {Name: "gaurav", Mark: 80},
    {Name: "ritika", Mark: 75},
    {Name: "garima", Mark: 98},
    {Name: "vishal", Mark: 89},
    {Name: "anjali", Mark: 95}
];

function checkResults(students) {
    const highScorers = students.filter(student => student.Mark > 90);
    highScorers.forEach(student => {
        console.log(`Congratulations ${student.Name}! You have cleared the exam.`);
    });
}

checkResults(classStudent);


// function checkResult(students){
//     if(student.includes(classStudent) >= 90){
//         const highScore=Student.filter(student)
//         console.log(`Congratulations ${classStudent.Name}! You have cleared the exam1`)
//     }else{
//         console.log(`Try next time`)
//     }
// }

// classStudent(95)





//   var

var student=[
    {name:"mohit", id:0, rollno:1},
    {name:"ajay", id:1, rollno:2},
    {name:"akshay", id:2, rollno:3}
];

for (var i = 0; i < student.length; i++) {
    console.log("name: " + student[i].name);
    console.log("id: " + student[i].id);
    console.log("rollno: " + student[i].rollno);
}



// console.log(student.length)
// console.log(student[0])

// let a=10


for(i=0; i<11; i++){
    result= 3 * i ;
    console.log(`3 * ${i} = ${result}`)
}
