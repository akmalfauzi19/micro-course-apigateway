const express = require("express");
const router = express.Router();
const orderPaymentkHandler = require("./handler/order-payment");

router.get("/", orderPaymentkHandler.getOrders);

module.exports = router;
