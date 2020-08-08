const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    age: {
        type: Number,
        required: [true, 'Please add an age']
    },
});

module.exports = mongoose.model('Author', AuthorSchema);