const express = require("express");
const router = express.Router();
const { createWebsite } = require("../../controllers/websiteController");

router.post("create", createWebsite);

module.exports = router;
