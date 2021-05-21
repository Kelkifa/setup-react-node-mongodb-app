
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const animes = new Schema(
    {
        name: { type: String },
        description: { type: String },
        image: { type: String },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('animes', animes);