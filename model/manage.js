/**
 * GET manage page
 */

var Simulation = require('../model/simulations');

exports.create_simulation = function(req, res){
	var simulation = new Simulation(JSON.parse(decodeURIComponent(req.body.sim_cfg)));

	simulation.save(function (err, simulation) {
	    if (err) {
	      console.log('Err: Cannot add ' + simulation);
	    } else { console.log('New Simulation: ' + simulation); }
	});

	res.redirect('/manage');
};

exports.get_simulations = function(req, res){
	Simulation.find({}, function (err, simulations) {
 	    if (err) {
 	      console.log(err);
				return {};
 	    } else {
				res.render('manage', {simlist: simulations}); }
 	});
};

exports.simulation_delete = function(req, res) {
	Simulation.remove({_id: req.body.simulation}, function (err) {
		if (err) {
			console.log(err);
		}
	});
	res.redirect('/manage');
}

exports.simulation_publish = function(req, res){
	Simulation.findOneAndUpdate({_id: req.body.simulation}, {$set:{isValid:true}}, (err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }
    console.log(doc);
	});
	res.redirect('/manage');
};

exports.simulation_stop = function(req, res){
	Simulation.findOneAndUpdate({_id: req.body.simulation}, {$set:{isValid:false}}, (err, doc) => {
    if (err) {
        console.log("Something wrong when updating data!");
    }
    console.log(doc);
	});
	res.redirect('/manage');
};
