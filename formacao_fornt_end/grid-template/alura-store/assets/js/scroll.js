(function () {
  const header = getElementHTML(".header");

  window.addEventListener("scroll", () => fixedHeaderToTopOfPage(header));
})();

function getElementHTML(elementHTML) {
  return document.querySelector(elementHTML);
}

function fixedHeaderToTopOfPage(element) {
  if (window.scrollY > 0) {
    element.classList.add("fixed");
  } else {
    element.classList.remove("fixed");
  }
}
