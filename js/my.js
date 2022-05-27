"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim();
      const b = prompt('На сколько оцените его?', '').trim();

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },

  toggleVisibleMyDB: function () {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
  },

  detectPersonalLevel: function () {
    if (this.count < 10) {
      console.log('Просмотрено слишком мало фильмов');
    } else if (this.count >= 10 && this.count < 30) {
      console.log('Вы классический зритель');
    } else if (this.count >= 30) {
      console.log(' Вы киноман');
    } else {
      console.log('error');
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
      if (genre === null || genre === '') {
        i--;
        continue;
      }
      this.genres[i - 1] = genre;
    }

    this.genres.forEach((item, index) => {
      console.log(`Любимый жанр под номером ${index + 1} - это ${item}`);
    });
  },

  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  }
};



