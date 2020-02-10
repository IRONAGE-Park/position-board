var express = require('express');
var router = express.Router();

const data = [
    { attr: '', value: 1 },
    { attr: '', value: 1 },
    { attr: '', value: 1 },
    { attr: '', value: 1 },
]

function getPolyPointByAngle(angle, length) {
    let x = Math.cos(Math.PI * (angle / 180)) * length;
    let y = Math.sin(Math.PI * (angle / 180)) * length;
    return {x, y};
}

function getPoly(data, size) {
    let angle = 360 / data.length;
    return data.map((element, i) => {
        return getPolyPointByAngle(angle * i, element.value * size);
    });
}

/* GET home page. */
router.get('/', function (req, res, next) {
    // 메인 화면에 접속했을 때
    res.render('svg/svg',
        {
        }
    );
});

router.get('/:id', function (req, res, next) {
    res.render('svg/'+ req.params.id);
});

module.exports = router;
