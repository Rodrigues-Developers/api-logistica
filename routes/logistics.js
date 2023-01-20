var express = require('express');
var router = express.Router();

// /* GET logistics Log. */
// router.get('/', function(req, res, next) {
//   res.send('Logistcs');
// });
const ProductController = require("../controllers/ProductController.js");
router.get("/", ProductController.index);

module.exports = router;


