const { DataTypes } = require("sequelize");
const { db } = require("../index.js");


const Posts = db.define("posts", {
  _id: {
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
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true,
    references: { model: 'users', key: '_id' }  // One to many relationship with Users : Posts
  },
});


// Export Schema
module.exports = {
  Posts,
};

