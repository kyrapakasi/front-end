// //Java script function

// //cara 1.Function Declaration
// function greetings() {
//     console.log("Hello World");
// }

// greetings(); //call/axecute

// //cara 2.function expression
// let greetings2 = function (){
//     console.log("Hello World");

// };

// greetings2()

// 3. parameter & argument (Input) & return (output)

//cara 1. 
//                  parameter
function greetings1(fullName) {
    return "Hello " + fullName;

}
//                       argument
let output = greetings1("John Doe");
console.log(output);

//cara 2
let greetings2 = function (fullName){
    return "Hello" + fullName;

};

let output2=greetings2("John Doe");
console.log(output2);


//function hoisting

//global scope & local scope
let x = 10
function foo(){
    console.log(x);

}
foo();