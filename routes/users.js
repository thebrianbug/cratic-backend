var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /users:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      description: This gets users
 *      responses:
 *        200:
 *          description: Users got
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
