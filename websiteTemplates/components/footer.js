exports.footer01 = () => {
  const html = `
    <footer>
        Made with 
        <a href="/">Aether Project</a>
    </footer>
    `;

  const css = `
    footer {
        background-color: rgba(60, 60, 60, 1);
        color: rgba(250, 250, 250, 1);
        display: inline-flex;
        justify-content: center;
        width: 100%;
        padding: 2rem 0;
        font-family: "Courier New", Courier, monospace;
    }
    footer a {
        color: rgba(250, 250, 250, 1);
        padding-left: 0.5rem;
    }
    footer a:hover {
        color: rgba(210, 210, 210, 1);
    }
    `;

  return { html: html.trim(), css: css.trim() };
};
