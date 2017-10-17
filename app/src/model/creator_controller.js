var creator = require('./creator');
var base = require('./base');

//To Search Releated Projects of Creators
var project = require('./project');

module.exports = {

	getCreators: function (callback) {
		creator.findAll().then(function (creators) {
			base.successCallback(creators, callback);	
		})
		.error(function (error) {
			base.errorCallback(error, callback);
		});
	},

	
	getCreatorsId: function (id, callback) {
		console.log('searching for id: ' + id);
		creator.findOne({where: {id: id}}).then(function (creators) {
			base.successCallback(creators, callback);
		})
		.error(function (error) {
			base.errorCallback(error, callback);
		});
	},

	getCreatorsProject: function (id, callback) {
		console.log('searching creators id in projects: ' + id);
		project.findAll({where: {creator_id: id}}).then(function (projects) {
			base.successCallback(projects, callback);
		})
		.error(function (error) {
			base.errorCallback(error, callback);
		});
	},


	save: function (creatorObj, callback) {
		creator.create(creatorObj).then(function (result){
			base.successCallback(result, callback);
		})
		.error(function (error) {
			base.errorCallback(error, callback);	
		});
	},

	update: function (id, creatorObj, callback) {
		creator.update(creatorObj, {where: {id: id}}).then(function (result) {
			base.successCallback(result, callback);
		})
		.error(function (error) {
			base.errorCallback(error, callback)
		});
	},

	delete: function (id, callback) {
		creator.destroy({where: {id: id}}).then(function (result) {
			base.successCallback(result, callback);
		})
		.error(function (error) {
			base.errorCallback(error, callback);
		});
	}
}
