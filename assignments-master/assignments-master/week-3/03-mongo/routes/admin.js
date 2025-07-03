const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");


// Admin Routes
router.post('/signup', function (req, res) {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    Admin.create({
        username: username,
        password: password
    })
        .then(function () {
            res.json({
                "msg": "Admin created succesfully"
            })
        })
        .catch(function () {
            res.json({
                "msg": "Admin not created some error"
            })
        })


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imagelink = req.body.imagelink;
    const price = req.body.price;
    
    const newcourse = await Course.create({
        title, description, imagelink, price
    })
    console.log(newcourse);
    res.json({
        "msg": "succefully creted courses", courses: newcourse._id
    })


});

router.get('/courses', adminMiddleware, async (req, res) => {
    const allcourses= await Course.find({})
    res.json({
        courses:allcourses
    })
});

module.exports = router;