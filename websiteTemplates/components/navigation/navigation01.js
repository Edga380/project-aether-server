module.exports = (data, index) => {
  const html = `
    <!-- Navigation-${index} start -->
    <nav id="mobile-navigation-${index}">
      ${
        data.logo
          ? `<a href="/">
        <img
          id="mobile-navigation-logo-${index}"
          src="${data.logo.src}"
          alt="${data.logo.alt}"
        />
      </a>`
          : `<div></div>`
      }
      ${
        data.links || data.socials
          ? `<button
        id="mobile-navigation-burger-menu-${index}"
        onclick="toggleMobileMenu_${index}()"
        type="button"
        aria-expanded="false"
        aria-controls="mobile-navigation-menu-options-${index}"
      >
        <span
          class="mobile-navigation-burger-menu-line-${index}"
        ></span>
        <span
          class="mobile-navigation-burger-menu-line-${index}"
        ></span>
        <span
          class="mobile-navigation-burger-menu-line-${index}"
        ></span>
      </button>
      <ul
        id="mobile-navigation-menu-options-${index}"
        role="menu"
        aria-hidden="true"
      >
      ${
        data.links
          ? data.links
              .map((link) => {
                return `<li class="mobile-navigation-menu-option-${index}">
                    <a class="mobile-navigation-menu-option-link-${index}" href="${link.href}">${link.name}</a>
                  </li>`;
              })
              .join("")
          : `<div></div>`
      }
      ${
        data.socials
          ? `<div id="mobile-navigation-socials-${index}">
          ${data.socials
            .map((social) => {
              return `
              <a class="mobile-navigation-socials-link-${index}" href="${social.href}" aria-label="${social.ariaLabel}">
                <i class="fa-brands ${social.css}"></i>
              </a>`;
            })
            .join("")}
        </div>`
          : `<div></div>`
      }
      </ul>
      `
          : `<div></div>`
      }
    </nav>
    <nav id="desktop-navigation-${index}">
      ${
        data.logo
          ? `<a id="desktop-navigation-logo-container-${index}" href="/">
        <img
          id="desktop-navigation-logo-${index}"
          src="${data.logo.src}"
          alt="${data.logo.alt}"
        />
      </a>`
          : `<div></div>`
      }
      ${
        data.links
          ? `<div id="desktop-navigation-links-container-${index}">
        ${data.links
          .map((link) => {
            return `<a class="desktop-navigation-link-${index}" href="${link.href}">${link.name}</a>`;
          })
          .join("")}
      </div>`
          : `<div></div>`
      }
      ${
        data.socials
          ? `<div id="desktop-navigation-socials-${index}">
        ${data.socials
          .map((social) => {
            return `
            <a class="desktop-navigation-socials-link-${index}" href="${social.href}" aria-label="${social.ariaLabel}">
              <i class="fa-brands ${social.css}"></i>
            </a>`;
          })
          .join("")}
      </div>`
          : `<div></div>`
      }
    </nav>
    <!-- Navigation-${index} end -->
    `;

  const css = `
    /* Navigation-${index} start */
    #desktop-navigation-${index} {
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      place-items: center;
      width: 100%;
      padding: 0.5rem;
    }
    #desktop-navigation-logo-container-${index} {
      justify-self: left;
    }
    #desktop-navigation-logo-${index} {
      max-height: 3rem;
      max-width: 16rem;
      transition: scale 0.5s;
    }
    #desktop-navigation-logo-${index}:hover {
      scale: 110%;
    }
    #desktop-navigation-links-container-${index} {
      display: flex;
      gap: 0.4rem;
    }
    .desktop-navigation-link-${index} {
      text-decoration: none;
      background-color: transparent;
      color: var(--textColor);
      padding: 0.5rem 1rem 0.5rem 1rem;
      margin: auto 0;
      border-radius: 0.5rem;
      font-size: large;
      font-family: "Courier New", Courier, monospace;
      transition: background-color 0.5s, color 0.5s;
    }
    .desktop-navigation-link-${index}:hover {
      background-color: var(--hoverBg);
      color: var(--text-hover-color);
    }
    #desktop-navigation-socials-${index} {
      display: flex;
      gap: 1rem;
      justify-self: right;
    }
    .desktop-navigation-socials-link-${index} {
      font-size: 1.8rem;
      color: var(--textColor);
      scale: 100%;
      transition: scale 0.5s, color 0.5s;
    }
    .desktop-navigation-socials-link-${index}:hover {
      color: var(--hoverBg);
      scale: 110%
    }

    #mobile-navigation-${index} {
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
    }
    #mobile-navigation-logo-${index} {
      display: block;
      max-height: 3rem;
      max-width: 16rem;
      width: auto;
      object-fit: contain;
      transition: scale 0.5s;
    }
    #mobile-navigation-logo-${index}:hover {
      scale: 110%;
    }
    #mobile-navigation-burger-menu-${index} {
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: 0.4rem;
      transition: background-color 0.5s;
    }
    #mobile-navigation-burger-menu-${index}:hover{
      cursor: pointer;
    }
    .mobile-navigation-burger-menu-line-${index} {
      background-color: var(--textColor);
      transition: background-color 0.5s, transform 0.5s, width 0.5s;
      width: 2rem;
      height: 0.3rem;
      border-radius: 1rem
    }
    .mobile-navigation-burger-menu-line-${index}.open:nth-child(1) {
      background-color: var(--hoverBg);
      transform: rotate(45deg) translateY(0.5rem) translateX(0.5rem);
    }
    .mobile-navigation-burger-menu-line-${index}.open:nth-child(2) {
      background-color: var(--hoverBg);
      width: 0rem;
    }
    .mobile-navigation-burger-menu-line-${index}.open:nth-child(3) {
      background-color: var(--hoverBg);
      transform: rotate(-45deg) translateY(-0.5rem) translateX(0.5rem);
    }
    #mobile-navigation-menu-options-${index} {
      background-color: var(${index % 2 === 0 ? "--bgAltColor" : "--bgColor"});
      position: absolute;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      border-top: 2px solid var(--bgColor);
      max-height: 0rem;
      overflow: hidden;
      list-style-type: none;
      transition: max-height 0.5s ease, padding 0.5s ease;
    }
    #mobile-navigation-menu-options-${index}.open {
      padding: 1rem;
      max-height: 20rem;
    }
    .mobile-navigation-menu-option-${index} {
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.5rem;
    }
    .mobile-navigation-menu-option-link-${index} {
      background-color: var(--hoverBg);
      text-decoration: none;
      color: var(--textColor);
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: large;
      font-family: "Courier New", Courier, monospace;
    }
    #mobile-navigation-socials-${index} {
      display: flex;
      margin-top: 1rem;
      gap: 1rem;
    }
    .mobile-navigation-socials-link-${index} {
      font-size: 1.8rem;
      color: var(--textColor);
      scale: 100%;
      transition: scale 0.5s, color 0.5s;
    }
    .mobile-navigation-socials-link-${index}:hover {
      color: var(--hoverBg);
      scale: 110%
    }
    @media (max-width: 480px) {
      #desktop-navigation-${index} {
        display: none;
      }

      #mobile-navigation-${index} {
        display: flex;
      }
    }

    @media (min-width: 481px) {
      #mobile-navigation-${index} {
        display: none;
      }
    }
    /* Navigation-${index} end */
    `;

  const javaScript = `
    // Navigation-${index} start
      const mobileMenuNavBar_${index} = document.getElementById("mobile-navigation-${index}");
      const mobileMenuNavBarHeight_${index} = mobileMenuNavBar_${index}.offsetHeight;
      const mobileMenuOptions_${index} = document.getElementById(
        "mobile-navigation-menu-options-${index}"
      );
        
      if(mobileMenuOptions_${index}) {
        mobileMenuOptions_${index}.style.top = mobileMenuNavBarHeight_${index} + "px";
      }

      function toggleMobileMenu_${index}() {

        const mobileMenuIsOpen_${index} = mobileMenuOptions_${index}.classList.contains("open");

        mobileMenuOptions_${index}.classList.toggle("open");

        mobileMenuOptions_${index}.setAttribute("aria-hidden", mobileMenuIsOpen_${index});

        const mobileBurgerButton_${index} = document.getElementById("mobile-navigation-burger-menu-${index}");
        mobileBurgerButton_${index}.setAttribute("aria-expanded", !mobileMenuIsOpen_${index});

        const burgerMenuLines_${index} = document.querySelectorAll(".mobile-navigation-burger-menu-line-${index}");
        burgerMenuLines_${index}.forEach((burgerMenuLine) =>
          burgerMenuLine.classList.toggle("open")
        );
      }
    // Navigation-${index} end
    `;

  return { html: html.trim(), css: css.trim(), javascript: javaScript.trim() };
};
