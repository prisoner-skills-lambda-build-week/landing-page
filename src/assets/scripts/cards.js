// import { hidden } from "ansi-colors";

class Card {
  constructor(cardItem) {
    this.cardItem = cardItem;

    this.expandButton = this.cardItem.querySelector(
      ".card-footer .card-footer-item a.button"
    );

    this.hiddenContent = this.expandButton.querySelector(
      "p.is-hidden"
    );

    this.expandButton.addEventListener("click", () => {
      this.openCard();
    });
  } // Methods
  openCard() {
    event.preventDefault();
    this.hiddenContent.classList.toggle("is-hidden");
  }
}

let cards = document.querySelectorAll(".card");
console.log(cards);
cards.forEach(card => {
  return new Card(card);
});
