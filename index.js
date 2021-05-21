const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
const path = require('path');
/** Models */
//connect db
const db = require('./server/app/cores/connectDb');
db.connect();
//difine models
const anime = require('./server/app/models/anime');

/** cors */
// --> Add this
// ** MIDDLEWARE ** //
const cors = require('cors');
const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://shrouded-journey-38552.herokuapp.com']
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
            callback(null, true)
        } else {
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors());
app.use(cors(corsOptions));


app.get('/api/', (req, res) => {
    anime.find()
        .then(data => {
            // res.header("Access-Control-Allow-Origin", "*");
            res.json(data);
        })
});

// --> Add this
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build/static', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Web at localhost:${port}`);
});
