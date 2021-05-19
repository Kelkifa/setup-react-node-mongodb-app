const port = 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('ok');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Web at localhost:${port}`);
});