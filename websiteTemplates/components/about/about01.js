module.exports = (data) => {
  const html = `
    <!-- About start -->
      <section class="about" id="about">
        <h2>${data[0].header}</h2>
        <p>${data[0].paragraph}</p>
      </section>
    <!-- About end -->
    `;

  const css = `
    /* About start */
    .about {
      padding: 4rem 2rem;
      text-align: center;
      background-color: var(--bgAltColor);
    }

    .about h2 {
      color: var(--primaryColor);
      margin-bottom: 1rem;
    }

    .about p {
      max-width: 700px;
      margin: 0 auto;
      color: var(--textColor);
    }
    /* About end */
    `;

  const javaScript = `
    // About start
    // About end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
