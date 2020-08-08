const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    genre: {
        type: String,
        required: [true, 'Please add a genre']
    },
    authorId: {
        type: String,
        required: [true, 'Please add an author id']
    },
});

module.exports = mongoose.model('Book', BookSchema);