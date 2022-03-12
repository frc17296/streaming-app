app.service('dataService', ['$http', '$rootScope', function($http, $rootScope) {
  
  this.getData = async function() { 
    $http.get("public/data.json").then(response => {
      $rootScope.films = response.data;
      $rootScope.genres = this.getGenres();
      $rootScope.filmsByGenre = this.getFilmsByGenre();
    });           
  },

  this.getGenres = function() {
    const genres = [];
    const films = $rootScope.films.slice();
    films.forEach(f => {
      f.genre.forEach(g => {
        if(!genres.find(gen => g === gen)) {
          genres.push(g);
        }
      })
    });
    return genres;
  };

  this.getFilmsByGenre = () => {
    const films = $rootScope.films.slice();
    const genres = $rootScope.genres.slice();
    const filmsByGenre = [];
    genres.forEach(genre => {
      const list = films.filter(f => f.genre.find(g => g === genre));
      const item = {
        genre: genre,
        list: list
      }
      filmsByGenre.push(item);
    })
    return filmsByGenre;
  };

  this.getFilmByTitle = (title) => {
    const films = $rootScope.films.slice();
    return films.find(f => f.title === title);
  };
}])