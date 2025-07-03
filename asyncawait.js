function hai(){
    return new Promise(function(resolve){
        setTimeout(resolve('hi there'),2000);
    });

}

function main(){
    hai().then(function(value){
        console.log(value);
    })
    console.log("hello");
}
main();

// output: hello 
//         hi there


//ASYNC AWAIT___ it waits for a function with promis e to finish then only it will act forward
function hai(){
    return new Promise(function(resolve){
        setTimeout(resolve('hi there'),2000);
    });

}

async function main(){
    let value= await hai(); //without await we will get the promise now we get the resolved value
    console.log(value);
    console.log("hello");
}
main();

// output:
// hi there 
// hello