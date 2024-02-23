const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_web_app', 'root', 'my-secret-pw', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
