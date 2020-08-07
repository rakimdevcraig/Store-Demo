const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path")


const app = express();

const items = require('./routes/api/items');

//Allow cors
app.use(cors());

//Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//db config
const db = require('./config/keys').mongoURI

//connect to mongo using mongoose
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected.....'))
    .catch(err => console.log(err))

//set a static folder if we want to serve multiple html pages, & files like css/js
app.use(express.static(path.join(__dirname, 'client')))


//use routes
//anything that refers to api/items use the items variable uptop
app.use('/api/items', items);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))