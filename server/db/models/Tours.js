const Sequelize = require("sequelize");
const db = require("../db");

const Tour = db.define("tour", {
  // status: {
  //   type: Sequelize.ENUM("Checked", "Soon"),
  //   allowNull: false,
  // },
});

module.exports = Tour;
