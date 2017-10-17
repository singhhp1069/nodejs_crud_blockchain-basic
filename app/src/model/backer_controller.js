var backer = require('./backer');
var base = require('./base');

module.exports = {
	getBackers: function (callback) {
		backer.findAll().then(function (backers) {
			base.successCallback(backers, callback);	
		})
		.error(function (error) {
			base.errorCallback(error, callback);
		});
	},

	getBackersId: function (id, callback) {
		console.log('searching for id: ' + id);
		backer.findOne({where: {id: id}}).then(function (backers) {
			base.successCallback(backers, callback);
		})
		.error(function (error) {
			base.errorCallback(error, callback);
		});
	},

	save: function (backerObj, callback) {
		backer.create(backerObj).then(function (result){
			base.successCallback(result, callback);
		})
		.error(function (error) {
			base.errorCallback(error, callback);	
		});
	},

	update: function (id, backerObj, callback) {
		backer.findById(id).then(function(backer_value){
			if(backer_value){
				backer.update(backerObj, {where: {id: id}}).then(function (result) {
					base.successCallback(result, callback);
				})
				.error(function (error) {
					base.errorCallback(error, callback);
				});
			}else{
	    	base.successCallback(backer_value, callback);
	    	}
		});
	},

	updatebalance: function (id, backerObj, callback) {
		backer.findById(id).then(function(backer_value){
	    if(backer_value){
	      var updatedbalance=parseInt(backerObj.addAmount)+ parseInt(backer_value.balance);
	     	backer.update({balance : updatedbalance},{where: {id: id}}).then(function (result) {
			base.successCallback(result, callback);
			})
			.error(function (error) {
				base.errorCallback(error, callback);
			});
	    }else{
	    		base.successCallback(backer_value, callback);
	    }
	  	}).error(function (error) {
				base.errorCallback(error, callback)
		});
	},

	delete: function (id, callback) {
		backer.destroy({where: {id: id}}).then(function (result) {
			base.successCallback(result, callback);
		})
		.error(function (error) {
			base.errorCallback(error, callback);
		});
	}
}
