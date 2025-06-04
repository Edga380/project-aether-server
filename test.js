const { createWebsiteFiles } = require("./src/services/fileService");

const testCreateWebsite = () => {
  const userData = {
    userId: "userId1",
    subdomain: "user1",
    pages: {
      index: {
        components: [
          {
            type: "navBar",
            name: "navBar01",
            content: { links: ["home", "about", "projects", "contact"] },
          },
          {
            type: "header",
            name: "header01",
            content: {
              title: "Welcome to My website",
              subtitle:
                "Explore my projects and contact me for collaborations.",
            },
          },
          {
            type: "footer",
            name: "footer01",
            content: { links: ["home", "about", "projects", "contact"] },
          },
        ],
      },
      about: {
        components: [
          {
            type: "navBar",
            name: "navBar01",
            content: { links: ["home", "about", "projects", "contact"] },
          },
          {
            type: "header",
            name: "header01",
            content: {
              title: "About me",
              subtitle: "Learn more about my background and experiences.",
            },
          },
          {
            type: "footer",
            name: "footer01",
            content: { links: ["home", "about", "projects", "contact"] },
          },
        ],
      },
    },
  };

  Object.entries(userData.pages).forEach(([pageName, pageData]) => {
    const navBarFile = require(`./websiteTemplates/components/navBar`);
    const headerFile = require("./websiteTemplates/components/header");
    const footerFile = require("./websiteTemplates/components/footer");

    const navBarComponent = pageData.components.find(
      (component) => component.type === "navBar"
    );
    const headerComponent = pageData.components.find(
      (component) => component.type == "header"
    );
    const footerComponent = pageData.components.find(
      (component) => component.type == "footer"
    );

    const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${pageName}</title>
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        ${navBarFile[navBarComponent.name](navBarComponent.content.links).html}
        ${headerFile[headerComponent.name](headerComponent.content).html}
        ${footerFile[footerComponent.name](footerComponent.content).html}
      </body>
    </html>`;

    const css = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

    ${navBarFile[navBarComponent.name](navBarComponent.content.links).css}
    ${headerFile[headerComponent.name](headerComponent.content).css}
    ${footerFile[footerComponent.name](footerComponent.content).css}
    `;

    const js = `console.log('Hello, test!');`;

    // Directly invoke the function
    createWebsiteFiles("user2", pageName, html.trim(), css, js);
  });
};

// Run the test
testCreateWebsite();
