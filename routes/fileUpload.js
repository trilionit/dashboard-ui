"use strict"
//const models=require('../models');
const express= require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const multer = require('multer');
const dest = path.join('./public/img/');
const upload = multer({dest: dest});

let checkExtension = (mimetype)=>{
	let ext;
	if (mimetype== "image/jpeg" ||  mimetype== "image/jpg"){
		ext="jpg";
	}
	else if(mimetype== "image/png"){
		ext="png";
	}
	else if(mimetype== "image/gif"){
		ext="gif";
	} 
	return ext;
}
//route for adding airports
router.post("/api/upload/", upload.single('image'), (req, res) => {
	//check file mime-type and rename with given extension
	let fileName=req.file.filename;
	let  mimetype=req.file.mimetype;
	//console.log(fileName);
	let fileExt=checkExtension(mimetype);
	let newFileName= fileName +"."+ fileExt;

	fs.rename(dest + fileName, dest + newFileName , (err) => {
		if (err) throw err;
		console.log(newFileName);
		res.send(newFileName);
	});
	
});
module.exports = router;