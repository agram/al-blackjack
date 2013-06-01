$(document).ready(function() {
    player_hits();
    player_stays();
    dealer_hits();
});

function player_hits() {
  $(document).on("click", "form#hit_form", function() {
    $.ajax({
      type: "POST",
      url: "/game/player/hit"
    }).done(function(resp) {
      $("section#game").replaceWith(resp);
    });
    return false;
  });
}

function player_stays () {
  $(document).on("click", "form#stay_form", function() {
    $.ajax({
      type: "POST",
      url: "/game/player/stay"
    }).done(function(resp) {
      $("section#game").replaceWith(resp);
    });
    return false;
  });
}

function dealer_hits () {
  $(document).on("click", "form#dealer_form", function() {
    $.ajax({
      type: "POST",
      url: "/game/dealer/hit"
    }).done(function(resp) {
      $("section#game").replaceWith(resp);
    });
    return false;
  });
}

// function bet_loading () {
//   $("#loading-button").click(function() {
//       var btn = $(this);

//       btn.button("loading");

//       setTimeout(function() {
//         btn.button("reset");
//     }, 3000);
// });
// }
