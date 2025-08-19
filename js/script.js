require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import calc from './modules/calc';
import cards from './modules/cards';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    calc();
    cards(modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    slider();
    tabs();
    timer();

});  