//Dao 持久层 -- 用来操作数据库

//拿到从model里面暴露出来的数据
//然后操作数据库
const { usersModel } = require('../dao/models/usersModel');

//Dao layer Login function
module.exports.login = async function (user) {
    const data = await usersModel.find(user);
    //将结果作为返回值返回，然后给service的逻辑层处理验证
    return data;
}

//Dao layer isAccess function
module.exports.isAccess = async function (username) {
    const result = await usersModel.find({ username });
    return result;
}

module.exports.register = async function (user) {
    return await usersModel.create(user);
}