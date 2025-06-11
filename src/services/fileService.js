const fs = require("fs");
const path = require("path");

exports.createWebsiteFiles = async (userId, page, html, css, js) => {
  const userPath = path.join(__dirname, "../../userWebsites", userId);

  await Promise.all(() => {
    fs.mkdir(userPath, { recursive: true });

    fs.writeFile(path.join(userPath, `${page}.html`), html);
    fs.writeFile(path.join(userPath, "style.css"), css);
    fs.writeFile(path.join(userPath, "script.js"), js);
  });
};

exports.createInitialWebsite = async (subdomain, templateData) => {
  const userPath = path.join(__dirname, "../../userWebsites", subdomain);
  const initialWebsitePath = path.join(
    __dirname,
    "../../websiteTemplates",
    templateData.name
  );

  const websiteFiles = fs.readdirSync(initialWebsitePath);

  const websiteFilesNames = websiteFiles.map((websiteFile) => websiteFile);

  if (!websiteFilesNames)
    throw new Error("Failed to read website file names", websiteFilesNames);

  if (!fs.existsSync(userPath)) {
    fs.mkdirSync(userPath);
  }

  websiteFilesNames.forEach((websiteFileName) => {
    fs.copyFile(
      path.join(initialWebsitePath, `/${websiteFileName}`),
      path.join(userPath, `/${websiteFileName}`),
      fs.constants.COPYFILE_FICLONE,
      (error) => {
        if (error) {
          console.error(error);
        } else {
          console.log(`File ${websiteFileName} copied successfully.`);
        }
      }
    );
  });

  return true;
};
