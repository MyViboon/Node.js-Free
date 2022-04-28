const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const productsRouter = express.Router();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set('views', "./src/views");
app.set('view engine', "ejs");

productsRouter.route("/").get((req,res) => {
    res.send("Hello World !! I'am Product")
});

productsRouter.route("/1").get((req,res) => {
    res.send("Hello World !! I'am Product1")
});

app.use("/products", productsRouter);

app.get("/", (req,res) =>{

    // res.render('index', {username: "Viboon 555+", customer: ["dog555", "cat", "pick"]});
    res.render('index');

})

app.listen(PORT, ()=>{
    debug("Listening on PORT"+ chalk.blue(PORT));
})