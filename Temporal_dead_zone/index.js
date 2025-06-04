// variable and global scope
// funcition scope
// block scope

// global scope ----->this is global you can acess it from every where.
var age=15;
console.log(typeof(age));

{
    console.log(age);
}


if (age>10){
    console.log(true);
}
else{
    console.log(false);
}

let func = ()=>{
    return "h1"+" ",age;
}
re=func();
console.log(re);