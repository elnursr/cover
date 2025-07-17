export function coverToUI(covers, coverListElement, contentType = 'game') {
    for (let i = 0; i < covers.length; i++) {
        switch (contentType) {
            case 'game':
                // get games.json without destructuring
                // let title = covers[i].title,
                // games = covers[i].games;

                // get games.json with destructuring
                let { game_title, games } = covers[i];

                if (!games) continue;

                games.forEach(({ name, rating, release_year, imdb_url }) => {
                    coverListElement.innerHTML +=
                        `
                            <li class="covers__list_item">
                                <div class="covers__list--back covers--scale">
                                    <h1 class="covers__list_title">${name.replace(/_/g, ' ')}</h1>
                                    <h3 class="covers__list_date"><i class="fa-solid fa-calendar-days"></i> ${release_year}</h3>
                                    <h4 class="covers__list_rating"><i class="fa-solid fa-star-half-stroke"></i> ${rating.toFixed(1)} / 10</h4>
                                    <a href="${imdb_url}" class="covers__list_link" target="_blank">Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                                <div class="covers__list--front">
                                    <div class="covers__list_image">
                                        <img src="assets/media/covers/games/${game_title}/${name}.jpg" alt="${name}" class="covers--scale">
                                    </div>
                                </div>
                            </li>
                        `;
                });
                break;
            case 'movie':
                // get movies.json with destructuring
                let { movie_title, movies } = covers[i];

                // let movies = covers[i],
                //     title = covers[i].movie_title,
                //     movieData = movies[title];

                if (!movies) continue;

                movies.forEach(({ name, rating, release_year, imdb_url }) => {
                    coverListElement.innerHTML +=
                        `
                            <li class="covers__list_item">
                                <div class="covers__list--back">
                                    <h1 class="covers__list_title">${name.replace(/_/g, ' ')}</h1>
                                    <h3 class="covers__list_date"><i class="fa-solid fa-calendar-days"></i> ${release_year}</h3>
                                    <h4 class="covers__list_rating"><i class="fa-solid fa-star-half-stroke"></i> ${rating.toFixed(1)} / 10</h4>
                                    <a href="${imdb_url}" class="covers__list_link" target="_blank">Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                                <div class="covers__list--front">
                                    <div class="covers__list_image">
                                        <img src="assets/media/covers/${movie_title}/${name}.jpg" alt="${name}" class="covers--blur">
                                    </div>
                                </div>
                            </li>
                        `;
                });
                break;
            case 'tv_series':
                // get movies.json with destructuring
                let { tv_series_title, tv_series } = covers[i];

                if (!tv_series) continue;

                tv_series.forEach(({ name, rating, release_year, imdb_url }) => {
                    coverListElement.innerHTML +=
                        `
                            <li class="covers__list_item">
                                <div class="covers__list--back">
                                    <h1 class="covers__list_title">${name.replace(/_/g, ' ')}</h1>
                                    <h3 class="covers__list_date"><i class="fa-solid fa-calendar-days"></i> ${release_year}</h3>
                                    <h4 class="covers__list_rating"><i class="fa-solid fa-star-half-stroke"></i> ${rating.toFixed(1)} / 10</h4>
                                    <a href="${imdb_url}" class="covers__list_link" target="_blank">Read More <i class="fa-solid fa-angle-right"></i></a>
                                </div>
                                <div class="covers__list--front">
                                    <div class="covers__list_image">
                                        <img src="assets/media/covers/${tv_series_title}/${name}.jpg" alt="${name}" class="covers--blur">
                                    </div>
                                </div>
                            </li>
                        `;
                });
                break;
            default: break;
        }
    }
}