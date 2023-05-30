const { DataTypes } = require("sequelize");
const { db } = require("../index.js");

const { Users }= require('../models/users.js');

const Posts = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.STRING,
  },
});

// Applying a one to many relationship, users to posts
Posts.associate = () => {
  Posts.belongsTo(Users, {
    foreignKey: 'creatorId'
  })
}

// Export Schema
module.exports = {
  Posts,
};

