 const router = require("express").Router();
 const savedRoutes = require("./article");
// const router = require("express").Router();
// const savedController = require("../../controllers/savedcontroller");


router.use("/article",savedRoutes);
// Book routes

module.exports = router;

// router.use("/", savedRoutes);
