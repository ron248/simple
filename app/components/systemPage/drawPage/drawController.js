app.controller('drawController', function($scope, $uibModal, $window ,localStorage){
    localStorage.set('drawList', []);
    $scope.drawList = localStorage.get('drawList');
    $scope.drawOpen = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'app/components/systemPage/drawPage/addDrawModal.html',
            controller: 'addDrawController'
        });
        modalInstance.result.then(function(draw){
            $scope.drawList = localStorage.get('drawList');
            draw.system = $scope.systemChoose;
            $scope.drawList.push(draw);
            localStorage.set('drawList', $scope.drawList);
        })
    }
});

app.controller('addDrawController', function($scope, $modalInstance, localStorage){
    $scope.addDraw = function() {
        if ($scope.addDrawForm.$valid){
            $modalInstance.close($scope.draw);
        }
    }
});