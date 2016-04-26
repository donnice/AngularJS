var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.bodyParser());
app.use(app.router);
