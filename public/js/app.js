var app = angular.module('nodeTemplateApp', ['ngRoute', 'ngResource', 'angular-underscore'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', { controller: 'MainCtrl', templateUrl: '/views/main.html'})
      ;
    $locationProvider.html5Mode(true);
  })
  .constant('appTitle', 'Wishlist')
  ;

app.controller('MainCtrl', function( $scope ){

});