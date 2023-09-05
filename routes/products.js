var express = require('express');
var router = express.Router();

// /* GET Products Log. */

const ProductController = require("../controllers/productController.js");
router.get("/", ProductController.index);
router.get("/:id", ProductController.show);
router.post("/", LogisticController.store);
router.put("/:id", LogisticController.update);
router.delete("/:id", LogisticController.destroy);

module.exports = router;