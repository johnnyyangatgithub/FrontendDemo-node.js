//2. 服务层 -- 专门用来处理逻辑代码

const { login, isAccess, register } = require('../dao/usersDao');

module.exports.login = async function (user) {
    //调用的是第三层userDao.js中暴露的login方法(3rd layer)
    const data = await login(user);
    console.log('2222', data);
    if (data.length > 0) {
        return {
            message: 'Login successful!',
            status: 1
        }
    } else {
        return {
            message: 'Login Failed! Please retry.',
            status: 0
        }
    }
}

module.exports.isAccess = async function (username) {
    const result = await isAccess(username);
    // Verify(Logic)
    if (result.length > 0) {
        return {
            message: 'Account already exists',
            status: 0
        }
    } else {
        return {
            message: 'Account available.',
            status: 1
        }
    }
}

module.exports.register = async function (user) {
    const regisData = await register(user);
    if (regisData._id) {
        return {
            message: 'Register successful',
            status: 1
        }
    }
    return {
        message: 'Register failed',
        status: 0
    }
}