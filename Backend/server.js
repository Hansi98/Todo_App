const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
var consts = require('./consts');
const app = express();


//connect to the database
mongoose
    .connect(consts.DB, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => console.log("mongodb connected"))
    .catch(err => console.log(err));


//Utils
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Routes
var todoRoutes = require('./routes/todoRoutes')
app.use('/api/todos', todoRoutes)


app.listen(consts.PORT, () => {
  console.log(`Server running on port ${consts.PORT}`)
});