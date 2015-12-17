app.controller('homepageController', function($scope){
    $scope.systems = [
        {'name':'מערכת1', 'imgName': 'panda'},
        {'name':'מערכת2', 'imgName': 'indic'},
        {'name':'מערכת3', 'imgName': 'apollo'},
        {'name':'מערכת4', 'imgName': 'triathlon'},
        {'name':'מערכת5', 'imgName': 'triathlon2'},
        {'name':'מערכת6', 'imgName': 'jupiter'},
        {'name':'מערכת7', 'imgName': 'canary'},
        {'name':'מערכת8', 'imgName': 'hulk'},
        {'name':'מערכת9', 'imgName': 'broadway'},
        {'name':'מערכת10', 'imgName': 'shoev'},
        {'name':'מערכת11', 'imgName': 'date'},
        {'name':'מערכת12', 'imgName': 'termite'},
        {'name':'מערכת13', 'imgName': 'yellow'},
        {'name':'מערכת14', 'imgName': 'crunch'},
        {'name':'מערכת15', 'imgName': 'runway'},
        {'name':'מערכת16', 'imgName': 'childplay'},
        {'name':'מערכת17', 'imgName': 'DMZ'}
    ];

    /* set the user system choose after click on system to the mainController*/
    $scope.setSystemChoose = function(systemChoose){
        $scope.$parent.systemChoose = systemChoose;
    }
});