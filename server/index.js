const port = 8000;
const express = require('express');
const app = express();

/** Models */
const anime = require('./app/models/anime');

/** Connect to db */
const db = require('./app/cores/connectDb');
db.connect();

app.get('/', (req, res) => {
    anime.find()
        .then(data => {
            res.json(data);
        })
});

app.listen(process.env.PORT || port, () => {
    console.log(`Web at localhost:${port}`);
});
