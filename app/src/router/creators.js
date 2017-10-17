var express = require('express');
var router = express.Router();
var creator = require('../model/creator_controller');


router.get('/', function (request, response) {
	creator.getCreators(function (creators) {
		response.json(creators);	
	});
});

router.get('/:id', function (request, response) {
	creator.getCreatorsId(request.params.id, function (creator) {
		response.json(creator);
	});
});

router.get('/:id/projects', function (request, response) {
	console.log('Landed to project search');
	creator.getCreatorsProject(request.params.id, function (project) {
		response.json(project);
	});
});

router.post('/', function (request, response) {
	creator.save(request.body, function (result) {
		response.json(result);
	});
});

router.put('/', function (request, response) {
	creator.update(request.body.id, request.body, function (result) {
		response.json(result);
	});
});

router.delete('/', function (request, response) {
	creator.delete(request.body.id, function (result) {
		response.json(result);
	});
});


module.exports = router;