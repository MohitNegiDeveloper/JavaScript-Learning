var a ={
    fname: "Mohit",
    lname : "Negi",
    age : 25,
    salary : function(){
        return 20000;
    },
    fullName : function(){
        return (this.fname + "" + this.lname);
    },
    living : {
        "city" : "Dehradun",
        "Country" : "INDIA"
    },
    hobbies :[ 'listening music' , 'Art' , 'Creativity']
    
}

console.log(a.fname)

console.log(a.hobbies);

console.log(a.key)

// for (let key in a){
//     console.log(key +':' + a[key]);
// }

// Nested Object
// Nested Array and Object

// const a ={
//     fname: "Mohit",
//     lname : "Negi",
//     age : 25,
//     cars : [
//         {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//         {name:"BMW", models:["320", "X3", "X5"]},
//         {name:"Fiat", models:["500", "Panda"]}
//     ]
// }

    // for (let i in a.cars ){
    //     values= values+"<h1>" + a.cars[i].name + "</h1>";
    //     for(let j in a.cars[i].models){
    //         values=values+"<h1>" + a.cars[i].models + "</h1>";
    //     }
    // }
    // for (let i in a.cars) {
    //     x += "<h1>" + a.cars[i].name + "</h1>";
    //     for (let j in a.cars[i].models) {
    //         x += a.cars[i].models[j];
    //     }
    // }



    // salary : function(){
    //     return 20000;
    // },
    // fullName : function(){
    //     return (this.fname + "" + this.lname);
    // },
    // living : {
    //     "city" : "Dehradun",
    //     "Country" : "INDIA"
    // },
    // hobbies :[ 'listening music' , 'Art' , 'Creativity']
// }