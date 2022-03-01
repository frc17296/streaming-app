app.controller("productsCtrl", ["$scope", "$uibModal", function($scope, $uibModal){
    $scope.data = [
        {
            id: 1,
            name: 'Prodotto 1',
            price: 20              
        },
        {
            id: 2,
            name: 'Prodotto 2',
            price: 19.87                 
        }
    ]; 
    $scope.sortorder="price";   
    
    $scope.deleteProduct = function(product) {       
        let index = $scope.data.indexOf(product);
        $scope.data.splice(index, 1);
    };
    
    $scope.openModal = function(product) {           
        var modalInstance = $uibModal.open({            
            templateUrl:"app/components/modal/modal.html",
            controller: "modalCtrl",
            controllerUrl: "app/components/modal/modalCtrl.js"        
        });

        modalInstance.result.then(function(modalContext){
            if(modalContext.deleteProduct) {
                $scope.deleteProduct(product);
            }            
        });
    };
}])