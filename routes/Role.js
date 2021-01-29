const express = require('express');
const Role = require('../models/Role');
const path = require('../paths/Role');

const router = express.Router();

// Get states
router.get(path.GETS, (req, res) => {
    Role.find()
        .then(data => res.json(data))
        .catch(error => res.json({ error }))
})

module.exports = router;