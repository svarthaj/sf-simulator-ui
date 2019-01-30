/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose');  
var simulationSchema = new mongoose.Schema({  
  isValid: Boolean,
  topicId: String,
  queueId: String,
  sensors: []
});

module.exports = mongoose.model('Simulation', simulationSchema);