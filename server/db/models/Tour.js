const Sequelize = require("sequelize");
const db = require("../db");

const Tour = db.define("tours", {
  title: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  imgUrl: {
    type: Sequelize.TEXT,
    default:
      "https://media.tacdn.com/media/attractions-splice-spp-360x240/0e/45/76/e9.jpg",
  },
  reviewCount: {
    type: Sequelize.INTEGER,
  },
  reviewAvg: {
    type: Sequelize.INTEGER,
  },
  duration: {
    type: Sequelize.STRING,
  },
  priceFrom: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0,
    },
  },
  bookingUrl: {
    type: Sequelize.TEXT,
    default:
      "https://www.viator.com/tours/West-Glacier/Glacier-National-Park-Tour/d50559-132253P7",
  },
});

module.exports = Tour;
