// import { hidden } from "ansi-colors";

class Card {
  constructor(cardItem) {
    this.cardItem = cardItem;

    this.expandButton = this.cardItem.querySelector(
      ".card-footer .card-footer-item a.button"
    );

    this.hiddenContent = this.expandButton.querySelectorAll(
      ".card-content p"
    );

    this.expandButton.addEventListener("click", () => {
        
      this.openCard();
    });
  } // Methods
  openCard() {
    event.preventDefault();
    let hiddenContent = this.hiddenContent;
    Array.from(hiddenContent).forEach(hiddenContent => {
        hiddenContent.classList.remove('is-hidden');
    })

    console.log(this.hiddenContent.classList);
  }
}

let cards = document.querySelectorAll(".card");
console.log(cards);
cards.forEach(card => {
  return new Card(card);
});

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
