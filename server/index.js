const port = 8000;
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('ok NEW');
});

app.listen(process.env.PORT || port, () => {
    console.log(`Web at NEW new new localhost:${port}`);
});
