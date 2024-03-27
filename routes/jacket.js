var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jacket', { title: 'A search by jackets' });
});

module.exports = router;
