var express = require('express');
var router = express.Router();
var project = require('../model/project_controller');

router.get('/', function (request, response) {
	project.getProjects(function (projects) {
		response.json(projects);	
	});
});

router.get('/:id', function (request, response) {
	project.getProjectsId(request.params.id, function (project) {
		response.json(project);
	});
});

router.post('/', function (request, response) {
	project.save(request.body, function (result) {
		response.json(result);
	});
});

router.put('/', function (request, response) {
	project.update(request.body.id, request.body, function (result) {
		response.json(result);
	});
});

router.delete('/', function (request, response) {
	project.delete(request.body.id, function (result) {
		response.json(result);
	});
});


module.exports = router;