const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
var appPath = '../iolite';

app.use('/',express.static(path.join(__dirname,appPath)))
.get('*',(req,res)=> res.sendFile(path.join(__dirname,appPath +'../index.html')))
.listen(PORT,()=>console.log('klklkl ${PORT}'));