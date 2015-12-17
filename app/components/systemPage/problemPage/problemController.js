app.controller('problemController', function($scope, $uibModal, $window ,localStorage){
    $scope.problemList = localStorage.get('problemList');
    $scope.problemOpen = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'app/components/systemPage/problemPage/addProblemModal.html',
            controller: 'addProblemController'
        });
        modalInstance.result.then(function(problem){
            $scope.problemList = localStorage.get('problemList');
            problem.system = $scope.systemChoose;
            $scope.problemList.push(problem);
            localStorage.set('problemList', $scope.problemList);
        })
    }
});

app.controller('addProblemController', function($scope, $modalInstance){
    $scope.addProblem = function() {
        if ($scope.addProblemForm.$valid){
            $modalInstance.close($scope.problem);
        }
    }
});