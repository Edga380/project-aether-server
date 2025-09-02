const {
  updateUserTemplateColorPalette,
} = require("../utils/updateUserTemplateColorPalette");

exports.generateTemplate = (templateData, requestedPage) => {
  const contentData = templateData.content;
  const colorPalette = templateData.colorPalette;
  const pageToGenerate =
    requestedPage === "/"
      ? "index"
      : requestedPage.toString().slice(1, requestedPage.length);

  if (!contentData[pageToGenerate]) {
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

  css = updateUserTemplateColorPalette(colorPalette, css);

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

  const storedComponentIndexes = [];
  for (const key in contentData[pageToGenerate]) {
    contentData[pageToGenerate][key].forEach((componentArray) => {
      storedComponentIndexes.push(componentArray.index);
    });
  }

  storedComponentIndexes.sort((a, b) => a - b);

  for (let i = 0; i < storedComponentIndexes.length; i++) {
    const componentIndex = storedComponentIndexes[i];
    for (const key in contentData[pageToGenerate]) {
      const foundComponent = contentData[pageToGenerate][key].find(
        (component) => component.index === componentIndex
      );
      if (foundComponent) {
        const componentFunction = require(`../../websiteTemplates/components/${key}/${foundComponent.component}`);

        const componentData = componentFunction(
          foundComponent.data,
          foundComponent.index
        );

        html += componentData.html;
        css += componentData.css;
        javascript += componentData.javascript;
      }
    }
  }

  const htmlPage = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <title>${templateData.name}</title>
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

exports.generateInitialUserWebsite = (templateData) => {
  const { content, colorPalette } = templateData;
  const htmlPages = {};
  const css = new Set();
  const javascript = new Set();

  css.add(
    `* {
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
    }`
  );

  for (const pageKey in content) {
    const storedComponentIndexes = [];
    for (const key in content[pageKey]) {
      content[pageKey][key].forEach((componentArray) => {
        storedComponentIndexes.push(componentArray.index);
      });
    }

    storedComponentIndexes.sort((a, b) => a - b);

    for (let i = 0; i < storedComponentIndexes.length; i++) {
      const componentIndex = storedComponentIndexes[i];
      for (const key in content[pageKey]) {
        const foundComponent = content[pageKey][key].find(
          (component) => component.index === componentIndex
        );
        if (foundComponent) {
          const componentFunction = require(`../../websiteTemplates/components/${key}/${foundComponent.component}`);

          const componentData = componentFunction(
            foundComponent.data,
            foundComponent.index
          );

          if (htmlPages[pageKey]) {
            htmlPages[pageKey] += componentData.html;
          } else {
            htmlPages[pageKey] = componentData.html;
          }

          if (!css.has(componentData.css)) {
            css.add(componentData.css);
          }

          if (!javascript.has(componentData.javascript)) {
            javascript.add(componentData.javascript);
          }
        }
      }
    }
  }

  const addedHtmlToPages = Object.entries(htmlPages).map((page) => [
    page[0],
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Creative Portfolio</title>
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
      ${page[1]}
      <script src="./script.js"></script>
      </body>
    </html>`,
  ]);

  let cssData = Array.from(css).join("\n");

  cssData = updateUserTemplateColorPalette(colorPalette, cssData);

  return {
    htmlPagesData: Object.fromEntries(addedHtmlToPages),
    cssData: cssData,
    javascriptData: Array.from(javascript).join("\n"),
  };
};
