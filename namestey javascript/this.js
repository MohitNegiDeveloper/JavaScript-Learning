// "use strict";

// "this" in global space
console.log(this); //globalObject ,window in nodejs it will be a global

// "this" inside a function

function x(){
    console.log(this);
}
x();

// this in strict mode -(this substitution)
