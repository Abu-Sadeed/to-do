const express = require('express');

var app = express();

app.get('/api', (req, res) => {
    res.send('Hello Mother fucker');
})

app.listen(6969);