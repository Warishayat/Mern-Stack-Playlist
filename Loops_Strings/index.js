for (let i=1 ;i<=10;i++){
    console.log("Hello world",i);
}




console.log("Reverse count");
// reverse the count
for (let i=10;i>=1;i--){
    console.log("Count is:",i);
}

console.log("Break keyword");
for (let i=5;i>=1;i--){
    if (i==2){
        break
    }
    else{
        console.log("Count is:",i);
    }
    
}


console.log("continue keyword");
for (let i=5;i>=1;i--){
    if (i==3){
        continue;
    }
    else{
        console.log("Count is:",i);
    }
    
}


console.log("While loop is working");


let n=1;
while(n<=10){
    console.log("Tu kesy haen ap log",n);

    n++;
}


console.log("While ko ulta print karo");
let num=10;
while(num>=1){
    console.log("Number bara hae",num);
    num--;
}
console.log("Ab number chota hugya hae");


console.log("Do WHILE LOOP");
let a=1;
do{
    console.log("i am priniting",a);
    a++;
}while(a<=10);



let name="waris";
let lastname =`hayat 
abbasi`;

console.log(typeof(name));
console.log(lastname);


let subject="chemistry";
let subject2 = "computer";


// let subject3 = subject +subject2;
// console.log("subject3",subject3)

// console.log(subject[]);

let final_answer  = `${subject} ${subject2}`;
console.log(final_answer);


console.log(subject.length);

console.log(subject.toUpperCase);
console.log(subject.toLowerCase);
console.log(subject[0]);

console.log(subject.substring(1));
console.log(subject.substring(1,5));

let sentense ="hello. my name is waris";
console.log(sentense.split("."));
let word = "there are diffrent cities located in the pakistan";
console.log(word.split(" ").join("-"));