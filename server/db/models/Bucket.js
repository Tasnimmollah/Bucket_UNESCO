const Sequelize = require("sequelize");
const db = require("../db");

const Bucket = db.define("bucket", {
  status: {
    type: Sequelize.ENUM("Checked", "Soon"),
    allowNull: false,
    defaultValue: "Soon",
  },
});

module.exports = Bucket;
