const { createWebsiteFiles } = require("../services/fileService");

exports.createWebsite = async (req, res) => {
  const { userId, html, css, js } = req.body;

  try {
    await createWebsiteFiles(userId, html, css, js);
  } catch (error) {
    res.status(500).json({ message: "Failed to create website", error });
  }
};
