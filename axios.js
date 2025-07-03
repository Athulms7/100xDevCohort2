const axios=require("axios");

// axios
//             .get("https://jsonplaceholder.typicode.com/posts")
//             .then((response) => {
//                 console.log(response.data);
//             })



// async function r(){
// const r= await fetch("https://jsonplaceholder.typicode.com/posts")            
// const result=await r.json()
// console.log(result)

// }
// r();


axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
    console.log(data);
})



// this is the axios fetching syntax using async await 
const body={
    title:"hai",
    descp:"hai"
}
async function c(){
    const ca=await axios.post("http://localhost:3000/todos",body);
    const b=await ca.json;
    console.log(ca);
}
c();
