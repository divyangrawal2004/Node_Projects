const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Library')
const db = mongoose.connection;

db.once('open',(err) => {
    if(err) {
        console.log(err);
        return;
        
    }
    console.log('connected to database');
    
})
module.exports = db;