const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const State = mongoose.model('StateSchema', StateSchema);

module.exports = State;