const { getStudents, addStudents, delStudents, getStudentsById, updateStudents } = require('../dao/srudentsDao');

module.exports.getStudents = async (params) => {
    try {
        const data = await getStudents(params);
        return {
            message: 'Get students data successful',
            status: 1,
            data
        }
    } catch (error) {
        console.log('error', error);
        return {
            message: 'Get students data unsuccessful',
            status: 0
        }
    }
}

module.exports.addStudents = async student => {
    const data = await addStudents(student);
    if (data._id) {
        return {
            message: 'Add student successful',
            status: 1
        }
    } else {
        return {
            message: 'Add student failed',
            status: 0
        }
    }
}

module.exports.delStudents = async _id => {
    const data = await delStudents(_id);
    if (data) {
        return {
            message: 'Delete successful',
            status: 1
        }
    } else {
        return {
            message: 'Delete failed',
            status: 0
        }
    }
}

module.exports.getStudentsById = async _id => {
    const data = await getStudentsById(_id);
    return {
        message: 'get student info successful',
        status: 1,
        data
    }
}

module.exports.updateStudents = async student => {
    const data = await updateStudents(student);
    if (data) {
        return {
            message: 'Edit student info successful',
            status: 1
        }
    }
    return {
        message: 'Edit student info failed',
        status: 0
    }
}