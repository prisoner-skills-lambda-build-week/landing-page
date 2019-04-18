class Card {
  constructor(card) {
    this.card = card;

    this.newCard = new Card(this.card);
  }
}

class CardContent extends Card {
  constructor(cardContent) {
    super(cardContent);

    this.cardContent = this.card.querySelector(".card-content");
    this.textContent = this.cardContent.querySelector("p");
  }
  toggleHidden() {
    this.textContent.classList.toggle("is-hidden");
    event.preventDefault();
  }
}

class CardFooter extends CardContent {
  constructor(cardFooter) {
    super(cardFooter);

    this.cardFooter = this.card.querySelector(".card-footer");
    this.button = this.cardFooter.querySelector(".button");

    this.button.addEventListener("click", () => this.toggleHidden());
  }
}

let cards = document.querySelectorAll(".card").forEach(card => new Card(card));

// this.toggleButton = this.card.querySelectorAll(".card-footer button.button");
// this.toggleButton.innerHTML = 'click for more';

// this.toggleButton.addEventListener("click", () =>
//   this.openCard());

// } // Methods
// openCard() {
// this.card.classList.toggle('')
// }
// }

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
