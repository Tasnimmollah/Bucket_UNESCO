const router = require("express").Router();
const {
  models: { User, Site, Bucket },
} = require("../db");
module.exports = router;


// GET/api/sites
router.get("/", async (req, res, next) => {
  try {
    const allSites = await Site.findAll();
    res.json(allSites);
  } catch (err) {
    next(err);
  }
});

// GET/api/sites/:siteId
router.get("/:siteId", async (req, res, next) => {
  try {
    const aSite = await Site.findByPk(req.params.siteId);
    if (aSite) {
      res.json(aSite);
    } else {
      res.json({ error: "Site not found" });
    }
  } catch (err) {
    next(err);
  }
});

// POST/api/sites   --------- Admin only
// router.post("/", getToken, isAdmin, async (req, res, next) => {
//   try {
//     const newSite = await Site.create(req.body);
//     res.status(201).json(newSite);
//   } catch (err) {
//     next(err);
//   }
// });

// PUT/api/sites   --------- Admin only
// router.put("/:SiteId", getToken, isAdmin, async (req, res, next) => {
//   try {
//     for (let key in req.body) {
//       if (req.body[key] === "") {
//         delete req.body[key];
//       }
//     }
//     const Site = await Site.findByPk(req.params.SiteId);

//     if (Site) {
//       const editSite = await Site.update(req.body);
//       res.json(editSite);
//     } else {
//       res.json({ error: "Site not found" });
//     }
//   } catch (err) {
//     next(err);
//   }
// });

// DELETE api/sites   --------- Admin only
// router.delete("/:SiteId", getToken, isAdmin, async (req, res, next) => {
//   const SiteId = req.params.SiteId;
//   try {
//     const deleteSite = await Site.destroy({
//       where: { id: SiteId },
//     });
//     if (deleteSite === 1) {
//       res.status(200).json(SiteId);
//     } else {
//       res.json({ error: "Site not found" });
//     }
//   } catch (err) {
//     next(err);
//   }
// });
