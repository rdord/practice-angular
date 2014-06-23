'use strict';

angular.module('airlineServices', ['ngResource'])
	.factory('Airport', function($resource){ /*object that can be user over and over again*/
		return $resource('/airports'); /*creates new service*/
	});