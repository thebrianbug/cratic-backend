var express = require('express');
var router = express.Router();
const Lead = require('../models/lead.js');  

 
/* POST lead */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
