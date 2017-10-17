var sequelize = require('./base').sequelize;
var db = require('./base').db;

var table_name = 'projects';

var project = db.define(table_name, {
	id : {
  		type: sequelize.INTEGER,
  		autoIncrement : true,
  		primaryKey: true ,
  		uniqueKey: true,
  	},
   category : sequelize.TEXT,
   title :sequelize.TEXT,
   description :sequelize.TEXT,
   project_start :sequelize.DATE,
   project_end :sequelize.DATE,
   funding_goal :sequelize.INTEGER,
   funding_start :sequelize.DATE,
   funding_end :sequelize.DATE,
  });

module.exports = project;