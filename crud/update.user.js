try{
    // mongoose model import
    const userModel = require("../models/user.model")
    // create a user data
    const createUser = ( async (req,res)=>{
        const {name,email,img} = req.body
        // console.log(req.params.userid)
        const upDateData = await userModel.findOneAndUpdate({
            _id:req.params.userid
        },{
            userName:name,
            email,
            img
        })
        console.log("user data is updated")
        res.redirect("/read")
    })
    
    module.exports = createUser
    } catch (e){
        console.log("user create error with crud folder",e)
    }