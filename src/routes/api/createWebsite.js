const express = require("express");
const router = express.Router();
const { getCollection } = require("../../../database/database");
const { ObjectId } = require("mongodb");
const { createInitialWebsite } = require("../../services/fileService");

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

    const query = { _id: ObjectId.createFromHexString(userId) };

    const options = {
      projection: { template: 1, subdomain: 1 },
    };

    const userData = await usersCollection.findOne(query, options);

    console.log(userData);
    if (!userData) return res.status(502).json({ error: "Server error" });

    const response = await createInitialWebsite(
      userData.subdomain,
      userData.template
    );

    console.log(response);
  } catch (error) {
    console.error("Failed to get usersCollection: ", error);
  }

  return res.status(200).json({ message: "Website created successfully!" });
});

module.exports = router;
