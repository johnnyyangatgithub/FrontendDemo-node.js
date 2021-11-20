//数据库集合的相关配置

//1. 定义数据的结构：定义数据库中属性的值
const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  username: String,
  password: String
}, { versionKey: false });

//2. 定义数据模型，将Schema和数据库中的集合关联起来
const usersModel = model('usersModel', usersSchema, 'users');

//向外暴露模型
module.exports.usersModel = usersModel;