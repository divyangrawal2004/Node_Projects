
const todoModel = require("../model/todoModel")
const path = require("path")
const fs = require("fs")
// "/" page ko load krvane ke lia
module.exports.todo = async (req, res) => {
    return res.render("add")
}
//show krvane ke lia
module.exports.showTodo = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    if (req.file) {
        req.body.profile = req.file.filename;   // ✅ sirf filename save hoga
    }

    await todoModel.create(req.body);
    return res.redirect("/show")
}
//map gumane ke lia 
module.exports.show = async (req, res) => {
    const todo = await todoModel.find();
    return res.render("show", {
        allTodo: todo
    })
}
//delete krne ke lia
module.exports.deleteTodo = async (req, res) => {
    let deleteTodo = await todoModel.findById(req.params.id)
    if (deleteTodo.profile) {
        let fullPath = path.join(__dirname, "..", "uploads", deleteTodo.profile)
        fs.unlinkSync(fullPath)
    }
    await todoModel.findByIdAndDelete(req.params.id)
    return res.redirect("/show")
}
//edit ke lia
module.exports.editTodo = async (req, res) => {
    const editData = await todoModel.findById(req.params.id)
    return res.render("edit", {
        editData
    })
}

//update krne ke lia 
module.exports.updateTodo = async (req, res) => {
     let oldTodo = await todoModel.findById(req.params.id);
    let image = oldTodo.profile;
   
    if (req.file) {
        if (oldTodo.profile) {
            let paths = path.join(__dirname,"..","uploads",oldTodo.profile)
            fs.unlinkSync(paths)
        }
        image =  req.file.filename
    }
    req.body.profile = image;
    await todoModel.findByIdAndUpdate(req.params.id, req.body)
    return res.redirect("/show")
}
//view page dikhane ke lia
module.exports.viewPage = async(req,res) => {
    const editData = await todoModel.findById(req.params.id)
    return res.render("viewPage",{
        editData
    })
}