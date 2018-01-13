import './index.less';

import { Race } from './typescript/Race';
import { racers } from './typescript/racers';

$( document ).ready(function() {
  var race = new Race(racers);

  $('#btnGoTS').click(function() {
    race.start();
  });
});
