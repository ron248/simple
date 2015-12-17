app.controller('queryController', function($scope, $uibModal, localStorage){
    $scope.queryList = localStorage.get('queryList');
    $scope.queryOpen = function(){
            var modalInstance = $uibModal.open({
                templateUrl: 'app/components/systemPage/queryPage/addQueryModal.html',
                controller: 'addQueryController'
            });
            modalInstance.result.then(function(query){
                $scope.queryList = localStorage.get('queryList');
                query.system = $scope.systemChoose;
                $scope.queryList.push(query);
                localStorage.set('queryList', $scope.queryList);
            })
        }
});

app.controller('addQueryController', function($scope, $modalInstance){
    $scope.addQuery = function() {
        if ($scope.addQueryForm.$valid){
            $modalInstance.close($scope.query);
        }
    }
});