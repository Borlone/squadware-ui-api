const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');

const router = express.Router();

// login
// pass: johnsmith123
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const employee = await Employee.findOne({ email });

    if (!employee) return res.status(400).json({ error: 'Email not found.' });

    const validPassword = await bcrypt.compare(password, employee.security.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid password.' });

    const token = jwt.sign({ employeeId: employee._id }, process.env.ACCESS_TOKEN);
    res.json({ id: employee._id, displayName: `${employee.lastName} ${employee.firstName}`, token })
})

module.exports = router;