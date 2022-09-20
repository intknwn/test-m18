import debounce from "lodash.debounce";

export const initSlider = () => {
  const slides = document.querySelectorAll(".slider__slide-item");
  const prevButton = document.getElementById("slider-button-prev");
  const nextButton = document.getElementById("slider-button-next");

  const lastSlideIndex = slides.length - 1;
  const slideWidth = slides[0].clientWidth;
  let currentSlideIndex = 0;

  prevButton.disabled = currentSlideIndex === 0;

  const handlePrevClick = () => {
    currentSlideIndex--;

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${
        slideWidth * currentSlideIndex
      }px)`;

      slide.style.opacity = currentSlideIndex !== index ? 0.6 : 1;
    });

    nextButton.disabled = currentSlideIndex === lastSlideIndex;
    prevButton.disabled = currentSlideIndex === 0;
  };

  const handleNextClick = () => {
    if (currentSlideIndex !== lastSlideIndex) {
      currentSlideIndex++;
    }

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${
        slideWidth * currentSlideIndex
      }px)`;

      slide.style.opacity = currentSlideIndex !== index ? 0.6 : 1;
    });

    nextButton.disabled = currentSlideIndex === lastSlideIndex;
    prevButton.disabled = currentSlideIndex === 0;
  };

  const resetSlider = () => {
    slides.forEach((slide) => {
      slide.style.transform = "";
      slide.style.opacity = "";
    });

    nextButton.disabled = false;
    prevButton.disabled = false;
  };

  const handleResize = () => {
    prevButton.removeEventListener("click", handlePrevClick);
    nextButton.removeEventListener("click", handleNextClick);

    window.removeEventListener("resize", debouncedHandleResize);

    resetSlider();

    initSlider();
  };

  const debouncedHandleResize = debounce(handleResize, 150);

  prevButton.addEventListener("click", handlePrevClick);
  nextButton.addEventListener("click", handleNextClick);

  window.addEventListener("resize", debouncedHandleResize);
};
