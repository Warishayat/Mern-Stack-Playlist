// in last class we dicussed about the promise if gpromise fullfil i user then block else i used catch block
// optimal practise will use in todays lecture like async await.
// asynchronus code ko synchronous code kar skte haen hum is m code ko synchronously code behvae karaty haen.

// // let discuss first fetch api first
// async function getData(){
//     setTimeout(function(a=10,b=12){
//         console.log(a+b);
//     },5000)
// }
// getData(a=12,b=14);
// // this was the async function


// now dicuss the fetch apis
// async await for handle promise and it always return promise


// fetch api
// scenario 
// prepare url
// api endpoint
// fetch data
// process data
// async function getData(){
//     let data = fetch('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(data);
// }

// getData();


// // lets doing the same thing with await becuase i want to keep the data synchronously
// async function getData(){
//     // await kch b nai hae yar bus promise return karta hae bus
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let response = await data.json();
//     console.log(response);
// }

// getData();


// // lets make a async function to get all the data
// async function getDataAll(){
//     let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let response = await data.json();
//     console.log(response);
// }

// getDataAll();


// // Let make some get request https://jsonplaceholder.typicode.com/albums
// async function getAlbumAll(){
//     let data = await fetch("https://jsonplaceholder.typicode.com/albums");
//     let response = await data.json();
//     console.log(response);
// }

// getAlbumAll();


// get call https://jsonplaceholder.typicode.com/comments?postId=1
// async function getSoecificData(){
//     try{
//         let data = await fetch("https://jsonplaceholder.typicode.com/comments?postId=5");
//     let response = await data.json();
//     console.log(response);
//     }
//     catch(err){
//         console.log("you have some error at: ",e);
//     }
// }

// getSoecificData();


// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const urls = "https://jsonplaceholder.typicode.com/posts";

// const options = {
//     method: "POST",
//     body: JSON.stringify({ username: "waris abbasi" }),
//     headers: myHeaders,
// };

// async function postData(urls, options) {
//     let response = await fetch(urls, options);
//     let data = await response.json();
//     console.log(data);
// }

// postData(urls, options);



// to check the data is saved or not from post request

async function getSavedData(){
    const resp = await fetch("https://dummyjson.com/posts");
    const data = await resp.json();
    console.log("saved data is here");
    console.log(data);
}
getSavedData();


// lets post some thing new here
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const urls = "https://dummyjson.com/posts/add";

const options = {
    method: "POST",
    body: JSON.stringify({ 
        title: "this is all about the fetch api call",
        userId: 5,
    }),
    headers: myHeaders,
};

async function postData(urls, options) {
    let response = await fetch(urls, options);
    let data = await response.json();
    console.log(data);
}

postData(urls, options);


// now get the same post with id 252
async function getSaving(){
    const resp = await fetch("https://dummyjson.com/posts/252");
    const data = await (resp);
    console.log("title and id were saved");
    console.log(data);
}

getSaving();