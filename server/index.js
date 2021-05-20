const port = 8000;
const express = require('express');
const app = express();

/** Models */
//connect db
const db = require('./app/cores/connectDb');
db.connect();
//difine models
const anime = require('./app/models/anime');

app.get('/', (req, res) => {
    anime.find()
        .then(data => {
            res.json(data);
        })
});

app.listen(process.env.PORT || port, () => {
    console.log(`Web at localhost:${port}`);
});
