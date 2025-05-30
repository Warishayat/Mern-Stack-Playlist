// Start with arthamatic operator

// addition
let a=12;
let b=16;

console.log("Addition of two number is:",a+b);
console.log("Subtraction of two number is:",a-b);
console.log("Multiplication of two number is",a*b);
console.log("Division of two number is:",a/b);
console.log("Modulous of two number is:",a%b);
console.log("The power of 12 is",12**2);

// unary operator
let num =11;
// value shoould be 12 of num pre increment
// console.log(++num)

// post increment first it will declare the value 11 than increase the value
console.log(num++); 

// Pre and post decrement
let marks = 12;
// console.log(--marks); #this is pre decrement
// console.log(marks--); this is post  decrement

// comparison operator
console.log(10>5);
console.log(10>=5);
console.log(10<5);
console.log(10<=5);
console.log(10!=5);
console.log(10==5);
// strict equality and loss equality
// loose equlaity
console.log("5"==5);

// Strict equality
console.log("5"===5);

// ternery operators

let age =18;
if (age>18){
    console.log("you can vote");
}
else{
    console.log("You can't vote");
}


// logical operators
// it should gave false because on of them is less than 20=====And Operator
let chemistry=21;
let physics = 22;
let computer = 24;

if (chemistry>20 && physics >20 && computer>20){
    console.log("You are good togo.");
}
else{
    console.log("You are doing something wrong")
}


// Or operator

let islaiyat=12;
let pakstudy = 10;
let geography = 24;

if (islaiyat>22 || pakstudy >22 || geography>22){
    console.log("You are good togo.");
}
else{
    console.log("You are doing something wrong")
}

// Now check NOT operatir
let exam = 12;
if (exam!=10){

}

// if !true it gave false and same vice versa.
let ans = (!true);
console.log(ans);

console.log(2&5);
console.log(2|5);
console.log(~0);
console.log(5^4);
// left shift 2 of 5 jab left shift karty haen 1 time to wo 2 time multiply hojjta hae digit se
console.log(5<<4);
console.log(16*5);

// jab digit ko 1 time right shift karty hn tu wo 2 se divide kar jata hae suppose 10 ko m agr right shift kruga 1 bar tu answer 10/2 =5 ana chahiye
console.log(10>>1);


// if else condition

let age_=19;

if (age>=18){
    console.log("You can vote");
}
else{
    console.log("You cant vote");
}


let grade=33;
if (grade==20){
    console.log("you secure grade f");
}
else if (grade==25){
    console.log("you secure grade d");
}

else if (grade>30){
    console.log("you secure fgrade A");
}
else{
    console.log("You are fail");
}

let name=11;
switch (name){
case 1: console.log("a");
break;
case 2: console.log("b");
break;
case 3: console.log("c");
break
default:console.log("in m se kch b ni hae")
}