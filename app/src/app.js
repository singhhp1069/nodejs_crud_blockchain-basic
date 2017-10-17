'use strict';

// 3rd-party dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const Sequelize = require('sequelize');
//Routes
var routes = require('./router/routes');

var project = require('./model/project_controller');

// Application config
const LOCAL_APP_PORT = 8080;
const PUBLIC_APP_PORT = process.env.PUBLIC_APP_PORT || LOCAL_APP_PORT;
const PG_HOST = process.env.PG_HOST;
const PG_PORT = process.env.PG_PORT;
const PG_USER = process.env.PG_USER;
const PG_DATABASE = process.env.PG_DATABASE || "";

// Sanity check for debugging
console.log("local app port:", LOCAL_APP_PORT);
console.log("public app port:", PUBLIC_APP_PORT);
console.log("db host:", PG_HOST);
console.log("db port:", PG_PORT);


// Express middleware
app.use(bodyParser.json()); // for parsing application/json
app.use('/',routes);
// TODO

app.get('/', function (request, response) {
	console.log('Welcome !');
	project.getProjects(function (projects) {
		response.json(projects);	
	});
});

app.listen(LOCAL_APP_PORT, function() {
  	console.log('App started ...');
	});
