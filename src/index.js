class Card {
  constructor(card) {
    this.card = card;

    // this.newCard = new Card(this.card);
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
    // event.preventDefault();
    console.log("content toggled");
  }
}

class CardFooter extends CardContent {
  constructor(cardFooter) {
    super(cardFooter);

    this.cardFooter = this.card.querySelector(".card-footer");
    this.footerItem = this.cardFooter.querySelectorAll(".card-footer-item");
    this.button = this.footerItem.querySelector(".button");

    this.button.addEventListener("click", () => this.toggleHidden());
  }
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  return new Card(card);
});

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
