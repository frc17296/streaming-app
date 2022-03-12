app.service('dataService', ['$http', '$rootScope', function($http, $rootScope) {
    
    // this.getData =  function() {
    //     console.log('getting data ..')        
    //     return $http.get("https://ghibliapi.herokuapp.com/films");   
    // }

    // this.data = this.getData().then(response => {
    //     if(response.status === 200) { 
    //         console.log(response.data)
    //         return response.data;
    //     }
    // });

    this.getData = async function() {      
      $http.get("https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1", {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "ott-details.p.rapidapi.com",
            "x-rapidapi-key": "0a083cca88mshe20ba6083d4dcf0p1d81dcjsn02455249a16f"
          }
      })
      .then(response => {
        if(response.status==200) {
          $rootScope.films = response.data.results; 
          $rootScope.genres = this.getGenres();
          $rootScope.filmsByGenre = this.getFilmsByGenre();
        }
      })
      .catch(err => {
        console.log('loading local data')
          $http.get("public/data.json").then(response => {
            $rootScope.films = response.data;
            $rootScope.genres = this.getGenres();
            $rootScope.filmsByGenre = this.getFilmsByGenre();
          })
      });        
    },

    this.getGenres = function() {
      console.log('generi')
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