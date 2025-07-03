const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const express = require("express");
const app = express();
app.use(express.json());

//mongoose connection
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://athulswapnakood8:JxXm2HZsAN15dTht@cluster1.mzjls2d.mongodb.net/user_app");
const User = mongoose.model('users', { name: String, email: String, password: String });

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existinguser = await User.findOne({ email: username });
    console.log(existinguser);
    if (existinguser) {
        return res.status(400).json({
            msg: "user already exists inn database"
        });
    }
    const user = new User({
        name: name,
        email: username,
        password: password
    });
    user.save().then(() => console.log('User saved to database'))

    res.json({
        msg: "User saved successfully",
    })

    // var token = jwt.sign({ username: username },jwtPassword);
    // return res.json({
    //   token,
    // });
});
app.listen(3000)

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array
//   const existinguser= .find((user) => user.username === username && user.password === password);
//   return user !== undefined;
// }
