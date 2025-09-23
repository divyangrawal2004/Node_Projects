const express = require('express');
const port = 8001;
const app = express();

const db = require('./config/db');
const path = require('path');
const TodoModel = require('./model/blogModel');
app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.get('/',(req,res) => {
    return res.render('add');
})

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/show',async(req,res) => {
    let data = await TodoModel.find()
    return res.render('show',{
        blog : data
    });
})

app.post('/formAdd',TodoModel.uploadImage,async(req,res) => {
    console.log(req.file);
    console.log(req.body);
    if(req.file) {
        req.body.profile = "/uploads/" + req.file.filename; 
    }
    await TodoModel.create(req.body);
    return res.redirect('show')
})

app.get("/readMore/:id",async(req,res) => {
    let data = await TodoModel.findById(req.params.id);
    return res.render('readMore',{
        blog : data
    })
})

app.listen(port,(err) => {
    if(err) {
        console.log(err);
        return ;
        
    }
    console.log(`server is running on port ${port}`);
    
})