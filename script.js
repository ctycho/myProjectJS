'use strict';

const numberOfFilms = +prompt('How many movies have u watched?', '');
if (numberOfFilms < 10) {
    alert('That\'s not a lot');
} else if (numberOfFilms < 30) {
    alert('You\'re a good viewer');
} else if (numberOfFilms >= 30)

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; ++i) {
    const a = prompt('What is your favourite movie?', ''),
        b = prompt('How would you rate it?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    }
    else {
        i--;
    }
}

console.log(personalMovieDB);