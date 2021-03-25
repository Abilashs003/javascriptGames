document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "camel",
      img: "images/camel.jpg",
    },
    {
      name: "car",
      img: "images/car.jpg",
    },
    {
      name: "dog",
      img: "images/dog.png",
    },
    {
      name: "flappybird",
      img: "images/flappybird.png",
    },
    {
      name: "penguin",
      img: "images/penguin.jpg",
    },
    {
      name: "parrot",
      img: "images/parraot.jpg",
    },
  ];

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create a board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/dog.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches

  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    console.log("option 1" + optionOneId);
    console.log("option 2 " + optionTwoId);
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("you found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      alert("Sorry Try Again");
      cards[optionOneId].setAttribute("src", "images/dog.png");
      cards[optionTwoId].setAttribute("src", "images/dog.png");
    }
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length == cardArray.length / 2) {
      resultDisplay.textContent = "Congragulations you found them all";
    }
  }

  //flipping the card

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length == 2) {
      setTimeout(checkForMatch, 500);
    }
    cardArray.sort(() => 0.5 - Math.random());
    console.log(cardArray);
  }

  createBoard();
});
