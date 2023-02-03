
const LOCALSTORAGE_KEY_PREFIX = 'MoviesLibrary_'; 

export default class MoviesLibrary {

  #LOCALSTORAGE_KEY;
  #movies = [];

  constructor(libName = 'mylib') {
    this.#LOCALSTORAGE_KEY = LOCALSTORAGE_KEY_PREFIX + libName;
    this.#loadMovies();
  }

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
  
  getMovies() {
    return this.#movies;
  }

  getMoviesPage(page = 1, per_page = 20) {
    return this.#movies.slice((page - 1) * per_page, page * per_page);
  }

  refreshMovies() {
    this.#loadMovies();
  }

  clearMovies() {
    this.#movies = [];
    this.#saveMovies();
  }

  addMovie(movie) {
    const indexID = this.#movies.findIndex(el => el.id == movie.id);
    if (indexID != -1) {
      this.#movies[indexID] = movie;
    } else {
      this.#movies.push(movie);
    }
    this.#saveMovies();
  }

  removeMovie(movieID) {
    const indexID = this.#movies.findIndex(el => el.id == movieID);
    if (indexID != -1) {
      this.#movies.splice(indexID, 1);
      this.#saveMovies();
    }
  }
}
