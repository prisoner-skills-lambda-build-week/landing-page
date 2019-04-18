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

let cards = document
  .querySelectorAll(".tile.is-child.card")
  .forEach(card => new Card(card));
