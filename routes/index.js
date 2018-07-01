var express = require('express');
var sd = require('silly-datetime');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/detail', function (req, res, next) {
    let pdf_id = req.query.pdf_id;
    res.render('detail', {pdf_id: pdf_id});
});
router.get('/collection', function (req, res, next) {
    res.render('collection');
});
router.get('/operation', function (req, res, next) {
    let currentTime = sd.format(new Date(), "YYYY-MM-DD HH:mm:ss");
    res.render('operation',{current_time:currentTime});
});
router.get('/products', function (req, res, next) {
    res.render('products');
});
router.get('/detail_detail', function (req, res, next) {
    let video_url = req.query.video_url;
    let pdf_id = req.query.pdf_id;
    res.render('detail_detail', {pdf_id: pdf_id, video_url: video_url});
});
module.exports = router;
