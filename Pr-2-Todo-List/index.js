const express = require("express");
const port = 8000;
const app = express()

app.set('view engine','ejs');
app.use(express.urlencoded());

let users = [
    {id: 1, name: "user1"},
    {id: 2, name: "user2"}
]

app.get('/',(req,res) => {
    return res.render('viewtodo',{
        alltodo : users
    })
})

app.get('/addtodo', (req,res) => {
    return res.render('addtodo', {
        alltodo : users
    })
}) 

// push krne ke lia
app.post('/addtodo',(req,res) => {
    let obj = {
         id : Math.floor(Math.random() * 100000),
         name : req.body.name
    }
     users.push(obj); 
    return res.redirect('/')
})

//delete user

app.get('/delete',(req,res) => {
    let id = req.query.id;
    let deletedata = users.filter(val => val.id != id) ;
    users = deletedata;
    return res.redirect('/');
})


app.get('/edit',(req,res) => {
    let id = req.query.id;
    let single = users.find(val => val.id == id);
    return res.render('edittodo', {
        single
    })
})

app.post('/updatetodo', (req,res) => {
//    const id = req.body.editid
    let up = users.map((val) => { 
        if( val.id == req.body.editid)  {
            val.name = req.body.name

        }
        return val;
    })
    users = up;
    return res.redirect('/');
    
})

//server start krne ke lia
app.listen(port,(err) => {
    if(err) {
        console.log("error");
        return false;
        
    }
    console.log(`server is running on port ${port}`);
})