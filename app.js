
/**
 * Module dependencies.
 */

var express = require('express')
  , exec = require('child_process').exec
  , routes = require('./routes')
  , create = require('./routes/create')
  , manage = require('./model/manage')
  , Simulation = require('./model/simulations')
  , http = require('http')
  , path = require('path');

var app = express();

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/websim';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/create', create.create);
app.get('/manage', manage.get_simulations);
app.post('/create_simulation', manage.create_simulation);
app.post('/simulation_publish', manage.simulation_publish);
app.post('/simulation_stop', manage.simulation_stop);
app.post('/simulation_delete', manage.simulation_delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
