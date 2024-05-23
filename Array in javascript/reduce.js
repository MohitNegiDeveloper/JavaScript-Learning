/**************************JavaScript Array reduce()*******************************/

/*The reduce() method runs a function on each array element to produce (reduce it to) a single value.
The reduce() method works from left-to-right in the array. See also reduceRight().
The reduce() method does not reduce the original array.*/

let number = [45,25,25,14,4,85,7]
let sum = number.reduce(myFunction)

function myFunction(total,value,index,array){
    return total+value;
}

console.log(sum);
