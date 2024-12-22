// user model module import
const userModel = require("../models/user.model")

// read router
const userData = async (req,res)=>{
   const userDetails = await userModel.find()
   res.render("read",{
    userDetails
   })
}

module.exports = userData
// console.log(userData)