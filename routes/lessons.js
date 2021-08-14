const express = require("express");
const router = express.Router();
const lessonsHandler = require("./handler/lessons");
const verifyToken = require("../middlewares/verifyToken");

router.post("/", lessonsHandler.create);
router.put("/:id", lessonsHandler.update);
router.delete("/:id", lessonsHandler.destroy);

router.get("/:id", lessonsHandler.get);
router.get("/", lessonsHandler.getAll);

module.exports = router;
