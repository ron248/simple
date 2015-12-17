app.controller('scriptController', function($scope, $uibModal, $window ,localStorage){
    $scope.scriptList = localStorage.get('scriptList');
    $scope.scriptOpen = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'app/components/systemPage/scriptPage/addScriptModal.html',
            controller: 'addScriptController'
        });
        modalInstance.result.then(function(script){
            $scope.scriptList = localStorage.get('scriptList');
            script.system = $scope.systemChoose;
            $scope.scriptList.push(script);
            localStorage.set('scriptList', $scope.scriptList);
        })
    }
});

app.controller('addScriptController', function($scope, $modalInstance){
    $scope.addScript = function() {
        if ($scope.addScriptForm.$valid){
            $modalInstance.close($scope.script);
        }
    }
});