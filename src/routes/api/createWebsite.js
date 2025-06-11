const express = require("express");
const router = express.Router();
const { getCollection } = require("../../../database/database");

router.post("/", async (req, res) => {
  console.log(req.body);
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "User Id is required" });
  }

  try {
    const usersCollection = await getCollection("users");
    if (!usersCollection)
      return res.status(502).json({ error: "Server error" });
  } catch (error) {
    console.error("Failed to get usersCollection: ", error);
  }

  return res.status(200).json({ message: "Website created successfully!" });
});

module.exports = router;
