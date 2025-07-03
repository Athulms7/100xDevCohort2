const mongoose=require("mongoose");
const express=require("express");
const app=express();
app.use(express.json());
app.get('/',function(req,res){

})
mongoose.connect("");
const userschema={
    username:String,
    password:String,
}

const courseschema={
    titile:String,
    price:String
}

const User = mongoose.model('users',userschema);
const Courses=mongoose.model('courses',courseschema);

app.listen(3000).then(()=>console.log("app is listening on port 3000"))

User.findById("1")

// this first{} shows the condition and second {} shows the action to do
User.update({},{
    premium:true
})

User.deleteMany({})//delete everything

User.deleteOne({username:"athul@gmail.com"})