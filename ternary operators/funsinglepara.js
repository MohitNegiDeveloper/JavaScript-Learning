// function with single parameter

function greet(name){
    console.log(`hello ${name}!`)
}

greet("mohit");
greet("Vishal");
greet();

// how to print parameters in different ways

const nums = [4,2,5,2,6];

function printArrayElements(Arr){

    for(let i =0; i <Arr.length; i++){
        console.log(Arr[i])
    }
}

printArrayElements(nums);

// function passed a parameter  inside a object {{ , , ,}}

function greetings ({city,name}){
    console.log(`My Name is ${name} and city is ${city}`);
}
greetings({name:"Mohit" , city:"Dehradun"})


// passed unlimited number of argument and not use of  paramenters in a function 
