const express = require('express');
const chat = express.Router();

const {chatTemplate,getMessages,postMessages} = require("../controller/Chat")

chat.get("/chat",chatTemplate);

chat.post('/messages',postMessages)

chat.get('/getmessages',getMessages);

module.exports = chat;