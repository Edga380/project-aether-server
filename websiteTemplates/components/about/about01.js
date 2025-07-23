module.exports = (data, index) => {
  const html = `
    <!-- About-${index} start -->
      <section class="about-${index}" id="about-${index}">
        <h2>${data[0].header}</h2>
        <p>${data[0].paragraph}</p>
      </section>
    <!-- About-${index} end -->
    `;

  const css = `
    /* About-${index} start */
    .about-${index} {
      padding: 2rem 1rem;
      text-align: center;
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
    }

    .about-${index} h2 {
      color: var(--primaryColor);
      margin-bottom: 1rem;
    }

    .about-${index} p {
      max-width: 700px;
      margin: 0 auto;
      color: var(--textColor);
    }
    /* About-${index} end */
    `;

  const javaScript = `
    // About-${index} start
    // About-${index} end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
