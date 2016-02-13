/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var thing = require('../models/thing.js');

//get route -> index
router.get('/index', function(req,res) {
	thing.findAllthings(function(data){
		res.render('index', {data});
	});
});

module.exports = router;