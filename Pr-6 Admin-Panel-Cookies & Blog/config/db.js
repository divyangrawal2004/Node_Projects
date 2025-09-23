const express = require('express');
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/AdminData')
mongoose.connect('mongodb+srv://DivyangRawal:Divurawal2004@cluster0.slsdmul.mongodb.net/cookieadmin')



const db = mongoose.connection;

db.once('open',(err) => {
    if(err){
        console.log(err);
    }
    console.log('Connected to Database');
    
})
module.exports = db