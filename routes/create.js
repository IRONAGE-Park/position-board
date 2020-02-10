var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // 메인 화면에 접속했을 때
    res.render('create/create',
        {
            data: [],
            contentKey: [],
            contentHead: []
        }
    );
});

module.exports = router;
