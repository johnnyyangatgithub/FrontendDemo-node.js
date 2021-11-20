//数据库关于学生集合的相关配置

//1. 定义数据的结构：定义数据库中属性的值
const { Schema, model } = require('mongoose');

const studentsSchema = new Schema({
    name: String,
    age: String,
    gender: String
}, { versionKey: false });

//2. 定义数据模型，将Schema和数据库中的集合关联起来
const studentsModel = model('studentsModel', studentsSchema, 'students');//第三个参数是数据库集合名称

//向外暴露模型
module.exports.studentsModel = studentsModel;