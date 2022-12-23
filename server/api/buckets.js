const router = require("express").Router();
const {
  models: { User, Site, Bucket, Tour },
} = require("../db");
// const { getToken } = require("./adminCheckMiddleware");
module.exports = router;

// GET/api/buckets /// USERS BUCKETS
router.get("/:userId", async (req, res, next) => {
  const userId = +req.params.userId;

  try {
    const siteList = await Bucket.findAll({
      where: { userId: userId },
      include: { model: Site },
    });

    if (siteList.length) res.json(siteList);
    else res.json({ error: "No sites found" });
  } catch (err) {
    next(err);
  }
});

// POST/api/buckets/:siteId  ///
router.post("/:siteId/:userId", async (req, res, next) => {
  const userId = +req.params.userId;
  console.log("API ROUTE", req.params.userId, req.params.siteId);
  try {
    const [addSite, newlyCreated] = await Bucket.findOrCreate({
      where: { userId: userId, siteId: +req.params.siteId },
    });

    const addedIns = await Bucket.findOne({
      where: { userId: userId, siteId: +req.params.siteId },
      include: { model: Site },
    });

    res.json(addedIns);
  } catch (err) {
    next(err);
  }
});

// PUT/api/buckets/:siteId
router.put("/:siteId/:userId", async (req, res, next) => {
  const userId = +req.params.userId;
  try {
    const site = await Bucket.findOne({
      where: { userId: userId, siteId: +req.params.siteId },
    });

    if (site) {
      const [, editBucket] = await Bucket.update(
        { status: "Checked" },
        {
          where: { status: "Soon", userId: userId, siteId: +req.params.siteId },
          returning: true,
          plain: true,
        }
      );

      console.log("EDITED BUCKET", editBucket);
      await editBucket.reload();

      res.json(editBucket);
    } else {
      res.json({ error: "Site not found" });
    }
  } catch (err) {
    next(err);
  }
});
