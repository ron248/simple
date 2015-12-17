app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/homepage");
    //
    // Now set up the states
    $stateProvider
        .state('homepage', {
            url: "/homepage",
            templateUrl: "app/components/homepage/homepage.html",
            controller: "homepageController",
        })
        .state('systemPage',{
            url: "/systemPage/",
            templateUrl: "app/components/systemPage/systemPage.html"
        })
        .state('scriptPage',{
            parent: "systemPage",
            templateUrl: "app/components/systemPage/scriptPage/scriptPage.html",
            controller: "scriptController"
        })
        .state('queryPage',{
            parent: "systemPage",
            templateUrl: "app/components/systemPage/queryPage/queryPage.html",
            controller: "queryController"
        })
        .state('problemPage',{
            parent: "systemPage",
            templateUrl: "app/components/systemPage/problemPage/problemPage.html",
            controller: "problemController"
        })
        .state('procedurePage',{
            parent: "systemPage",
            templateUrl: "app/components/systemPage/procedurePage/procedurePage.html",
            controller: "procedureController"
        })
        .state('drawPage',{
            parent: "systemPage",
            templateUrl: "app/components/systemPage/drawPage/drawPage.html",
            controller: "drawController"
        })
    ;
});

