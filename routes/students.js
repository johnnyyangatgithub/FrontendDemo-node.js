var express = require('express');
var router = express.Router();

const { getStudents, addStudents, delStudents, getStudentsById, updateStudents } = require('../servies/studentsService');

/* GET home page. */
router.get('/getStudents', async function (req, res, next) {
    const data = await getStudents(req.query);//这里的req.query是为了查询加的
    res.send(data);

});

router.post('/rmStudent', async function (req, res, next) {
    const data = await delStudents(req.body);
    res.send(data);
});

router.post('/addStudents', async (req, res) => {
    const data = await addStudents(req.body);
    res.send(data);
})

router.get('/getStudentsById', async (req, res) => {
    const data = await getStudentsById(req.query);
    res.send(data);
})


router.post('/updateStudents', async (req, res) => {
    const data = await updateStudents(req.body);
    res.send(data);
})

module.exports = router;
