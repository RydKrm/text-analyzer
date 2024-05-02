const express = require('express');
const textRouter = express.Routes();
const text = require('../controllers/textController');

textRouter.post("/addText", text.addText);

module.exports = textRouter;