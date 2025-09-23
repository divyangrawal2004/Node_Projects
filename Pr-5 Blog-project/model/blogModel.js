// const { profile } = require('console');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const imageUpload = "./uploads";
const todoSchema = mongoose.Schema({
    profile : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type : Array,
        required : true
    }
})

const storageTodo = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,path.join(__dirname,'..',imageUpload))

    },
    filename:(req,file,cb)=> {
        cb(null,file.fieldname + '-' + Date.now())
    }
})

todoSchema.statics.uploadImage = multer({storage : storageTodo}).single('profile')

const TodoModel = mongoose.model('Blog', todoSchema);

module.exports = TodoModel