const userModel = require("../models/user.model")

const deleteUser = async (req,res)=>{
    // console.log("delete id",req.params.id)
 await userModel.findByIdAndDelete({
        _id:req.params.id
    })
   res.redirect("/read")

}

module.exports = deleteUser

