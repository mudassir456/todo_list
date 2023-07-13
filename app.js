const express = require("express")
const port = 4000;
const app = express();
const connectToDB = require("./models/index")
const Todo = require("./models/todoModel")
app.set("view engine", "ejs")
app.use(express.urlencoded());
app.use(express.json())

connectToDB()


app.get("/", function (req, res) {
    Todo.find().then(result=>{
    res.render("index",{data : result})
    console.log(result)
    })
})

app.post("/",function(req,res){
const todo = new Todo({
    todo :req.body.todoValue
})
todo.save().then(result=>{
    res.redirect("/")
})
})




app.listen(port, function () {
    console.log(`the server is running at port ${port}`)
})