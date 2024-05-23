/*Objects are one of JavaScript's data types.
Objects are used to store key/value (name/value) collections.
A JavaScript object is a collection of named values.*/

/**************************Creating a JavaScript Object*********************************/

// With JavaScript, you can define and create your own objects.
// There are different ways to create new objects:

// Create a single object, using an object literal.

var person1 ={ fname : "Mohit", lname : "negi", age : 25};
console.log(Object.keys(person1))
// creates an empty JavaScript object, and then adds 4 properties
const person ={} ;
    person.fname = "Vishal";
    person.lname = "Basera";
    person.age = 25;

    console.log(Object.values(person))


// **Create a single object, with the keyword new.
// create a new JavaScript object using new Object(), and then adds 4 properties:

const Student = new Object();
Student.Marks = 88;
Student.Grade = "A";
Student.Class = "12th";

/*****************JavaScript Objects are Mutable************************
Objects are mutable: They are addressed by reference, not by value.
If person is an object, the following statement will not create a copy of person.*/

const x =Student ;
x.Class = "10th" ;
// ------>1  accessing js property -----------objectName.property
console.log(Student)
// ------>2 objectName["property"]
console.log(Student["Grade"])


// **Define an object constructor, and then create objects of the constructed type.


// **Create an object using Object.create().
