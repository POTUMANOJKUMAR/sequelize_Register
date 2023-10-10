const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("register", "root", "1234", {
  host: "localhost",
  dialect: "mysql"
});

 sequelize.authenticate().then(() => {
      console.log("Database connected");
    }).catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

module.exports = sequelize
