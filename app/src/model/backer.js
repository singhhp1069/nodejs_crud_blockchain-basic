var sequelize = require('./base').sequelize;
var db = require('./base').db;

var table_name = 'backers';

var backer = db.define(table_name, {
	id : {
  		type : sequelize.INTEGER,
  		autoIncrement : true,
  		primaryKey: true ,
      allowNull:false
  	},
   name : sequelize.TEXT,
   balance: sequelize.INTEGER
  });

module.exports = backer;