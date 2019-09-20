var express = require('express'),
path = require('path'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
logger = require('morgan'),
cors = require('cors');

var indexRouter = require('./routes/records');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Start DB Connection
require('./db/index')()

// Allow Access-Control-Allow-Origin CORS header.
app.use(cors());

app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/records', indexRouter);

module.exports = app;
