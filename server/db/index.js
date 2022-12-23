//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Site = require("./models/Site");
const Bucket = require("./models/Bucket");
const Tour = require("./models/Tour")

//associations could go here!
Site.hasMany(Tour);
Tour.belongsTo(Site);
User.belongsToMany(Site, { through: Bucket });
Site.belongsToMany(User, { through: Bucket });
Bucket.belongsTo(User);
Bucket.belongsTo(Site);

module.exports = {
  db,
  models: {
    User,
    Site,
    Bucket,
    Tour,
  },
};
