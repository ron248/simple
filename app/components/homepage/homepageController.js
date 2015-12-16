app.controller('homepageController', function($scope){
    $scope.systems = [
        {'name':'מערכת1', 'imgName': 'panda'},
        {'name':'מערכת2', 'imgName': 'indic'},
        {'name':'מערכת', 'imgName': 'apollo'},
        {'name':'מערכת', 'imgName': 'triathlon'},
        {'name':'מערכת', 'imgName': 'triathlon2'},
        {'name':'מערכת', 'imgName': 'jupiter'},
        {'name':'מערכת', 'imgName': 'canary'},
        {'name':'מערכת', 'imgName': 'hulk'},
        {'name':'מערכת', 'imgName': 'broadway'},
        {'name':'מערכת', 'imgName': 'shoev'},
        {'name':'מערכת', 'imgName': 'date'},
        {'name':'מערכת', 'imgName': 'termite'},
        {'name':'מערכת', 'imgName': 'yellow'},
        {'name':'מערכת', 'imgName': 'crunch'},
        {'name':'מערכת', 'imgName': 'runway'},
        {'name':'מערכת', 'imgName': 'childplay'},
        {'name':'מערכת', 'imgName': 'DMZ'}
    ];

    /* set the user system choose after click on system to the mainController*/
    $scope.setSystemChoose = function(systemChoose){
        $scope.$parent.systemChoose = systemChoose;
    }
});