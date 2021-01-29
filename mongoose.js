const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', () => console.log('Connect to the database failed.'));
db.once('open', () => console.log('Connected to the database.'));

module.exports = db;