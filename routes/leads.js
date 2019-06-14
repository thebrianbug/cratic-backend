var express = require('express');
var router = express.Router();
const Lead = require('../models/lead.js');  

 
/* POST lead */
router.post('/:email', function(req, res, next) {
	let newLead = new Lead()

  newLead.email = req.params.email.toLowerCase();

	Lead.create(newLead, (err, lead) => {
    res.send('Created new lead: ' + JSON.stringify(lead));
	});
});

module.exports = router;
