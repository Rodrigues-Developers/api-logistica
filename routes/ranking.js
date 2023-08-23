var express = require('express');
var router = express.Router();

// /* GET logistics Log. */

const RankingController = require("../controllers/rankingController.js");
router.get("/", RankingController.index);
router.get("/:id", RankingController.show);
router.post("/", RankingController.store);

module.exports = router;