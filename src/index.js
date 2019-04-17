class Navigation {
    constructor(navTemp) {
        this.navTemp = navTemp;
        this.navbarBurger = this.querySelector('.navbar-burger');
        this.navbarItem = this.querySelectorAll('.navbar-item');
        this.navbarBurger.addListener()
    }// Methods
    toggleNav() {

        let navbarBurger = this.navbarBurger;
        navbarBurger.setAttribute('is-active', navbarBurger.getAttribute('is-active'));
    }
}
// Testing
let navbarBurger = document.querySelector('a.navbar-burger');
addListener('click', () => {
    navbarBurger.toggleAttribute('is-active')
})



// Navigation

const navTemp = document.querySelector('.navbar');
