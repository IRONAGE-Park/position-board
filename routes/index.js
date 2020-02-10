var express = require('express');
var router = express.Router();

const db = [
  { No: 1, titleImage: '', writer: '김진호', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 2, titleImage: '', writer: '이준석', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 3, titleImage: '', writer: '박철현', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 4, titleImage: '', writer: '박창준', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 5, titleImage: '', writer: '김영욱', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 6, titleImage: '', writer: '김진호', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 7, titleImage: '', writer: '이준석', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 8, titleImage: '', writer: '박철현', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 9, titleImage: '', writer: '박창준', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 10, titleImage: '', writer: '김영욱', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 11, titleImage: '', writer: '김진호', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 12, titleImage: '', writer: '이준석', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 13, titleImage: '', writer: '박철현', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 14, titleImage: '', writer: '박창준', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 15, titleImage: '', writer: '김영욱', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 16, titleImage: '', writer: '김진호', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 17, titleImage: '', writer: '이준석', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 18, titleImage: '', writer: '박철현', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 19, titleImage: '', writer: '박창준', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 20, titleImage: '', writer: '김영욱', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 21, titleImage: '', writer: '김진호', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 22, titleImage: '', writer: '이준석', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 23, titleImage: '', writer: '박철현', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 24, titleImage: '', writer: '박창준', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 25, titleImage: '', writer: '김영욱', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 26, titleImage: '', writer: '김진호', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 27, titleImage: '', writer: '이준석', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 28, titleImage: '', writer: '박철현', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 29, titleImage: '', writer: '박창준', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 30, titleImage: '', writer: '김영욱', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 31, titleImage: '', writer: '김진호', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 32, titleImage: '', writer: '이준석', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 33, titleImage: '', writer: '박철현', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 34, titleImage: '', writer: '박창준', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 35, titleImage: '', writer: '김영욱', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 36, titleImage: '', writer: '김진호', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 37, titleImage: '', writer: '이준석', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 38, titleImage: '', writer: '박철현', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 39, titleImage: '', writer: '박창준', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 },
  { No: 40, titleImage: '', writer: '김영욱', title: '컴퓨터 그래픽 카드 비교 분석', tag: ['그래픽카드', '지포스', '라데온'], date: '2019-11-05', view: 1204, recommend: 1204 }
];
const contentKey = Object.keys(db[0]); // 임시 DB Object의 키
const contentHead = [
  '', '', '작성자', '제목', '해시태그', '작성일', '조회', '추천'
]; // 게시글 목록에 보이는 조건들

function addComma(num) {
  /* 숫자에 형식에 맞춘 , 찍어줌 */
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}
function getDataForPageSize(db, size, page) {
  /* 사이즈에 따른 데이터 현재 페이지에 보여야할 정보만을 담음 */
  return db.slice((page - 1) * size, page * size);
}
function getHTMLForm(db) {
  /* HTML에서 출력하기 위해 숫자 데이터에 , 찍어서 반환 */
  db.forEach(element => {
    element.view = addComma(element.view);
    element.recommend = addComma(element.recommend);
    return element;
  });
  return db;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // 메인 화면에 접속했을 때
  let viewData = getDataForPageSize(db, 10, 1);
  res.render('index', 
    { 
      title: 'Chartist',
      data: getHTMLForm(viewData),
      contentKey: contentKey,
      contentHead: contentHead
    }
  );
});

router.get('/board', function(req, res, next) {
  // 게시판에 접속했을 때
  let sortType = req.query.type ? req.query.type : 0; // 정렬 타입 (0, 1 = 조회수 | 2, 3 = 댓글수 | 4, 5 = 평가수 | 6, 7 = 등록일)
  let listSize = req.query.size ? req.query.size : 20; // 한 번에 보여주는 게시글의 갯수(기본 값은 20)
  let page = req.query.page ? req.query.page : 1 // 페이지의 위치(기본 값은 1)
  let viewData = getDataForPageSize(db, listSize, page); // 페이지의 위치와 게시글의 갯수로 보여질 데이터 받아옴
  res.render('board/board',
    {
      big_cate: req.query.big ? req.query.big : '전자제품', // 큰 카테고리
      mid_cate: req.query.mid ? req.query.mid : '소형가전', // 중간 카테고리
      small_cate: req.query.big ? req.query.small : '컴퓨터', // 작은 카테고리
      type: sortType, // 게시글 정렬 타입
      size: listSize, // 게시글의 갯수
      page: page, // 페이지 수
      pageNum: db.length / listSize, // 최대 페이지 수
      data: getHTMLForm(viewData), // 보여질 게시글 목록
      contentKey: contentKey, // 게시글에 접근하기 위한 key
      contentHead: contentHead // 게시글의 헤더
    }
  );
});

module.exports = router;