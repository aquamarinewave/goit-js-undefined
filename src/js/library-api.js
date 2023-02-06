
const LOCALSTORAGE_KEY_PREFIX = 'MoviesLibrary_'; 

export default class MoviesLibrary {

  #LOCALSTORAGE_KEY;
  #movies = [];

  constructor(libName = 'mylib') {
    this.#LOCALSTORAGE_KEY = LOCALSTORAGE_KEY_PREFIX + libName;
    this.#loadMovies();
  }

  // -------  PRIVATE SECTION  -------
  
  #saveMovies() {
    try {
      localStorage.setItem(this.#LOCALSTORAGE_KEY, JSON.stringify(this.#movies));
    } catch (err) {
      console.error(`Error: failure saving movies in LocalStorage: ${this.#LOCALSTORAGE_KEY}`);
    }
  }

  #loadMovies() {
    this.#movies = [];
    const jsonMovies = localStorage.getItem(this.#LOCALSTORAGE_KEY);
    if (jsonMovies) {
      try {
        this.#movies = JSON.parse(jsonMovies);
      } catch (err) {
        console.error(`Error: invalid movies library in LocalStorage: ${this.#LOCALSTORAGE_KEY}`);
      }
    }
  }

  // -------  INTERFACE  -------
  
  getCount() {
    return this.#movies.length;
  }

  getMovies() {
    return this.#movies;
  }

  getMovieById(movieId) {
    return this.#movies.find(el => el.id === movieId);
  }

  getCountPages(per_page) {
    return Math.ceil(this.#movies.length / per_page);
  }

  getMoviesPage(page = 1, per_page = -1) {     // per_page === -1 - get all library, without pagination
    if (per_page === -1) {
      return this.#movies;
    } else {
      return this.#movies.slice((page - 1) * per_page, page * per_page);
    }
  }

  refreshMovies() {
    this.#loadMovies();
  }

  clearMovies() {
    this.#movies = [];
    this.#saveMovies();
  }

  addMovie(movie) {
    const indexId = this.#movies.findIndex(el => el.id === movie.id);
    if (indexId !== -1) {
      this.#movies[indexId] = movie;
    } else {
      this.#movies.push(movie);
    }
    this.#saveMovies();
  }

  removeMovie(movieId) {
    const indexId = this.#movies.findIndex(el => el.id === movieId);
    if (indexId !== -1) {
      this.#movies.splice(indexId, 1);
      this.#saveMovies();
    }
  }
}
