module.exports = (data, index) => {
  const html = `
    <!-- About01 start -->
      <section class="about01" id="about01">
        <h2>${data[0].header}</h2>
        <p>${data[0].paragraph}</p>
      </section>
    <!-- About01 end -->
    `;

  const css = `
    /* About01 start */
    .about01 {
      padding: 2rem 1rem;
      text-align: center;
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
    }

    .about01 h2 {
      color: var(--primaryColor);
      margin-bottom: 1rem;
    }

    .about01 p {
      max-width: 700px;
      margin: 0 auto;
      color: var(--textColor);
    }
    /* About01 end */
    `;

  const javaScript = `
    // About01 start
    // About01 end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
