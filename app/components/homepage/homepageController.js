app.controller('homepageController', function($scope, localStorage){
    $scope.systems = [
        {'name':'מערכת1', 'imgName': 'panda'},
        {'name':'מערכת2', 'imgName': 'indic'},
        {'name':'מערכת3', 'imgName': 'jupiter'},
        {'name':'מערכת4', 'imgName': 'triathlon'},
        {'name':'מערכת5', 'imgName': 'triathlon2'},
        {'name':'מערכת6', 'imgName': 'shoev'},
        {'name':'מערכת7', 'imgName': 'canary'},
        {'name':'מערכת8', 'imgName': 'hulk'},
        {'name':'מערכת9', 'imgName': 'childplay'},
        {'name':'מערכת10', 'imgName': 'apollo'},
        {'name':'מערכת11', 'imgName': 'date'},
        {'name':'מערכת12', 'imgName': 'termite'},
        {'name':'מערכת13', 'imgName': 'yellow'},
        {'name':'מערכת14', 'imgName': 'crunch'},
        {'name':'מערכת15', 'imgName': 'runway'},
        {'name':'מערכת16', 'imgName': 'broadway'},
        {'name':'מערכת17', 'imgName': 'DMZ'}
    ];

    /* set the user system choose after click on system to localStorage*/
    $scope.setSystemChoose = function(systemChoose){
        localStorage.set('systemChoose', systemChoose);
    }
});