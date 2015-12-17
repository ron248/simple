app.controller('procedureController', function($scope, $uibModal, $window ,localStorage){
    $scope.procedureList = localStorage.get('procedureList');
    $scope.procedureOpen = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'app/components/systemPage/procedurePage/addProcedureModal.html',
            controller: 'addProcedureController'
        });
        modalInstance.result.then(function(procedure){
            $scope.procedureList = localStorage.get('procedureList');
            procedure.system = $scope.systemChoose;
            $scope.procedureList.push(procedure);
            localStorage.set('procedureList', $scope.procedureList);
        })
    }
});

app.controller('addProcedureController', function($scope, $modalInstance){
    $scope.addProcedure = function() {
        if ($scope.addProcedureForm.$valid){
            $modalInstance.close($scope.procedure);
        }
    }
});