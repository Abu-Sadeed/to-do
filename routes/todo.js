const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo');

router.get('/list', todoController.listTodo);

module.exports = router;
