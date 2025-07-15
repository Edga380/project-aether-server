module.exports = (data, index) => {
  const html = `
    <!-- Footer01 start -->
    <footer class="footer01">
      <p>&#169; ${new Date().getFullYear()} Made with <a href="/">Aether Project</a>.<br class="footer01-new-line">&nbsp;All rights reserved.</p>
    </footer>
    <!-- Footer01 end -->
    `;

  const css = `
    /* Footer01 start */
    .footer01 {
      background-color: var(--bgAltColor);
      color: var(--textColor);
      display: inline-flex;
      justify-content: center;
      width: 100%;
      padding: 2rem 0;
      font-family: "Courier New", Courier, monospace;
    }
    .footer01 a {
      color: var(--textColor);
      padding-left: 0.5rem;
    }
    .footer01 a:hover {
      color: var(--textColor);
    }
    @media (max-width: 480px) {
      .footer01 {
      text-align: center;
      }
      .footer01-new-line {
        display: block;
      }
    }

    @media (min-width: 481px) {
      .footer01-new-line {
        display: none;
      }
    }
    /* Footer01 end */
    `;

  const javaScript = `
    // Footer01 start
    // Footer01 end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
