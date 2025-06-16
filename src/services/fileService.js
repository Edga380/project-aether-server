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
  const mockWebsitePath = path.join(
    __dirname,
    "../../websiteTemplates",
    templateData.name
  );

  const websiteFilesNames = fs.readdirSync(mockWebsitePath);

  if (!websiteFilesNames || websiteFilesNames.length === 0)
    throw new Error("Failed to read website file names or no files found");

  if (!fs.existsSync(userPath)) {
    fs.mkdirSync(userPath);
  }

  const copeWebsiteFilesPromises = websiteFilesNames.map((websiteFileName) => {
    fs.copyFile(
      path.join(mockWebsitePath, `/${websiteFileName}`),
      path.join(userPath, `/${websiteFileName}`),
      fs.constants.COPYFILE_FICLONE,
      (error) => {
        if (error) {
          console.error(error);
        }
      }
    );
  });

  await Promise.all(copeWebsiteFilesPromises);

  this.updateUserTemplateColorPalette(userPath, templateData.colorPalette);

  return true;
};

exports.updateUserTemplateColorPalette = (userPath, colorPalette) => {
  const parseColorPalette = JSON.parse(colorPalette);

  const cssFileData = fs.readFileSync(
    path.join(userPath, "style.css"),
    "utf-8"
  );

  let updatedCssFileData = cssFileData;

  for (const key in parseColorPalette) {
    const regex = new RegExp(
      `--${key}: rgba\\(\\d{1,3}, \\d{1,3}, \\d{1,3}, (0(\\.\\d+)?|1(\\.0+)?)\\);`
    );

    updatedCssFileData = updatedCssFileData.replace(
      regex,
      `--${key}: ${parseColorPalette[key]};`
    );
  }

  fs.writeFileSync(`${userPath}/style.css`, updatedCssFileData);
};

exports.updateTemplateColorPalette = (colorPalette, cssData) => {
  const parseColorPalette = JSON.parse(colorPalette);

  let updatedCssData = cssData;

  for (const key in parseColorPalette) {
    const regex = new RegExp(
      `--${key}: rgba\\(\\d{1,3}, \\d{1,3}, \\d{1,3}, (0(\\.\\d+)?|1(\\.0+)?)\\);`
    );

    updatedCssData = updatedCssData.replace(
      regex,
      `--${key}: ${parseColorPalette[key]};`
    );
  }

  return updatedCssData;
};
