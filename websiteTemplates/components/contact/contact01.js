module.exports = (data, index) => {
  const html = `
    <!-- Contact01 start -->
    <section class="contact01">
      <h2>${data.sectionTitle}</h2>
      <div class="contact01-container">
      ${data.contacts
        .map((contact) => {
          return `
        <div class="contact01-text-container">
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
    <!-- Contact01 end -->
    `;

  const css = `
    /* Contact01 start */
    .contact01 {
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
      text-align: center;
      padding: 2rem 1rem;
    }

    .contact01-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1080px;
      margin: 0 auto;
      gap: 2rem;
    }

    .contact01-text-container {
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

    .contact01 h2 {
      color: var(--primaryColor);
      margin-bottom: 1rem;
    }
    /* Contact01 end */
    `;

  const javaScript = `
    // Contact01 start
    // Contact01 end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
