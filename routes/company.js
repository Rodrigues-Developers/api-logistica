var express = require('express');
var router = express.Router();

// /* GET logistics Log. */

const CompanyController = require("../controllers/companyController.js");
router.get("/", CompanyController.index);
router.get("/:id", CompanyController.show);
router.post("/", CompanyController.store);
router.put("/:id", CompanyController.update);
router.delete("/:id", CompanyController.destroy);

module.exports = router;
