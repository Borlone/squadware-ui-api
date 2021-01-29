const express = require('express');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const Employee = require('../models/Employee');
const path = require('../paths/Employee');

const router = express.Router();

// Get employees
router.get(path.employees.GETS, auth, async (req, res) => {
    const { page } = req.params;
    const count = await Employee.countDocuments();
    Employee.find().limit(20).skip((page - 1) * 20)
        .then(data => res.json({ data, pageCount: Math.ceil(count / 20) }))
        .catch(error => res.status(400).json({ error }))
})

// Get information employee
router.get(path.employees.GET, auth, (req, res) => {
    Employee.findById(req.params.id, { security: 0, compensation: 0 })
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error }))
})

// get attachments employee
router.get(path.attachments.GETS, auth, (req, res) => {

})

// get schedule employee
// get timeoff employee
// get security employee
// get compensation employee

// Post employee
router.post(path.employees.POST, auth, async (req, res) => {
    const { security } = req.body;
    const hashPassword = await bcrypt.hash(security.password, 10);

    const employee = new Employee({
        ...req.body,
        security: {
            ...security,
            password: hashPassword
        }
    });
    employee.save()
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ error }))
})

module.exports = router;