const express = require('express');
const State = require('../models/State');
const path = require('../paths/State');

const router = express.Router();

// Get states
router.get(path.GETS, (req, res) => {
    State.find()
        .then(data => res.json(data))
        .catch(error => res.json({ error }))
})

module.exports = router;