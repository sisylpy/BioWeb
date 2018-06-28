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
router.get('/collection', function(req, res, next) {
  res.render('collection');
});
router.get('/operation', function(req, res, next) {
  res.render('operation');
});
router.get('/products', function(req, res, next) {
  res.render('products');
});
module.exports = router;
