'use strict';

//모듈
const express = require('express');
const app = express();

// 라우팅
const home = require('./src/routes/home');

//앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');

//경로 기본폴더 src 지정
app.use(express.static(`${__dirname}/src/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', home);

module.exports = app;
