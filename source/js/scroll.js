export const initScroll = () => {
  const leadButton = document.querySelector(".hero__lead-button");
  const form = document.querySelector(".form");

  const contactsButton = document.querySelector(".hero__contact-button");
  const footer = document.querySelector(".footer");

  const heroScrollButton = document.querySelector(".hero__scroll-button");
  const heroScreen = document.querySelector(".hero");

  leadButton.addEventListener("click", () =>
    form.scrollIntoView({ behavior: "smooth" })
  );

  contactsButton.addEventListener("click", () =>
    footer.scrollIntoView({ behavior: "smooth" })
  );

  heroScrollButton.addEventListener("click", () => {
    scrollBy({
      top: heroScreen.clientHeight,
      behavior: "smooth",
    });
  });
};
