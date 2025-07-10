module.exports = (data) => {
  const html = `
    <!-- Contact start -->
    <section class="contact">
      <h2>Contact</h2>
      <div>
        <p>${data[0].nameSurname}</p>
        <p>${data[0].email}</p>
        <p>${data[0].number}</p>
      </div>
    </section>
    <!-- Contact end -->
    `;

  const css = `
    /* Contact start */
    .contact {
      padding: 4rem 2rem;
      text-align: center;
      background-color: var(--bgAltColor);
      display: flex;
      flex-direction: column;
    }

    .contact div {
      background-color: var(--cardBg);
      margin: 0 auto;
      padding: 1rem 4rem 0.5rem 4rem;
      box-shadow: 0 0 0.25rem rgba(20, 20, 20, 1);
      border-radius: 0.5rem;
    }

    .contact h2 {
      color: var(--primaryColor);
      margin-bottom: 1rem;
    }

    .contact p {
      color: var(--textColor);
      margin-bottom: 1rem;
    }
    /* Contact end */
    `;

  const javaScript = `
    // Contact start
    // Contact end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
