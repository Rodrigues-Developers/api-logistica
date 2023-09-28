var express = require('express');
var router = express.Router();

// /* GET logistics Log. */

const LogisticController = require("../controllers/logisticController.js");
router.get("/", LogisticController.index);
router.get("/:id", LogisticController.show);
router.post("/", LogisticController.store);
router.put("/:id", LogisticController.update);
router.delete("/:id", LogisticController.destroy);

module.exports = router;
