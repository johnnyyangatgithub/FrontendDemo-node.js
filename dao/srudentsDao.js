const { studentsModel } = require('./models/studentModel');

module.exports.getStudents = async (params) => {
    //精确查询
    // return await studentsModel.find(params);
    //模糊查询
    return await studentsModel.find({
        [params.searchType]: {
            $regex: params.searchValue,
            $options: '$i'
        }
    })
}

module.exports.addStudents = async student => {
    return await studentsModel.create(student);
}

module.exports.delStudents = async ({ _id }) => {
    //这里面删除可以通过deleteOne来删除但是返回的是一个删除信息的对象，并且参数是对象
    //但是如果用findByIdAndDelete来删除，将参数解构成字符串，它会自动查找并删除，plus返回一个已删除的学生信息
    return await studentsModel.findByIdAndDelete(_id);
}

module.exports.getStudentsById = async ({ _id }) => {
    return await studentsModel.findById(_id);
}

module.exports.updateStudents = async ({ _id, name, age, gender }) => {
    return await studentsModel.findByIdAndUpdate(_id, { name, age, gender });
}