const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const State = mongoose.model('RoleSchema', RoleSchema);

module.exports = State;