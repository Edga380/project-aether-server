module.exports = (data, index) => {
  const html = `
    <!-- Footer-${index} start -->
    <footer class="footer-${index}">
      <p>&#169; ${new Date().getFullYear()} Made with <a href="/">Aether Project</a>.<br class="footer01-new-line">&nbsp;All rights reserved.</p>
    </footer>
    <!-- Footer-${index} end -->
    `;

  const css = `
    /* Footer-${index} start */
    .footer-${index} {
      background-color: var(--bgAltColor);
      color: var(--textColor);
      display: inline-flex;
      justify-content: center;
      width: 100%;
      padding: 2rem 0;
      font-family: "Courier New", Courier, monospace;
    }
    .footer-${index} a {
      color: var(--textColor);
      padding-left: 0.5rem;
    }
    .footer-${index} a:hover {
      color: var(--textColor);
    }
    @media (max-width: 480px) {
      .footer-${index} {
      text-align: center;
      }
      .footer-${index}-new-line {
        display: block;
      }
    }

    @media (min-width: 481px) {
      .footer-${index}-new-line {
        display: none;
      }
    }
    /* Footer-${index} end */
    `;

  const javaScript = `
    // Footer-${index} start
    // Footer-${index} end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
