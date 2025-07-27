
export function coverToUI({ covers, coverListElement, contentType = 'game', url = '', backEffect: { zoom_in }, frontEffect: { blur, rotate, zoom_out_middle } }) {

    for (let i = 0; i < covers.length; i++) {

        switch (contentType) {
            case 'game':
                // get games.json without destructuring
                // let title = covers[i].title,
                // games = covers[i].games;

                // get games.json with destructuring
                let { games } = covers[i];

                if (!games) continue;

                games.forEach(({ name, rating, release_year, imdb_url, image_extension_type }) => {
                    coverListElement.innerHTML +=
                        `
                            <li class="covers__list_item">
                                <div class="covers__list--back ${zoom_in}">
                                    <h1 class="covers__list_title">${name.replace(/_/g, ' ')}</h1>
                                    <h3 class="covers__list_date"><i class="fa-solid fa-calendar-days"></i> ${release_year}</h3>
                                    <h4 class="covers__list_rating"><i class="fa-solid fa-star-half-stroke"></i> ${rating.toFixed(1)} / 10</h4>
                                    <a href="${imdb_url}" class="covers__list_link" target="_blank">Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                                <div class="covers__list--front">
                                    <div class="covers__list_image">
                                        <img src="${url}${name.replace(/%27/g, "'")}.${image_extension_type}" alt="${name}" class=${zoom_out_middle}>
                                    </div>
                                </div>
                            </li>
                        `;
                });
                break;

            case 'book':
                // get books.json with destructuring
                let { books } = covers[i];

                if (!books) continue;

                books.forEach(({ name, rating, release_year, book_url, image_extension_type }) => {
                    coverListElement.innerHTML +=
                        `
                            <li class="covers__list_item">
                                <div class="covers__list--back ${zoom_in}">
                                    <h1 class="covers__list_title">${name.replace(/_/g, ' ')}</h1>
                                    <h3 class="covers__list_date"><i class="fa-solid fa-calendar-days"></i> ${release_year}</h3>
                                    <h4 class="covers__list_rating"><i class="fa-solid fa-star-half-stroke"></i> ${rating.toFixed(1)} / 10</h4>
                                    <a href="${book_url}" class="covers__list_link" target="_blank">Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                                <div class="covers__list--front">
                                    <div class="covers__list_image">
                                        <img src="${url}${name}.${image_extension_type}" alt="${name}" class=${zoom_out_middle}>
                                    </div>
                                </div>
                            </li>
                        `;
                });
                break;

            case 'movie':
                // get movies.json with destructuring
                let { movies } = covers[i];

                // let movies = covers[i],
                //     title = covers[i].movie_title,
                //     movieData = movies[title];

                if (!movies) continue;
                movies.forEach(({ name, rating, release_year, imdb_url, image_extension_type }) => {
                    coverListElement.innerHTML +=
                        `
                            <li class="covers__list_item">
                                <div class="covers__list--back ${zoom_in}">
                                    <h1 class="covers__list_title">${name.replace(/_/g, ' ')}</h1>
                                    <h3 class="covers__list_date"><i class="fa-solid fa-calendar-days"></i> ${release_year}</h3>
                                    <h4 class="covers__list_rating"><i class="fa-solid fa-star-half-stroke"></i> ${rating.toFixed(1)} / 10</h4>
                                    <a href="${imdb_url}" class="covers__list_link" target="_blank">Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                                <div class="covers__list--front">
                                    <div class="covers__list_image">
                                        <img src="${url}${name.replace(/%27/g, "'")}.${image_extension_type}" alt="${name}" class=${blur}>
                                    </div>
                                </div>
                            </li>
                        `;
                });
                break;

            case 'tv_series':
                // get tv_series.json with destructuring
                let { tv_series } = covers[i];

                if (!tv_series) continue;

                tv_series.forEach(({ name, rating, release_year, imdb_url, image_extension_type }) => {
                    coverListElement.innerHTML +=
                        `
                            <li class="covers__list_item">
                                <div class="covers__list--back ${zoom_in}">
                                    <h1 class="covers__list_title">${name.replace(/_/g, ' ')}</h1>
                                    <h3 class="covers__list_date"><i class="fa-solid fa-calendar-days"></i> ${release_year}</h3>
                                    <h4 class="covers__list_rating"><i class="fa-solid fa-star-half-stroke"></i> ${rating.toFixed(1)} / 10</h4>
                                    <a href="${imdb_url}" class="covers__list_link" target="_blank">Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                                <div class="covers__list--front">
                                    <div class="covers__list_image">
                                        <img src="${url}${name}.${image_extension_type}" alt="${name}" class=${blur}>
                                    </div>
                                </div>
                            </li>
                        `;
                });
                break;

            default: console.log('incorrect case string...');
                break;
        }
    }
}