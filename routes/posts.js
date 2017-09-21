"use strict"
//const models=require('../models');
const express= require('express');
const router = express.Router();
const jsonFile=require('jsonfile');
const file =require('../accounts.json');
//models.sequelize.sync();

//route for adding airports
router.post("/accounts/add", function(req, res){
	res.send(req.body);
});
module.exports = router;