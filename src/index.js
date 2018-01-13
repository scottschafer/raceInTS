"use strict";
exports.__esModule = true;
require("./index.less");
var Race_1 = require("./ts/Race");
var racers_1 = require("./ts/racers");
$(document).ready(function () {
    var race = new Race_1.Race(racers_1.racers);
    $('#btnGo').click(function () {
        race.start();
    });
});
