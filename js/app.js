
//Define an angular module for our app

angular.module('closeprotectAPP', ['ngRoute']);
 
angular.module('closeprotectAPP').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html'
    })
    .when('/about', {
        templateUrl: 'templates/about.html'
    })
    .when('/contact', {
    	templateUrl: 'templates/contact.html'
    });
    .when('/cargotransport', {
    	templateUrl: 'templates/cargotransport.html'
    });
    .when('/close-protect', {
    	templateUrl: 'templates/close-protect.html'
    });
    .when('/dogs', {
    	templateUrl: 'templates/dogs.html'
    });
    .when('/eventsecurity', {
    	templateUrl: 'templates/eventsecurity.html'
    });
    .when('/services', {
    	templateUrl: 'templates/services.html'
    });
    .when('/trainingpage', {
    	templateUrl: 'templates/trainingpage.html'
    });
});