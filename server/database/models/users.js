// Import Dependencies
const { DataTypes } = require("sequelize");
const { db } = require("../index.js");

const { Posts }= require('../models/posts.js');

// Create Schema
const Users = db.define("users", {
  googleId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fullName: { 
    type: DataTypes.STRING(80), 
    allowNull: false 
  },
  // birdSightingsArray: {
  //   type: DataTypes.ARRAY(DataTypes.STRING),
  //   allowNull: true,
  // },
  picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  _id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    primaryKey: true,
    autoIncrement: true,
  },
  // name: { type: DataTypes.STRING(80), allowNull: false },
  // password: {Type: DataTypes.STRING, allowNull: false}, (SANTO!!!!!!)
});

// Applying a one to many relationship with posts for trading
Users.associate = () => {
  Users.hasMany(Posts, {
    foreignKey: 'creatorId'
  });
}

// Export Schema
module.exports = {
  Users,
};
