var express = require('express');
var router = express.Router();

// /* GET Products Log. */

const ProductController = require("../controllers/productController.js");
router.get("/", ProductController.index);
router.get("/:id", ProductController.show);
router.post("/", ProductController.store);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.destroy);

module.exports = router;
