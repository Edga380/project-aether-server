module.exports = () => {
  const html = `
    <!-- About start -->
    <section class="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
        <p>Phone: 000000000</p>
    </section>
    <!-- About end -->
    `;

  const css = `
    /* About start */
    .contact {
    background-color: var(--bgAltColor);
    color: rgba(250, 250, 250, 1);
    padding: 2rem;
    text-align: center;
    }

    .contact h2 {
    color: var(--primaryColor);
    margin-bottom: 1rem;
    }

    .contact p {
    color: var(--textColor);
    margin-bottom: 1rem;
    }

    .contact a {
    color: var(--secondaryColor);
    text-decoration: underline;
    }
    /* About end */
    `;

  const javaScript = ``;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
