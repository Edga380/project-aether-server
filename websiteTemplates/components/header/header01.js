module.exports = (data) => {
  const html = `
    <!-- Header start -->
    <header>
        <h1>${data[0].main}</h1>
        <p>${data[0].paragraph}</p>
    </header>
    <!-- Header end -->
    `;

  const css = `
    /* Header start */
    header {
      background-image: var(--header-background);
      text-align: center;
    }
    header h1 {
      font-size: 3rem;
      padding: 6rem 0 1rem 0;
    }
    header p {
      font-size: 1.2rem;
      padding: 0 0 6rem 0;
    }
    /* Header end */
    `;

  const javaScript = `
    // Header start
    // Header end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
