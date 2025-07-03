console.log("hello")
const b=10;
console.log(b)
let n="athul";
let age="21";
let isma=false;
if(isma== true){
console.log("my name is "+n+" and age is "+age);}
else{
    console.log("not maried");
}

//arrays
const a = [1,2,3,4,5,6,7,8];

//loops
for(let i=0;i<a.length;i++){
    if (a[i+1]>a[i]){
        lar=a[i+1];
    }

}
console.log(lar);


//objects 
const u ={
    namee: "athul",
    age:20,

}
console.log(u["namee"]);

//objects array
const m=[{
    nam:"a",ag:20,
},
{
    nam:"a",ag:33,
}
]

for(let i=0;i<m.length;i++){
    if(m[i]["nam"] == 'a'){
        console.log(m[i]["ag"])
    }
}

//functions

function sum(a,b){
    return a+b;
    
}

let  value =0;
value =sum(1,2);
console.log(value);

function display(c){
    console.log("the sum is "+c);
}
display(value);


//callback

function sum(a,b,fntocall){
    return result=a+b;
    fntocall(result)
}
function display(c){
    console.log("the sum of callback "+c);
}
const val= sum(1,2,display);
console.log(val);


//settimeout calls function after this time.
function hai(){
    console.log("settimeout");
}
setTimeout(hai,2*1000);


//set interavall calls a function many time in interval
function ha(){
    console.log("setinterval");
}
setInterval(ha,1000)

//padstart it makes the string to target length eith desired string like '0'.
mn=String(1).padStart(3,'0');
console.log(mn);

