import MoviesLibrary from './library-api';

const myLibs = {
  watched: new MoviesLibrary('Watched_Test'),    // !?! - удалить _Test при деплое
  queue:   new MoviesLibrary('Queue_Test')
}

export default myLibs;


// !?! Тестовое наполнение - удалить при деплое

for (const key of ['watched', 'queue']) {
  const myLib = myLibs[key];
  myLib.clearMovies();
  for (let i = 0; i < 20; i += 1) {
    myLib.addMovie({
      id: String(i + 1),
      title: `Avatar: The Way of Water (${key})`,
      posterURL: (key == 'watched') ? 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg' :
        'https://image.tmdb.org/t/p/w500/sfCmTkVVtwoW4yNu1Cs4ZDtCTa5.jpg',
      genres: 'Drama, Comedy',
      year: '2022',
      vote: '5.7',
      votes: '1234',
      popularity: '100.2',
      original: `Avatar: The Way of Water`,
      overview: `Set more than a decade after the events of the first film, learn the story of the Sully family 
        (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe,
        the battles they fight to stay alive, and the tragedies they endure.`
    });
  }
}
// ------------------------------

