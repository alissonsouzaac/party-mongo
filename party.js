'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const uriUtil = require('mongodb - uri');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const mongodbUri = 'mongodb://localhost:5000/contact-test';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

app.use('/Api', require('./Api/routes/post-api'));
app.use('/Api', require('./Api/routes/get-api'));
app.use('/Api', require('./Api/routes/delete-api'));

const hostname = 'localhost';
const port = 5000;
const server = app.listen(port, hostname, () => {
	mongoose.connect( dbOptions, (err) => {
		if (err) {
			console.log(err);
		}
		console.log('servidor rodando em http://${hostname}:${port}/');
	});
});