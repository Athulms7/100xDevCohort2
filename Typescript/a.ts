const x:number =1;
// x="harkirat"; this will show error
console.log(x);

function greet(firstname:string){
    console.log("hello"+firstname);
}
greet("h")

function sum(a:number,b:number):number{
    let c:number=0;
    c=a+b;
    return c ;
}
const value:number=sum(1,1);

function islegal(a:number):boolean{
    if(a>18){
        return true;
    }else{
        return false;
    }
}
let d=islegal(1);

function call(fn:()=>void){
    setTimeout(fn,2000);
}
call(function(){
    console.log("hiii");
})

const f:any=1;

interface user {// defining a object that will be used in many places
    firstname:string,
    secondname:string,
    age?:number,// age is optional or not
}

function legal(user:user){
 console.log(user.firstname);
}

legal({
    firstname:"hi",
    secondname:"h",
    age:3,
})


///interfaces and class 
interface person{
  name:string,
age:number,
  greet:(phrase:string)=>void
}

class employee implements person{
name:string;
age:number;
constructor(n:string,a:number){
this.name=n;
this.age=a;
}
greet(phrase:string){
  console.log(phrase)
  
}
}

const e=new employee("hh",2);
console.log(e.name);

//types 
type users={
    username:string,password:string
 }

 function loguser(user:users[]){
 console.log("loguser function");
 console.log(user[0].username);
 }
loguser([{username:"hh",password:"hh"}])

type key="up" |"down" 
function hi(keys:key){
    //do something
}
// hi("hh")// it will show erro as type is only up and down 
hi("up")


enum direction{// used when we know about a set of value  for a variable like keys
    up=1,down=1
}
function hii(keys:direction){
    //do something
    console.log(keys);
}
hii(direction.up);

