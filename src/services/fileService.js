const fs = require("fs");
const path = require("path");
const {
  generateInitialUserWebsite,
} = require("../controllers/websiteController");

exports.createInitialWebsite = async (templateData) => {
  const userPath = path.join(
    __dirname,
    "../../userWebsites",
    templateData.subdomain
  );

  if (!fs.existsSync(userPath)) {
    fs.mkdirSync(userPath);
  }

  const userWebsiteStructure = generateInitialUserWebsite(templateData);

  for (const key in userWebsiteStructure.htmlPagesData) {
    fs.writeFileSync(
      userPath + `/${key}.html`,
      userWebsiteStructure.htmlPagesData[key]
    );
  }

  fs.writeFileSync(userPath + `/style.css`, userWebsiteStructure.cssData);

  fs.writeFileSync(
    userPath + `/script.js`,
    userWebsiteStructure.javascriptData
  );

  return true;
};
