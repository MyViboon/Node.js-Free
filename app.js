const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

// app.get("/", (req,res) =>{

//     res.send("Hello Viboon ไก่กา อาราเร่");

// })

app.listen(port, ()=>{
    console.log("Listening on Port"+ chalk.blue(port));
})