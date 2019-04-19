class Header {
  constructor(header) {
    this.window = wimdow
    this.header = header

    this.window.addEventListener('scroll', () => headerAnimation())
  }
  headerHeight() {
    this.header.style.height = '100px'
    this.header.style.transition =
      'all 2s $cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
  headerHeightScrolled() {
    this.header.style.height = '50px'
    this.header.style.transition =
      'all 2s $cubic  -bezier(0.68, -0.55, 0.265, 1.55)'
  }
  headerAnimation() {
    if (this.window >= 80) {
      this.headerHeight()
    } else {
      this.headerHeightScrolled()
    }
  }
}
let header = document.querySelector('header', () => new Header(header))

class Navigation {
  constructor(navTemp) {
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
    // Event listener: Nav changes height on scroll
    // this.window.addEventListener('scroll', () => {
    //   if (this.window.scrollY >= 120) {
    //     this.navbarHeight();
    //   } else {
    //     this.navbarHeightScrolled();
    //   }
    // });
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
