import { coverToUI } from './ui/_covers_to_ui.js';

import { coversList } from './ui/_dom_selectors.js';

import { getDataAysnc } from './services/_data_service.js';

import { gamesUrl, moviesUrl, tvSeriesUrl } from './config/_urls.js';

getDataAysnc(gamesUrl)
    .then(({ covers }) => {
        coverToUI(covers, coversList, 'game');
    })

getDataAysnc(moviesUrl)
    .then(({ covers }) => {
        coverToUI(covers, coversList, 'movie');
    })

getDataAysnc(tvSeriesUrl)
    .then(({ covers }) => {
        coverToUI(covers, coversList, 'tv_series');
    })


let firstName = 'Java';
let lastName = "Script";

// let fullName = firstName + ' ' + lastName;
let fullName = `${firstName}${lastName}`;

console.log(fullName);