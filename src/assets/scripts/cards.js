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