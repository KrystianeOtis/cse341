const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 3000;
const app = express();

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
