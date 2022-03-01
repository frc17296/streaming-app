app.service('filmService', ['$http', function($http) {
    const films = [
        {
            id:1,
            title: "Howl's Moving Castle",
            src: "https://s3.xemovie.com/Movies/Howl-no-Ugoku-Shiro.mp4"
        },
        {
            id:2,
            title: "Castle in the Sky",
            src: "https://s3.xemovie.com/Movies/Laputa-Castle-in-the-Sky.mp4"
        }
    ];   

    this.getFilmSrc = function(title) {        
        let film = films.find(film => film.title === title);
        if(film) {
            return film.src;
        }
    }
}])