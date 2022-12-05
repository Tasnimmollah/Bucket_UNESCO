const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/sites", require("./sites"));
router.use("./tours", require("./tours"));
// router.use("/orders", require("./orders"));
// router.use("/order_products", require("./order_products"));
// router.use("/payment", require("./payment"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
