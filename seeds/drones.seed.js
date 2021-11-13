// Iteration #1

// 1. MAKE THE DB CONNECTIONS
require('../db')
const mongoose = require('mongoose')

// 2. REQUIRE THE MODEL
let droneModel = require('../models/Drone.model')

// 3. INSERT DATA IN THE MODEL
droneModel.insertMany([
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
])

.then(() => {
    console.log('Data inserted')
    mongoose.connection.close()
})
.catch((err) => {
    console.log('Error ', err)
    mongoose.connection.close()
})

