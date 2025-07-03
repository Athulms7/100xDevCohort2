const express = require("express");
// const port = 3000;
const port = process.env.PORT || 3000;
const app = express();
const zod = require("zod");
const user=zod.string();

app.use(express.json());

// app.get('/health',usermiddleware,kidneymiddleware, function (req, res) {
//     res.json({
//         "msg":"helathy body"
//     });
// })
// //global catches
// app.use(function(err,req,res,next){
//     res.status(500).json({
//         msg:"Some problem ocurred."
//     });
// })

// app.listen(port, function () {
//   console.log(`Example app listening on port ${port}`)
// })

// function usermiddleware(req,res,next){
// const username = user.safeParse(req.headers.username);
// console.log(username);
// const pass = req.headers.pass;
//   if (username.data !== "athul" || pass !== "1234") {
//     res.status(403).json({
//       "msg": "wrong inputs"
//     });
//   }else{
//     next();
//   }


// }

// function kidneymiddleware(req,res,next){
//     const kidney = req.query.kidney;
//      if (kidney == 1 || kidney == 2) {
//       next();
//     }else{
//         res.status(403).json({
//         "msg": "incorrect input",

//       });
//     }
// }

//zod

function validate(obj){
const schema=zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country:zod.literal("IN").or(zod.literal("US")),//either in or us
})

const response=schema.safeParse(obj);
console.log(response);
console.log(response.data.email);
}

validate({
    email:"athul@gmail.com",
    password:"athul1234",
    country:"IN",
});
