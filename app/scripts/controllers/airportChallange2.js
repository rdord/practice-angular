'use strict';

angular.module('angularTutsApp')
.controller('AirportChallange2Ctrl', function ($scope, $routeParams) {

	$scope.currentAp = $scope.airports[$routeParams.airportCode2];
});
