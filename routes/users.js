//1. 表现层 -- ideally只用来接收前端发过来的数据

var express = require('express');
var router = express.Router();

const { login, isAccess, register } = require('../servies/usersService');

/* POST users listing. */
router.post('/login', async function (req, res, next) {

	//用于接收前端发送回来的数据
	// --post方法： req.body
	// console.log(req.body);
	// --get方法： req.query
	// console.log(req.query);

	//接收用户登录的数据
	const user = req.body;
	// Pass the parameter(object) to servers(2nd) layer
	const data = await login(user);
	res.send(data);

});

/* POST users listing. */
router.post('/register', async function (req, res, next) {
	const user = req.body;
	const regisData = await register(user);

	//将后端处理结果发送回给前端
	res.send(regisData);
});

/* POST users listing. Virify if user account exists*/
router.post('/isAccess', async function (req, res, next) {
	const { username } = req.body;

	//将逻辑交给service层处理，所以先去service层调用暴露一个方法，然后回来进行调用
	const result = await isAccess(username);
	res.send(result);
});


module.exports = router;
