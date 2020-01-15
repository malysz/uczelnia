const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config();

const connectionUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-xesmf.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(connectionUri, {useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;

const courseDataSchema = new Schema({
    name: {type: String, required: true},
    ects: {type: Number, required: true},
    semester: {type: Number, required: true},
    maxStudents: {type: Number, required: true},
    grade: {type: Number, required: true},
    icon: {type: String, required: true},
    students: [String],
    grades: [String]
}, {collection: 'course'});

const CourseData = mongoose.model('CourseData', courseDataSchema);

router.get('/courses', (req, res) => {
    console.log('GET /api/courses');
    CourseData.find().then((items) => {
        res.send(items);
    });
});

router.get('/course/:name', (req, res) => {
    console.log('GET /api/course/' + req.params.name);
    CourseData.findOne({name: req.params.name}).then((item) => {
        res.send(item);
    })
});

router.post('/course', (req, res) => {
    console.log('POST /api/course');
    let course = {
        name: req.body.name,
        ects: req.body.ects,
        semester: req.body.semester,
        maxStudents: req.body.maxStudents,
        grade: req.body.grade,
        icon: req.body.icon,
        students: [],
        grades: []
    };
    console.log(course);
    let data = new CourseData(course);
    data.save();
    res.send(course);
});

router.delete('/course/:name', (req, res) => {
    console.log('DELETE /course/' + req.params.name);
    CourseData.findOneAndDelete({name: req.params.name}).then(item => {
        res.send(item);
    })
});

router.put('/course/:name', (req, res) => {
    console.log('PUT /api/course' + req.params.name);
    let course = {
        name: req.body.name,
        ects: req.body.ects,
        semester: req.body.semester,
        maxStudents: req.body.maxStudents,
        grade: req.body.grade,
        icon: req.body.icon,
        students: req.body.students,
        grades: req.body.grades
    };

    CourseData.findOneAndUpdate({name: req.params.name}, course).then(item => {
        res.send(item);
    })
});

module.exports = router;
