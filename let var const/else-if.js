//scored grade 100-90 = A
//scored grade 90-80 = B
//scored grade 80-70 = C
//scored grade 70-50 = D
//scored grade less than 50 = F

var scored = 80

if(scored > 90)
{
    console.log('grade is A')
}
else if (scored <= 90 && scored >=80 ){
    console.log("grade is B")
}

else if (scored <=80 && scored>=70){
    console.log("grade is C")
}
else if ( scored<=70 && scored>=50){
    console.log(" grade is D")
}
else {
    console.log("grade is F")
}
