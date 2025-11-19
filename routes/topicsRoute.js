const express = require("express");
const router = express.Router();
const { getTopics } = require("../controllers/topicsController");

// GET /api/topics?search=react&sort=name
router.get("/topics", getTopics);

module.exports = router;
