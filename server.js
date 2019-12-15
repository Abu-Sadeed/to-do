const express = require('express');

const PORT = process.env.PORT || 6969;
var app = express();

const todoRoutes = require('./routes/todo');

app.use('/todo', todoRoutes);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
