const router = require("express").Router();
const {
  models: { User, Site, Bucket, Tour },
} = require("../db");
module.exports = router;

// GET/api/tours
router.get("/", async (req, res, next) => {
  try {
    const allTours = await Tour.findAll();
    res.json(allTours);
  } catch (err) {
    next(err);
  }
});

// GET/api/tours/:siteId
router.get("/:siteId", async (req, res, next) => {
  console.log("API ROUTE", req.params.siteId);
  try {
    const tours = await Tour.findAll({
      where: { siteId: +req.params.siteId },
    });
    if (tours) {
      res.json(tours);
    } else {
      res.json({ error: "Tour not found" });
    }
  } catch (err) {
    next(err);
  }
});
