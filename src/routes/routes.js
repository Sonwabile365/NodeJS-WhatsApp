/* These are the verify webhook tokens. Don't touch unless necessary */
const express = require("express");
const router = express.Router();
const whatsAppController = require("../controllers/whatsappControllers");

router
.get("/", whatsAppController.VerifyToken)
.post("/", whatsAppController.ReceivedMessage)

module.exports = router;