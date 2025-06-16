const { getCollection } = require("./database");

exports.getTemplateData = async (name) => {
  try {
    const templatesCollection = await getCollection("templates");
    if (!templatesCollection)
      return res.status(502).json({ error: "Server error" });

    const query = { name: name };

    const options = { projection: { content: 1 } };

    const templateData = await templatesCollection.findOne(query, options);

    if (!templateData) return res.status(502).json({ error: "Server error" });

    return templateData;
  } catch (error) {
    console.error("Error fetching template data", error);
  }
};
