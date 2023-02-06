import MoviesLibrary from './library-api';

const myLibs = {
  watched: new MoviesLibrary('Watched'), 
  queue:   new MoviesLibrary('Queue')
}

export default myLibs;
