console.log("Hello i am calling from the index.js");

// What is the value of pi
console.log(Math.PI);

// what is round of
console.log(Math.round(3.2121));

// Get the square root 
console.log(Math.sqrt(25));


// get the ceil
console.log(Math.ceil(3.2));

// get the maximum value in the tuple
console.log(Math.max(12,2,13,14,141,1,131));


console.log(Math.pow(2,3));


const Submission = ()=>{
    console.log("Submission has been done");
}

Submission();


// Lets talk about date object
let curr =new Date();
console.log(curr);
// suppose i want to extract the day from the date
console.log(curr.getMinutes());
console.log(curr.getDay());
console.log(curr.getMonth());
console.log(curr.getFullYear());
console.log(curr.getSeconds());
// supppose i am passing my own date
// let dob = New Date('junne 20 2020 07:15am');
// console.log(dob);