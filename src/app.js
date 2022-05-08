let cardArray = [];
let cartas = () => {
  let cards = [];
  let symbols = ["&spades;",
                  "&hearts;",
                   "&diams;", 
                   "&clubs;"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  for (let s of symbols) {
    for (let n of numbers) {
      cards.push({ n, s });
    }
  }
  return cards;
};
let cartaContainer = document.getElementById("cartaContainer");
let cardContainer = document.getElementById("cardContainer");
let randomCard = cards => {
  const random = Math.floor(Math.random() * 51);
  cardNumber = cards[random].n;
  cardSymbol = cards[random].s;
  let symbol;
  if (cardSymbol === "&spades;") {
    symbol = "spades";
  } else if (cardSymbol === "&hearts;") {
    symbol = "hearts";
  } else if (cardSymbol === "&diams;") {
    symbol = "diamonds";
  } else {
    symbol = "clubs";
  }
  if (cardNumber === 11) {
    cardNumber = "J";
  } else if (cardNumber === 12) {
    cardNumber = "Q";
  } else if (cardNumber === 13) {
    cardNumber = "K";
  } else if (cardNumber === 1) {
    cardNumber = "A";
  }
  card = document.createElement("div");
  card.classList.add("card", cardSymbol, symbol);
  card.innerHTML =
    '<span class="card-symbol top">' +
    cardSymbol +
    "</span>" +
    '<span class="card-value">' +
    cardNumber +
    "</span>" +
    '<span class="card-symbol bottom">' +
    cardSymbol +
    "</span>";
  cardContainer.appendChild(card);
  cardArray.push(cards[random]);
  return cardNumber;
};
let cards = cartas();

let input = document.getElementById("input");
let random = document.getElementById("random");
let sorting = document.getElementById("sorting");

random.addEventListener("click", () => {
  cardArray = [];
  cardContainer.innerHTML = "";
  for (let i = 0; i < input.value; i++) {
    randomCard(cards);
    console.log(cardArray);
  }
});

const bubbleSorting = arr => {
  let limit = arr.length - 1; 

  while (limit >= 0) {
    let index = 0;

    while (index < limit) {
      let iter = document.createElement("h1");

      iter.innerHTML = counter;
      counter++;
      cartaContainer.appendChild(iter);
      displayCard(arr);
      
      if (arr[index].n > arr[index + 1].n) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }

      index++;
    }

    limit--; 
  }
  return arr;
};
let counter;
sorting.addEventListener("click", () => {
  cartaContainer.innerHTML = "";
  counter = 0;
  let sorted = bubbleSorting(cardArray);
  console.log(sorted);
 
});
const displayCard = array => {
  for (let i = 0; i < array.length; i++) {
    let valor = array[i].n;
    let pinta = array[i].s;
    let thePinta;
    if (pinta === "&spades;") {
      thePinta = "spades";
    } else if (pinta === "&hearts;") {
      thePinta = "hearts";
    } else if (pinta === "&diams;") {
      thePinta = "diamonds";
    } else {
      thePinta = "clubs";
    }
    if (valor === 11) {
      valor = "J";
    } else if (valor === 12) {
      valor = "Q";
    } else if (valor === 13) {
      valor = "K";
    } else if (valor === 1) {
      valor = "A";
    }

    let carta = document.createElement("div");
    carta.classList.add("card", pinta, thePinta);
    carta.innerHTML =
      '<span class="card-symbol top">' +
      pinta +
      "</span>" +
      '<span class="card-value">' +
      valor +
      "</span>" +
      '<span class="card-symbol bottom">' +
      pinta +
      "</span>";
    cartaContainer.appendChild(carta);
  }
};