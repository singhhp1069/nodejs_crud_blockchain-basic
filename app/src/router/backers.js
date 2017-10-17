var express = require('express');
var router = express.Router();
var backer = require('../model/backer_controller');

router.get('/', function (request, response) {
	backer.getBackers(function (backers) {
		response.json(backers);	
	});
});

router.get('/:id', function (request, response) {
	backer.getBackersId(request.params.id, function (backer) {
		response.json(backer);
	});
});

router.post('/', function (request, response) {
	backer.save(request.body, function (result) {
		response.json(result);
	});
});

router.put('/', function (request, response) {
	backer.update(request.body.id, request.body, function (result) {
		response.json(result);
	});
});

router.put('/addbalance', function (request, response) {
	console.log('came to add balance');
	backer.updatebalance(request.body.id,request.body, function (result) {
		response.json(result);
	});
});

router.delete('/', function (request, response) {
	backer.delete(request.body.id, function (result) {
		response.json(result);
	});
});


module.exports = router;