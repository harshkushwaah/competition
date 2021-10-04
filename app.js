const express = require('express');
const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });
 //Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const app = express();

const port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port` + port);
});