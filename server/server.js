const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express();
const port = '3000';



app.use(express.static(path.join(__dirname, '../client')));


app.listen(port, function () {
    console.log('Server listening on port ' + port);
});





