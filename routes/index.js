var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MFlix - Login' });
});

router.get('/login', function(req, res, next){
  

});

module.exports = router;
