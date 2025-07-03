//promises..
const fs = require("fs");
const { resolve } = require("path");
function callingafunction() {
    console.log("inside callingfunction");
    return new Promise(function (callback) {
        console.log("inside promise");
        fs.readFile("a.txt", "utf8", function (err, data) {
            console.log("befor callback");
            callback(data);//this callback picks pickwhentodo function and waits in callback que to execute
            console.log("after callback");
        })
    })
}



function pickwhentodo(data) {
    console.log(data);//done by callingafunction "telling ketchup is here take it"
}
callingafunction().then(pickwhentodo);

///////////
var d = new Promise(function(resolve){
    resolve("hi");
});

d.then(function(value){
    console.log(value);
}
    
);

var d=new Promise((resolve,reject)=>{
    let succes=true;
    if(succes){
        resolve("success");
    }
    else{
        reject("failed");
    }
})

d.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
})


function fileread(){
    return new Promise(function(){

    })
}


