const fs = require("fs").promises;
const path = require("path");

exports.createWebsiteFiles = async (userId, page, html, css, js) => {
  const userPath = path.join(__dirname, "../../userWebsites", userId);

  console.log(userPath);

  await fs.mkdir(userPath, { recursive: true });

  await fs.writeFile(path.join(userPath, `${page}.html`), html);
  await fs.writeFile(path.join(userPath, "style.css"), css);
  await fs.writeFile(path.join(userPath, "script.js"), js);
};
