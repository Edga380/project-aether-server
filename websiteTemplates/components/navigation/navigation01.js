module.exports = (data, index) => {
  const html = `
    <!-- Navigation-${index} start -->
    <nav class="navigation-${index}" id="mobile-navigation-${index}">
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
          class="navigation-${index}-burger-menu-line"
          style="width: 2rem; height: 0.3rem; border-radius: 1rem"
        ></span>
        <span
          class="navigation-${index}-burger-menu-line"
          style="width: 2rem; height: 0.3rem; border-radius: 1rem"
        ></span>
        <span
          class="navigation-${index}-burger-menu-line"
          style="width: 2rem; height: 0.3rem; border-radius: 1rem"
        ></span>
      </button>
      <ul
        id="navigation-${index}-mobile-menu-options"
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
    <nav class="navigation-${index}" id="desktop-navigation-${index}">
      ${data
        .map((object) => {
          return `<a href="${object.href}">${object.name}</a>`;
        })
        .join("")}
    </nav>
    <!-- Navigation-${index} end -->
    `;

  const css = `
    /* Navigation-${index} start */
    .navigation-${index}#desktop-navigation-${index} {
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
      display: flex;
      position: relative;
      justify-content: center;
      width: 100%;
      padding: 1rem 0 1rem 0;
    }
    .navigation-${index}#desktop-navigation-${index} a {
      text-decoration: none;
      color: var(--textColor);
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: large;
      font-family: "Courier New", Courier, monospace;
    }
    .navigation-${index}#desktop-navigation-${index} a:hover {
      background-color: var(--hoverBg);
      color: var(--text-hover-color);
    }

    .navigation-${index}#mobile-navigation-${index} {
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
      width: 100%;
      padding: 1rem;
    }
    .navigation-${index}#mobile-navigation-${index} span {
      background-color: var(--textColor);
    }
    .navigation-${index}#mobile-navigation-${index} span.open {
      background-color: var(--hoverBg);
    }
    .navigation-${index}#mobile-navigation-${index} ul {
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
      border-top: 2px solid var(--bgColor);
      max-height: 0rem;
      overflow: hidden;
    }
    .navigation-${index}#mobile-navigation-${index} ul.open {
      padding: 1rem;
      max-height: 20rem;
    }
    .navigation-${index}#mobile-navigation-${index} ul li {
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.5rem;
    }
    .navigation-${index}#mobile-navigation-${index} ul li a {
      background-color: var(--hoverBg);
      text-decoration: none;
      color: var(--textColor);
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: large;
      font-family: "Courier New", Courier, monospace;
    }
    @media (max-width: 480px) {
      .navigation-${index}#desktop-navigation-${index} {
        display: none;
      }

      .navigation-${index}#mobile-navigation-${index} {
        display: block;
      }
    }

    @media (min-width: 481px) {
      .navigation-${index}#mobile-navigation-${index} {
        display: none;
      }
    }
    /* Navigation-${index} end */
    `;

  const javaScript = `
    // Navigation-${index} start
      function toggleMobileMenu() {
        const mobileMenuOptions = document.getElementById(
          "navigation-${index}-mobile-menu-options"
        );
        mobileMenuOptions.classList.toggle("open");
        const burgerMenuLines = document.querySelectorAll(".navigation-${index}-burger-menu-line");
        burgerMenuLines.forEach((burgerMenuLine) =>
          burgerMenuLine.classList.toggle("open")
        );
      }
    // Navigation-${index} end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
