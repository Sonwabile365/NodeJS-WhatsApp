/* These are the verify webhook tokens. Don't touch unless necessary */
const express = require("express");
const router = express.Router();
const whatsAppController = require("../controllers/whatsappControllers");
const path = require('path');
const { spawn } = require('child_process');

router
.get("/", whatsAppController.VerifyToken)
.post("/", whatsAppController.ReceivedMessage)

router.get("/token", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

// Assuming you're using Express.js
router.get('/execute-python', (req, res) => {
    var dataToSend;
    const python = spawn('python', ['get-tokens.py']);
  
    python.stdout.on('data', function(data){
      console.log('Pipe data from python script...');
      dataToSend = data.toString();
    });
  
    python.on('close', (code) => {
      console.log(`Child process close all stdio with code ${code}`);
      console.log(dataToSend);
    });
  });
  

module.exports = router;