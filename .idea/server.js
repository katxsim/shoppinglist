const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//bodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongo
mongoose
.connect(db)
.then(() => console.log('MongoDB connected.'))
.catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port" + PORT));