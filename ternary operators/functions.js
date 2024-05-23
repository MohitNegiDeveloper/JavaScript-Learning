// find out the largest  of two number

function isValidNumber(num1,num2){
    if(num1 > num2){
        console.log(`${num1} is  the largest Number`);
    }else{
        console.log(`${num2} is the largest Number`);
    }
}

isValidNumber(45,36)

// find out number is even or odd

function checkNumber(num){
    if(num%2==0){
        console.log(`${num}  is an Even Number` );
    }else{
        console.log(`${num} is an Odd Number`);
    }
}
checkNumber(90)

// find out the three largest number

function largestNumber(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log(`${num1} the number is greater`);
    }else if(num2>num3 ){
        console.log(`${num2} the number  is greater`);
    }else{
        console.log(`${num3} the number is greater`);
    }
}

largestNumber(45,58,26)

//check if a triangle is equilateral , scalene or isosceles

function triangleIs(side1,side2,side3){
    if(side1==side2 && side2==side3){
        console.log(`It is equilateral Triangle`);
    }else if ((side2==side3) ||(side1==side2) || (side1==side3)){
        console.log(`It is Isosceles triangle`);
    }else{
        console.log(`it is scalene triangle`);
    }
}

triangleIs(4,4,4)
triangleIs(5,3,3)
triangleIs(1,2,3)

// find the a number is present in given range

function checkInRange(num,start,end){
    if(num >= start && num <= end) {
        console.log(`number inside a range ${start} and ${end}` );

    }else {
        console.log(`number is out of range`);
    }
}

checkInRange(2,0,10)
checkInRange(0,1,15)

// perform arithmetic operation on two number

function evalNumbers(num1,num2,operator){
    if(operator=="add"){
        console.log(`sum of  ${num1} and ${num2} is ${num1+num2}`);
    }else if(operator=="substract"){
        console.log(`substract of  ${num1} and ${num2} is ${num1-num2}`);
    }else if(operator=="multiply"){
        console.log(`multiple of  ${num1} and ${num2} is ${num1*num2}`);
    }else if(operator=="modulus"){
        console.log(`Modulus of  ${num1} and ${num2} is ${num1%num2}`);
    }else if(operator=="divide"){
        console.log(`divide of  ${num1} and ${num2} is ${num1/num2}`);
    }else{
        console.log (`Invalid Operators`);
    }
}

evalNumbers(55,33,"add")
evalNumbers(55,5,"modulus")
evalNumbers(55,33,"divide")
evalNumbers(55,33,"substract")


// Find check if a year is leap year or not

function checkLeapYear(year){
    if(year%4 == 0 && year%100 !=0 || year%400 == 0 ){
        console.log(` ${year} is  a Leap year`);
    
    }else{
        console.log(`not a leap year`)
    }
}

checkLeapYear(2016)

//  Find the grade for input marks
    
let marks = 100   

function findGrade(marks){
        if(marks>=90){
            console.log(`S grade`);
        }else if(marks >= 80 && marks <=90){
            console.log(`A grade`);
        }else if(marks >= 70 && marks <=80){
            console.log(`B grade`);
        }else if(marks >= 60 && marks <=70){
            console.log(`C grade`);
        }else if(marks >= 50 && marks <=60){
            console.log(`D grade`);
        }else if(marks >= 40 && marks <=50){
            console.log(`E grade`);
        }else if(marks >= 0 && marks <=40){
            console.log(`F grade`);
        }else {
            console.log(`Invalid marks`);
        }
}
findGrade(95)



// let b = 20

console.log(marks)

// calculated the sum

function calculateSum(num1,num2){
    return(num1+num2)
    console.log(`sum of total number is ${num1+num2}`)
}

console.log(calculateSum(10,40))