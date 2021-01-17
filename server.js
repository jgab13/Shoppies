/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "/client/build")));

const bodyParser = require('body-parser') 
const limit = "50mb"
app.use(bodyParser.json({limit: limit, extended: true}))
app.use(bodyParser.urlencoded({limit: limit, extended: true}))

const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})  

