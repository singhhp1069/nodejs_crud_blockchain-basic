var Sequelize = require('sequelize');

const PG_HOST = process.env.PG_HOST;
const PG_PORT = process.env.PG_PORT;
const PG_USER = process.env.PG_USER;
const PG_DATABASE = process.env.PG_DATABASE;

var database= new Sequelize( PG_DATABASE, PG_USER, "",{
		   host: PG_HOST,
		   port: PG_PORT,
		   dialect: 'postgres',
		   define: {
		     underscored: true
		   }
});

module.exports = {
	sequelize: Sequelize, 
	db: database,
	successCallback : function (data, cb) {
		cb({
			success: true,
			data: data
		});
	},

	errorCallback : function (error, cb) {
		cb({
			success: false,
			error: error
		});
	}
};

database.sync().done(function () {
	console.log('DB Synced !');
});




