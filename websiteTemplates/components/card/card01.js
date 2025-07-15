module.exports = (data, index) => {
  const html = `
    <!-- Card01 start -->
    <section class="card01">
      <h2>${data.sectionTitle}</h2>
      <div class="card01-container">
        ${data.cards
          .map((cardData) => {
            return `
        <div class="card01-card">
          <div class="card01-img-container">
            <img
              src="${
                cardData.imageUrl
                  ? `${cardData.imageUrl}`
                  : "https://aether-project-template-assets-bucket.s3.eu-west-2.amazonaws.com/assets/imageNotFound.png"
              }"
              alt="${
                cardData.imageUrl
                  ? `${cardData.imageUrl}`
                  : "https://aether-project-template-assets-bucket.s3.eu-west-2.amazonaws.com/assets/imageNotFound.png"
              }"
            />
          </div>
          <div class="card01-text-container">
            <h3>${cardData.title}</h3>
            <p>${cardData.paragraph}</p>
          </div>
        </div>`;
          })
          .join("")}
      </div>
    </section>
    <!-- Card01 end -->
    `;

  const css = `
    /* Card01 start */
    .card01 {
      background-color: var(${index % 0 ? "--bgColor" : "--bgAltColor"});
      text-align: center;
      padding: 2rem 1rem;
    }

    .card01-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1080px;
      margin: 0 auto;
      gap: 2rem;
    }

    .card01-card {
      background-color: var(--cardBg);
      display: flex;
      flex-direction: column;
      width: 20rem;
      height: auto;
      box-shadow: 0 0 0.25rem rgba(20, 20, 20, 1);
      border-radius: 0.5rem;
      overflow: hidden;
    }

    .card01-text-container {
      padding: 0.5rem 1rem 1rem 1rem;
    }

    .card01 h2 {
      color: var(--primaryColor);
      margin-bottom: 1rem;
    }

    .card01-img-container {
      width: inherit;
      height: 15rem;
    }

    .card01-img-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    /* Card01 end */
    `;

  const javaScript = `
    // Card01 start
    // Card01 end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
