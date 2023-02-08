var express = require('express');
var router = express.Router();

// /* GET logistics Log. */

const LogisticController = require("../controllers/logisticController.js");
router.get("/", LogisticController.index);
router.get("/:id", LogisticController.show);

module.exports = router;