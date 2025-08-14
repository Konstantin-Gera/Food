window.addEventListener('DOMContentLoaded', () => {

    const calc = require('./modules/calc'),
        cards = require('./modules/cards'),
        modal = require('./modules/modal'),
        slider = require('./modules/slider'),
        tabs = require('./modules/tabs'),
        timer = require('./modules/timer');

    calc();
    cards();
    modal();
    slider();
    tabs();
    timer();

});  