﻿'use strict';

// Declare app level module which depends on views, and components
angular.module('primeApp', [
        'ngRoute',
        'primeApp.home',
        'primeApp.components'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/'});
}]);