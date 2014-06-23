'use strict';

angular.module('angularTutsApp')
.controller('AirportChallangeCtrl', function ($scope, $routeParams) {
	
	$scope.currentAp = $scope.airports[$routeParams.airportCode1];
});
