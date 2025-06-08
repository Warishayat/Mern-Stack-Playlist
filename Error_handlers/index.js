console.log("this lecture is all about error handling");
// in java script i will dicuss the two type of error. try catch block and finally i used for errror handling

// 1: declaration error and compilation error

// lets dicuss about the copilation error below the compilation error is mentioned and its commmon.
// console.log("hello i am"   

// now lets du=iscussed about declaration error
// console.log(x);

// how to handle the error

// as we got the error we will skip the things from the try block and move in to finally block
try{
    let arr=12;
    console.log(arr);
    console.log("yahan tak execute hogya hae");
    // this will gave referance error
    // console.log(x);
}
catch(err){
     console.log("ab agay ho catch block mae");
    console.log("error is happening at here:",err);
}
finally{
    console.log("i will run each and every case,doest matter you got error or not.");
}


// throw which is used to throw custom error 
// kis case m need ati hae -----> erorr a ku ra h yea iska matlib kia hae.

try{
    console.log(x);
}
catch (err){
    throw new Error("bhai pehly declare kar de fir call karna x ko");
}