const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('node_app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port:'3306',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
module.exports = db
