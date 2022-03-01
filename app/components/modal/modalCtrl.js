app.controller(
    "modalCtrl",
    function($scope, $uibModalInstance) {
        $scope.ok = function(id){
            $uibModalInstance.close({
                deleteProduct: true                
            })
        };
        
        $scope.cancel = function(){
            $uibModalInstance.close({
                deleteProduct: false
            })
        };
    }
);