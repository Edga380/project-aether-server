module.exports = (req, res, next) => {
  const { userId, html, css, js } = req.body;
  if (!userId || !html || !css || !js) {
    return res.status(400).json({ message: "Invalid request data" });
  }
  next();
};
