const express = require('express');
const app = express();
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 5000;
const productsRouter = require("./src/router/productsRouter");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));
app.set('views', "./src/views");
app.set('view engine', "ejs");

app.use("/products", productsRouter);

app.get("/", (req,res) =>{
    res.render('index');
})

app.listen(PORT, ()=>{
    debug("Listening on PORT"+ chalk.blue(PORT));
})