/**
 * http://usejsdoc.org/
 */
var Simulation = require('../model/simulations');

exports.create_simulation = function(req, res){
	var simulation = new Simulation(JSON.parse(decodeURIComponent(req.body.sim_cfg)));
	
	simulation.save(function (err, simulation) {
	    if (err) {
	      console.log('Err: Cannot add ' + simulation);
	    } else { console.log('New Simulation: ' + simulation); }
	});
	
	res.redirect('/');
};