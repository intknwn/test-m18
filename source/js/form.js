export const initFormSuccessHandler = () => {
  const form = document.forms.lead;
  const specialOfferNote = document.querySelector(".form__special-offer");
  const formWrapper = document.querySelector(".form__wrapper");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const div = document.createElement(`div`);
    div.className = "form__success-note";
    div.innerHTML = `
      <img src="img/icon-tick.svg" widht="194" height="128" />
      <p class="form__success-message">
        Спасибо! Мы будем держать вас в курсе обновлений
      </p>
    `;

    specialOfferNote.remove();
    form.remove();

    formWrapper.append(div);
  });
};
