exports.navBar01 = (links) => {
  const html = `
    <nav>
      ${links
        .map((link) => {
          const href = link === "home" ? "/" : `/${link}`;
          return `<a href="${href}">${
            link.charAt(0).toUpperCase() + link.slice(1)
          }</a>`;
        })
        .join("")}
    </nav>
    `;

  const css = `
    }
    nav {
      background-color: rgba(60, 60, 60, 1);
      display: flex;
      position: relative;
      justify-content: center;
      width: 100%;
      padding: 1rem 0 1rem 0;
    }
    nav a {
      text-decoration: none;
      color: rgba(250, 250, 250, 1);
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: large;
      font-family: "Courier New", Courier, monospace;
    }
    nav a:hover {
      background-color: rgba(0, 0, 0, 1);
      color: rgba(230, 230, 230, 1);
    }
    `;

  return { html: html.trim(), css: css.trim() };
};
