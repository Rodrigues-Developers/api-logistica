var express = require('express');
var router = express.Router();

// /* GET Products Log. */

const ProductController = require("../controllers/productController.js");
router.get("/", ProductController.index);
router.get("/:id", ProductController.show);

module.exports = router;
