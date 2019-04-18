class Navigation {
  constructor(navTemp) {
    this.navTemp = navTemp;
    this.button = document.querySelector("a.navbar-burger");
    this.content = document.querySelector(".navbar-menu");

    // Event listener
    this.button.addEventListener("click", () => {
      console.log("clicked");
      this.toggleNav();
    });
  } // Methods
  toggleNav() {
    this.button.classList.toggle("is-active");
    this.toggleMenu();
    console.log("nav toggled");
  }
  toggleMenu() {
    this.content.classList.toggle("is-active");
    console.log("menu toggled");
  }
}

// Navigation

const navTemp = document.querySelectorAll(".navbar");
// console.log(navTemp);
navTemp.forEach(navElement => {
  return new Navigation(navTemp);
});
