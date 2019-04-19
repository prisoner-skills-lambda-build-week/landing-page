class Navigation {
  constructor(navTemp) {
    super(navTemp);
    this.window = window;
    this.window.scrollY = window.scrollY;
    this.navTemp = navTemp;
    this.button = document.querySelector('a.navbar-burger');
    this.content = document.querySelector('.navbar-menu');

    // Event listener: toggle nav
    this.button.addEventListener('click', () => {
      console.log('clicked');
      this.toggleNav();
    });
  }

  // Methods

  toggleNav() {
    this.button.classList.toggle('is-active');
    this.toggleMenu();
    console.log('nav toggled');
  }
  toggleMenu() {
    this.content.classList.toggle('is-active');
    console.log('menu toggled');
  }
}

// Navigation

const navTemp = document.querySelectorAll('nav.navbar');
// console.log(navTemp);
navTemp.forEach(navElement => {
  return new Navigation(navTemp);
});
