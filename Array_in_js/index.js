// // // // let start with array.

const { throwDeprecation } = require("process");


// // // // what is referance type? no premtive is referance type
// // // // like object,array function
// // // let arr = [1,3,4];

// // // // what is object = > its just the collection of key value pairs.

// let marks1 = {
//     name : "waris",
//     last_name : "Hayat",
//     age : 25,
//     weight:"6feet",
//     greet : function(){
//         console.log("hello je kesy haen");
//     }
// }
// for(let keys in marks1){
//     console.log(keys);
// }
// // // console.log(marks.greet);
// // // console.log(typeof(marks));

// // // let marks2 = marks
// // // console.log(marks.name);


// // // // arrays ===? is just the collection of the items item can be premitive and non to.

// // // let arrr = [1,2,3,4,5];


// // // // creation of array

// // // console.log(arrr);

// // // // array constructor
// // // let 

// // // let array = ["love " , "waris","my", "name" ,"is","waris"];

// // // console.log(array[1]);

// // // // lets push or insert ,pop slice splie map,filter reduce sort,index of and find etc.
// // // array.push("helloworld");

// // // console.log(array);

// // // // delet last one
// // // array.pop(-1);
// // // console.log(array);

// // // array.shift();
// // // console.log(array);

// // // array.unshift("hellowaris");
// // // console.log(array)


// // // // extarct the slice 

// // // array.slice(2,4);
// // // console.log("-----------");
// // // console.log(array);

// // // splice 
// // let array = ["waris","hayat","abbasi","islamabad","murree"]
// // console.log(array.splice(1,4,'devsinc'));


// // // map filter reduce
// // let marks = [10,20,30,40];


// // let answer = marks.map((number) =>{
// //     return number*number
// // })
// // console.log(answer);


// // array.map((number)=>{
// //     console.log(number+1);
// // })

// // let marks = [10,20,30];

// // marks.map((number,index)=>{
// //     console.log("number is number:",number);
// //     console.log("index is:",index);
// // })



// // Filter

// // let data = [12,13,14,15,16,17,18,19,10]

// // let filterdata=data.filter((number)=>{
// //     if (number%2==0){
// //         return true
// //     }
// //     else{
// //         false
// //     }
// // })
// // console.log(filterdata);


// // let data = ["waris",12,14,"hayat","abbasi"]

// // let onlyString = data.filter((value)=>{
// //     if (typeof(value)=='string'){
// //         return true;
// //     }
// //     else{
// //         return false;
// //     }
// // })
// // console.log(onlyString);



// // // Reduce in javascript
// // let number = [10,20,30,40];
// // let sum = number.reduce((acc,curr)=>{
// //     return acc + curr;
// // })

// // console.log(sum);


// // let mark = [9,1,5,4,3,2,8];
// // mark.sort();
// // console.log(mark);
// // console.log(mark.indexOf(8));

// // console.log(mark.find(9));

// // number.forEach((value,index)=>{
// //     console.log("Number:",number,"index:",index);

// // })

// // console.log(marks.length);


// let start with the objects

let detail = {
    name:"waris",
    email:"warishayat666@gmail.com",
    phone_number:"03194758420",
    education : "Bachelor in software engineering",
    profession : "AI/ML Enginner",
    github: "WairsHayat@github.in"
}

console.log(detail.email);
console.log(detail.education);
console.log(detail.github);

let array = [12,1,141,15]
console.log(array[0]);


array.unshift("warishayatababsi");
console.log(array);

array.shift("im sad");
console.log(array);

array.push("Kesy ahen ap log");
console.log(array);

array.pop(0);
console.log(array);


// map filter and reduce

// suppose i am taking an array and doing sum of that. 

array.map((numer)=>{
    console.log(numer*numer);
})


let sumofarray=array.map((number)=>{
    return number+number;
})
console.log(sumofarray);


// filter the string only from the array
let array2 = ["waris",12,13,14,15,"kazmi","sarkar"];

let filterString=array2.filter((value)=>{
    if(typeof(value)=="string"){
        return true;
    }
    else{
        return false;
    }
})
console.log(filterString);

// filter integers
let filterIntegers=array2.filter((value)=>{
    if(typeof(value)=="number"){
        return true;
    }
    else{
        return false;
    }
})
console.log(filterIntegers);


// reduce for calculate all the numbers of the array

let ReduceFilteration = array.reduce((acc,value)=>{
    return acc + value; 
})
console.log("Sum of all array is:")
console.log(ReduceFilteration);


// sum all the integers of the array
let sum = 0 ; 
array.forEach(counter);

function counter(item){
    return sum = sum + item;
}

console.log(sum);


// for in loop
for (let key in detail){
    console.log("key:",key,"Detail:",detail[key]);
}

// treverse over the array
for (let item in array){
    console.log(item);
}