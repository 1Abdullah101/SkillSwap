const { Sequelize } = require('sequelize');
const config = require('../config/database');
const User = require('./User');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
    pool: dbConfig.pool
  }
);

// Initialize models
User.init(User.schema, {
  sequelize,
  modelName: 'User'
});

const db = {
  sequelize,
  Sequelize,
  User
};

// Add model associations here if needed
// Example: db.User.hasMany(db.Post);

module.exports = db; 