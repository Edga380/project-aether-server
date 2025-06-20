module.exports = () => {
  const html = `
    <!-- Footer start -->
    <footer>
        Made with 
        <a href="/">Aether Project</a>
    </footer>
    <!-- Footer end -->
    `;

  const css = `
    /* Footer start */
    footer {
        background-color: var(--bgAltColor);
        color: var(--textColor);
        display: inline-flex;
        justify-content: center;
        width: 100%;
        padding: 2rem 0;
        font-family: "Courier New", Courier, monospace;
    }
    footer a {
        color: var(--textColor);
        padding-left: 0.5rem;
    }
    footer a:hover {
        color: var(--textColor);
    }
    /* Footer end */
    `;

  const javaScript = ``;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
