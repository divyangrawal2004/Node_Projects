const express = require("express");
const port = 8001;
const app = express();

const db = require('./config/db')
const todoModel  = require('./model/todoModel');
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'assets')));
app.use('/', require('./routes/index'))
app.listen(port,(err) => {
    if(err) {
    console.log(err);
    return
    }
    console.log(`server is running on port ${port}`);
})