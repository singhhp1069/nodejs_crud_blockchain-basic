var project = require('./project');
var base = require('./base');
var creator = require('./creator');

module.exports = {
	getProjects: function (callback) {
		project.findAll().then(function (projects) {
			base.successCallback(projects, callback);	
		})
		.error(function (error) {
			base.errorCallback(error, callback);
		});
	},

	getProjectsId: function (id, callback) {
		console.log('searching for id: ' + id);
		project.findOne({where: {id: id}}).then(function (projects) {
			base.successCallback(projects, callback);
		})
		.error(function (error) {
			base.errorCallback(error, callback);
		});
	},

	save: function (projectObj, callback) {
		console.log('projectObj creator_id is ', projectObj.creator_id);
		creator.findOne({where: {id: projectObj.creator_id}}).then(function (creator) {
			if(creator){
				project.create(projectObj).then(function (result){
				base.successCallback(result, callback);
				})
				.error(function (error) {
					base.errorCallback(error, callback);	
				});
			}else{
				base.successCallback(creator, callback);
			}
		}).error(function (error) {
			base.errorCallback(error, callback);	
		});
	},

	update: function (id, projectObj, callback) {
		project.update(projectObj, {where: {id: id}}).then(function (result) {
			base.successCallback(result, callback);
		})
		.error(function (error) {
			base.errorCallback(error, callback)
		});
	},

	delete: function (id, callback) {
		project.destroy({where: {id: id}}).then(function (result) {
			base.successCallback(result, callback);
		})
		.error(function (error) {
			base.errorCallback(error, callback);
		});
	}
}
