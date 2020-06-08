$(document).ready(function() {
  const allCards = ["spades", "clubs", "hearts", "diamonds"]
  const numberCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
 
  allCards.forEach(function(suit) {
    let eachSuit = 0;
    eachSuit +=
    
    numberCards.forEach(function() {
      $("ul#cardOutput").append("<li>" +  + " of" + suit + "</li>");
    });
    
  });
  
  console.log(numberCards);
});


//   allCards.forEach(function(card) {
    
//   numberCards.forEach(function(card) {
//   
// }


// allCards.push(numberCards)
// $("#cardOutput").text("" + of + "")