let sliderImages;
window.onload = function () {
  sliderImages = document.querySelectorAll(".slide-in");
  window.addEventListener("scroll", debounce(checkSlide,3));
};
function checkSlide(e) {
  sliderImages.forEach((sliderImage) => {
    // 3/4rth of the screen WITH image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;

    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isScrolledPast = window.scrollY > imageBottom;
    if (isHalfShown && !isScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}
// whenever doing anything on scroll make sure to debounce the function
function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
