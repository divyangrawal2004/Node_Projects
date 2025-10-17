const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://DivyangRawal:Divurawal2004@cluster0.slsdmul.mongodb.net/Category-Product")

const db = mongoose.connection;

db.once("open", (err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log("Database Connected")
})

module.exports = db;