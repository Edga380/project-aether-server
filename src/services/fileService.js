const fs = require("fs").promises;
const path = require("path");

exports.createWebsiteFiles = async (userId, page, html, css, js) => {
  const userPath = path.join(__dirname, "../../userWebsites", userId);

  await fs.mkdir(userPath, { recursive: true });

  await fs.writeFile(path.join(userPath, `${page}.html`), html);
  await fs.writeFile(path.join(userPath, "style.css"), css);
  await fs.writeFile(path.join(userPath, "script.js"), js);
};

exports.createInitialWebsite = async (subdomain, templateData) => {
  const userPath = path.join(__dirname, "../../userWebsites", subdomain);
  const initialWebsitePath = path.join(
    __dirname,
    "../../websiteTemplates",
    templateData.name
  );

  const websiteFiles = await fs.readdir(initialWebsitePath, (error, files) => {
    if (error) {
      console.error(
        "Failed to read files from 'WebsiteTemplates' folder: ",
        error
      );
      return false;
    }
    return files.map((file) => file);
  });

  console.log(websiteFiles);

  return websiteFiles;

  //await fs.mkdir(userPath, {recursive: true});

  //await fs.copyFile()
};
