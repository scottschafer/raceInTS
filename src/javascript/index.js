$( document ).ready(function() {
  var race = new Race(racers);
  race.reset();

  $('#btnGoJS').click(function() {
    race.start();
  })
});


