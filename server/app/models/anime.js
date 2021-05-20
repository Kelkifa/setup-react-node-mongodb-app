
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const movies = new Schema(
    {
        name: { type: String },
        description: { type: String },
        image: { type: String },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('movies', movies);