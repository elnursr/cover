import { coverToUI } from './ui/_covers_to_ui.js';

import { coversList } from './ui/_dom_selectors.js';

import { getDataAysnc } from './services/_data_service.js';

import { gamesUrl, moviesUrl, booksUrl, tvSeriesUrl, externalMediaUrl } from './config/_urls.js';

getDataAysnc(gamesUrl)
    .then(({ covers }) => {
        coverToUI({
            covers,
            contentType: 'game',
            coverListElement: coversList,
            url: externalMediaUrl,
            backEffect: ['covers--zoom-in'],
            frontEffect: ['covers--zoom-out-middle', 'covers--blur']
        });
    })

getDataAysnc(moviesUrl)
    .then(({ covers }) => {
        coverToUI({
            covers,
            contentType: 'movie',
            coverListElement: coversList,
            url: externalMediaUrl,
            backEffect: ['covers--zoom-in'],
            frontEffect: ['covers--zoom-out-middle', 'covers--blur']
        });
    })

getDataAysnc(tvSeriesUrl)
    .then(({ covers }) => {
        coverToUI({
            covers,
            contentType: 'tv_series',
            coverListElement: coversList,
            url: externalMediaUrl,
            backEffect: ['covers--zoom-in'],
            frontEffect: ['covers--zoom-out-middle', 'covers--blur']
        });
    })

getDataAysnc(booksUrl)
    .then(({ covers }) => {
        coverToUI({
            covers,
            contentType: 'book',
            coverListElement: coversList,
            url: externalMediaUrl,
            backEffect: ['covers--zoom-in'],
            frontEffect: ['covers--zoom-out-middle', 'covers--blur']
        });
    })