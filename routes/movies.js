var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getMovies', function(req, res, next) {
    console.log('从前端得到的数据 ： ', req.query);
  //将后端处理结果发送回给前端
  res.send({
      message: '得到电影成功', 
      status: 1,
      data: [{ name: 'xxx' }]
    });
});
 
module.exports = router;
