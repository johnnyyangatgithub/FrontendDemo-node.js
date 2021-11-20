//连接mongoDB
const mongoose = require('mongoose');
//mongoDB数据库地址，项目需要连接的数据库地址 具体格式为mongoDB：//localhost：端口号/数据库名称
//其中localhost可以改为自己的ip地址
const dbURL = 'mongodb://localhost:27017/usersSystem';
//具体的连接代码
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
//添加数据库连接事件,当数据库连接成功时触发事件
mongoose.connection.on('connected', function () {
  console.log(dbURL + 'database connection successed!');
});
