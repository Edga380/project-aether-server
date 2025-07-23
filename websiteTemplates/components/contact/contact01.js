module.exports = (data, index) => {
  const html = `
    <!-- Contact-${index} start -->
    <section class="contact-${index}">
      <h2>${data.sectionTitle}</h2>
      <div class="contact-${index}-container">
      ${data.contacts
        .map((contact) => {
          return `
        <div class="contact-${index}-text-container">
          <p>${contact.position}</p>
          <p>${contact.nameSurname}</p>
          <p>${contact.email}</p>
          <p>${contact.number}</p>
        </div>
        `;
        })
        .join("")}
      </div>
    </section>
    <!-- Contact-${index} end -->
    `;

  const css = `
    /* Contact-${index} start */
    .contact-${index} {
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
      text-align: center;
      padding: 2rem 1rem;
    }

    .contact-${index}-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1080px;
      margin: 0 auto;
      gap: 2rem;
    }

    .contact-${index}-text-container {
      background-color: var(--cardBg);
      display: flex;
      flex-direction: column;
      width: auto;
      height: auto;
      box-shadow: 0 0 0.25rem rgba(20, 20, 20, 1);
      border-radius: 0.5rem;
      gap: 1rem;
      padding: 1rem 4rem;
    }

    .contact-${index} h2 {
      color: var(--primaryColor);
      margin-bottom: 1rem;
    }
    /* Contact-${index} end */
    `;

  const javaScript = `
    // Contact-${index} start
    // Contact-${index} end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
