var express = require('express');
var app = express();

var projects = require('./projects');
var creators = require('./creators');
var backers = require('./backers');

app.use('/projects', projects);
app.use('/creators', creators);
app.use('/backers', backers);


module.exports = app;