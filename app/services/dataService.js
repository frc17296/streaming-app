app.service('dataService', ['$http', function($http) {
    
    this.getData =  function() {
        console.log('getting data ..')        
        return $http.get("https://ghibliapi.herokuapp.com/films");   
    }

    this.data = this.getData().then(response => {
        if(response.status === 200) { 
            console.log(response.data)
            return response.data;
        }
    });
}])