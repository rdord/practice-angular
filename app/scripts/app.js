'use strict';

angular.module('angularTutsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'airlineServices'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/_destination.html',
        controller: 'DestnationsCtrl'
      })
      .when('/airports/:airportCode', {
        templateUrl: 'views/_airports.html',
        controller: 'AirportCtrl'
      })
      .when('/airports/:airportCode1/:airportCode2', {
        templateUrl: 'views/_airportsChallange.html',
        /* rabimo 2 controllerja, definirali jih bomo v view-u*/
      })
      .when('/flights', {
        template: '<h1>Flights</h1>',
        controller: 'FlightsCtrl'
      })
      .when('/reservations', {
        template: '<h1>Reservations</h1>',
        controller:  'ReservationsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
