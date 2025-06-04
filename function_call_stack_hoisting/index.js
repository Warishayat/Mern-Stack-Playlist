// console.log("Array are working in javascripts");

// // what is hoisting?
// //  process of variable declaration and function declaration shift to the top of their scope
// // #this is called function hoisting
// Myname("waris");  

// function Myname(name){
//     console.log(name);
// }

// // var hoisitng it will be undefined becuase the variable declartion will shift only on the top.
// console.log(age); 
// var age=25;




// // in this case younwill get the error
// // console.log(name);
// // let name="waris";



// // i wil got the error in the code
// // console.log(marks);
// // const marks="20"


// // if function expression used in fumctiom that will also gave error

// // console.log(SayHello)
// // let SayHello=function(){
// //     console.log("Hello world");
// // }


// // NOw fucntion call stack

// // what is stack =?its data structure its like container every container save the data i the diffrent way. lifo
// // funcion call is nothing but track what is going on what function is calling.



// // function class citizen.
// // assign value to variable
// // assign RGUMENT
// // return function
// // array fucntion in javascript



// let greetme = (greet,fullname)=>{
//     console.log(fullname);
//     greet();
// }

// let greet = ()=>{
//     console.log("i am calling another function");
//     console.log("helo world");
// }

// greetme(greet,"waris");


// return function in the return
function solve(number){
    return function(number){
        return number*number;
    }
}
let res = solve(5);
let final_anwer = res(10);
console.log(final_anwer);

// now i will store
const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function (a,b){
        return a/b;
    }
]

let first = arr[2];
console.log("first function of the array");
let final_answer = first(10,20);
console.log("the response of the second function is:");
console.log(final_answer);
