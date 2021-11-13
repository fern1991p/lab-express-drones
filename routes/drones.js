const express = require('express');
const router = express.Router();
const droneModel = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
   droneModel.find()
    .then((drone) => {
      res.render("drones/list.hbs", {drone});
    })
    .catch(() => {
      next('Todo find failed')
    }) 
});




router.get('/drones/create', (req, res, next) => {
  res.render('./drones/create-form.hbs') 
});
// dronemodel.create instead of ({name, propellers, maxSpeed}) USED REQ.BODY


router.post('/drones/create', (req, res, next) => {
  console.log(  req.body )
  const {name, propellers, maxSpeed} = req.body
  console.log(  req.body )

  droneModel.create(req.body)
      .then(() => {
          res.redirect('/drones')
      })
      .catch(() => {
          next('drone creation failed')
      })
});
// line 43: router get: added "./" before "/drones"
router.get('/drones/:id/edit', (req, res, next) => {

  const {droneId} = req.params

  droneModel.findById(droneId)
      .then((drone) => {
          
          res.render('./drones/update-form.hbs', {drone})
      })
      .catch(() => {
          next('findmyID drone fetch failed')
      })
  
});

router.post('/drones/:id/edit', (req, res, next) => {
 
const {name, propellers,maxSpeed} = req.body
const {droneId} = req.params

droneModel.findByIdAndUpdate(droneId, {name, propellers, maxSpeed})
    .then(() => {
        
      res.redirect("/drones");
    })
    .catch(() => {
      next('DRONES Edit failed');
    })

});

router.get('/drones/:id/delete', (req, res, next) => {
     //grab the todoId from the url
     const {droneId} = req.params 
    
     // Delete from the database
     droneModel.findByIdAndDelete(droneId)
         .then(() => {
             //then send the user to the drones page or homepage
             res.redirect('/drones')
         })
         .catch(() => {
             next('failed to delete drone')
         })
});

module.exports = router;
