const {
  createWebsiteFiles,
  updateTemplateColorPalette,
} = require("../services/fileService");

exports.generateTemplate = (data, colorPalette, page) => {
  const pageToGenerate =
    page === "/" ? "index" : page.toString().slice(1, page.length);

  if (!data[pageToGenerate]) {
    return undefined;
  }

  let html = "";
  let css = `
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  :root {
    --header-background: linear-gradient(
      135deg,
      var(--primaryColor),
      var(--secondaryColor)
    );
    --primaryColor: rgba(255, 69, 0, 1);
    --secondaryColor: rgba(255, 160, 122, 1);
    --bgColor: rgba(20, 20, 20, 1);
    --bgAltColor: rgba(30, 30, 30, 1);
    --textColor: rgba(255, 235, 205, 1);
    --cardBg: rgba(45, 45, 45, 1);
    --hoverBg: var(--primaryColor);
  }

  body {
    font-family: "Arial", sans-serif;
    line-height: 1.6;
    background-color: var(--bgColor);
    color: var(--textColor);
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  `;

  css = updateTemplateColorPalette(colorPalette, css);

  let javascript = `
  function applyColorSchema(colorSchema) {
    Object.keys(colorSchema).forEach((key) => {
      document.documentElement.style.setProperty("--" + key, colorSchema[key]);
    });
  }

  window.addEventListener("message", (event) => {
    if (event.origin !== "http://localhost:3000") return;

    if (event.data.colorSchema) {
      applyColorSchema(event.data.colorSchema);
    }
  });
  `;

  for (const key in data[pageToGenerate]) {
    const componentFunction = require(`../../websiteTemplates/components/${key}/${data[pageToGenerate][key].component}`);

    const componentData = componentFunction(data[pageToGenerate][key].data);

    html += componentData.html ? componentData.html : "";
    css += componentData.css ? componentData.css : "";
    javascript += componentData.javascript ? componentData.javascript : "";
  }

  const htmlPage = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Creative Portfolio</title>
      </head>
      <body>
      <style>
      ${css}
      </style>
      ${html}
      <script>
      ${javascript}
      </script>
      </body>
    </html>
  `;

  return htmlPage;
};

exports.createWebsite = async (req, res) => {
  const { userId, html, css, js } = req.body;

  try {
    await createWebsiteFiles(userId, html, css, js);
  } catch (error) {
    res.status(500).json({ message: "Failed to create website", error });
  }
};
