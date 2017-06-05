$(document).ready(function() {


  var ranks = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
  var suits = ['hearts','clubs','diamonds','spades'];

  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      $("ul").append('<li class="' + suit + '">' + rank + " of " + suit + "</li>");
    });
  });

});
