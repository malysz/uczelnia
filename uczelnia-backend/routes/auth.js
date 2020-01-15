const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config();

const connectionUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-xesmf.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    email: {type: String, required: true},
    role: {type: String, required: true}
}, {collection: 'user'});

const UserData = mongoose.model('UserData', userDataSchema);

router.get('/users', (req, res) => {
    console.log('GET /auth/users');
    UserData.find().then((items) => {
        res.send(items);
    });
});

router.get('/user/:email', (req, res) => {
    UserData.findOne({email: req.params.email}).then((item) => {
        res.send(item);
    });
});

router.post('/user', (req, res) => {
    console.log('POST /auth/users');
    let usr = {
        email: req.body.email,
        role: req.body.role
    };
    let data = new UserData(usr);
    data.save();
    res.end();
});

module.exports = router;
