class Card {
  constructor(card) {
    this.card = card;

    this.newCard = new Card(this.card);
  }
}

class CardContent extends Card {
    constructor(cardContent)
}

class CardFooter extends CardContent {
    constructor(cardFooter) {
        super(cardFooter);

        this.cardFooter = this.card.querySelector('.card-footer');
        this.button = this.cardFooter.querySelector('.button');

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