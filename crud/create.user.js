try{
// mongoose model import
const userModel = require("../models/user.model")
// create a user data
const createUser = ( async (req,res)=>{
    const {name,email,img} = req.body
    const newUser = await userModel.create({
        userName : name,
        email,
        img
    })
    // res.send(newUser)
    console.log("user Create")
    res.redirect("read")
})

module.exports = createUser
} catch (e){
    console.log("user create error with crud folder",e)
}