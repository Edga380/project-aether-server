module.exports = (data, index) => {
  const html = `
    <!-- Navigation01 start -->
    <nav class="navigation01" id="mobile-navigation">
      <button
        onclick="toggleMobileMenu()"
        type="button"
        style="
          display: flex;
          flex-direction: column;
          background-color: transparent;
          border: none;
          gap: 0.4rem;
          margin-left: auto;
          margin-right: 1rem;
        "
      >
        <span
          class="navigation01-burger-menu-line"
          style="width: 2rem; height: 0.3rem; border-radius: 1rem"
        ></span>
        <span
          class="navigation01-burger-menu-line"
          style="width: 2rem; height: 0.3rem; border-radius: 1rem"
        ></span>
        <span
          class="navigation01-burger-menu-line"
          style="width: 2rem; height: 0.3rem; border-radius: 1rem"
        ></span>
      </button>
      <ul
        id="navigation01-mobile-menu-options"
        style="
          position: absolute;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin-top: 1rem;
          list-style-type: none;
          transition: max-height 0.5s ease, padding 0.5s ease;
        "
      >
      ${data
        .map((object) => {
          return `<li><a href="${object.href}">${object.name}</a></li>`;
        })
        .join("")}
      </ul>
    </nav>
    <nav class="navigation01" id="desktop-navigation">
      ${data
        .map((object) => {
          return `<a href="${object.href}">${object.name}</a>`;
        })
        .join("")}
    </nav>
    <!-- Navigation01 end -->
    `;

  const css = `
    /* Navigation01 start */
    .navigation01#desktop-navigation {
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
      display: flex;
      position: relative;
      justify-content: center;
      width: 100%;
      padding: 1rem 0 1rem 0;
    }
    .navigation01#desktop-navigation a {
      text-decoration: none;
      color: var(--textColor);
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: large;
      font-family: "Courier New", Courier, monospace;
    }
    .navigation01#desktop-navigation a:hover {
      background-color: var(--hoverBg);
      color: var(--text-hover-color);
    }

    .navigation01#mobile-navigation {
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
      width: 100%;
      padding: 1rem;
    }
    .navigation01#mobile-navigation span {
      background-color: var(--textColor);
    }
    .navigation01#mobile-navigation span.open {
      background-color: var(--hoverBg);
    }
    .navigation01#mobile-navigation ul {
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
      border-top: 2px solid var(--bgColor);
      max-height: 0rem;
      overflow: hidden;
    }
    .navigation01#mobile-navigation ul.open {
      padding: 1rem;
      max-height: 20rem;
    }
    .navigation01#mobile-navigation ul li {
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.5rem;
    }
    .navigation01#mobile-navigation ul li a {
      background-color: var(--hoverBg);
      text-decoration: none;
      color: var(--textColor);
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: large;
      font-family: "Courier New", Courier, monospace;
    }
    @media (max-width: 480px) {
      .navigation01#desktop-navigation {
        display: none;
      }

      .navigation01#mobile-navigation {
        display: block;
      }
    }

    @media (min-width: 481px) {
      .navigation01#mobile-navigation {
        display: none;
      }
    }
    /* Navigation01 end */
    `;

  const javaScript = `
    // Navigation01 start
      function toggleMobileMenu() {
        const mobileMenuOptions = document.getElementById(
          "navigation01-mobile-menu-options"
        );
        mobileMenuOptions.classList.toggle("open");
        const burgerMenuLines = document.querySelectorAll(".navigation01-burger-menu-line");
        burgerMenuLines.forEach((burgerMenuLine) =>
          burgerMenuLine.classList.toggle("open")
        );
      }
    // Navigation01 end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
