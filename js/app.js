var appModule = angular.module('scotchApp', ['ngRoute']);

// configure our routes
appModule.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/home', {
            templateUrl : 'html/home.html',
            //controller  : 'mainController'
        })

        // route for the about page
        .when('/product', {
            templateUrl : 'html/product.html',
        })

        // route for the contact page
        .when('/solution', {
            templateUrl : 'html/solution.html',
        })
        .when('/studio', {
            templateUrl : 'html/studio.html',
        })
        .when('/company', {
            templateUrl : 'html/company.html',
        })

        .otherwise('/home');
});

 var mainCtrl = function($scope){
 	//$scope.message = 'Everyone come and see how good I look!';
 }

 var aboutCtrl = function($scope){
 	//$scope.message = 'Look! I am an about page.';
 }

 var contactCtrl = function($scope){
 	//$scope.message = 'Contact us! JK. This is just a demo.';
 }


 appModule.controller('mainController', mainCtrl);
 appModule.controller('aboutController', aboutCtrl);
 appModule.controller('contactController', contactCtrl);
