'use strict';

angular.module('angularTutsApp')
.controller('DestnationsCtrl', function ($scope) {
	$scope.setActive('destinations');

	$scope.currentURL = 'views/_currentAirport.html';
  $scope.formURL = 'views/_changeName.html';

  /* sprogramiraj brez teh globalnih spremenljivk, kot 
  http://jsfiddle.net/andrewboni/fnAwN/light/ */
  $scope.currentAp = null;
  $scope.editName = null;

  $scope.setCurrentAp = function (code) {
    $scope.currentAp = $scope.airports[code];
  };

  $scope.changeName = function () {
    $scope.editName = true;
  };

/*  $scope.airports = Airport.query(); */
});