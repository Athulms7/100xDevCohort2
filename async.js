//async settimeout
function su(a,b){
    c=a+b;
    return c;
}

function sum(){
    let a=su(3,2);
    console.log(a);
}
setTimeout(sum,1000);
setTimeout(sum,500);
console.log("haii")


//file read 
const fs = require("fs");
//filesystem module

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data)})


console.log("hi aftre file read");

// without promises


function callingafunction(callback){
    fs.readFile("a.txt","utf8",function(err,data){
        callback(data);//this callback picks pickwhentodo function and waits in callback que to execute
    })    
}


function pickwhentodo(data){
    console.log(data);//done by callingafunction "telling ketchup is here take it"
}
callingafunction(pickwhentodo);


