const Sequelize = require("sequelize");
const db = require("../db");

const Site = db.define("site", {
  name: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM("Natural", "Mixed", "Cultural"),
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
  },

  description: {
    type: Sequelize.TEXT,
  },
  imgUrl: {
    type: Sequelize.STRING,
    default:
      "https://media.istockphoto.com/id/1042404662/photo/mountain-peak-zugspitze-summer-day-at-lake-eibsee-near-garmisch-partenkirchen-bavaria-germany.jpg?s=612x612&w=0&k=20&c=-23X1ZLeMX3yYTKO763K5aHLBu2UTg9p1seHSrMBjmI=",
  },
  latitude: {
    type: Sequelize.DECIMAL(15, 10),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  longitude: {
    type: Sequelize.DECIMAL(15, 10),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  continent: {
    type: Sequelize.STRING,
  },
  destination: {
    type: Sequelize.STRING,
  }
});

module.exports = Site;
