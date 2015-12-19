app.controller('systemController', function($scope, localStorage){
    $scope.systemChoose = localStorage.get('systemChoose');
});
