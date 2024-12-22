const mongoose = require("mongoose")

try{
const userSchema = new mongoose.Schema({
    userName : String,
    email : String,
    img : String
})

// uesrSchema apped the modle
const usreModel = mongoose.model("user",userSchema)

// export the usreModel
module.exports = usreModel

} catch (e){
    console.log("error is model",e)
}

