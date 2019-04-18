// import { hidden } from "ansi-colors";

class Card {
  constructor(cardItem) {
    this.cardItem = cardItem;

    this.expandButton = this.cardItem.querySelector(
      ".card-footer .card-footer-item a.button"
    );

    this.hiddenContent = this.expandButton.querySelectorAll(".card-content p.is-hidden");

    this.cardItem.expandButton.addEventListener("click", () => {
      this.cardItem.openCard();
    });
  } // Methods
  openCard() {
    let hiddenContent = this.cardItem.hiddenContent;
    Array.from(hiddenContent).forEach(hiddenContent => {
      hiddenContent.classList.remove("is-hidden");
    });
  }
}

let cards = document.querySelectorAll(".card");
console.log(cards);
cards.forEach(card => {
  return new Card(card);
});
