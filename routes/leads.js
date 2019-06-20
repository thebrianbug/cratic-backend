var express = require("express");
var router = express.Router();
const Lead = require("../models/lead.js");

/**
 * @swagger
 * /leads/{email}:
 *    post:
 *      description: This saves the contact info for a lead
 *      parameters:
 *        - in: path
 *          name: email
 *          description: Email to register.
 *          schema:
 *            type: string
 *          required: true
 *      responses:
 *        200:
 *          description: Lead saved
 */
router.post("/:email", function(req, res, next) {
  let newLead = new Lead();

  newLead.email = req.params.email.toLowerCase();

  Lead.create(newLead, (err, lead) => {
    res.send("Created new lead: " + JSON.stringify(lead));
  });
});

module.exports = router;
