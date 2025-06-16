module.exports = (data) => {
  const html = `
    <!-- Navigation start -->
    <nav id="mobile-navigation">
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
          class="burger-menu-line"
          style="width: 2rem; height: 0.3rem; border-radius: 1rem"
        ></span>
        <span
          class="burger-menu-line"
          style="width: 2rem; height: 0.3rem; border-radius: 1rem"
        ></span>
        <span
          class="burger-menu-line"
          style="width: 2rem; height: 0.3rem; border-radius: 1rem"
        ></span>
      </button>
      <ul
        id="mobile-menu-options"
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
    <nav id="desktop-navigation">
      ${data
        .map((object) => {
          return `<a href="${object.href}">${object.name}</a>`;
        })
        .join("")}
    </nav>
    <!-- Navigation end -->
    `;

  const css = `
    /* Navigation start */
    nav#desktop-navigation {
      background-color: var(--bgAltColor);
      display: flex;
      position: relative;
      justify-content: center;
      width: 100%;
      padding: 1rem 0 1rem 0;
    }
    nav#desktop-navigation a {
      text-decoration: none;
      color: var(--textColor);
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: large;
      font-family: "Courier New", Courier, monospace;
    }
    nav#desktop-navigation a:hover {
      background-color: var(--hoverBg);
      color: var(--text-hover-color);
    }

    nav#mobile-navigation {
      background-color: var(--bgAltColor);
      width: 100%;
      padding: 1rem;
    }
    nav#mobile-navigation span {
      background-color: var(--textColor);
    }
    nav#mobile-navigation span.open {
      background-color: var(--hoverBg);
    }
    nav#mobile-navigation ul {
      background-color: var(--bgAltColor);
      border-top: 2px solid var(--bgColor);
      max-height: 0rem;
      overflow: hidden;
    }
    nav#mobile-navigation ul.open {
      padding: 1rem;
      max-height: 20rem;
    }
    nav#mobile-navigation ul li {
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.5rem;
    }
    nav#mobile-navigation ul li a {
      background-color: var(--hoverBg);
      text-decoration: none;
      color: var(--textColor);
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: large;
      font-family: "Courier New", Courier, monospace;
    }
    @media (max-width: 480px) {
      nav#desktop-navigation {
        display: none;
      }

      nav#mobile-navigation {
        display: block;
      }
    }

    @media (min-width: 481px) {
      nav#mobile-navigation {
        display: none;
      }
    }
    /* Navigation end */
    `;

  const javaScript = `
    // Navigation start
      function toggleMobileMenu() {
        const mobileMenuOptions = document.getElementById(
          "mobile-menu-options"
        );
        mobileMenuOptions.classList.toggle("open");
        const burgerMenuLines = document.querySelectorAll(".burger-menu-line");
        burgerMenuLines.forEach((burgerMenuLine) =>
          burgerMenuLine.classList.toggle("open")
        );
      }
    // Navigation end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
