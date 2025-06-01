console.log("Hello world");

// simple function
function name(name){
    console.log("hello",name);
}
name("waris")


// function with return name

function getname(name){
    return "welcome" + " " + name;
}
console.log("return functions");
name=getname("waris hayat");
console.log(name);


// function with paramaters
function getSum(a,b){
    return a+b;
}
res = getSum(101,102);
console.log("reponse of sum is:");
console.log(res);


// function with object
let sum = function(a,b){
    return a+b;
}
console.log("object functions");
console.log(sum(12,13));


// arrow functions
let addition = (a,b)=>{
    return a+b;
}
console.log("Arrow function");
console.log(addition(12,14));

// arrow function for greeting
let greet = (name)=>{
    return "welcome" + " " + name;
}
console.log(greet("waris"));