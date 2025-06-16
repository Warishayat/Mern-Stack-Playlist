// let count = 0 ;
// function handleSubmission(event){
//     // the way you check object pass param to the function and log the event
//     console.log(event);  
//     let button = document.getElementById("submission");
//     count = count + 1;
//     if (count<=20){
//         button.textContent = `count ${count}`;
//     }
//     else{
//         button.textContent = "bus kar de bhaii 20 hjogay haen"
//     }
// }
// let button = document.getElementById("submission");
// button.addEventListener('click',handleSubmission);


// button.removeEventListener('click',handleSubmission);   if i uncomment it this event will not work

// phases of an events ->div->artical->h1->para-> let say i say i click on para lets check how event treverse.
// jab m target par phncht ahu usko capturing phase.
// EVENT listner by default bubbling phase m apply karra huta hae



// lets check jab koi event triger hota hae tu us m kia data ata hae jus pass event in param and log it into the bpdy of the function


// default action prevent lets chnafe the default action of the tags
// function handleAnchor(event){
//     let doc = document.getElementById("website");
//     event.preventDefault();
//     doc.textContent = "Click has been done boss!"
// }
// let doc = document.getElementById("website");
// doc.addEventListener("click",handleAnchor)



// interview problem == avoiding to many listner
function alertPara(event){
    alert(`you have clicked at ${event.target.textContent}`);
}

// let paras = document.querySelectorAll("div");
// for (let i =0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener("click",alertPara)
// }

let myDiv = document.getElementById("main");
myDiv.addEventListener("mouseover",alertPara);