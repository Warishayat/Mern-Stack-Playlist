// problem 1 increse the counter
let counter = 0 ;
function handleCounter(){
    let button  = document.getElementById("testing");
    button.textContent = `Button Clicked ${counter}`;
    counter = counter + 1;
}

let btn = document.getElementById("submission");
btn.addEventListener('click',handleCounter);



// task 2
function chnageColor(event){
    let cntnr = document.getElementById("container");
    cntnr.style.backgroundColor ="green";
}

function orignalPosition(){
    let cntnr = document.getElementById("container");
    cntnr.style.backgroundColor ="purple";
}

// lets move to the task 2
let cntnr = document.getElementById("container");
cntnr.addEventListener("mouseover",chnageColor);
cntnr.addEventListener("mouseout",orignalPosition);



// lets doin task3


function handleSubmitForm(event){
    alert("Congrats! Form submitted");
    event.preventDefault();

}
let SubmittButton = document.getElementById("myForm");
SubmittButton.addEventListener("submit",handleSubmitForm);

// for keypress logger from keyBoard

function handlePressButton(event){
    alert("hey do you press some key from keyboard");
}

let Name = document.getElementById("fullName");
Name.addEventListener("keypress",handlePressButton);


// Task5
// pass

function handleToggle(){
    let checkboxx = document.getElementById("checkboxx");
    let pass = document.getElementById("passw");

    if (checkboxx.checked) {
        pass.type = "text";  
    } else {
        pass.type = "password";  
    }
}

let Toggle = document.getElementById("checkboxx");
Toggle.addEventListener("change", handleToggle);



// task6
function handleTheme(event){
    let myDiv = document.getElementById("box");
    // if dark
    if (myDiv.style.backgroundColor === "black"){
        let myDiv = document.getElementById("box");
        myDiv.style.backgroundColor = "white";
        myDiv.style.color = "black";
    }
    else{
        let myDiv = document.getElementById("box");
        myDiv.style.backgroundColor = "black";
        myDiv.style.color = "white";
    }
    
}


let theme = document.getElementById("toggleBtn");
theme.addEventListener("click",handleTheme);