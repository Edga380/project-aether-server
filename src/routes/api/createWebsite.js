const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }
  console.log(`Received user ID: ${userId}`);
  res.json({ message: `Received create website request from user: ${userId}` });
});

module.exports = router;
