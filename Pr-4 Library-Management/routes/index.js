const express = require("express");
const router = express.Router();

const todoCtr = require('../controller/todoCtr');
const todoModel = require("../model/todoModel");
// const todoModel = require("../model/todoModel")
router.get("/",todoCtr.todo) // "/" page ko load krvane ke lia
router.post("/showTodo",todoModel.uploadImage,todoCtr.showTodo) // "/showTodo" page ko load krvane ke lia
router.get("/show",todoCtr.show) // show page ka url banne ke lia
router.get("/deleteTodo/:id",todoCtr.deleteTodo)
router.get("/editTodo/:id",todoCtr.editTodo)
router.get('/edit/:id',todoCtr.editTodo)
router.post('/updateTodo/:id',todoModel.uploadImage,todoCtr.updateTodo)
router.get("/viewPage/:id",todoCtr.viewPage)
module.exports = router