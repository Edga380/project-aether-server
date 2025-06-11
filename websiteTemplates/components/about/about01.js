module.exports.contact01 = () => {
  const html = `
    <section class="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
        <p>Phone: 000000000</p>
    </section>
    `;

  const css = `
    .contact {
    background-color: rgba(60, 60, 60, 1);
    color: rgba(250, 250, 250, 1);
    padding: 2rem;
    text-align: center;
    }

    .contact h2 {
    margin-bottom: 1rem;
    }

    .contact p {
    margin-bottom: 1rem;
    }

    .contact a {
    color: rgba(250, 250, 250, 1);
    text-decoration: underline;
    }
    `;

  return { html: html.trim(), css: css.trim() };
};
