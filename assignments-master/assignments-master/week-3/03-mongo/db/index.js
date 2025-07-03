const mongoose = require('mongoose');
const { string } = require('zod/v4');

// Connect to MongoDB
mongoose.connect('mongodb+srv://athulswapnakood8:JxXm2HZsAN15dTht@cluster1.mzjls2d.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourse:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Courses'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    price:Number,
    imagelink:String


});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}