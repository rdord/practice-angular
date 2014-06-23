'use strict';

angular.module('angularTutsApp')
.controller('AirportCtrl', function ($scope, $routeParams) {
	$scope.currentAp = $scope.airports[$routeParams.airportCode];
});
