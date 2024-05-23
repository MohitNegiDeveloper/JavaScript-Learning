// for loop in an array of javascript

let num = [4,13,16,14,12,28]

// for(i=0; i<num.length; i++){
    // console.log(num[i])
// }

// forEach loop

num.forEach((element) => {
    console.log(element*element)
})

// array. From

let name = "harry"
// console.log(name);

let arr =Array.from("harry")

console.log(arr)

// for ...of

for (let i of num){
    console.log(i)
}

// for...in

for (let i in num){
    console.log(`the index number of an array is ${i}`)
}