// first import mongoose module
const mongoose = require("mongoose")

const db = async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("mongoode db connected")
})
}


module.exports = db