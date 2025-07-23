module.exports = (data, index) => {
  const html = `
    <!-- Card-${index} start -->
    <section class="card-${index}">
      <h2>${data.sectionTitle}</h2>
      <div class="card-${index}-container">
        ${data.cards
          .map((cardData) => {
            return `
        <div class="card-${index}-card">
          <div class="card-${index}-img-container">
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
          <div class="card-${index}-text-container">
            <h3>${cardData.title}</h3>
            <p>${cardData.paragraph}</p>
          </div>
        </div>`;
          })
          .join("")}
      </div>
    </section>
    <!-- Card-${index} end -->
    `;

  const css = `
    /* Card-${index} start */
    .card-${index} {
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
      text-align: center;
      padding: 2rem 1rem;
    }

    .card-${index}-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1080px;
      margin: 0 auto;
      gap: 2rem;
    }

    .card-${index}-card {
      background-color: var(--cardBg);
      display: flex;
      flex-direction: column;
      width: 20rem;
      height: auto;
      box-shadow: 0 0 0.25rem rgba(20, 20, 20, 1);
      border-radius: 0.5rem;
      overflow: hidden;
    }

    .card-${index}-text-container {
      padding: 0.5rem 1rem 1rem 1rem;
    }

    .card-${index} h2 {
      color: var(--primaryColor);
      margin-bottom: 1rem;
    }

    .card-${index}-img-container {
      width: inherit;
      height: 15rem;
    }

    .card-${index}-img-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    /* Card-${index} end */
    `;

  const javaScript = `
    // Card-${index} start
    // Card-${index} end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
