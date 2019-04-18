// import { hidden } from "ansi-colors";

class Card {
  constructor(cardItem) {
    this.cardItem = cardItem;

    this.expandButton = document.querySelectorAll('.card-footer .button');

    this.expandButton.addEventListener("click", () => {
      this.openCard();
    });
  } // Methods
  openCard() {
    const cardButton = this.expandButton;

    Array.from(cardButton).forEach(cardButton => {
      cardButton.classList.toggle("is-hidden");
    });
  }
}

let cards = document.querySelectorAll(".card").forEach(card => new Card(card));

class Navigation {
  constructor(navTemp) {
    this.navTemp = navTemp;
    this.button = document.querySelector('a.navbar-burger');
    this.content = document.querySelector('.navbar-menu');

    // Event listener
    this.button.addEventListener('click', () => {
      console.log('clicked');
      this.toggleNav();
    });
  } // Methods
  toggleNav() {
    this.button.classList.toggle('is-active');
    this.toggleMenu();
  }
  toggleMenu() {
    this.content.classList.toggle('is-active');
    console.log('menu open');
  }
}

// Navigation

const navTemp = document.querySelectorAll('.navbar');
console.log(navTemp);
navTemp.forEach((navElement) => {
  return new Navigation(navTemp);
});
