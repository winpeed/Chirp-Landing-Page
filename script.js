const hamburger = document.querySelector(".hamburger");
const navigation = document.getElementsByTagName("nav");

hamburger.addEventListener("click", () => {
  navigation[0].classList.toggle("nav-open");
  hamburger.classList.toggle("hamburger-close");
});
