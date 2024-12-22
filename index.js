// express module import first
const express = require("express")
const path = require("path")
// create app variable by using express module
const app = express()

// json acces
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
// access to public folder by default set
app.use(express.static(path.join(__dirname,"public")))
// set custom view engine
app.set("view engine","ejs")

// app view
app.get("/",(req,res)=>{
    res.render("index")
})

// dotenv install after import this module
const dotenv = require("dotenv")
// and then
dotenv.config()

// mongoose db module require
const db = require("./congif/db.config")
db()


// mongoose model import
const userModel = require("./models/user.model")
// create a user data
const createUser = require("./crud/create.user")
app.post("/create", createUser)


// read router
const userData = require("./crud/read.user")
app.get("/read",userData)



// delete user details
const deleteUsser = require("./crud/delete.user")
app.get("/delete/:id",deleteUsser)


// send the data to update page 
app.get("/update/:id",async(req,res)=>{
    const detailsSend = await userModel.findOne({
        _id:req.params.id
    })
    res.render("update",{
        detailsSend
    })
    console.log("user details",detailsSend)
})
// get the data from update page
const updateUser = require("./crud/update.user")
app.post("/upadte/:userid",updateUser)

// app variable listen to express server
app.listen(3000,()=>{
    console.log("server is running")
})