const path = require("path");
const messagesList = [];
const chatTemplate = (req,res)=>{

  res.render('chat');

}

const postMessages = (req,res)=>{
    messagesList.push(req.body);
    res.sendStatus(200);
}

const getMessages = (req,res)=>{

    res.send(JSON.stringify(messagesList));
}
module.exports = {
    chatTemplate:chatTemplate,
    postMessages:postMessages,
    getMessages:getMessages
};