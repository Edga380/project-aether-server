const express = require("express");
const router = express.Router();
const { getCollection } = require("../../../database/database");
const { ObjectId } = require("mongodb");
const { createInitialWebsite } = require("../../services/fileService");

router.post("/", async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "User Id is required" });
  }

  try {
    const usersCollection = await getCollection("users");
    if (!usersCollection)
      return res.status(502).json({ error: "Server error" });

    const query = { _id: ObjectId.createFromHexString(userId) };

    const options = {
      projection: { template: 1, subdomain: 1 },
    };

    const userData = await usersCollection.findOne(query, options);

    if (!userData) return res.status(502).json({ error: "Server error" });

    const response = createInitialWebsite(
      userData.subdomain,
      userData.template
    );

    if (response) {
      return res.status(200).json({ message: "Website created successfully!" });
    }
    return res.status(502).json({ error: "Server error" });
  } catch (error) {
    console.error("Server error: ", error);
  }

  return res.status(200).json({ message: "Website created successfully!" });
});

module.exports = router;
