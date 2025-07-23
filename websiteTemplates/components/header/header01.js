module.exports = (data, index) => {
  const html = `
    <!-- Header-${index} start -->
    <header class="header-${index}">
        <h1>${data[0].main}</h1>
        <p>${data[0].paragraph}</p>
    </header>
    <!-- Header-${index} end -->
    `;

  const css = `
    /* Header-${index} start */
    .header-${index} {
      background-image: var(--header-background);
      text-align: center;
    }
    .header-${index} h1 {
      font-size: 3rem;
      padding: 6rem 0 1rem 0;
    }
    .header-${index} p {
      font-size: 1.2rem;
      padding: 0 0 6rem 0;
    }
    /* Header-${index} end */
    `;

  const javaScript = `
    // Header-${index} start
    // Header-${index} end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
