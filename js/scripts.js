$(document).ready(function() {
  const allCards = ["spades", "clubs", "hearts", "diamonds"]
  const numberCards = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"]
 
  allCards.forEach(function(suit) {
    numberCards.forEach(function(card) {
      $("ul#cardOutput").append("<li>" + card + " of " + suit + "</li>");
    });
  });
});
