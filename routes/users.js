var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /users:
 *    get:
 *      description: This gets users
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: Users got
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
