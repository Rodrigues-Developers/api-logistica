var express = require('express');
var router = express.Router();

// /* GET logistics Log. */

const ProductController = require("../controllers/ProductController.js");
router.get("/", ProductController.index);
// router.get("/tags", ProductController.showTags);
router.get("/:id", ProductController.show);


module.exports = router;


