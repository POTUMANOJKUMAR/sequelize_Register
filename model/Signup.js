const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Signup = sequelize.define("Signup", {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false,
  tableName:'manoj'
});

Signup.sync()
  .then(() => {
    console.log("Table created");
  })
  .catch((err) => {
    console.error("Error creating the table:", err);
  });

module.exports = Signup;
