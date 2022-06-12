const config = require('../config.json')
const { Sequelize } = require('sequelize');


var database = new Sequelize(config)
database.authenticate().then(() => {
  console.log("database connected",)
}).catch((err) => {
  console.log(err)
});


module.exports = database;