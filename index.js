const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./mongoose');


const loginRoute = require('./routes/Login');
const employeeRoute = require('./routes/Employee');
const stateRoute = require('./routes/State');
const roleRoute = require('./routes/Role');
const fileRoute = require('./routes/File');

const app = express();

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(cors());

// Routes
app.use(loginRoute);
app.use(employeeRoute);
app.use(stateRoute);
app.use(roleRoute);
app.use(fileRoute);

// Listening
const port = process.env.PORT || 5000;
app.listen(port)