const mongoose = require("mongoose");
const imageUplaod = '/uploads';
const multer = require('multer');
const path = require('path');
const todoSchema = mongoose.Schema({
    profile:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    },
    gender:{
        type:Array,
        required:true
    },
    totalBook:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})

const storageTodo = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,path.join(__dirname,'..' + imageUplaod))
    },
    filename : (req,file,cb) => {
        cb(null,file.fieldname + '-' + Date.now())
    }
})

todoSchema.statics.uploadImage= multer({storage:storageTodo}).single('profile')

const todoModel = mongoose.model("todoModel",todoSchema);
module.exports = todoModel