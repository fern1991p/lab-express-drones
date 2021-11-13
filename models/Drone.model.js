const mongoose = require("mongoose")

const DroneSchema = new mongoose.Schema({
    name:String,
    propellers:Number,
    maxSpeed:Number
})

const dronesModel = mongoose.model("Drone", DroneSchema) 

module.exports = dronesModel