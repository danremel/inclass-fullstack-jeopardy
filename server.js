require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const GamesController = require('./controllers/game');
const app = express();

mongoose.Promise = global.Promise;
// Mongoose connection
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
// Connection success
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully.');
});
// Connection error
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});

app.use(bodyParser.json());

app.use("/api/game", GamesController)
app.get('/', (req, res) => {
    res.send("Hello world");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("App is listening on: " + PORT);
});