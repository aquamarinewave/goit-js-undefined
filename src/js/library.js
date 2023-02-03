import MoviesLibrary from './libraryAPI';

const myLib = {
  watched: new MoviesLibrary('Watched'),
  queue:   new MoviesLibrary('Queue')
}


// myLib.queue.addMovie({id: '5', genres: 'mmmmm'});

export default myLib;
