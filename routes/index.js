var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/detail', function(req, res, next) {
	let pdf_id = req.query.pdf_id;
  res.render('detail',{pdf_id:pdf_id});
});


module.exports = router;
