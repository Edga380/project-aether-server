module.exports = (data) => {
  const html = `
    <!-- Card start -->
    <!-- Card end -->
    `;

  const css = `
    /* Card start */
    /* Card end */
    `;

  const javaScript = `
    // Card start
    // Card end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
