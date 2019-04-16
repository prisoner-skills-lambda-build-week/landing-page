class Navigation {
    constructor(navTemp) {
        this.navTemp = navTemp;
        this.navbarBurger = this.querySelector('.navbar-burger');
        this.navbarBrand = this.querySelector('.navbar-brand');
        this.navbarMenu = this.querySelector('.navbar-menu');
        this.navbarItem = this.querySelectorAll('.navbar-item');
    }// Methods
    toggleNav() {
        this.navbarBurger.addListener('click', => {
            let navbarBurger = this.navbarBurger;
            navbarBurger.setAttribute('is-active', navbarBurger.getAttribute('is-active'));
        })
    }
}// Navigation

const navTemp = document.querySelector('.navbar');
