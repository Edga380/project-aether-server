module.exports.header01 = (content) => {
  const html = `
    <!-- Header start -->
    <header>
        <h1>${content.title}</h1>
        <p>${content.subtitle}</p>
    </header>
    <!-- Header end -->
    `;

  const css = `
    /* Header start */
    header {
        background-image: linear-gradient(90deg, red, yellow);
        text-align: center;
    }
    header h1 {
        padding: 6rem 0 1rem 0;
    }
    header p {
        padding: 0 0 6rem 0;
    }
    /* Header end */
    `;

  return { html: html.trim(), css: css.trim() };
};
