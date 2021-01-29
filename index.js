const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./mongoose');

const loginRoute = require('./routes/Login');
const employeeRoute = require('./routes/Employee');
const stateRoute = require('./routes/State');
const roleRoute = require('./routes/Role');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(loginRoute);
app.use(employeeRoute);
app.use(stateRoute);
app.use(roleRoute);

// Listening
const port = process.env.PORT || 5000;
app.listen(port)