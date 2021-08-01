'use strict';

let numberOfFilms;

function start() {
    do {
        numberOfFilms = +prompt('How many movies have u watched?', '');
    } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));

}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; ++i) {
        const a = prompt('What is your favourite movie?', ''),
            b = prompt('How would you rate it?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        }
        else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log('That\'s not a lot');
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        console.log('You\'re a good viewer');
    } else if (numberOfFilms >= 30) {
        console.log('You\'re a really love it');
    } else {
        console.log('Some error');
    }
}

// detectPersonalLevel();

function writeYourGenres(genre) {
    for (let i = 1; i <= 3; ++i) {
        genre[i - 1] = prompt(`Your favourite genres number ${i}`, '');
    }
}

writeYourGenres(personalMovieDB.genres);

function showMyDB(hidden) {
    if (hidden == false) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

