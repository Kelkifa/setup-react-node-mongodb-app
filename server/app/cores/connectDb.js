
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/anime_movie', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect successfully');

    } catch (err) {
        console.log("Fail to connect to db")
    }
}

module.exports = { connect }