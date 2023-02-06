var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.send('respond with a resource');
});

module.exports = router;
