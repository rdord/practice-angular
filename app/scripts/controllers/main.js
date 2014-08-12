'use strict';

angular.module('angularTutsApp')
.controller('MainCtrl', function ($scope) {
  $scope.airportTemplate = 'views/_airports.html';

  $scope.setActive = function (page) {
    $scope.destinationsActive = '';  /*zbriše razrede iz vseh li-jev*/
    $scope.flightsActive = '';
    $scope.reservationsActive = '';

    $scope[page + 'Active'] = 'active'; /*doda enemu bs3 razred active*/
  };

  $scope.airports = {
    'LJU' : {
      'code' : 'LJU',
      'name' : 'Letališče Jožeta Pučnika Ljubljana',
      'city' : 'Ljubljana',
      'destination' : ['LJMB', 'LJPZ'],
      'current' : false,
      'showEdit' : false
    },
    'LJMB' : {
      'code' : 'LJMB',
      'name' : 'Letališče Edvarda Rusjana Maribor',
      'city' : 'Maribor',
      'destination' : ['LJU', 'LJPZ'],
      'current' : false,
      'showEdit' : false
    },
    'LJPZ' : {
      'code' : 'LJPZ',
      'name' : 'Letališče  Portorož',
      'city' : ' Portorož',
      'destination' : ['LJMB', 'LJU'],
      'current' : false,
      'showEdit' : false
    }
  };
});
