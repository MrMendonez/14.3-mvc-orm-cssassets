/*
Here is wher you setup the functions for how you want your app to interface with the database.
*/

var orm = require('../config/orm.js');

var crocodiles = {
	findAllthings: function(cb) {
		orm.selectAll('crocodiles', function(res){
			cb(res)
		});
	}
};
    
module.exports = crocodiles;