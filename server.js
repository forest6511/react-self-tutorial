var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log("Express server up! port 3000");
    console.log("__dirname = [", __dirname, "]");
});