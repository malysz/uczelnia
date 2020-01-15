const express = require('express');
const bodyParser = require('body-parser');

// set up express app
const app = express();

// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH');
        return res.status(200).json({});
    }
    next();
});

app.use('/api', require('./routes/api'));
app.use('/auth', require('./routes/auth'));


// listen for requests
app.listen(4000, () => {
    console.log('listening for requests on port 4000');
});
