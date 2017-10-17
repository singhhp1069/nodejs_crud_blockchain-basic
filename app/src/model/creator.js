var sequelize = require('./base').sequelize;
var db = require('./base').db;
var project = require('./project');

var table_name = 'creators';

var creator = db.define(table_name, {
	id : {
  		type: sequelize.INTEGER,
  		autoIncrement : true,
  		primaryKey: true ,
  		uniqueKey: true,
  	},
   name : sequelize.TEXT,
   email :sequelize.TEXT
  });
creator.hasMany(project, {foreignKey: 'creator_id', sourceKey: 'id'});

module.exports = creator;