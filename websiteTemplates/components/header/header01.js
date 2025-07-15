module.exports = (data, index) => {
  const html = `
    <!-- Header01 start -->
    <header class="header01">
        <h1>${data[0].main}</h1>
        <p>${data[0].paragraph}</p>
    </header>
    <!-- Header01 end -->
    `;

  const css = `
    /* Header01 start */
    .header01 {
      background-image: var(--header-background);
      text-align: center;
    }
    .header01 h1 {
      font-size: 3rem;
      padding: 6rem 0 1rem 0;
    }
    .header01 p {
      font-size: 1.2rem;
      padding: 0 0 6rem 0;
    }
    /* Header01 end */
    `;

  const javaScript = `
    // Header01 start
    // Header01 end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
