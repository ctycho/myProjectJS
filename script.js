'use strict';

const numberOfFilms = prompt("How many movies have u watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('What is your favourite movie?', ''),
    b = prompt('How would you rate it?', ''),
    c = prompt('What is your favourite movie?', ''),
    d = prompt('How would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);